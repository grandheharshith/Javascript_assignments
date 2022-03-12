let count=0;
let btn=document.querySelector("button");
btn.addEventListener("click",adding);

function adding(){
    let name=document.querySelector("input").value;
    let todos=document.querySelector(".todos");
    let content=document.createElement("p");
    content.setAttribute("key",count);
    count+=1;
    content.innerHTML=name;
    todos.append(content);
    content.addEventListener("click",content.remove);
}