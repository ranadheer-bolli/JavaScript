var count1=localStorage.getItem('localScore');
var count2= sessionStorage.getItem('sessionScore');
console.log(count1+' '+count2)
document.getElementById('local').innerHTML= count1 === null ? 0 : count1; 
document.getElementById('session').innerHTML= count2 === null ? 0 :count2;
function localStorageCount(){
    let count = localStorage.getItem('localScore');
    if(count === null ) {
        count = 0;
    }
      localStorage.setItem('localScore',Number(count)+1);
      document.getElementById('local').innerHTML=localStorage.getItem('localScore');
}

sessionStorageCount = () => {
    let count = sessionStorage.getItem('sessionScore');
    if(count === null ) {
       count = 0;
    }
      sessionStorage.setItem('sessionScore',Number(count)+1);
      document.getElementById('session').innerHTML=sessionStorage.getItem('sessionScore');
}