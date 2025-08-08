let container = document.querySelector("#container");
for(let i = 0;i<256;i++){
    let el = document.createElement("div");
    el.setAttribute("class","box");
    container.append(el);
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box)=>{
    box.addEventListener("mouseover",(e)=>{
        
    })
})