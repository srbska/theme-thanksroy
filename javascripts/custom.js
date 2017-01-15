(function ($) {

    function resize() {
       
        var $items = $('div.item');
        var totalItems = $items.length;

        var maxItemsPerRow = 4;
        var maxItemWidth = 280;
        var minItemWidth = 80;

        // if there are fewer totalItems than maxItemsPerRow
        // make maxItemsPerRow = totalItems

        if (totalItems < maxItemsPerRow) {
            maxItemsPerRow = totalItems;
        }

        $items.each(function(index, item) {
            var $item = $(item);           
            var parentWidth = $item.parent().width();
            var itemWidth = Math.floor(Math.min(maxItemWidth, parentWidth / maxItemsPerRow));

            itemWidth -= $item.horizontalPadding();

            if (itemWidth < minItemWidth) {
                itemWidth = maxItemWidth;
            }

            $item.width(itemWidth);

            // if ((index + 1) % maxItemsPerRow === 0) {
            //     $item.addClass('wrap');
            // }

            var $img = $item.find('img');
            $img.height(itemWidth - $img.verticalPadding());
        });

        // don't allow items to be below this width.
        //var minItemWidth = 100;

        // items per row (n) = how many items can fit at maxWidth
        // for every nth item, add a 'wrap' class.

        // $('.item.record').each(function(index, item) {
        //     // make it half width of parent
        //     var $item = $(item);
        //     var width = $item.parent().width() / 2;
        //     var $a = $item.find('a.image');
        //     var margins = parseInt($a.css('marginLeft')) + parseInt($a.css('marginRight'));
        //     $a.height(width - margins);
        // });
    }

    $(function() {
        window.onresize = function() {
            resize();
        };

        resize();
    });

})(jQuery);