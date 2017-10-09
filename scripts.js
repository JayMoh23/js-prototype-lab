/*console.log('hello');
var die = function()*/
var totalDie = [];


document.addEventListener('DOMContentLoaded', function(){

    /*Buttons*/

    var btn=document.createElement("button");
    btn.innerText="Generate Die";
    btn.className=" button1";

    var btn2=document.createElement("button");
    btn2.innerHTML="Roll Dice";
    btn2.className="button2";

    var btn3=document.createElement("button");
    btn3.innerHTML="Sum";
    btn3.className="button3";

   document.body.appendChild(btn);
   document.body.appendChild(btn2);
   document.body.appendChild(btn3);
/*Button Actions*/

   btn.addEventListener('click',function(){
       var dieDiv= document.createElement('div');
       dieDiv.className = 'die';
       document.body.appendChild(dieDiv);
       dieDiv.setAttribute("id", Math.floor((Math.random() * 6) + 1));
       totalDie.push(dieDiv);
       dieDiv.innerText= dieDiv.id;

   })

   btn2.addEventListener("click", function(){
    dieDiv.setAttribute("id", Math.floor((Math.random() * 6) + 1));
    dieDiv.innerText= dieDiv.id;
   })

   


})
