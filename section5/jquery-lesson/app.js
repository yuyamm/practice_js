// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function () {
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').slideDown();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

$(function () {
  $('.box1').slideDown(function() {
    $('.box1').css(
      {
        'background-color': 'blue',
        'width': '200px',
        'height': '100px'
      }
    ).slideUp();
  });
  
});
