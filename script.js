function preview_image(imgInput)
{
    var reader = new FileReader();
    reader.onload = function(){
        displayImage = document.getElementById('display_image')
        displayImage.src = reader.result;
    }
    reader.readAsDataURL(imgInput.target.files[0])
}

function displaySignIn(content)
{
    var i, displayContent;
    displayContent = document.getElementsByClassName("sign")
    for (i = 0; i < displayContent.length; i++)
    {
        displayContent[i].style.display = "none";
    
    }
    document.getElementById(content).style.display = "block";
}

function displaySignUp(content)
{
    var i, displayContent;
    
    displayContent = document.getElementsByClassName("sign")
    for (i = 0; i < displayContent.length; i++)
    {
        displayContent[i].style.display = "none";
       
    }
    document.getElementById(content).style.display = "block";
}

const app = Vue.createApp({
    template: "sign In"
})
app.mount('#sign_in')