$(document).ready(function(){
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var simplicity=$("select#simplicity").val();
    var windows = $("select#windows").val();
    var games = $("select#games").val();
    var workRemotely = $("select#workRemotely").val();
    var macPc = $("select#macPc").val();
    var name = $("input#name").val();
    var javaScript = $("input#javaScript").val();
    $(".name").text(name);

    if (simplicity==="yes" && windows==="no" && games==="no") {
      $("#bash, #cSharp, #javaScript").hide();
      $("#ruby").show();
    }
    else if (simplicity==="no" && windows==="yes" && games==="yes") {
      $("#bash, #ruby, #javaScript").hide();
      $("#cSharp").show();
    }
    else if (simplicity==="yes" && windows==="yes" && games==="no") {
      $("#bash, #ruby, #cSharp").hide();
      $("#javaScript").show();
    }
    else {
      $("#ruby, #cSharp, #javaScript").hide();
      $("#bash").show();
    }
  });
});
