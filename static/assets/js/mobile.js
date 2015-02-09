$( document ).ready(function() {

    $menu = $('#menu');
    $menu.prepend('<div id="switch-menu"><span aria-visibility="hidden">&times;</span></div>');
    $menuButton = $('#switch-menu');
    $menuButtonCloser = $('#switch-menu > span');

    $menuButton.click(function() {
        $menu.toggleClass('opened');
    });


});
