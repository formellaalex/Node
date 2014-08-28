var map;
var markers = [];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var geocoder;
var xlog;
var ylog;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tabka = [[]];
var x = [];
var y = [];
var nazwa = [];
var kategoria = [];




$(document).ready(function() {
  $('.show_hide_btn').click(function() {
    var $lefte = $('#formula');
    $lefte.animate({
      left: parseInt($lefte.css('left'),10) == 0 ?
        -$lefte.outerWidth() :
        0
    });
  });
});


$(document).ready(function()
{

  $('ul').addClass('menu_main');
  $('.submenu_title').click(function(){ $(this).parent().parent().parent().next().children().toggle(500); });
  $('li').click(function(){ $(this).next('ul').toggle(500); });
  $('li').next().css('display', 'none');
});


function pisz(){
  var events = document.getElementsByClassName('event');
  return events.length;

}

function show_events_menu(){
  $('#events_div').toggle(500);
  $('.p_events_menu').toggle(500);
}


function initialize() {
  geocoder = new google.maps.Geocoder();//////////////////////////////////////////////////////////////////////////////

  var haightAshbury = new google.maps.LatLng(-12.9, 151.2);
  var mapOptions = {
    zoom: 3,
    center: haightAshbury,
    //mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // This event listener will call addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
  });
  // Adds a marker at the center of the map.
  addMarker(x,y);
}

function turn(y,x){
  var haight = new google.maps.LatLng(y, x);
  map.setCenter(haight);
  map.setZoom(16);
  /*
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
*/
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      map.setZoom(20);
      xlog=results[0].geometry.location.lat();
      ylog=results[0].geometry.location.lng();
      ylog.parseInt;
      xlog.parseInt;
      alert('wartosci'+xlog+ylog);
      $('#xx').val(xlog);
      $('#yy').val(ylog);
      //alert('wartosci'+xlog+ylog);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

/*
$(document).ready(function(){
  $('#geocodebut').click(function(){
    $('#xx').val(xlog);
    $('#yy').val(ylog);
  });
});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add a marker to the map and push to the array.
function addMarker(x,y) {
  for(var i=0;i<x.length; i++){
  var loc = new google.maps.LatLng(x[i], y[i]);
  var marker = new google.maps.Marker({
    position: loc,
    map: map
  });

   var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + nazwa[i] + '</h1>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  markers.push(marker);
}
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function loadScript() {
  /*for(var i=0; i<y.length; i++){
    var array = ['playa', -31, y[i], 6]; // tutaj dodaje plaze ze wspolrzedną y dodaną z tablicy przekazanej do funkcji
    beaches.push(array);
  }*/
  var city = document.getElementById('napis').innerHTML; // tutaj jest pobieranie napisu danego miasta, który będzie użyty do zoomowania mapy
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

$(document).ready(function(){
  $( "#przyciska" ).click(function() {
  window.location.href = $('#select_city').val();
});
});

function validate(){

  var wybierz = document.getElementById('category');
  if(wybierz.options[wybierz.selectedIndex].innerHTML == "Tech Hubs"){
      $('#entrepreneurs_sub').css('display', 'none');
      $('#tech_hubs_sub').toggle();
  }
  else if(wybierz.options[wybierz.selectedIndex].innerHTML == "Entrepreneurs"){
      $('#tech_hubs_sub').css('display', 'none');
      $('#entrepreneurs_sub').toggle();
  }
  else{
    $('#tech_hubs_sub').css('display', 'none');
    $('#entrepreneurs_sub').css('display', 'none');
  }
}


$(document).ready(function(){
  tabka.push(x);
  tabka.push(y);
  tabka.push(nazwa);
  tabka.push(kategoria); 
  for(var i=0;i<x.length;i++){
    var li = document.createElement('li');
    li.className += 'costam';
    var y_ = tabka[1][i];
    var x_ = tabka[2][i];
    li.innerHTML = tabka[3][i];
    li.onclick = (function(y,x){
      return function(){
        turn(y,x)
      }
    })(tabka[1][i],tabka[2][i]);
    $('#' + tabka[4][i]).append(li);
  }


});


$(document).ready(function() {
  $('.costam').click(function() {
    var $lefty = $('#profile');
    $lefty.animate({
      left: parseInt($lefty.css('left'),10) == 0 ?
        -$lefty.outerWidth() :
        0
    });
    $('#nazwa_imie').html($(this).html());
  });
});


$(document).ready(function(){

  $('#bucion').click(function(){
    $('#inpucik').val('valju');
  });
});