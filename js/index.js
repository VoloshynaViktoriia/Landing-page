$('.readMore').on('click', function(e){
   var button = $(e.currentTarget);
   var preview = button.prev();
   var text = preview.find('.blog-preview-text');
   var previewHeight = preview.height();
   var textHeight = text.height();
   
   if (previewHeight===textHeight) {
       preview.height(70);
       button.text('Read More');
   } else {
       preview.height(text.height());
       button.text('hide');
   }
});

$('.post .material-icons').on('click', function (e) {
    var icon = $(e.currentTarget);
    if (icon.hasClass('selected')) {
        icon.removeClass('selected');
    } else {
        icon.addClass('selected');
    }
    
})