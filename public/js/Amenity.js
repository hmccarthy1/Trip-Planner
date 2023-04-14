var mainImage = $('#mainImage');
var mainCaption = $('#mainCaption')
console.log(mainImage)

var cards = $('.card');
cards.click(function(event) {
    console.log(this)
    mainImage.attr('src', event.target.src);
    console.log(event.target);
    mainCaption.text(event.target.alt)
    
})