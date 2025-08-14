let container = document.querySelector("#container");
let color = "grey";
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
            color = "grey";
            boxes = document.querySelectorAll(".box");
            boxes.forEach((box)=>{
                box.style.backgroundColor = "white";
                box.addEventListener("mouseover",(e)=>{
                    e.target.style.backgroundColor = "grey";
                })
            })
            break;
        case "rainbow":
            color = "rainbow";
            boxes.forEach((box)=>{
                box.addEventListener("mouseover",(e)=>{
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                })
            })
            break;
        case "resize":
            let num = parseInt(prompt("Enter the number of squares (max 100): "));
            if(isNaN(num) || num<1 || num>100){
                alert("Enter a valid number");
            }
            else{
                container.innerHTML = "";
                let boxSize = 600/num;
                for(let i = 0;i<num*num;i++){
                    let box = document.createElement("div");
                    box.classList.add("box");
                    box.style.width = boxSize + "px";
                    box.style.height = boxSize + "px";
                    box.style.boxSizing = "border-box";
                    box.setAttribute("class","box");
                    container.appendChild(box);
                }
                let boxes = document.querySelectorAll(".box")
                if(color == "grey"){
                    boxes.forEach((box)=>{
                        box.addEventListener("mouseover",(e)=>{
                            e.target.style.backgroundColor = "grey";
                        })
                    })
                }
                else if(color == "rainbow"){
                    boxes.forEach((box)=>{
                        box.addEventListener("mouseover",(e)=>{
                            let r = Math.floor(Math.random() * 256);
                            let g = Math.floor(Math.random() * 256);
                            let b = Math.floor(Math.random() * 256);
                            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                        })
                    })
                }
            }
            break;
    }
})