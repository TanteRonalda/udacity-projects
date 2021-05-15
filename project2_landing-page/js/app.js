window.onload = dynamicNavigation;

// Dynamically build the navigation menu
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

// Set navigation-items as active when they are clicked
function addActiveClassClick () {
    const navItems = document.querySelectorAll("li");
    for(let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
            const activeItem = document.getElementsByClassName("active");
            if (activeItem.length > 0)
            {
                activeItem[0].className = activeItem[0].className.replace("active", "");
            } 
            this.className = "active";
            });
        };
}

/*const navItems = document.querySelectorAll("li");

function ActivateNavItem(activeItem) {
    for (navItem of navItems) {
        if (activeItem.target === true )
        {
            navitem.className = "active";
        }
   }
}

navItems.addEventListener("click", ActivateNavItem);
*/

// Add class 'active' to section when near top of viewport
function viewPortClass () {
    const contentSections = document.querySelectorAll("section");
    for (section of contentSections) {
        const viewedSection = section.getBoundingClientRect();
            if  (viewedSection.top >= 0 
                &&  viewedSection.left >= 0
                &&  viewedSection.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                &&  viewedSection.right <= (window.innerWidth || document.documentElement.clientWidth))
            { 
                section.classList.add("your-active-class");
            } 
            else section.classList.remove("your-active-class",);
    
    };
};    


document.addEventListener("scroll", function() {
     viewPortClass();
});

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
};