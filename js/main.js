jQuery(document).ready(function($) {
    $('div.content-galery').css('display', 'block');

    var onMouseOutOpacity = 0.67; // initial opacity
    $('#thumbs ul.thumbs li, div.navigation a.pageLink').opacityrollover({ // onhover styles
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0,
        fadeSpeed:         'fast',
        exemptionSelector: '.selected'
    });
    
    var gallery = $('#thumbs').galleriffic({ // initialization of Galleriffic plugin
        delay:                     2500,
        numThumbs:                 8,
        preloadAhead:              8,
        enableTopPager:            false,
        enableBottomPager:         false,
        imageContainerSel:         '#slideshow',
        controlsContainerSel:      '#controls',
        captionContainerSel:       '#caption',
        loadingContainerSel:       '#loading',
        renderSSControls:          true,
        renderNavControls:         true,
        playLinkText:              'Play Slideshow',
        pauseLinkText:             'Pause Slideshow',
        prevLinkText:              'Previous Photo',
        nextLinkText:              'Next Photo',
        nextPageLinkText:          'Next &rsaquo;',
        prevPageLinkText:          '&lsaquo; Prev',
        enableHistory:             true,
        autoStart:                 false,
        syncTransitions:           true,
        defaultTransitionDuration: 900,
        onSlideChange:             function(prevIndex, nextIndex) {
            this.find('ul.thumbs').children()
                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut:       function(callback) {
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn:        function() {
            var prevPageLink = this.find('a.prev-galery').css('visibility', 'hidden');
            var nextPageLink = this.find('a.next-galery').css('visibility', 'hidden');

            if (this.displayedPage > 0)
                prevPageLink.css('visibility', 'visible');

            var lastPage = this.getNumPages() - 1;
            if (this.displayedPage < lastPage)
                nextPageLink.css('visibility', 'visible');

            this.fadeTo('fast', 1.0);
        }
    });

    gallery.find('a.prev-galery').click(function(e) { // other event handlers - Prev/Next links
        gallery.previousPage();
        e.preventDefault();
    });

    gallery.find('a.next-galery').click(function(e) {
        gallery.nextPage();
        e.preventDefault();
    });

    // integration with jquery.history
    function pageload(hash) {
        if (hash) {
            $.galleriffic.gotoImage(hash);
        } else {
            gallery.gotoIndex(0);
        }
    }

    $.historyInit(pageload, 'system.html');
});