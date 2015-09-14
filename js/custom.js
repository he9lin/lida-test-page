$(function(){
  $('#call-us').hide();
  sliderTimer = setInterval(function(){
	$('#call-us').slideDown();}, 1500);
  $('.close-div').click(function(){
    $("#call-us").remove();
  });
  $('.container').hide().fadeIn('slow');
});

$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
         return this.href == url;
    }).parent().addClass('active');
});

//Mobile menu panel
$(function(){
  $('#panel-menu').hide();
  $('.navbar-toggle').click(function(){
    $('.menu-btn').toggleClass("fa-bars fa-times");
    $('#panel-menu').fadeToggle("fast");
      //complete.
  });
});
