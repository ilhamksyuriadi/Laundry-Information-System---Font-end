let Body = document.getElementById("body");
Body.style.display = "flex";
Body.style.flexDirection = "column";

let Header = document.getElementById("header");
Header.style.display = "flex";
Header.style.position = "fixed";
Header.style.backgroundColor = "white";
Header.style.flexDirection = "column";
Header.style.height = "180px";
Header.style.width = "10000px";
Header.style.marginTop = "-10px";
Header.style.marginLeft = "-10px";
Header.style.boxShadow = "0 2px 8px 0 grey";

let HeaderImage = document.getElementById("header-image");
HeaderImage.style.display = "flex";
HeaderImage.style.width = "200px";

let HeaderButton = document.getElementById("header-button");
HeaderButton.style.backgroundColor = "#039be5";
HeaderButton.style.display = "flex";
HeaderButton.style.marginTop = "-25px";
HeaderButton.style.height = "65px";
HeaderButton.style.paddingLeft = "50px";

let AllHeaderButton = document.getElementsByClassName("all-header-button");
for (let i = 0; i < AllHeaderButton.length; i++) {
  AllHeaderButton[i].style.display = "flex";
  AllHeaderButton[i].style.backgroundColor = "transparent";
  AllHeaderButton[i].style.border = "none";
  AllHeaderButton[i].style.color = "white";
  AllHeaderButton[i].style.cursor = "pointer";
  AllHeaderButton[i].style.fontSize = "20px";
}

function HeaderButtonHover(Button) {
  Button.style.backgroundColor = "white";
  Button.style.color = "#039be5";
}

function HeaderButtonOut(Button) {
  Button.style.backgroundColor = "#039be5";
  Button.style.color = "white";
}

let Body2 = document.getElementById("body-2");
Body2.style.display = "flex";
Body2.style.flexDirection = "row";
//Body2.style.alignItems = "center";
Body2.style.marginTop = "200px";
Body2.style.justifyContent = "space-between";
Body2.style.paddingLeft = "60px";
Body2.style.paddingRight = "40px";

let Contact = document.getElementById("contact");
Contact.style.display = "flex";
Contact.style.flexDirection = "column";
Contact.style.height = "200px";
Contact.style.width = "250px";
Contact.style.backgroundColor = "#039be5";
Contact.style.borderRadius = "20px";
Contact.style.boxShadow = "0 2px 8px 0 grey";
Contact.style.padding = "20px";
Contact.style.color = "white";
Contact.style.fontFamily = "arial";

let Content = document.getElementById("content");
Content.style.display = "flex";
Content.style.flexDirection = "column";
Content.style.alignItems = "center";
//Content.style.backgroundColor = "#f4f4f4";
Content.style.borderRadius = "20px";
//Content.style.boxShadow = "0 2px 8px 0 grey";
Content.style.width = "800px";
Content.style.padding = "20px";

let AboutUsHeader = document.getElementById("about-us-header");
AboutUsHeader.style.fontFamily = "arial";
AboutUsHeader.style.color = "grey";

let AboutUsContent = document.getElementById("about-us-content");
AboutUsContent.style.borderTop = "4px solid #039be5";
AboutUsContent.style.paddingTop = "25px";
AboutUsContent.style.fontFamily = "arial";
AboutUsContent.style.textAlign = "justify";

//form component
//let FormLaundry = document.getElementById("form-laundry");
//FormLaundry.style.backgroundColor = "0000ff";

//for (let i = 0; i < HeaderButton.childNodes.length; i++) {
// if (HeaderButton.childNodes[i].className == "all-header-button") {
//    console.log(HeaderButton.childNodes[i].textContent);
//    HeaderButton.childNodes[i].style.backgroundColor = "ffffff00";
//  }
//}

//HeaderButton.childNodes[1].style.backgroundColor("red");

//console.log(HeaderButton.childNodes[1].textContent);
//console.log(HeaderButton.childNodes[3].textContent);
//console.log(HeaderButton.childNodes[5].textContent);

//let AllHeaderButton = document.getElementsById("all-header-button");
//AllHeaderButton.style.backgroundColor = "white";
