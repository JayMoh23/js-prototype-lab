/*console.log('hello');
var die = function()*/

document.addEventListener('DOMContentLoaded', function(){

    var totalDie = [];
    function Die (){
        this.dieDiv=document.createElement('div');
        this.dieDiv.className='die';
    
    }

    /*Buttons*/

    var newDieBtn=document.createElement("button");
    newDieBtn.innerText="Generate Die";
    newDieBtn.className=" button1";

    var newDieBtn2=document.createElement("button");
    newDieBtn2.innerHTML="Roll Dice";
    newDieBtn2.className="button2";

    var newDieBtn3=document.createElement("button");
    newDieBtn3.innerHTML="Sum";
    newDieBtn3.className="button3";

   document.body.appendChild(newDieBtn);
   document.body.appendChild(newDieBtn2);
   document.body.appendChild(newDieBtn3);
/*Button Actions*/
/*Button 1*/

   newDieBtn.addEventListener('click',function(){
       var dieDiv= document.createElement('div');
       dieDiv.className = 'die';
       document.body.appendChild(dieDiv);
       dieDiv.setAttribute("id", Math.floor((Math.random() * 6) + 1));
       totalDie.push(this.dieDiv);
       dieDiv.innerText= dieDiv.id;
       console.log(totalDie);

   })
/*Button2*/

   newDieBtn2.addEventListener("click", function(){
    this.dieDiv.setAttribute("id", Math.floor((Math.random() * 6) + 1));
    this.dieDiv.innerText=this.dieDiv.id; 
   })

   
/*Button3*/
newDieBtn3.addEventListener("click", function(){
var totalDie = [];
totalDie.push (dieDiv.id);
window.alert("Youre' sum of die is"+ totalDie);

})


})
