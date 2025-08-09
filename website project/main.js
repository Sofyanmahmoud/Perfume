let star= document.getElementById("stars")
let moon= document.getElementById("moon")
let mountains1=document.getElementById("mountains1")
let mountains2=document.getElementById("mountains2")
let river= document.getElementById("river")
let perfume= document.getElementById("perfume")
let perfume1=document.querySelector(".perfume1")
window.onscroll=function(){
    let value= scrollY;
    star.style.left=value + "px"
    moon.style.top=value * 3 + "px"
    mountains1.style.top=value * 2 + "px"
    mountains2.style.top=value * 1.5 + "px"
    river.style.top=value + "px"
    perfume.style.top=value + "px"
    if(scrollY>=50){
       perfume.style.display="none" 
       mountains1.style.display="none" 
       mountains2.style.display="none" 
       river.style.display="none" 
       moon.style.display="none" 
    }else{
        perfume.style.display="block" 
       mountains1.style.display="block" 
       mountains2.style.display="block" 
       river.style.display="block"
       moon.style.display="block"
    }
    if (scrollY>=50){
        document.querySelector(".main").style.background="linear-gradient(#376281,#10001f)"
    }else{
 document.querySelector(".main").style.background="linear-gradient(#200016,#10001f)"
    }
}
