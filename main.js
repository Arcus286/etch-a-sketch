let container = document.querySelector("#container");
for(let i = 0;i<256;i++){
    let el = document.createElement("div");
    el.setAttribute("class","box");
    container.append(el);
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box)=>{
    box.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor = "grey";
    })
})

let btn_resize = document.querySelector("#resize");
let btn_reset = document.querySelector("#reset");
let btn_rainbow = document.querySelector("#rainbow");
let btn_menu = document.querySelector("#buttons");

btn_menu.addEventListener("click",(btn)=>{
    let target = btn.target;
    switch(target.id){
        case "reset":
            boxes.forEach((box)=>{
                box.style.backgroundColor = "white";
            })
        case "rainbow":
            boxes.forEach((box)=>{
                box.addEventListener("mouseover",(e)=>{
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                })
            })
    }
})