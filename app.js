// //  var imgEL = document.getElementById('apple');
// //  var imgContainer = document.getElementById('i-section');
// //  function changeBG(){
// //     imgEL.src = "images/mango.jpeg";
// //  }

// //Assignment # 2

// // var currentSize = 48;

// // // function increaseFontSize(){
// // //     currentSize += 6;
// // //     document.getElementById('fontName').style.fontSize = currentSize + 'px';
// // //     console.log(currentSize);
// // // }

// //Assignment # 3

// // var para = document.getElementById('para');
// // var hiddenArea = document.getElementById('hidden');

// // function showText() {
// //     hiddenArea.style.visibility = 'visible';
// // }

// var para = document.getElementById('para');
// var hiddenArea = document.getElementById('hidden');

// function showText(){
//     hiddenArea.style.visibility = 'visible';
// }

var imgEL = document.getElementById('apple');
var imgBL = document.getElementById('mango');
var input = document.getElementById('input');

function search() {
    imgEL.style.visibility = "hidden";
    imgBL.style.visibility = "hidden";

    var searchTerm = input.value.toLowerCase();

    if (searchTerm === "apple") {
        imgEL.style.visibility = "visible";
    }
    else if (searchTerm === "mango") {
        imgBL.style.visibility = "visible";
    }
    else {
        alert("Image not found!");
    }
}