

(function () {
    const items = document.querySelectorAll(".timeline-section li");
  
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function slideIn() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("slide-in");
        } else {
          items[i].classList.remove("slide-in");
        }
      }
    }
  
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);

    
  })();
  

document.querySelectorAll('.accordion__button').forEach(button =>{
  
  button.addEventListener('click', () => {
    console.log("fdsfds");
    const accordionContent = button.parentElement.nextElementSibling;
    button.classList.toggle("accordion__button--active");
    const servicesContent = button.parentElement;
    
    if(button.classList.contains("accordion__button--active")){
      accordionContent.style.maxHeight = accordionContent.scrollHeight +  "px";
      servicesContent.classList.add("services-list-item--active");
      servicesContent.classList.remove("services-list-item--closed");
    }
    else{
      accordionContent.style.maxHeight = 0;
      servicesContent.classList.remove("services-list-item--active");
      servicesContent.classList.add("services-list-item--closed");
    }
  })
});

// var modal = document.querySelector(".modal");
//     var trigger = document.querySelector(".trigger");
//     var closeButton = document.querySelector(".close-button");

//     function toggleModal() {
//         modal.classList.toggle("show-modal");
//     }

//     function windowOnClick(event) {
//         if (event.target === modal) {
//             toggleModal();
//         }
//     }

//     trigger.addEventListener("click", toggleModal);
//     closeButton.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);

//   window.onscroll = function() {myFunction()};

// let header = document.getElementById("myHeader");
// let sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }