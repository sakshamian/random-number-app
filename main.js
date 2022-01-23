let submitBtn = document.querySelector('.giveNumber');

submitBtn.addEventListener('click',()=>{
   let smallNum = parseInt(document.querySelector('.smallerNumber').value);
   let largeNum = parseInt(document.querySelector('.largerNumber').value); 
   
   if(smallNum >= largeNum){
    alert('Please enter correct range');
   }
   else{
       let ans = getRandomNumber(smallNum,largeNum);
       console.log(ans);
       document.querySelector('ans').innerHTML = ans;
   }

});

function getRandomNumber(l,r){
    return (l + Math.floor(Math.random() * (r-l)));
}