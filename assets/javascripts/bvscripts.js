/*
 * Scrollto (WIP)
 */




/*
 * Slidetoggle to show mobile menu
 */
 
//Closes mobile menu on link click (WIP)
/* $(window).resize(function(){
	var width = $(window).width();
	if (width < 768) {
	  $('ul#menu a').click(function() {
      $('ul#menu li').slideUp('fast');
    });	
  } else {
	}
});
*/


/*
 * Slidetoggle to for expanded Schedule information
 */
$(document).on("click", ".toggle", function(event){
    event.preventDefault();
    $(this).closest('span').next('.expanded').slideToggle('slow');
});


$(document).ready(function(event){
    
      //Mobile menu toggle
    $('#showmenu').click(function() {
      $('ul#menu').slideToggle('fast');
    });

    $('#view-speakers').click(function() {
      $('#speakers .hide').slideToggle('fast');
    });

    /*
     * Tabbed browsing for Day Events
     */
     
    $('#day0, #day2, #coaching').fadeOut('fast');
    $('a#trig-day1').addClass('active');

    $('a#trig-day0').click(function(event) {
      event.preventDefault();
      $('a#trig-day0').addClass('active');
      $('a#trig-day1, a#trig-day2, .trig-coaching').removeClass('active');
      $('#day1, #day2, #coaching').slideUp('400');
      $('#day0').delay(400).slideDown('slow');
    });

    $('a#trig-day1').click(function(event) {
      event.preventDefault();
      $('a#trig-day0, a#trig-day2, .trig-coaching').removeClass('active');
      $('#day0, #day2, #coaching').slideUp('400');
      $('#day1').delay(400).slideDown('slow');
      $('a#trig-day1').addClass('active');
    });

    $('a#trig-day2').click(function(event) {
      event.preventDefault();
      $('a#trig-day0, a#trig-day1, .trig-coaching').removeClass('active');
      $('#day0, #day1, #coaching').slideUp('400');
      $('#day2').delay(400).slideDown('slow');
      $('a#trig-day2').addClass('active');
    });

    $('.trig-coaching').click(function(event) {
      event.preventDefault();
      $('a#trig-day0, a#trig-day1, a#trig-day2').removeClass('active');
      $('#day0, #day1, #day2').slideUp('400');
      $('#coaching').delay(400).slideDown('slow');
      $('.trig-coaching').addClass('active');
    });

});
/*
 * Map
 */

var map;
var address = new google.maps.LatLng(28.370733,-81.558653);

function initialize() {

  var mapOptions = {
    zoom:15,
    center: address,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'div']
    }
  };
  
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

	var marker = new google.maps.Marker({
		position: address,
		map: map,
		title:"div",
		zIndex: 3
  });

/*
 * EventBrite Data connection
 */
 
      $('document').ready(function(){
        Eventbrite({'app_key':'{{ site.eventbrite.app-key }}'}, function(eb_client){
            // parameters to pass to the API
            var params = {'id': '{{ site.eventbrite.event-id }}', 'only_display' : 'tickets'};
            // make a client request, provide a callback that will handle the response data
            eb_client.event_get( params, function(response){

              //parse xml to get # of tickets available
              var xml = response;
                  xmlDoc = $.parseXML( xml ),
                  $xml = $( xmlDoc ),
                  $quantity_available = $xml.find( "quantity_available" );
              
              console.log(response);

              // Display # of tickets available
              $('#quantity_available').html( $quantity_available.text );
            });
        });
      });


}
