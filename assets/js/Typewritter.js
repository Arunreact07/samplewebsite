var quoteArray = "Web Designer!";
var textPosition = 0; 
var textPosition1 = quoteArray.length;
var speed = 500;
typewriter = () => {
  document.querySelector("#type").innerHTML = quoteArray.substring(0, textPosition) + '<span id="plink">&#10072;</span>';
if(textPosition!= quoteArray.length){
  if(textPosition++ != quoteArray.length){
    setTimeout(typewriter, speed);
  }
}
else{
  typewriter1()
}

    
}
function typewriter1(){
    document.querySelector("#type").innerHTML = quoteArray.substring(0, textPosition) + '<span id="plink">&#10072;</span>';
if(textPosition!= 0){
if(--textPosition != quoteArray.length)
  setTimeout(typewriter1, speed);
}

else{
    typewriter()
}
}
window.addEventListener("load", typewriter)



window.onscroll=()=> liop();
    function liop(){
        if(document.documentElement.scrollTop>80){
            document.querySelector("#navbar").classList.add("nav-sticky");
        }
        else{
            document.querySelector("#navbar").classList.remove("nav-sticky");
        }
    
    }


/**color-text */
var colors = ["black","blue", "yellow", "red", "lightgreen", "orange"]
var currentColor = 0
var lis = document.querySelectorAll("#text-color")
function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}
setInterval(changeColor, 1500)
/**color-text */


