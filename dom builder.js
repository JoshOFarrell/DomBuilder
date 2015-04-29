// JavaScript Document
/*$(document).ready(function() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
});*/


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});




$(function() {
    $( "#square" ).draggable();
  });
  
  
  
  
   $(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  });
  
  
  
  
  $(document).ready(function(){
    $("#buttonColour").click(function(){
        $("#square").toggleClass("blue");
    });
});






  $(function() {
    function runEffect() {
      var selectedEffect = $( "#effectTypes" ).val();
      var options = {};
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
      $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
    $( "#button" ).click(function() {
      runEffect();
    });
  });
  
  
  
  
  
  
  
  
  $(function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  });
  
 
 $( "p" ).click(function() {
  var htmlString = $( this ).html();
  $( this ).text( htmlString );
});