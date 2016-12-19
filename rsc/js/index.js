$(document).ready(function() {

    var executeProgress = true;
    /**Nav bar**/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 125) {
            $('#nav_bar').addClass('navbar-static-top');
            $('#nav_bar').removeClass('navbar-fixed-top');
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 125) {
            $('#nav_bar').removeClass('navbar-static-top');
            $('#nav_bar').addClass('navbar-fixed-top');
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });

    $(function () {
        $('li>a').on('click', function(e) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        });
    });

    /**Progress bar**/
    $(function() {
        var oTop = $('#toto').offset().top - window.innerHeight;
        $(window).scroll(function(){

            var pTop = $('body').scrollTop();
            console.log( pTop + ' - ' + oTop );   //just for your debugging
            if( pTop > oTop ){
                start_count();
            }
        });
    });

    function start_count(){
        if(executeProgress) {
            executeProgress = false;
            setTimeout(function(){
                $('.progress-bar').each(function() {
                    var me = $(this);
                    var perc = me.attr("data-percentage");

                    var current_perc = 0;

                    var progress = setInterval(function() {
                        if (current_perc>=perc) {
                            clearInterval(progress);
                        } else {
                            current_perc +=1;
                            me.css('width', (current_perc)+'%');
                        }

                        me.text((current_perc)+'%');

                    }, 30);

                });
            },100);
        }
    }





});

