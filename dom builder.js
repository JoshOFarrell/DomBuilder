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
  
  $(document).ready(function(){
    $("#buttonColour").click(function(){
        $("#square").toggleClass("blue");
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