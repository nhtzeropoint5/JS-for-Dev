function myFunctions(){

    const imgId =  document.getElementById('bimg');

   if(imgId.src.includes("my.jpg")){
        document.getElementById('bimg').src = "./images/my-an.png";
   }
   else{
        document.getElementById('bimg').src = "./images/my.jpg";
   }

}
//// browser does not store the relative path we denote inside the src tag of the image. so we should never include the whole path inside an image. raather it's best to use only the name of the image


function myFunctions1() {
  const imgId = document.getElementById('bimg');

  if (imgId.src.endsWith("my.jpg")) {
    imgId.src = "./images/my-an.png";
  } else {
    imgId.src = "./images/my.jpg";
  }
}

let isChanged = false;

function myFunctions2() {
  const img = document.getElementById('bimg');

  if (isChanged) {
    img.src = "./images/my.jpg";
  } else {
    img.src = "./images/my-an.png";
  }

  isChanged = !isChanged;
}
