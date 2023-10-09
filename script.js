var icon = document.getElementById("icon")
icon.onclick = function(){
   document.body.classList.toggle("dark-mode");
   if(document.body.classList.contains("dark-mode")){
      icon.src = "./img/sunny-outline.svg";
   }else{
      icon.src = "./img/moon-outline.svg";
   }
}

$(document).ready(function() {
   // Initialize emojioneArea on the input field
   $("#emoji-input").emojioneArea({
       pickerPosition: "top", // Position the emoji picker above the input field
       events: {
           // Add a click event listener to the emoji picker
           click: function (picker, emoji) {
               // Insert the selected emoji into the input field
               $("#emoji-input").val($("#emoji-input").val() + emoji.shortname);
           }
       }
   });
});
