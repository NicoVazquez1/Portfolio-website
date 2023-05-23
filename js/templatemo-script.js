/*

TemplateMo 560 Astro Motion

https://templatemo.com/tm-560-astro-motion

*/

var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}

function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});

const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form input values
  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;
  var message = document.getElementById("message-input").value;

  // Prepare the email parameters
  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };
}
/*
  // Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form input values
  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;
  var message = document.getElementById("message-input").value;

  // Prepare the email parameters
  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      console.log("Email sent successfully:", response.status, response.text);
      alert("Email sent successfully!");
    }, function(error) {
      console.log("Error sending email:", error);
      alert("An error occurred while sending the email.");
    });
}

// Add event listener to the form submission
document.getElementById("contact-form").addEventListener("submit", sendEmail);
*/