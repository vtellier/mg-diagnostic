$(document).ready(function(){

    // Return boolean when an element is visible on screen
    function isVisible ( element ) {
        var viewPortHeight = $( window ).height(), // Viewport Height
        scrollTop = $( window ).scrollTop(), // Scroll Top
        currElementPosY = $( element ).offset().top,
        elementHeight = $( element ).height();

        return ( currElementPosY + elementHeight > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) )
    }

    const elements = [
        $('#header-title'),
        $('#header-subtitle'),
        $('#arrow-down'),
        //$('#no-services > h2'),
        //$('main section h2'),
    ];

    function shouldAnimate( elements ) {
        elements.forEach((item) => {
            //console.log('jo', item);
            if(isVisible( item ))
                item.show();
            else
                item.hide();
        });
    };

    // At initialization
    shouldAnimate(elements);

    // On scroll
    $( window ).scroll( function () {
        shouldAnimate(elements);
    });

});
