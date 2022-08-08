//// to show event of change color

changeColor.addEventListener("mousemove", (eo) => {

    hiddenul.style.display = "block";
});

changeColor.addEventListener("mouseout", (eo) => {

    hiddenul.style.display = "none";
})


//// function random color/////
const hexaChange = function() {

    return `#${Math.random().toString(16).slice(2,8)}`
}

///////////// to change header bg 
HeaderBG.addEventListener("click", (eo) => {
    const hexa = hexaChange();
    const header = document.querySelector("#header > div.header")
    header.style.backgroundColor = hexa;

})

/////////////////// to change the section bg
SectionBG.addEventListener("click", (eo) => {

    const Sections = document.querySelectorAll("section,body > section.section > div > div");
    const hexa = hexaChange();

    Sections.forEach(item => {
        item.style.backgroundColor = hexa;
    });

    const title = document.querySelectorAll("body > div:nth-child(6),body > div:nth-child(3)")
    title.forEach(item => {
        item.style.backgroundColor = hexa;
    });

});



///////////// to change title color
TitleCo.addEventListener("click", (eo) => {
    const hexa = hexaChange();
    const title = document.querySelectorAll("h1,p,div,h4")
    title.forEach(item => {
        item.style.color = hexa;
    });
})


///// to change footer BG 
FooterBG.addEventListener("click", (eo) => {
    const hexa = hexaChange();
    const footer = document.querySelector("footer")
    footer.style.backgroundColor = hexa;

})