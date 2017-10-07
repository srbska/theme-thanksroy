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
            var isPercentage = false;
            var $item = $(item);           
            var parentWidth = $item.parent().width();
            var itemWidth = Math.min(maxItemWidth, parentWidth / maxItemsPerRow);

            itemWidth -= $item.horizontalPadding();

            if (itemWidth < minItemWidth) {
                itemWidth = '100%';
                isPercentage = true;
            } else {
                itemWidth = Math.floor(itemWidth);
            }

            $item.width(itemWidth);

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }

            if (!isPercentage) {
                var $img = $item.find('img');
                $img.height(itemWidth - $img.verticalPadding());
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