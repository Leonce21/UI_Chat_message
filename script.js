var icon = document.getElementById("icon")
icon.onclick = function(){
   document.body.classList.toggle("dark-mode");
   if(document.body.classList.contains("dark-mode")){
      icon.src = "./img/sunny-outline.svg";
   }else{
      icon.src = "./img/moon-outline.svg";
   }
}

