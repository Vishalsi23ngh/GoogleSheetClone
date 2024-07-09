//focused event does not bubbled up

let selectedCell="";
const activeCellElement =document.querySelector(".selected-cell");
const form = document.querySelector(".options-form")
body.addEventListener("click",(event)=>{
    //console.log(event.target);
    if(selectedCell){
        selectedCell.classList.remove("active-cell");
    }
    selectedCell = event.target;
    selectedCell.classList.add("active-cell");
    activeCellElement.innerText = selectedCell.id;
    
})

// form.addEventListener("change",() =>{
//     console.log("change event triggered");
// })
