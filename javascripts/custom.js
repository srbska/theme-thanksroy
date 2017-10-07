(function ($) {

    function resize() {
       
        var $items = $('div.item, div.exhibit');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth = 300;
        var minItemWidth = 80;

        // if there are fewer totalItems than maxItemsPerRow
        // make maxItemsPerRow = totalItems
        // remove maxItemWidth

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

            //var itemWidth = Math.floor(parentWidth / maxItemsPerRow);

            //itemWidth -= Math.floor($item.horizontalPadding());

            if (itemWidth < minItemWidth) {
                $img.width('auto');
                $item.addClass('autoWidth');
                $img.height('auto');
                $img.width('100%');
            } else {
                $item.removeClass('autoWidth');
                $img.width(itemWidth);
                $img.height(itemWidth - $img.verticalPadding());
                $img.width('auto');
            }

            $item.width(itemWidth);

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }
            
        });

    }

    $(function() {
        window.onresize = function() {
            resize();
        };

        resize();
    });

})(jQuery);