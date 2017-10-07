(function ($) {

    function resize() {
       
        var $items = $('div.item, div.exhibit');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth;
        var minItemWidth = 80;

        // if there are fewer totalItems than maxItemsPerRow
        // make maxItemsPerRow = totalItems
        // remove maxItemWidth

        if (totalItems < maxItemsPerRow) {
            maxItemsPerRow = totalItems;
            //maxItemWidth = Number.MAX_VALUE;
        }

        $items.each(function(index, item) {
            var autoWidth = false;
            var $item = $(item);
            var $img = $item.find('img');
            maxItemWidth = $img.outerWidth();
            var parentWidth = $item.parent().width();

            // the item width is either the maxItemWidth, or the parent width divided by the max number
            // of items per row. whichever is smaller.
            var itemWidth = Math.floor(Math.min(maxItemWidth, parentWidth / maxItemsPerRow));

            //var itemWidth = Math.floor(parentWidth / maxItemsPerRow);

            itemWidth -= Math.floor($item.horizontalPadding());

            if (itemWidth < minItemWidth) {
                autoWidth = true;
                itemWidth = 'auto';
                $item.addClass('autoWidth');
            } else {
                $item.removeClass('autoWidth');
            }

            $item.width(itemWidth);

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }

            if (!autoWidth) {                
                $img.height(itemWidth - $img.verticalPadding());
                $img.width('auto');
            } else {
                $img.height('auto');
                $img.width('100%');
            }
            
        });

    }

    $(function() {
        window.onresize = function() {
            resize();
        };

        resize();
    });

})(jQuery);