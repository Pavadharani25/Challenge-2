const Input = document.getElementById("input")
const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease")

increaseBtn.addEventListener("click",textIncrease )
decreaseBtn.addEventListener("click",textDecrease )

var defaultSize = 16

function textIncrease () {
    defaultSize =   defaultSize + 2  
    Input.style.fontSize = `${defaultSize}px`
}
function textDecrease () {
    defaultSize =   defaultSize - 2  
    Input.style.fontSize = `${defaultSize}px`
}