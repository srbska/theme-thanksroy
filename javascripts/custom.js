(function ($) {

    function resize() {
       
        var $items = $('div.item, div.exhibit');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth = 300;
        var minItemWidth = 100;

        // if there are fewer totalItems than maxItemsPerRow
        // make maxItemsPerRow = totalItems
        // remove maxItemWidth

        if (totalItems < maxItemsPerRow) {
            maxItemsPerRow = totalItems;
            maxItemWidth = Number.MAX_VALUE;
        }

        $items.each(function(index, item) {
            var autoWidth = false;
            var $item = $(item);           
            var parentWidth = $item.parent().width();
            var itemWidth = Math.floor(Math.min(maxItemWidth, parentWidth / maxItemsPerRow));

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

            var $img = $item.find('img');

            if (!autoWidth) {                
                $img.height(itemWidth - $img.verticalPadding());
            } else {
                $img.height('auto');
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