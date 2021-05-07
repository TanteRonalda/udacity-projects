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
document.addEventListener('DOMContentLoaded', dynamicNavigation);
// build the nav
function dynamicNavigation() {
    const navList = document.getElementById("navbar__list");
    const section = document.querySelectorAll("section");
    for(let i = 0; i < section.length; i++) {
        const navItem = document.createElement("li");
        navItem.innerText = section[i].getAttribute("data-nav");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "#"+section[i].id);
        navList.appendChild(navItem);
        navItem.appendChild(anchor);
    };
}
    


    


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


