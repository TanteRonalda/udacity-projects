/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



window.onload = dynamicNavigation;

// build the nav
function dynamicNavigation() {
    const section = document.querySelectorAll("section");
    const navList = document.getElementById("navbar__list");
    for(let i = 0; i < section.length; i++) {
        const navItem = document.createElement("li"); 
        const anchor = document.createElement("a");
        anchor.innerText = section[i].getAttribute("data-nav");
        anchor.setAttribute("id", "Anchor-Link" + "-" + section[i].id);
        anchor.setAttribute("href", "#"+section[i].id);
        navList.appendChild(navItem);
        navItem.appendChild(anchor);
    };
    scrollingSmoothly();
    addActiveClassClick();
}  
// Add class 'active' to section when near top of viewport

function isInViewport(e) {
    let rect = e.getBoundingClientRect();
    return (
       rect.top >= 0 
   &&  rect.left >= 0
   &&  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
   &&  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};

const contentSections = document.querySelectorAll("section");

function viewportClass() {
    for (let i = 0; i < contentSections.length; i++) {
        if  (isInViewport(contentSections[i]) === true) {
            contentSections[i].classList.add("your-active-class");
        } else contentSections[i].classList.remove("your-active-class");
    };
}

document.addEventListener("scroll", function(){
    viewportClass();
});




// Scroll to anchor ID using scrollTO event
    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click  
function scrollingSmoothly() {
    const anchorLinks = document.querySelectorAll("li a");
    for (const anchorLink of anchorLinks){
        anchorLink.addEventListener("click", ScrollToSection);
    }
    function ScrollToSection(targetSection){
        targetSection.preventDefault();
        const clickedAnchorLink = this.getAttribute("href");
        document.querySelector(clickedAnchorLink).scrollIntoView({behavior:"smooth"});
    }; 
}
// Set sections as active
function addActiveClassClick () {
    const navItems = document.querySelectorAll("li");
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function() {
            const activeItem = document.getElementsByClassName("active");
                if (activeItem.length > 0){
                    activeItem[0].className = activeItem[0].className.replace("active", "");
                    }
                    this.className = "active";
            });
        };
}

/*function addActiveClassInView () {
    const navItems = document.querySelectorAll("li");
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function() {
                const activeItem = document.getElementsByClassName("active");
                    if (activeItem.length > 0){
                        activeItem[0].className = activeItem[0].className.replace("active", "");
                    }
                    this.className = "active";
            });
        };
}*/


