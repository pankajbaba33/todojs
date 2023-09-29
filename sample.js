var getValue;
let todoArray = [];
const btn = document.querySelector("#btn");
const myList = document.querySelector("#myList");
var input = document.createElement("input");
input.type = "text";

btn.addEventListener("click", () => {
   let li = document.createElement("li");

   getValue = document.querySelector("#one").value;
   var t = document.createTextNode(getValue);
   li.appendChild(t);
   myList.appendChild(li)
   var btn = document.createElement("button");
   var text = document.createTextNode("delete");
   btn.appendChild(text);
   li.appendChild(btn);
   var update = document.createElement("button");
   var uptext = document.createTextNode("update");
   update.appendChild(uptext);
   li.appendChild(update);

   btn.onclick = function () {
      myList.removeChild(li);
      localStorage.removeItem('lyList')
   };
   update.onclick = function () {
      document.querySelector("#one").value = getValue;
      li.innerHTML = "";
      li.style.listStyle = "none";
      

   };

   document.querySelector("#one").value = "";
});
