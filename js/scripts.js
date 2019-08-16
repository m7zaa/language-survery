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
      $("#bash, #cSharp, #javaScript, #survey").hide();
      $("#ruby").fadeIn();
      $(".retake-button").show();
    }
    else if (simplicity==="no" && windows==="yes" && games==="yes") {
      $("#bash, #ruby, #javaScript, #survey").hide();
      $("#cSharp").fadeIn();
      $(".retake-button").show();
    }
    else if (simplicity==="yes" && windows==="yes" && games==="no") {
      $("#bash, #ruby, #cSharp, #survey").hide();
      $("#javaScript").fadeIn();
      $(".retake-button").show();
    }
    else {
      $("#ruby, #cSharp, #javaScript, #survey").hide();
      $("#bash").fadeIn();
      $(".retake-button").show();
    }
    $("#retakeButton").click(function(event) {
      event.preventDefault();
      $("#survey").fadeIn();
      $("#ruby, #cSharp, #javaScript, #bash, .retake-button").hide();
    });
  });
});
