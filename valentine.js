var imag=document.querySelector('img')
var tex=document.querySelector('#txt')
var ybtn=document.querySelector('#yes')
var nbtn=document.querySelector('#no')

ybtn.addEventListener('click',()=>{
    tex.innerHTML="I Love you too 😍";
})

image_array=['birthday.png','yes.png','sad.png','love.png']

nbtn.addEventListener('mouseover',()=>{
    var h=Math.floor(Math.random()*500);
    var w=Math.floor(Math.random()*500);
    nbtn.style.top=h+"px";
    nbtn.style.left=w+"px";

    random_index=Math.floor(Math.random()* image_array.length);
    selected_img=image_array[random_index];
    imag.src=selected_img;

})