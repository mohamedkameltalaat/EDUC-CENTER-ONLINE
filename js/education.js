let menu_btn =document.querySelector(".fas.fa-bars");
let slide =document.querySelector(".slide");
let close_slide =document.querySelector(".close");
let search=document.querySelector(".d-none");
let form_search = document.querySelector(".form_search");
let content =document.querySelector(".header_content");
let ava_button = document.querySelector(".avatar button");
let text_area =document.getElementById("textarea");
let button_msg =document.getElementById("mesage");
let comment_grand =document.querySelector(".person_comments");

// trigger user button 
document.getElementById("user-btn").onclick=function(){
    document.querySelector(".avatar.r").classList.toggle("show")
}


// trigger search button
search.onclick=function(){
form_search.classList.toggle("active")
}

// trigger toggle-btn

document.querySelector("#toggle-btn").onclick=function(){
 document.body.classList.toggle("dark_mode");
}





// trigger menu button 
// menu_btn.onclick=function(){
//     slide.classList.toggle("active")
//     document.body.classList.add("active")
// // if(window.innerWidth > 1199){
// //     document.body.classList.remove("active")
// // }else{
// //      document.body.classList.remove("active")
// // }
// }

close_slide.onclick=function(){
    slide.classList.remove("active")
}

// window.onload=function(){
//     if(window.innerWidth >992){
//        document.body.classList.add("active");  
//     }
// }
// window.onload=function(){
//     if(window.innerWidth>1199){
//         slide.classList.add("active")
//     }
//      if(window.innerWidth<1199){
//         slide.classList.remove("active")
//     }
//     if(window.innerWidth>1199){
//     document.body.classList.toggle("active")
// }else{
//      document.body.classList.remove("active")
// }
// }
// window.onresize=function(){
//     if(window.innerWidth>1199){
//         slide.classList.add("active")    
//     }
//       if(window.innerWidth<1199){
//         slide.classList.remove("active")
//     }
//     if(window.innerWidth>1199){
//     document.body.classList.toggle("active")
// }else{
//      document.body.classList.remove("active")
// }
// }
window.onresize=function(){
  if(window.innerWidth<991){
   document.body.classList.remove("active")
   slide.classList.remove("active");
   menu_btn.onclick=function(){
    slide.classList.toggle("active")
    document.body.classList.remove("active")
} 
}

if(window.innerWidth>992){
    slide.classList.add("active");
    document.body.classList.remove("active")
} 
}

window.onload=function(){
    slide.classList.remove("active");
    document.body.classList.remove("active")
       menu_btn.onclick=function(){
    slide.classList.toggle("active")
    document.body.classList.remove("active")
} 
  
if(window.innerWidth>992){
    slide.classList.add("active");
    document.body.classList.add("active")
}
}

   



    
// trigger comment

button_msg.onclick=function(e){
    e.prventDefault;
    console.log(text_area.value);
let names =["Ahmed","Ali","Kahalid","Mostafa"];
let images=["imgs/pic-1.jpg","imgs/pic-2.jpg","imgs/pic-3.jpg","imgs/pic-4.jpg"];
let comment=document.createElement("div");
let paragraph =document.createElement("p");
paragraph.appendChild(document.createTextNode(text_area.value));
 comment.className="comment_per";
 let parent = document.createElement("div");
 parent.className="parent";
 let child_parent =document.createElement("div")
// start get date
let dat =new Date();
console.log(dat.toDateString())
let span_content =document.createElement("span");
span_content.innerHTML=dat.toDateString();
//end get data
let button_remove =document.createElement("button");
button_remove.className="remove";
button_remove.innerHTML="Remove"   
comment.appendChild(button_remove);

 
 let image=document.createElement("img");
let random =Math.floor(Math.random()*images.length);
 for(let i=0;i<images.length;i++){
     image.src=images[random];
}
 let heads=document.createElement("h3");
 let random_names=Math.floor(Math.random()*names.length);
 for (let ee=0;ee<names.length;ee++){
  
     heads.innerHTML=names[random];
    }



parent.appendChild(image);
parent.appendChild(child_parent);

child_parent.appendChild(heads);
child_parent.appendChild(span_content);
comment.appendChild(parent);
comment.appendChild(paragraph);

 comment_grand.appendChild(comment);
 text_area.value=""

// trigger button_remove 
button_remove.addEventListener("click",function(){
    this.parentElement.remove()
    })
}


