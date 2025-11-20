function inpp(){
    document.getElementById("file").click()
    document.getElementById("file").addEventListener("change", getImage);
}
function getImage(event) {
    var file = event.target.files[0];  // user selected image
    var reader = new FileReader();
    reader.onload = function() {
        var base64Image = reader.result;   // this is the base64 image
        console.log(base64Image);
        document.getElementById("upld").innerHTML+=`<div>
        <button class="storyimgbtn" onclick="open()"><img class="storyimg" src="${base64Image}"></button>
        </div>
        `
    };
    reader.readAsDataURL(file);
}
function open(){
    
}