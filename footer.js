<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>

  var boxToAppend = '#lp-pom-box-79';
  var headerOrFooter = 'footer';

  var backgroundCSS = {"position":"fixed", "left":"0", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"899"};
  var colorOverlayCSS = {"position":"fixed", "left":"0", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"auto", "border-style":"none none none none"};
  var childrenCSS = {"position":"fixed", "left":"auto", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"999", "border-style":"none none none none", "border-width":"0px", "background":"none"};

  if (headerOrFooter === 'footer') {
    backgroundCSS["top"] = 'auto';
    backgroundCSS["bottom"] = '0px';
    colorOverlayCSS["top"] = 'auto';
    colorOverlayCSS["bottom"] = '0px';
    childrenCSS["top"] = 'auto';
    childrenCSS["bottom"] = '0px';
  }

  var boxParent = jQuery(boxToAppend).parent();
  var boxClone = jQuery(boxToAppend).clone()

  boxClone.appendTo(boxParent).css(backgroundCSS).children().remove();
  jQuery(boxToAppend).css(childrenCSS);
  jQuery(boxToAppend + '-color-overlay').appendTo(boxClone).css(colorOverlayCSS);

</script>
