const slidePage= document.querySelector('.slidepage');
const firstNextBtn=document.querySelector('.next-0');

const firstPrevBtn=document.querySelector('.prev-1');
const secNextBtn=document.querySelector('.next-1');
const secPrevBtn=document.querySelector('.prev-2');
const thirdNextBtn=document.querySelector('.next-2');
const thirdPrevBtn=document.querySelector('.prev-3');
const submitBtn=document.querySelector('.submit');
const progressText=document.querySelectorAll('.step p');
const progressCheck=document.querySelectorAll('.step .check');
const bullet=document.querySelectorAll('.step .bullet');
let max=4;
let current=1;

firstNextBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-25%";
   bullet[current-1].classList.add('active');
   progressCheck[current-1].classList.add('active');
   progressText[current-1].classList.add('active');

   current+=1;
});
secNextBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-50%";
   bullet[current-1].classList.add('active');
   progressCheck[current-1].classList.add('active');
   progressText[current-1].classList.add('active');

   current+=1;
});
thirdNextBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-75%";
   bullet[current-1].classList.add('active');
   progressCheck[current-1].classList.add('active');
   progressText[current-1].classList.add('active');

   current+=1;
});
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-75%";
   bullet[current-1].classList.add('active');
   progressCheck[current-1].classList.add('active');
   progressText[current-1].classList.add('active');
   current+=1;
   setTimeout(()=>{
    alert('Success');
    location.reload();
   },800);
});
firstPrevBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="0%";
   bullet[current-2].classList.remove('active');
   progressCheck[current-2].classList.remove('active');
   progressText[current-2].classList.remove('active');

   current-=1;
});
secPrevBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-25%";
   bullet[current-2].classList.remove('active');
   progressCheck[current-2].classList.remove('active');
   progressText[current-2].classList.remove('active');
   current-=1;
});
thirdPrevBtn.addEventListener('click',function(e){
    e.preventDefault();
   slidePage.style.marginLeft="-50%";
   bullet[current-2].classList.remove('active');
   progressCheck[current-2].classList.remove('active');
   progressText[current-2].classList.remove('active');
   current-=1;
});