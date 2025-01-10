const hamMenu = document.querySelector(".ham-menu");
const navlinks = document.querySelector(".nav-links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navlinks.classList.toggle("active");
});


    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");
    
    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        }
    });
    
    sun.addEventListener("click", darken);
    moon.addEventListener("click", darken);
    
    function darken() {
        let body = document.querySelector("body");
    
        if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled"); 
        } else {
        body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled"); 
        }
    }
    

    function downloadCV() {
        const filePath = '/downloadcv/mycv.pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'mycv.pdf';
        link.click();
        }
