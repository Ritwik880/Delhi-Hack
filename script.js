$(document).ready(() => {
      $("#header-section").load("partial_views/headerPartial.html");
      $("#app-section").load("partial_views/appPartial.html");
      $("#product-preview-section").load("partial_views/selectinformationPartial.html");
      $("#review-section").load("partial_views/reviewPartial.html");
      $("#pre-order-section").load("partial_views/preorderPartial.html");
      $("#mailchimp-section").load("partial_views/mailchimpPartial.html");
      $("#footer-section").load("partial_views/footerPartial.html");
      $("#developer-section").load("partial_views/developerPartial.html");
});

$(window).scroll(() => { 
      if ($(document).scrollTop() > 800) {   
            document.getElementById("navbar").setAttribute('style', 'background-color: black !important');
      } else {
            document.getElementById("navbar").setAttribute('style', 'background-color: transparent !important');
      }
});

goBack = () => {
      $("#product-preview-section").load("partial_views/selectinformationPartial.html");
      scrollToElement("#product-preview-section", 200)
}

loadInfo = (info) => {
      let Path = "partial_views/" + info + "Partial.html";
      scrollToElement("#product-preview-section", 200)
      $("#product-preview-section").load(Path);
}

scrollToElement = (el, ms) => {
      let speed = (ms) ? ms : 600;
      $('html,body').animate({
          scrollTop: ($(el).offset().top - 50)
      }, speed);
}