$(document).ready(function() {

    /**variable globale **/
    var executeProgress = true;
    var height = 0;

    //re-dimensionnement de l'image d'entête en fonction de la taille de l'écran
    //puis positionnement du titre
    $(function()    {
        $('.img-head').css({ height: $(window).innerHeight() });
        $('.titre').css({ 'margin-top': ($(window).innerHeight()/2)-70 });
        $(window).resize(function(){
            $('.img-head').css({ height: $(window).innerHeight() });
            $('.titre').css({ 'margin-top': ($(window).innerHeight()/2)-70 });
            height = $(window).innerHeight();
        });
        height = $(window).innerHeight();
    });


    //permet à la bar de navigation de rester sous l'entête si la fenêtre est en haut de la page
    //ou positionne l'entête en haut de l'écran si la page est plus basse
    $(window).scroll(function () {
        if ($(window).scrollTop() > height) {
            $('#nav_bar').addClass('navbar-static-top');
            $('#nav_bar').removeClass('navbar-fixed-top');
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < height) {
            $('#nav_bar').removeClass('navbar-static-top');
            $('#nav_bar').addClass('navbar-fixed-top');
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });

    //permet de se déplacer par zone de manière fluide lorsqu'on clique sur un lien de la barre de navigation
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

    //fait une animation de chargement des progress bar lorsque l'écran arrive sur cette partie de la page
    $(function() {
        var oTop = $('#competences').offset().top - window.innerHeight;
        $(window).scroll(function(){

            var pTop = $('body').scrollTop();
            if( pTop > oTop ){
                start_count();
            }
        });
    });

    //méthode d'animation des progress bar
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

