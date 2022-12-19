var app = new Vue ({
    el : '#app',
    data : {
        myData : [],
        searchText : ''
    },
    methods : {
        get :function () {
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                params : {
                    wd : encodeURIComponent(this.searchText.trim())
            },
                jsonp : 'cb'
            }).then(function (res) {
                this.myData = res.data.s;
            },function (err) {
                this.myData.push(err.message);
            });
        }
    }
});