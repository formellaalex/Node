function load() {
	var buttons = document.getElementsByClassName("city_btn");
	for(i=0; i<buttons.length; i++){
		buttons[i].onclick = function () { 
		document.getElementById('city_choose').style.display = "none";
		document.getElementById('site_row').style.display = "initial";
		loadScript();
		}
	}
	
}


function pisz(){
  var events = document.getElementsByClassName('event');
  return events.length;

}
function show_events(){
	document.getElementById('main_menu_div').style.display = 'none';
	document.getElementById('events_div').style.display = 'block';
	
}

function show_places(){
	document.getElementById('main_menu_div').style.display = 'block';
	document.getElementById('events_div').style.display = 'none';


}

function show_formula(update, pos, end,id) {
 
  
 
  function frame() {
     
    pos += update // update parameters
     
    document.getElementById(id).style.marginLeft = pos + '%' // show frame
 
    if (pos == end)  // check finish condition
      clearInterval(inter)
  }
  var inter = setInterval(frame, 10) // draw every 10ms

}

function show_profile(update, pos, end,id,el) {
 
  
 
  function frame() {
     
    pos += update // update parameters
     
    document.getElementById(id).style.marginLeft = pos + '%' // show frame
 
    if (pos == end)  // check finish condition
      clearInterval(inter)
  }
  var inter = setInterval(frame, 10) // draw every 10ms
  document.getElementById('nazwa_imie').innerHTML = el.innerHTML;
}


function klikaj(el){

 	document.getElementById('main_menu_div').style.display = 'none';
	document.getElementById('profile').style.display = 'block';
 	document.getElementById('nazwa_imie').innerHTML = el.innerHTML;

}


function stworz(){

	var dydy = document.createElement("h6");
	var node_dd = document.createTextNode("Jase_nowy_p")
	dydy.appendChild(node_dd);
	dydy.style.display = "block";
	dydy.name = 'element_list';
	dydy.style.margin = '10%';
	dydy.onclick =  function(){ show_formula(5,-200, -100,'profile'); };
	dydy.style.borderBottomWidth = "1px";
  	dydy.style.borderBottomColor = "white";
  	dydy.style.borderBottomStyle = "solid";
  	dydy.style.marginRight = "0";
  	dydy.style.paddingRight = "0";
  	dydy.style.fontSize = "14px";
	var lista = document.getElementById('oth');
	lista.appendChild(dydy);



}


function pokaz(id){

	var sub = document.getElementById(id);
	if(sub.style.display == 'block' && document.getElementById('main_menu_div').style.display == 'block'){
		sub.style.display = 'none';
	}


	else{
		
		sub.style.display = "block";
		
	}

	
	
}

function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(-33.9, 151.2)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
google.maps.event.addListener(map, 'click', function(e) {
    placeMarker(e.latLng, map);
  });


  setMarkers(map, beaches);
}
xx=7;
function placeMarker(position, map) {
  var image = {
  
   /* switch(day) {
    case 1:
      url: '../images/11.png';
        break;
    case 2:
      url: '../images/marker-20x32.png';
        break;
    case 3:
      url: '../images/marker-20x32.png';
        break;
    case 4:
      url: '../images/marker-20x32.png';
        break;
    case 5:
      url: '../images/marker-20x32.png'; 
        break;
    case 6:
      url: '../images/marker-20x32.png';
        break;
    case 7:
      url: '../images/marker-20x32.png';
        break;
    default:
      default  url: '../images/marker-20x32.png';
} */
  
    url:'../images/marker-20x32.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: image
  });

/*wersja testowa*/
  var fso,newFile;
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var newFile = fso.CreateTextFile("pliczek.txt", true);
  newFile.WriteLine(position);
  newFile.Close();
  map.panTo(position);
}
/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: '../images/marker-20x32.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });
  }
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function nowa_funkcja(){

  var array = ['La playa del Suchanino', -33.890542, 151.274810, 6];
  beaches.push(array);
  initialize();
}
//google.maps.event.addDomListener(window, 'load', initialize);
