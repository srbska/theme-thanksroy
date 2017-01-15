(function ($) {

    function resize() {
        // find all items in the page.
        
        var $items = $('div.item');
        var totalItems = $items.length;

        // divide the window width by 300. this is the max number of items per row.
        //var maxItemWidth = 300;
        //var itemsPerRow = window.innerWidth / maxItemWidth;

        // 

        var maxItemsPerRow = 5;

        // divide the items up into rows. stretch each row's items to fill the parent element's width
        // ensuring not to scale above the maxItemWidth.
        // add a wrap class to the last item in each row.
        $items.each(function(index, item) {
            var $item = $(item);
           
            var parentWidth = $item.parent().width();

            var itemWidth = parentWidth / maxItemsPerRow;

            $item.width(itemWidth);

            if (index !== 0 && index % maxItemsPerRow === 0) {
                $item.addClass('wrap');
            }
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