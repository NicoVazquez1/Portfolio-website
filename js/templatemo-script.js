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

$(document).ready(function() {
  $('.enlargeable').click(function() {
    $(this).toggleClass('enlarged');
  });
});

/*
let currentLanguage = 'en';

function translateToSpanish() {
  const elementsToTranslate = $('p, h1');
  
  elementsToTranslate.each(async function() {
    const originalText = $(this).text();
    const translatedText = await translateText(originalText, currentLanguage, 'es');
    $(this).text(translatedText);
  });

  currentLanguage = 'es';
}

function translateToEnglish() {
  const elementsToTranslate = $('p, h1');
  
  elementsToTranslate.each(async function() {
    const originalText = $(this).text();
    const translatedText = await translateText(originalText, currentLanguage, 'en');
    $(this).text(translatedText);
  });

  // Toggle the current language
  currentLanguage = 'en';
}

async function translateText(text, sourceLanguage, targetLanguage) {
  const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your Google Translate API key
  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.translations[0].translatedText;
    } else {
      throw new Error('Translation request failed');
    }
  } catch (error) {
    alert('An error occurred during translation. Please try again.');
    console.error(error);
    throw error;
  }
}


$(document).ready(function() {
  $('#translateButton').click(function() {
    if (currentLanguage === 'en') {
      translateToSpanish();
    } else {
      translateToEnglish();
    }
  });
});
*/

function countCharactersInWebsite() {
  var websiteContent = document.body.innerText;
  var cleanContent = websiteContent.replace(/\s/g, '');
  var characterCount = cleanContent.length;
  console.log('Total number of characters in the website: ' + characterCount);
}

countCharactersInWebsite();





