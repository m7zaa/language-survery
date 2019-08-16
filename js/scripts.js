$(document).ready(function(){
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var simplicity = $("input:radio[name=simplicity]:checked").val();
    var windows = $("input:radio[name=windows]:checked").val();
    var games = $("input:radio[name=games]:checked").val();
    var workRemotely = $("input:radio[name=workRemotely]:checked").val();
    var macPc = $("input:radio[name=macPc]:checked").val();
    $(".name").text(name);
    //   Select drop down variables
    // var simplicity=$("select#simplicity").val();
    // var windows = $("select#windows").val();
    // var games = $("select#games").val();
    // var workRemotely = $("select#workRemotely").val();
    // var macPc = $("select#macPc").val();
    // var javaScript = $("input#javaScript").val();
    
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
