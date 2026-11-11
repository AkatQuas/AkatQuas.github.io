Vue.http.options.emulateJSON = true;
var content = [
  {
    link: '/dateless/view/ShirleyWong/',
    title: 'css 3 transition and audio',
  },
  {
    link: '/dateless/view/BootstrapDemo/',
    title: 'Bootstrap Learning',
  },
  {
    link: '/dateless/view/Controller/',
    title: 'Bootstrap Project',
  },
  {
    link: '/dateless/view/Dollars/',
    title: 'a $500 Prize Bootstrap Project',
  },
  {
    link: '/dateless/view/BaiduSearch/',
    title: 'Vue and jsonp',
  },
  {
    link: '/dateless/view/nameFight/',
    title: 'A tiny Name Fight game based on Vue',
  },
  {
    link: '/dateless/view/canvasDemos/',
    title: 'A tiny Canvas demo',
  },
];
new Vue({
  el: '#content',
  data: {
    list: content,
    visitors: 0,
  },
  beforeMount: function () {
    this.getVisitors();
  },
  methods: {
    getVisitors: function () {
      var now = new Date();
      var startTime = new Date();
      startTime.setTime(1486161564221);
      var hours = Math.floor((now - startTime) / (3600 * 1000));
      this.visitors = hours;
    },
  },
});
