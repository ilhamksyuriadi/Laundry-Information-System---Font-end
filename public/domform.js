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
Body2.style.paddingLeft = "260px";
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

//form component
let FormLaundry = document.getElementById("form-laundry");
FormLaundry.style.display = "flex";
FormLaundry.style.alignItems = "center";
FormLaundry.style.flexDirection = "column";
FormLaundry.style.backgroundColor = "white";
FormLaundry.style.boxShadow = "0px 2px 8px 0px grey";
FormLaundry.style.borderRadius = "20px";
FormLaundry.style.padding = "20px";
FormLaundry.style.width = "430px";
FormLaundry.style.backgroundColor = "#f4f4f4";

let FormHeader = document.getElementById("form-header");
FormHeader.style.fontFamily = "arial";
FormHeader.style.color = "grey";

let Form = document.getElementById("form");
Form.style.borderTop = "4px solid #039be5";
Form.style.display = "flex";
Form.style.flexDirection = "column";
//Form.style.alignItems = "center";

let AllForm = document.getElementsByClassName("all-form");
for (let i = 0; i < AllForm.length; i++) {
  AllForm[i].style.width = "400px";
  AllForm[i].style.height = "20px";
  AllForm[i].style.border = "1px solid #039be5";
  AllForm[i].style.borderRadius = "5px";
  AllForm[i].style.marginTop = "10px";
}

let AllLabel = document.getElementsByClassName("all-label");
for (let i = 0; i < AllLabel.length; i++) {
  AllLabel[i].style.marginTop = "10px";
  AllLabel[i].style.fontFamily = "arial";
  AllLabel[i].style.color = "grey";
}

let FormButton = document.getElementById("form-button");
FormButton.style.marginTop = "20px";
FormButton.style.height = "30px";
FormButton.style.border = "none";
FormButton.style.borderRadius = "20px";
FormButton.style.color = "#039be5";
FormButton.style.backgroundColor = "white";
FormButton.style.cursor = "pointer";
FormButton.style.fontWeight = "bold";
FormButton.style.fontSize = "20px";

function SubmitButtonHover(Button) {
  Button.style.backgroundColor = "#039be5";
  Button.style.color = "white";
}

function SubmitButtonOut(Button) {
  Button.style.backgroundColor = "#f4f4f4";
  Button.style.color = "#039be5";
}

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
