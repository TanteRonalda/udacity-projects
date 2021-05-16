window.onload = dynamicNavigation;

// Dynamically build the navigation menu
function dynamicNavigation() {
    const sections = document.querySelectorAll("section");
    const navList = document.getElementById("navbar__list");
    for(section of sections) {
        const navItem = document.createElement("li"); 
        const anchor = document.createElement("a");
        anchor.innerText = section.getAttribute("data-nav");
        anchor.setAttribute("id", section.id);
        anchor.setAttribute("href", "#"+section.id);
        navList.appendChild(navItem);
        navItem.appendChild(anchor);
    };
    scrollingSmoothly();
}  


// Set navigation-items as active when they are clicked
// How this is done ist very well explained here: https://www.w3schools.com/howto/howto_js_active_element.asp 
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


/*function addActiveClassClick () {
    const navBar = document.querySelector("ul");
        navBar.addEventListener("click", function ActivateNavItem(activeItem) {
            const navItems = navBar.querySelectorAll("li");
            for (navItem of navItems){
                if (activeItem.target.nodeName === "LI") 
                {   
                navItem.ClassList.add("active");
                }
            }    
            
        });
}

/*function ActivateNavItem () {}
    const anchorLinks = document.querySelectorAll("li a");
    for (anchorLink of anchorLinks)
        anchorLink.addEventlistener("click", function (activItem) {
        if (activeItem.tagrget.nodeName === "A") 
    {
        anchorLink.className = "active"
    }
}

(activeItem) {
    for (navItem of navItems) {
        if (navItem.target === true )
        {
            navitem.className = "active";
        }
   }
}

navBar.addEventListener("click", ActivateNavItem);
*/

// Add class 'active' to section when near top of viewport
function viewPortClass () {
    const contentSections = document.querySelectorAll(".landing__container");
    for (section of contentSections) {
        const viewedSection = section.getBoundingClientRect();
        //To check the dimensions of viewedSection I have used a helper function, that can be found on multiple online sources, for example: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
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

/*//Highlight Item in Navigation when appropriate section is in Viewport
function highlightNav () {
    const contentSections = document.querySelectorAll("section");
    const NavItem = document.querySelectorAll("li a")
    for (section of contentSections) {
        const viewedSection = section.getBoundingClientRect();
        //To check the dimensions of viewedSection I have used a helper function, that can be found on multiple online sources, for example: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
            if  ((viewedSection.top >= 0 
                &&  viewedSection.left >= 0
                &&  viewedSection.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                &&  viewedSection.right <= (window.innerWidth || document.documentElement.clientWidth)) && (viewedSection.id == viewedNavItem.id))
            { 
                section.classList.add("your-active-class");
                viewedNavItem.style.background = "red";
            } 
            else section.classList.remove("your-active-class",);
            
    };
};    

document.addEventListener("scroll", function() {
     highlightNav();
});*/

// Scroll to section on link click
// I would prefer to create this effect with CSS, but I believe it is required to be a JS function for this  project
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