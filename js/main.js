let html = document.querySelector('html')
let modeBtn = document.querySelector('.mode');
let down_arrow = document.querySelector(".down");
let header = document.querySelector("header")
let listElements = document.querySelectorAll('a')

// Header sticky effect
window.addEventListener('scroll', () => {
    let height = window.scrollY;
    if (height >= 40) {
        header.style.backgroundColor = "rgb(211, 211, 211)" 
        header.style.boxShadow = '0 2px 6px rgba(0,0,0, 0.5)';
        header.style.color = "#6B3F69"
        listElements.forEach(el => {
            el.style.color = "#6B3F69"
        })
    }
    else {
        header.style.backgroundColor = "" 
        header.style.boxShadow = '';
        header.style.color = ""
        listElements.forEach(el => {
            el.style.color = ""
        })
    }
})

// This block of code to toggle between light and dark modes

modeBtn.addEventListener('click', () => {
    html.classList.toggle('white');
    if (html.classList.contains('white')){ 
    modeBtn.classList.remove('fa-sun');
    modeBtn.style.color = "#121212";
    modeBtn.classList.add('fa-moon');
    modeBtn.style.color = "black";

}
    else {
    modeBtn.classList.remove('fa-moon');
    modeBtn.classList.add('fa-sun');
    modeBtn.style.color = "white";
}
})
// Down scroll effect 
down_arrow.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"  
    });
})