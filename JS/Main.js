//========================
// Typing Effect
//========================

const words = [
    "Frontend Developer",
    "React Developer",
    "UI Enthusiast",
    "Web Developer"
];

const typing = document.getElementById("typing-text");

let word = 0;
let letter = 0;
let deleting = false;

function type(){

    let current = words[word];

    if(!deleting){

        typing.textContent = current.substring(0,letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(type,1500);

            return;
        }

    }

    else{

        typing.textContent = current.substring(0,letter--);

        if(letter < 0){

            deleting = false;

            word++;

            if(word >= words.length){

                word = 0;

            }

        }

    }

    setTimeout(type,deleting ? 60 : 120);

}

type();


window.addEventListener("load",()=>{

    const items=document.querySelectorAll(".reveal");

    items.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("active");

        },index*250);

    });

    const icons=document.querySelectorAll(".reveal-icon");

    icons.forEach((icon,index)=>{

        setTimeout(()=>{

            icon.classList.add("active");

        },1700+(index*180));

    });

});


// ===================
// Navbar

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const menuIcon = menuBtn.querySelector("i");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

};
document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;
        const sectionHeight = section.clientHeight;

        if(scrollY>=sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }

    });

});
