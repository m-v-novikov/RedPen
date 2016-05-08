$(document).ready(function(){
    console.log($('.graphic-item_wrap').length);
    $('.graphic-item_wrap').click();


    var chartsBlockWidth = $('.graphics').length;
    console.log(chartsBlockWidth);
    $('.graphics').masonry({
        // options...
        itemSelector: '.graphic-item',
        columnWidth: chartsBlockWidth/2
    });
});