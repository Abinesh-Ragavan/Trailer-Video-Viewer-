const btnEl =document.querySelector(".btn")
const closeiconEL=document.querySelector(".close-icon")
const tailercontainerEL=document.querySelector(".tailer-container");
const videoEl =document.querySelector("video");
btnEl.addEventListener("click",()=>{
    tailercontainerEL.classList.remove("active");
})

closeiconEL.addEventListener("click",()=>{
    tailercontainerEL.classList.add("active");
    videoEl.pause();
    videoEl.currentTime =0;
});

closeiconEL