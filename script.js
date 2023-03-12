gsap.registerPlugin(Flip);

const links = document.querySelector(".nav-item a");
const activeNav = document.querySelector(".active-nav");

if(typeof(links) === "string"){
    links = JSON.parse(links);
}

links.forEach((link) => {
    link.addEventListener("click", () => {
        // turn nav blue
        gsap.to(links, {color : "#565656"});
        if(document.activeElement === link){
            gsap.to(links, {color : "#385ae7"});
        }
    });
});