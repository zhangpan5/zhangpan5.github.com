
(function ($) {

    function CenterShow(obj, options) {
        var o = {
            x : 0,
            y : 0
        };

        this.o = $.extend(o, options);
        this.obj = obj;
        this.init();

    }

    CenterShow.prototype = {
        init : function() {
            this.show();
        },
        show : function() {
            var t = this;
            $(this.obj).css({
                "position" : "fixed",
                top : 0,
                left : 0
            });

            $(this.obj).css({
                "display" : "block"
            });

            t.posObj();

        },
        posObj : function() {
            var width = $(this.obj).width();
            var height = $(this.obj).height();
            var wh = $(window).height();
            var ww = $(window).width();

            $(this.obj).css({
                "position" : "fixed",
                "left" : Math.floor((ww - width) / 2) + this.o.x,
                "top" : Math.floor((wh - height) /2) + this.o.y
            });
        }
    };

    /**
     * jQuery 插件
     */
    $.fn.centerShow = function(options) {
        this.each(function() {
            new CenterShow(this, options);
        });

    };

})(window.jQuery);

