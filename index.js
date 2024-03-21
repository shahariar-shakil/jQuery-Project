// how change the html text
// var mypara1 = $("<p></p>").text("this is paragraph 0");
// $("#p1").before(mypara1);

// $("a").removeAttr("href");

// $("a").attr("href", "http://studywithanis.com");

// how to add css in jquery code
// $("h1").css("color", "green");
// $("h1").css("font-size", "3rem");
// $("h1").css("background-color", "black");

// $("h1").css({ "font-style": "italic", "font-family": "Helvetica" });

// how add css code on js
// document.querySelector("h1").classList.add("style1");

// jquery code
// $("h1").addClass("style1 style2");

// js code
// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("h1").innerHTML = "you have clicked the button";
// });

// jquery code
// $("button").click("click", function () {
//   $("h1").toggleClass("style1");
// });

// click button functionality
// $(".mybutton").click(function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clickable ");
// });

// mouseover button functionality
// $(".mybutton").on("mouseover", function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clickable ");
// });

// login button
// $("#loginButton").click(function () {
//   var password1 = $("#pass1").val();
//   var password2 = $("#pass2").val();

//   if (password1 != "" && password2 != "") {
//     if (password1 == password2) {
//       alert("successfully logged in");
//     } else {
//       alert("Invalid password");
//     }
//   } else {
//     alert("please enter a password");
//   }
// });

// jquery animation
$("#btn").click(function () {
  $("#div1").animate({ opacity: 0.4 });
});
