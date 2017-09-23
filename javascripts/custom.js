(function ($) {

    function resize() {
       
        var $items = $('div.item, div.exhibit');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth = 280;
        var minItemWidth = 80;

        // if there are fewer totalItems than maxItemsPerRow
        // make maxItemsPerRow = totalItems
        // remove maxItemWidth

        if (totalItems < maxItemsPerRow) {
            maxItemsPerRow = totalItems;
            maxItemWidth = Number.MAX_VALUE;
        }

        $items.each(function(index, item) {
            var $item = $(item);           
            var parentWidth = $item.parent().width();
            var itemWidth = itemWidth = Math.min(maxItemWidth, parentWidth / maxItemsPerRow);

            itemWidth -= $item.horizontalPadding();

            if (itemWidth < minItemWidth) {
                itemWidth = maxItemWidth;
            }

            itemWidth = Math.floor(itemWidth);

            $item.width(itemWidth);

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }

            var $img = $item.find('img');
            $img.height(itemWidth - $img.verticalPadding());
        });

    }

    $(function() {
        window.onresize = function() {
            resize();
        };

        resize();
    });

})(jQuery);