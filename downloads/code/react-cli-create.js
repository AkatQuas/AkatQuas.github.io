#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const shell = require('shelljs');
const ora = require('ora');
const {
  logger,
  download,
  metalsmithGenerator,
  installDeps,
  getData,
  postData,
} = require('../utils');

program.parse(process.argv);

const CWD = process.cwd();

/**
 * prepare the project directory
 * maybe overried files
 */
async function preProjectPath(projectName) {
  const rootName = path.basename(CWD);
  const list = fs
    .readdirSync(CWD)
    .filter((name) => name.includes(projectName))
    .filter((name) => fs.statSync(path.resolve(CWD, name)).isDirectory());

  if (list.length) {
    const { override } = await inquirer.prompt([
      {
        name: 'override',
        message: `Already a dircetory named ${projectName} exists, override?`,
        type: 'confirm',
        default: false,
      },
    ]);
    if (!override) {
      logger.error('Not override, process will end.');
      process.exit(0);
    }

    return projectName;
  } else if (rootName === projectName) {
    const { buildInCurrent } = await inquirer.prompt([
      {
        name: 'buildInCurrent',
        message:
          "Current directory's name is same as the target project name, overwrite here?",
        type: 'confirm',
        default: false,
      },
    ]);

    return buildInCurrent ? '.' : projectName;
  }
  return projectName;
}

/**
 * use inquirer to collect infomation
 */
const colloctInfo = ({ projectName, gitUrl }) =>
  inquirer.prompt([
    {
      name: 'author',
      message: 'Author',
      default: 'FE Developer',
    },
    {
      name: 'projectName',
      message: 'Name of project',
      default: projectName,
    },
    {
      name: 'projectVersion',
      message: 'Initial version',
      default: '1.0.0',
    },
    {
      name: 'projectDescription',
      message: 'Project description',
      default: `A project named ${projectName}`,
    },
    {
      name: 'useRouter',
      message: 'Using react-router',
      default: false,
    },
    {
      name: 'gitUrl',
      message: 'Git repository url',
      default: gitUrl,
    },
  ]);

/**
 * create a remote git repository using gitlabe API
 */
async function createRemoteGit() {
  const { projectName, needRemote } = await inquirer.prompt([
    {
      name: 'projectName',
      message: 'What name should we name project? ',
      validate: (res) => !!res,
      filter: (res) =>
        res
          .trim()
          .toLocaleLowerCase()
          .replace(/[^A-Za-z0-9_]/g, '-')
          .replace(/-+/g, '-'),
    },
    {
      name: 'needRemote',
      message: 'Should we create a remote repo automatically?',
      type: 'confirm',
      default: true,
    },
  ]);

  if (!needRemote) {
    logger.warning("You'd better create the remote repo yourself.");
    return {
      gitUrl: '',
      projectName,
    };
  }

  const list = await getData('/namespaces');
  const { nsId, repoDesc } = await inquirer.prompt([
    {
      name: 'nsId',
      message: 'Which namespace should we create a repo?',
      type: 'list',
      choices: list.map((item) => ({
        name: item.name,
        value: item.id,
      })),
      validate: (res) => !!res,
    },
    {
      name: 'repoDesc',
      message: 'Write some description for the repo?',
      validate: (res) => !!res,
    },
  ]);

  const spinner = ora(`creating a repo ${projectName}`);
  spinner.start();

  try {
    const { ssh_url_to_repo } = await postData('/projects', {
      name: projectName,
      namespace_id: nsId,
      description: repoDesc,
    });
    spinner.succeed();
    return {
      gitUrl: ssh_url_to_repo,
      projectName,
    };
  } catch (e) {
    spinner.fail();
    const { goOn } = await inquirer.prompt([
      {
        name: 'goOn',
        message: 'Failed to create the remote repo, continue?',
        type: 'confirm',
        default: true,
      },
    ]);
    if (!goOn) {
      process.exit(0);
    }
    logger.warning('Remember to create the remote repo manually!');
    return {
      gitUrl: '',
      projectName,
    };
  }
}

/**
 * init git in current project
 */
async function initGit(gitUrl, projectDir) {
  await shell.cd(projectDir);
  await shell.exec('git init');
  await shell.exec('git add .');
  await shell.exec('git commit -m "feat:(all) initial submission. 🐎 "');
  if (gitUrl) {
    await shell.exec(`git remote add origin ${gitUrl}`);
  }
}

/**
 * executable entry
 */
async function main() {
  logger.warning(
    'This template is only for activity and some simple projects\n For bigger ones, use other frameworks.\n\n'
  );

  const { gitUrl, projectName } = await createRemoteGit();

  const projectPathname = await preProjectPath(projectName);
  const metadata = await colloctInfo({ projectName, gitUrl });

  const projectDir = path.resolve(CWD, projectPathname);
  fs.emptyDirSync(projectDir);
  logger.success(`Empty directory ${projectDir}`);

  const downTemp = await download(projectDir);

  const dest = await metalsmithGenerator({
    root: projectDir,
    name: projectName,
    downTemp,
    metadata,
  });

  await initGit(metadata.gitUrl, projectDir);

  installDeps(dest);
}

main();
