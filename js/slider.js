$(document).ready(function(){
    $('.slyder__list').bxSlider({
        nextSelector: $(".control--right"),
        prevSelector: $(".control--left"),
        // controls: false
        prevText: '',
        nextText: '',
        pager: false
    });
  });