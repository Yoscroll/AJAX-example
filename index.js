function loadDoc() {
  $.get( "https://dog.ceo/api/breeds/list", function( data ) {
  console.log(data);
  var info = ""
  for (var i = 0; i < data.message.length; i++) {
  	info += data.message[i] + "<br/>"
  }
  $( "#content" ).html(info);
  alert( "Load was performed." );
});
}