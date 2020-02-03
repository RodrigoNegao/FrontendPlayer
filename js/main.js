/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "224px";
    document.getElementById("main").style.marginLeft = "150px";
    document.getElementById("LinkSideBar").style.transform = "translateX(0px)";
    document.getElementById("LinkSideBar").style.transition = "all 0.5s ease-out";
    document.getElementById("logo").style.transform = "scale(1.4)";
    document.getElementById("logo").style.padding = "27px 10px 10px 10px";
    document.getElementById("logo").style.transform = "translateX(35px)";
    document.getElementById("logo").style.transition = "all 0.5s ease-out";
    // document.getElementById("SVGMenu").style.transform = "translateX(100px)";
    // document.getElementById("LinkSideBar").style.opacity = "1";    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "90px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("LinkSideBar").style.transform = "translateX(-120px)";
    document.getElementById("LinkSideBar").style.transition = "all 0.5s ease-out";
    // document.getElementById("logo").style.transform = "translateX(-100px)";
    document.getElementById("logo").style.transition = "all 0.5s ease-out";
    // document.getElementById("LinkSideBar").style.opacity = "0";
    document.getElementById("logo").style.transform = "scale(0.4)";
    document.getElementById("logo").style.padding = "37px 0 0 19px";
  } 

function mouseover() {
    document.getElementById("GreyAlert").style.color = "black";
    document.getElementById("GreyAlert1").style.color = "black";
    // document.getElementById("GreyAlert").style.transform = "scale(1.1)";
    // document.getElementById("GreyAlert1").style.transform = "scale(1.1)";
  }
function mouseover1() {
    document.getElementById("GreyAlert2").style.color = "black";
    document.getElementById("GreyAlert3").style.color = "black";
}
function mouseover2() {
    document.getElementById("GreyAlert4").style.color = "black";
    document.getElementById("GreyAlert5").style.color = "black";
}

function mouseleave() {
    document.getElementById("GreyAlert").style.color = "#8E8E8E";
    document.getElementById("GreyAlert1").style.color = "#8E8E8E";
    // document.getElementById("GreyAlert").style.transform = "scale(1.0)";
    // document.getElementById("GreyAlert1").style.transform = "scale(1.0)";
}
function mouseleave1() {
    document.getElementById("GreyAlert2").style.color = "#8E8E8E";
    document.getElementById("GreyAlert3").style.color = "#8E8E8E";
}
function mouseleave2() {
    document.getElementById("GreyAlert4").style.color = "#8E8E8E";
    document.getElementById("GreyAlert5").style.color = "#8E8E8E";
}

// Button Shadow
function mouseover3() {
  document.getElementById("GreyAlert6").style.color = "black";
  document.getElementById("GreyAlert7").style.color = "black";
  document.getElementById("border-color1").style.borderLeft = "6px solid";
  document.getElementById("border-color1").style.borderColor = "rgb(0,255,248)";
}
function mouseleave3() {
  document.getElementById("GreyAlert6").style.color = "#8E8E8E";
  document.getElementById("GreyAlert7").style.color = "#8E8E8E";
  document.getElementById("border-color1").style.borderLeft = "0";
}

function mouseover4() {
  document.getElementById("GreyAlert8").style.color = "black";
  document.getElementById("GreyAlert9").style.color = "black";
  document.getElementById("border-color2").style.borderLeft = "6px solid";
  document.getElementById("border-color2").style.borderColor = "rgb(0,255,248)";
}
function mouseleave4() {
  document.getElementById("GreyAlert8").style.color = "#8E8E8E";
  document.getElementById("GreyAlert9").style.color = "#8E8E8E";
  document.getElementById("border-color2").style.borderLeft = "0";
}

function mouseover5() {
  document.getElementById("GreyAlert10").style.color = "black";
  document.getElementById("GreyAlert11").style.color = "black";
  document.getElementById("border-color3").style.borderLeft = "6px solid";
  document.getElementById("border-color3").style.borderColor = "rgb(0,255,248)";
}
function mouseleave5() {
  document.getElementById("GreyAlert10").style.color = "#8E8E8E";
  document.getElementById("GreyAlert11").style.color = "#8E8E8E";
  document.getElementById("border-color3").style.borderLeft = "0";
}


// padding: top | right | bottom | left
