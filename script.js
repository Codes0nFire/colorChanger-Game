var buttons = document.querySelectorAll(".colorbutton");
var body=document.querySelector("body");




buttons.forEach(function(button){
  button.addEventListener("click",()=>{
    var bgColor= button.id;
       

    body.style.backgroundColor=bgColor;
    
  

    
    
  })


  button.addEventListener("mouseenter",()=>{
    button.style.border="5px solid white";
  })

  button.addEventListener("mouseleave",()=>{
    button.style.border="none";
  })

})