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



window.addEventListener("DOMContentLoaded", dynamicNavigation);
window.addEventListener("DOMContentLoaded", isInViewport);



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


function isInViewport () {
    const container = document.querySelectorAll(".landing__container");
    for (let i = 0; i < container.length; i++) {
        const containerInView = container[i].getBoundingClientRect();
        window.addEventListener("scroll", function () {
            if  (containerInView.top >= 0 
                &&  containerInView.left >= 0
                &&  containerInView.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                &&  containerInView.right <= (window.innerWidth || document.documentElement.clientWidth));
            { 
                container[i].classList.add("your-active-class");
            }
            container[i].classList.remove("your-active-class");
        });
    };    
}



/*function isInViewportHelper(element) {
     const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 
    &&  rect.left >= 0
    &&  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    &&  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}*/


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


