const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const botton=document.getElementById('btn-click')
//const colour=document.querySelector('colour')


botton.addEventListener('click',function(){
   let hexColour='#';
   for(let i=0;i<6;i++){
    
    hexColour += hex[getRandomNumber()];
    console.log(hexColour)
   }
      // colour.textContent=hexColour;
       document.body.style.backgroundColor=hexColour;
});

  function getRandomNumber(){
      return Math.floor(Math.random() * hex.length)
  }
  