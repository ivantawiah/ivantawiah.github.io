/*!
=========================================================
* Ivan Siisi Tawiah's Portfolio
=========================================================

=========================================================

*/


//Copy url code 3

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton2').addEventListener('click', copyURLToClipboard);



//Contact me vial email code

function composeEmail() {
                                  
    var subject = document.getElementById('subject').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

   
    var emailBody = "Subject: " + subject + "\n\n";
    emailBody += "Name: " + name + "\n\n";
    emailBody += "Message:\n" + message;

   
    var mailtoLink = "mailto:tawiahivansiisi@gmail.com" +
                     "?subject= " + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(emailBody);

    
    window.location.href = mailtoLink;
  }




//Popup Modal3

var modal3 = document.getElementById("myModal");

var btn3 = document.getElementById("myBtnol3");

var span3 = document.getElementsByClassName("closeol")[0];

btn3.onclick = function () {
    modal3.style.display = "flex";
};

span3.onclick = function () {
    modal3.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};







//Popup Modal2

var modal2 = document.getElementById("myModal");

var btn2 = document.getElementById("myBtnol2");

var span2 = document.getElementsByClassName("closeol")[0];

btn2.onclick = function () {
    modal2.style.display = "flex";
};

span2.onclick = function () {
    modal2.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};




//Popup Modal 
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtnol");

var span = document.getElementsByClassName("closeol")[0];

btn.onclick = function () {
    modal.style.display = "flex";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};





// Paystck implementation

const paymentForm = document.getElementById('paymentForm');
const selectElement = document.getElementById('paymentPlanSelect');
        
paymentForm.addEventListener("submit", payWithPaystack, false);
    
function payWithPaystack(e) {
    e.preventDefault();

      
    let inputFieldog = document.getElementById('card-name').value;
    let processedValue = inputFieldog.replace(/\s+/g, '');
    
    let handler = PaystackPop.setup({
        key: 'pk_live_78f4689f62138e0e4ca10676ad3e05a7df40617f', // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: document.getElementById("cvv").value * 100,
        ref: processedValue + ''+Math.floor((Math.random() * 1000) + 1) + document.getElementById('paymentPlanSelect').value,
        currency: 'GHS', // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(response){
            let message3 = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });
    
    handler.openIframe();
}



// To change the button text dynamically with the amount chosen

const inputField = document.getElementById('cvv');
const dynamicButton = document.getElementById('planButton');

// Add an event listener to the input field to listen for input events
inputField.addEventListener('input', function() {
    // Change the button text to the value of the input field
    dynamicButton.textContent = 'Donate GHS ' + inputField.value + ' now';
});



//Prompt to check if project was selected 

document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('paymentPlanSelect');
    const planButton = document.getElementById('planButton');
    const titleSelector = document.getElementById('titleol');

    const planDetails = {
        'supportProjectAeroSimApp': 'Aerospace Simulation App',
        'supportProjectAREngineer': 'Interactive Augmented Reality for Engineering Design',
        'supportProjectMartha': 'AI-Powered Personal Finance Assistant (Martha)'
    };

    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue && planDetails[selectedValue]) {
            titleSelector.textContent = '#' + selectedValue;
        } else {
            titleSelector.textContent = '#supportSiisi';
        }
    });

    planButton.addEventListener('click', function() {
        const selectedValue = selectElement.value;
        if (selectedValue == '0') {
            alert('Please select a Donation project');
        } else if (selectedValue && planDetails[selectedValue]) {
            console.log('You have selected the ' + planDetails[selectedValue] + '.');
        }
    });

});





// Hire me Code

function openURL() {
                  
    var urlToOpen = 'https://www.freelancer.com/u/tawiahivansiisi';

    // Open the URL in a new tab
    window.open(urlToOpen, '_blank');
  }

  // Attach the function to the button click event
  document.getElementById('openURLHIRE').addEventListener('click', openURL);



//Secret Congrats Page

document.addEventListener("DOMContentLoaded", function() {
    // Get the hash from the URL
    var hash = window.location.hash.substr(1);

    // If the hash is "congrats", remove the hidden class from the "congrats" section
    if (hash === "congrats") {
        var congratsSection = document.getElementById("congrats");
        if (congratsSection) {
            congratsSection.classList.remove("hidden");
        }
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
});



//proPackage btn clicked

document.getElementById('proPackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Pro Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Pro package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});




//exclusivePackage btn clicked

document.getElementById('exclusivePackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Exclusive Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Exclusive package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});



//basicPackage btn clicked

document.getElementById('basicPackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Basic Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Basic package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});



// freePackage btn clicked

document.getElementById('freePackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Free Tutorial Package Enquiry";
    var body = "I'd Like to enquire about the free package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

window.location.href = mailtoLink;
});

// Copy code

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton1').addEventListener('click', copyURLToClipboard);



//CV Download Code

document.getElementById('downloadCV').addEventListener('click', function() {
    //Specifying document URL
    var documentURL = 'assets/CV.pdf';
    var fileName = 'ivan-siisi-tawiah-CV.pdf';
    //Creating an invisible element that would trigger the download
    var a = document.createElement('a');
    a.href = documentURL;
    a.download = fileName;
    //Trigger a click event
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



// Resume download Code

document.getElementById('downloadResume').addEventListener('click', function() {
    //Specifying document URL
    var documentURL = 'assets/resume.pdf';
    var fileName = 'ivan-siisi-tawiah-resume.pdf';
    //Creating an invisible element that would trigger the download
    var a = document.createElement('a');
    a.href = documentURL;
    a.download = fileName;
    //Trigger a click event
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



// Copy URL code

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton').addEventListener('click', copyURLToClipboard);


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
    // Styles for a retro-themed map
    var retroStyles = [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#c9b2a6' }] },
        { featureType: 'administrative.land_parcel', elementType: 'geometry.stroke', stylers: [{ color: '#dcd2be' }] },
        { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#ae9e90' }] },
        { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#93817c' }] },
        { featureType: 'poi.park', elementType: 'geometry.fill', stylers: [{ color: '#a5b076' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#447530' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#f5f1e6' }] },
        { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fdfcf8' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#f8c967' }] },
        { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#e9bc62' }] },
        { featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{ color: '#e98d58' }] },
        { featureType: 'road.highway.controlled_access', elementType: 'geometry.stroke', stylers: [{ color: '#db8555' }] },
        { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#806b63' }] },
        { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'transit.line', elementType: 'labels.text.fill', stylers: [{ color: '#8f7d77' }] },
        { featureType: 'transit.line', elementType: 'labels.text.stroke', stylers: [{ color: '#ebe3cd' }] },
        { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#b9d3c2' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#92998d' }] },
    ];

    // Create a new map with retro styles
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 5.6045708656311035, lng: -0.18717896938323975 },
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        styles: retroStyles
    });
}
