let container = document.querySelector("#container");
for(let i = 0;i<225;i++){
    let el = document.createElement("div");
    el.style.height = "27px";
    el.style.width = "27px";
    el.style.border = "2px solid black";
    el.setAttribute("class","box");
    container.append(el);
}

let box = document.querySelectorAll(".box");