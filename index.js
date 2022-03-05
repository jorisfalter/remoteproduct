// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var spanclose = document.getElementById("mySpan");

// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click",function(event) {
  if (event.target == spanclose) {
    modal.style.display = "none";
  }
  else if (event.target == modal) {
      modal.style.display = "none";
  }
})

// make the tiles click into the modal
// check if its a mobile device
window.addEventListener("load", function(){
  // CHECK FOR MOBILE
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

  // Make the tiles clickable
  var clickedCompanies = [];
  var clickedCompaniesLength;
  $(".company").click(function(){
      var selectedCompany = $(this).attr("id");

      // modal Content
      var modalContent = document.querySelector(".modal-content-html");
      modalContent.innerHTML = flightradar24content;


      if (isMobile){
        // to figure out if a company has been double clicked
        clickedCompanies.push(selectedCompany);
        clickedCompaniesLength = clickedCompanies.length;
        if (clickedCompaniesLength != 1){
          if (clickedCompanies[clickedCompaniesLength-1] == clickedCompanies[clickedCompaniesLength-2]){
            //window.location.href = "companyPages/" + selectedCompany + ".html";
            modal.style.display = "block";
          }
        }

      } else {
        //window.location.href = "companyPages/" + selectedCompany + ".html";
        modal.style.display = "block";
      }
  })
});


// content - // TEMP:
flightradar24content = "<h1>FlightRadar24</h1><p>A hobby which got out of hand, that's how Flightradar24 started in 2006. By now they provide a helping hand to every tech-savvy traveller. Whether you want to check your own, your spouse&#39;s or friend&#39;s flight, which airlines operate at which airport</p>"




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


// Modal
