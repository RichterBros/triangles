$(document).ready(function() {
  $(".btn").click(function() {
    var side1 = parseInt($("input#1stSide").val());
    var side2 = parseInt($("input#2ndSide").val());
    var side3 = parseInt($("input#3rdSide").val());
  
  
  if (side1 && side2 && side3) {  
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $("#output").text("Not a triangle, sorry");
      $("#output").show();
    } else if (side1 === side2 && side1 === side3) {
      $("#output").text("Equilateral");
      $("#output").show();
    } else if (side1 === side2 && side1 !== side3 || side1 === side3 && side2 !== side1 || side2 === side3 && side2 !== side1) {
      $("#output").text("Isosceles");
      $("#output").show();
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $("#output").text("Scalene");
      $("#output").show();
    } else {
      $("#output").text("I don't know what to tell you");
      $("#output").show();
    }
  } else {
    $("#output").text("Please try again and enter numbers");
    $("#output").show();
  }





event.preventDefault();
  });

});