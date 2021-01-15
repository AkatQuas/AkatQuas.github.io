var app = new Vue({
    el: '#app',
    data: {
        player: '',
        gameRunning: false,
        playerHp: 100,
        monsterHp: 100,
        combatLog: []
    },
    methods: {
        start: function () {
            if (this.player.trim() == '' ){
                alert('Input the player\'s name, which can not be empty or pure spaces');

            } else {
                this.gameRunning = !this.gameRunning;
            }
        },
        playerAttack: function (plain) {
            if ( !this.checkGameDead() ){
                return;
            }
            var damage = this.damageCompute(5,10);
            if(plain){
                damage = Math.floor( damage * (Math.random()+1.5));
            }
            this.monsterHp -= damage;
            this.combatLog.unshift({
                isPlayer: true,
                heal: false,
                text: this.player+' hit Monster by '+ damage+'.'
            });
            if ( this.checkWon() ){
                return;
            }
            this.monsterAttack();
            if ( !this.checkWon() ){
                return;
            }
        },
        healingPower: function () {
            if ( !this.checkGameDead() ){
                return;
            }
            this.monsterAttack();
            var heal = this.damageCompute(15,20);
            this.playerHp += heal;
            if (this.playerHp >= 100) {
                this.playerHp = 100;
                this.combatLog.unshift({
                    isPlayer: true,
                    heal: true,
                    text: this.player+' now got fully healed'
                });
            } else {
                this.combatLog.unshift({
                    isPlayer: true,
                    heal: true,
                    text: this.player+' got healed by '+ heal
                });
            }
        },
        ultimate: function () {
            if ( !this.checkGameDead() ){
                return;
            }
          if ( confirm('You sure you want to use ultimate?') ) {
              var success = Math.random() - 0.5;

              var damage = Math.floor(this.damageCompute(5,10)*2.5);
              this.monsterHp -= damage;

              this.combatLog.unshift({
                  isPlayer: true,
                  heal: false,
                  text: this.player + ' used ultimate, and hit Monster by '+damage+'.'
              });
              console.log(success);
              if ( success >= 0 ) {
                  this.playerHp = this.playerHp - damage + 10;
                  this.combatLog.unshift({
                      isPlayer: true,
                      heal: false,
                      text: 'Oh, '+this.player + ' hurt self by '+ ( damage -10) + 'when using ultimate.'
                  });
              }
              if (this.checkWon()) {
                  return;
              }
              this.monsterAttack();
              if (!this.checkWon()) {
                  return;
              }
              return;
          }
        },
        monsterAttack: function () {
            var damage = this.damageCompute(8,18);
            this.playerHp -= damage;
            this.combatLog.unshift({
                isPlayer: false,
                heal: false,
                text: 'Monster hit '+ this.player + ' by '+damage+'.'
            });
        },
        damageCompute: function (min,max) {
            return Math.floor(Math.random()*((max-min)+1))+min;
        },
        checkGameDead: function () {
          if ( this.monsterHp == 0 ) {
              if( confirm('You already won, want a new game?')){
                  this.reset();
              }
              return false;
          } else if ( this.playerHp == 0 ) {
              if( confirm('You already dead, want a new game?')){
                  this.reset();
              }
              return false;
          } else {
              return true;
          }

        },
        checkWon: function () {
            if( this.monsterHp <= 0 ){
                this.monsterHp = 0;
                this.combatLog.unshift({
                    isPlayer: true,
                    heal: false,
                    text: 'You won!!!!'
                });
                return true;
            }
            if (this.playerHp <= 0 ){
                this.playerHp = 0;
                this.combatLog.unshift({
                    isPlayer: false,
                    heal: false,
                    text: 'WASTED!!!!'
                });
                return false;
            }

        },
        newGame: function () {
            if ( confirm('You sure you want to start a new game?') ) {
               this.reset();
            }
        },
        reset: function () {
            this.gameRunning = false;
            this.playerHp = 100;
            this.monsterHp = 100;
            this.combatLog= [];
        }
    }
});