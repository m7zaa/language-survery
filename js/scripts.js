$(document).ready(function(){
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var simplicity=$("select#simplicity").val();
    var windows = $("select#windows").val();
    var games = $("select#games").val();
    var workRemotely = $("select#workRemotely").val();
    var macPc = $("select#macPc").val();
    var name = $("input#name").val();
  });
});
