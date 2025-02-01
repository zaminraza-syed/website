const links = document.querySelector(".nav-links")
function clickOnLines(){
    if (links.classList.contains("active")){
        links.classList.remove("active");
    }else{
        links.classList.add("active")
    }
}
const sections = document.querySelectorAll(".heroSection, .herotext, .heropicture, .Service, .card");


const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

const handleScroll = () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScroll);

handleScroll();