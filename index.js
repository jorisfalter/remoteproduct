// check if its a mobile device
window.addEventListener("load", function(){
  // (A) CHECK FOR MOBILE
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

  // (B) DO SOMETHING...
  // if (isMobile) {
  //   alert("Is mobile device");
  // } else {
  //   alert("Not mobile device");
  // }
});

// display second header after 5 seconds
function showIt2() {
  document.getElementById("show-later").style.visibility = "visible";
}
setTimeout("showIt2()", 5000); // after 5 secs


// header image swapping
let images = ['Beach.jpeg','Ski.jpeg', 'Jungle.jpeg', 'Kite.jpeg', 'City.jpeg'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 3 ? index = 0 : index++;
}

change(); // to make sure it loads when the page loads
window.onload = function () {
    setInterval(change, 6000);
};

// Make the tiles clickable
$(".company").click(function(){
    // if (isMobile){
    //   var element = document.getElementById('toggleTrack');
    //   element.classList.add("hover-company");
    //   alert("Mobile device");
    //
    // } else {
      var selectedCompany = $(this).attr("id");
      window.location.href = "companyPages/" + selectedCompany + ".html";
    //   alert("Not mobile device");
    // }

})
