/*
 * Scrollto (WIP)
 *//*
 * Slidetoggle to show mobile menu
 *///Closes mobile menu on link click (WIP)
/* $(window).resize(function(){
	var width = $(window).width();
	if (width < 768) {
	  $('ul#menu a').click(function() {
      $('ul#menu li').slideUp('fast');
    });	
  } else {
	}
});
*///Mobile menu toggle
function initialize(){var e={zoom:15,center:address,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"div"]}};map=new google.maps.Map(document.getElementById("map_canvas"),e);var t=new google.maps.Marker({position:address,map:map,title:"div",zIndex:3});$("document").ready(function(){Eventbrite({app_key:"{{ site.eventbrite.app-key }}"},function(e){var t={id:"{{ site.eventbrite.event-id }}",only_display:"tickets"};e.event_get(t,function(e){var t=e;xmlDoc=$.parseXML(t),$xml=$(xmlDoc),$quantity_available=$xml.find("quantity_available"),console.log(e),$("#quantity_available").html($quantity_available.text)})})})}$("#showmenu").click(function(){$("ul#menu").slideToggle("fast")}),$(document).on("click",".toggle",function(e){e.preventDefault(),$(this).closest("span").next(".expanded").slideToggle("slow")}),$("#day0, #day2, #coaching").fadeOut("fast"),$("a#trig-day1").addClass("active"),$("a#trig-day0").click(function(e){e.preventDefault(),$("a#trig-day0").addClass("active"),$("a#trig-day1, a#trig-day2, .trig-coaching").removeClass("active"),$("#day1, #day2, #coaching").slideUp("400"),$("#day0").delay(400).slideDown("slow")}),$("a#trig-day1").click(function(e){e.preventDefault(),$("a#trig-day0, a#trig-day2, .trig-coaching").removeClass("active"),$("#day0, #day2, #coaching").slideUp("400"),$("#day1").delay(400).slideDown("slow"),$("a#trig-day1").addClass("active")}),$("a#trig-day2").click(function(e){e.preventDefault(),$("a#trig-day0, a#trig-day1, .trig-coaching").removeClass("active"),$("#day0, #day1, #coaching").slideUp("400"),$("#day2").delay(400).slideDown("slow"),$("a#trig-day2").addClass("active")}),$(".trig-coaching").click(function(e){e.preventDefault(),$("a#trig-day0, a#trig-day1, a#trig-day2").removeClass("active"),$("#day0, #day1, #day2").slideUp("400"),$("#coaching").delay(400).slideDown("slow"),$(".trig-coaching").addClass("active")});var map,address=new google.maps.LatLng(28.4066232,-81.58820049999997);