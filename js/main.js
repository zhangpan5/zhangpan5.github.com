$(function(){

    alert('一人一天一次,请抓住机会哈');

    var data = [
        '云鹏说了算',
        '吃啥你们定反正site最帅',
        '最帅的site说了算',
        '问小爱吧',
        '妹子说了算',
        '郑浩说了算',
        '党哥说了算',
        '去丁鹏最爱的面',
        '潮汕粥',
        '二楼右手',
        '安徽盒饭',
        '五彩城',
        '太熟悉',
        '羊汤',
        '酱骨头',
        '随便',
        '我也不知道',
        '益东说了算',
        '先东说了算',
        '饿着'
    ];

    var htmlTmp = '';
    $(data).each(function(i,v){
        htmlTmp = htmlTmp + '<div class="div div' + (i + 1) +'">'+v+'</div>';
    });

    $('#all').html('');
    $('#all').html(htmlTmp);

    function roll(a,b){
        var c = b - a + 1;
        return Math.floor(Math.random()*c + a);
    }

    var arr = [],
        rgba =[],
        size =[],
        top = [],
        left = [];

    var $div = $('.div');


    var timer = setInterval(function(){

        for(var i=0,j;i<60;i++){
            arr.push(roll(0,255));
            rgba.push(Number(Math.random(0,1).toFixed(1)));
            size.push(roll(18,60));
            top.push(roll(0,90));
            left.push(roll(0,90));
        }

        for(let j=0;j<60;j++){
            $div.eq(j).css({
                'color':'rgba('+arr[j]+','+arr[j+1]+','+arr[j+2]+','+rgba[j]+')',
                'fontSize':size[j]+'px',
                'top':top[j+1]+'%',
                'left':left[j+2]+'%'
            });
        }

        arr = [];
        rgba =[];
        size =[];
        top = [];
        left = [];

    },200);

    var sureNum = roll(0,20);
    var sureHtml = $('div').eq(sureNum).html();
    $('.run').click(function(){
        if(tool.getCookie('router') == 1){
            alert('你已经点过了明天再来吧！');
            $('#all').html('');
            $('#sure').html('嘿嘿就是这么任性!');
            $('#sure').centerShow();
            clearTimeout(timer);
            return false;
        }else{
            clearTimeout(timer);
            $('.div').remove();
            $('#sure').html(sureHtml);
            $('#sure').centerShow();
            tool.setCookie('router',1,0.9);
        }

    });

    var tool = {
        setCookie: function (key, value, days) {
            var exp = new Date();
            exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },
        getCookie: function (key) {
            var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        removeCookie: function (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
            var cval = Helper.getCookie(name);
            document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
        },
    };

});