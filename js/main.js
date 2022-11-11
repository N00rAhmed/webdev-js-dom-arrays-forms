// I I F E
(function(){
    //STARTS 
    
    document.getElementById("myHeading").innerHTML = "Noor"
    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    let myFirstLink = document.querySelector("nav ul li a")
    console.info(myFirstLink)
    myFirstLink.setAttribute("href", "https://www.google.co.uk/")

    // test event
    
    document.getElementById('myTestEvent').addEventListener ('click', myFunction);


    function myFunction(ev){
        console.info(ev.target)
        ev.target.style.backgroundColor = "#f00"
}


// background selesvto
let redBtn = document.querySelector(".red")
let bodyElement = document.querySelector("body")
redBtn.addEventListener("click", function(){
    bodyElement.setAttribute("class", "redBack")
})


let blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function a(){
    bodyElement.setAttribute("class", "blueBack")
})


let greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function b(){
    bodyElement.setAttribute("class", "greenBack")
})

let colPickerBtn = document.querySelector(".reset")
colPickerBtn.addEventListener("click", function c(){
    bodyElement.removeAttribute("class")
})


    // END
})()

