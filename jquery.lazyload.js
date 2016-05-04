(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jQuery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function($) {
    // 判断图片是否需要加载，并加载
function loadImages($images, viewportHeight, scrollTop) {
    $images.each(function() {
        var $this,
        offsetTop;
  
        $this = $(this);
        offsetTop = $this.offset().top;
        // console.log($this.offset())
        
        if (!$this.attr('src') && viewportHeight + scrollTop - offsetTop > 0) {
            $this.attr('src', $this.data('src'));
        } 
    });
}
// 延迟加载
function lazyload() {
    var $images,
        $window,
        viewportHeight,
        scrollTop;
        
        $images = this;
        $window = $(window);
        viewportHeight = $(window).height();
        scrollTop =  $window.scrollTop();

        // 初始化页面后判断一次图片加载
        loadImages($images, viewportHeight, scrollTop);
        
        // scroll事件触发，加载图片
        $(document).on('scroll', function() {
            scrollTop =  $window.scrollTop();
            loadImages($images, viewportHeight, scrollTop);
        });
    }

    $.fn.lazyload = lazyload;
});
