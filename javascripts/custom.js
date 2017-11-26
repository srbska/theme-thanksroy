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

        $items.each(function (index, item) {
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
        $video.height($video.width() * 0.5625);

        // remove tabindex
        $('#content').removeAttr('tabindex');

    }

    function initMap() {

        var $map = $('#map');

        if (!$map.length) {
            return;
        }

        var latlong = { lat: 50.990263, lng: 15.232410 };
        var map = new google.maps.Map($map, {
            center: latlong,
            zoom: 5,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });

        var marker = new google.maps.Marker({
            position: latlong,
            map: map,
            title: 'Srbská'
        });
    }

    $(function () {
        window.onresize = function () {
            resize();
        };

        resize();
    });

})(jQuery);