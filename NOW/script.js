function preview_image(imgInput)
{
    var reader = new FileReader();
    reader.onload = function(){
        displayImage = document.getElementById('display_image')
        displayImage.src = reader.result;
    }
    reader.readAsDataURL(imgInput.target.files[0])
}
