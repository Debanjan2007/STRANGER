let pic = document.querySelector("#capture");
let container = document.querySelector(".conntainer");
let pic_pop = document.querySelector(".pic-popup");
let imgInput = document.querySelector(".img-file");
let img = document.querySelector("#img");
let cross = document.querySelector(".cross");
let main = document.querySelector(".main");
let imgSrc;
let preview = document.querySelector(".preview");
let previewImg = document.querySelector("#preImg");
let crossPre = document.querySelector(".crossForPre");
let user_name = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".pass");
let alert = document.querySelector(".alert_box");
let alert_cros = document.querySelector("#alert_cross");
let email2, password2, user_name2;
let loader = document.querySelector(".loader");

// load animation 
// window.addEventListener("load", () => {
//   loader.style.display = "none";
//   main.style.display = "block";
//   console.log("Page loaded");
// })

// controlling the width of the create account button
const referenceDiv = document.querySelector('.form-control');
const createBtn = document.querySelector('.btn');

const referenceWidth = window.getComputedStyle(referenceDiv).width;
createBtn.style.width = referenceWidth;

// clicking on create button
createBtn.addEventListener("click", () => {
  // Use .value to check if the input fields are empty
  if(email.value === "" || password.value === "" || user_name.value === ""){
    alert.style.opacity = "1";
    alert.style.visibility = "visible";
    alert.classList.add("animate");
    main.classList.add("freeze");
  } else {
    // Assigning input values to variables
    email2 = email.value;
    password2 = password.value;
    user_name2 = user_name.value;
    console.log("Button clicked!");
    console.log(`Email ${email.value} , PassWord ${password.value} , UserName ${user_name.value}`);
    console.log(`Email: ${email2}, Password: ${password2}, Username: ${user_name2}`);
    email = "";
    password = "";
    user_name = "";
  }
});


export {email2 as email, password2 as password , user_name2 as user_name};
// closs the pop up tab
cross.addEventListener("click", () => {
  pic_pop.classList.remove("active");
  pic_pop.classList.add("inactive");
  container.classList.remove("blur");
});

// profile picture pop up
const profilePicPopUp = () => {
  container.classList.add("blur");
  pic_pop.classList.remove("inactive");
  pic_pop.classList.add("active");
};

// add image to image pop up for preview
imgInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files[0]) {
    let imgsrc = URL.createObjectURL(e.target.files[0]);
    replaceSVGWithImg(imgsrc);
    img.src = imgsrc;
    img.style.borderRadius = "50%";
    img.style.objectFit = "contain";
  }
});
// profile picture display
const profilePicView = () => {
  if (!img) {
    return;
  } else {
    pic_pop.classList.add("blur");
    previewImg.src = img.src;
    console.log("Image is clicked ", img.src);
    previewImg.style.height = "100%";
    previewImg.style.width = "100%";
    previewImg.style.objectFit = "cover";
    preview.style.visibility = "visible";
    preview.style.opacity = "1";
    // cut pre
    crossPre.style.visibility = "visible";
    crossPre.style.opacity = "1";
  }
};

// cut the profile picture preview
crossPre.addEventListener("click", () => {
  crossPre.style.visibility = "hidden";
  crossPre.style.opacity = "0";
  preview.style.visibility = "hidden";
  preview.style.opacity = "0";
  pic_pop.classList.remove("blur");
});

// replace the svg with image
const replaceSVGWithImg = (imgSrc) => {
  while (pic.firstChild) {
    pic.firstChild.remove();
  }
  let newImg = document.createElement("img");
  newImg.src = imgSrc;
  newImg.style.width = "100%";
  newImg.style.height = "100%";
  newImg.style.borderRadius = "50%";
  newImg.style.objectFit = "contain";
  pic.appendChild(newImg);
  pic.style.border = "1px dashed #fe1d6ce4";
};

// close the alert tab
const Alert_Cross = () => {
  alert.classList.remove("animate");
  alert.classList.add("animate-hide");
  main.classList.remove("freeze");
  alert.style.opacity = "0";
  alert.style.visibility = "hidden";
}
//  event listener for everything
img.addEventListener("click", profilePicView);
pic.addEventListener("click", profilePicPopUp);
alert_cros.addEventListener("click",Alert_Cross);