// /*! Fades out the whole page when clicking links */
// $('a').click(function(e) {
//     e.preventDefault();
//     newLocation = this.href;
//     $('body').fadeOut('500', newpage);
// });
// function newpage() {
//     window.location = newLocation;
// }



$(document).ready(function(){

// /*! Fades in whole page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(1000);

}); 

/*! Reloads on every visit in mobile safari */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {

    if (evt.persisted) {
        document.body.style.display = "none";
        location.reload();
        }
    };
}

/*! Reloads page on every visit */
function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}

/*! smooth scrolling */
    var ssSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };