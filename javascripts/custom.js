(function ($) {

    function resize() {
       
        var $items = $('div.item, div.exhibit');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth = 300;
        var minItemWidth = 120;

        if (totalItems < maxItemsPerRow) {
            maxItemsPerRow = totalItems;
            //maxItemWidth = Number.MAX_VALUE;
        }

        $items.each(function(index, item) {
            var $item = $(item);
            var $img = $item.find('img');
            var parentWidth = $item.parent().width();

            // the item width is either the maxItemWidth, or the parent width divided by the max number
            // of items per row. whichever is smaller. we don't want the images scaling beyond their max width.
            var itemWidth = Math.floor(Math.min(maxItemWidth, parentWidth / maxItemsPerRow));

            if (itemWidth < minItemWidth) {
                $item.addClass('autoWidth');
                $item.width('100%');
                $img.height('auto');
                $img.width(Math.floor($item.width() - ($img.outerWidth() - $img.width())));
            } else {
                itemWidth -= Math.floor($item.horizontalPadding());
                $item.removeClass('autoWidth');
                $item.width(itemWidth);
                $img.height(itemWidth - $img.verticalPadding());
                $img.width('auto');
            }

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }
            
        });

        // video

        var $video = $('.exhibits iframe');
        $video.height($video.width * 0.5625);

    }

    $(function() {
        window.onresize = function() {
            resize();
        };

        resize();
    });

})(jQuery);