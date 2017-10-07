<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>

        (function ($) {

            function resize() {
            
                var win = $(window);

                var win_w = win.width(),
                    win_h = win.height(),
                    $bg    = $("#bg");

                // Load narrowest background image based on 
                // viewport width, but never load anything narrower 
                // that what's already loaded if anything.
                var available = [1024, 1920];

                var current;
                
                if ($bg.attr('src')) {
                    current = $bg.attr('src').match(/([0-9]+)/) ? parseInt(RegExp.$1) : null;
                }

                if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
                
                    var chosen = available[available.length - 1];
                    
                    for (var i = 0; i < available.length; i++) {
                        if (available[i] >= win_w) {
                            chosen = available[i];
                            break;
                        }
                    }
                    
                    $bg.on('load', function() {
                        // if the width is lower than 800 (houses don't fit)
                        //if (win_w < 800) {
                            //$bg.css({height: 'auto', width: (win_w * 2) - 100 + 'px'});
                        //} else {
                            // Determine whether width or height should be 100%
                            if ((win_w / win_h) < ($bg.width() / $bg.height())) {
                                $bg.css({height: '100%', width: 'auto'});
                            } else {
                                $bg.css({width: '100%', height: 'auto'});
                            }
                        //}

                        $('#debug').text(win_w);
                    });

                    // Set the new image
                    $bg.attr('src', '/themes/theme-thanksroy/images/splash_' + chosen + '.jpg');

                    console.log('Chosen background: ' + chosen);
                    
                }

            }

            $(function() {
                window.onresize = function() {
                    resize();
                };

                resize();
            });

        })(jQuery);

    </script>

    <style>
        body {
            background: #252323;
            margin: 0px;
            padding: 0px;
            font-family: "Gill Sans", sans-serif;
            font-size: 16px;
            color: #fff;
        }

        #bg {
            position: fixed; 
            right: 0; 
            bottom: 0;
        }

        a {
            position: fixed;
            width: 100%;
            text-align: center;
            margin-top: 100px;
            font-size: 32px;
            text-decoration: none;
            letter-spacing: 2px;
        }

        a:link {
            color: #fff;
        }

        a:visited {
            color: #fff;
        }

        a:hover {
            color: #fff;
        }
        
        a:active {
            color: #fff;
        }

        a .enter {
            font-size: 20px;
            font-style: italic;
        }
    </style>
</head>

<body>
    <img id="bg" src="" />
    <a href="/about">SRBSKÁ <br><span class="enter">enter</span></a>
</body>

</html>