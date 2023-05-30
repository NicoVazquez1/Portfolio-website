var gallery = undefined;

//$('.carousel').carousel();

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
    updateCarouselItems('.carousel-item');
	})
})

emailjs.init("FMuwCahw7zsmib5XD");

function sendEmail(event) {
  event.preventDefault();

  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_b8zcfqq";
  const templateId = "template_hkyznp6"
  
  emailjs.send(serviceId, templateId, templateParams)
    .then(response => {
      console.log("Email sent successfully:", response.status, response.text);
      alert("Thanks! Your email was sent successfully!")
    }, function(error) {
      console.log("Error sending email:", error);
      alert("Error sending email.")
    })
}

/*
function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-body");
  modalMessage.textContent = message;
  modal.style.display = "block";
}

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
*/

document.getElementById("contact-form").addEventListener("submit", sendEmail);

function updateCarouselItems(className) {
  const carouselItems = $(className);

  carouselItems.each(function() {
    const currentItem = $(this);
    currentItem.removeClass('active');
    
    if ($('.content-pad').hasClass('active')) {
      const carouselInner = $('.content-pad.active').find('.carousel-inner');
      const firstCarouselItem = carouselInner.children('.carousel-item').first();
      firstCarouselItem.addClass('active');
    }
  });
}






