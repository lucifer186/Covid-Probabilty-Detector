const fever= document.getElementById('fever');
const age= document.getElementById('age');

if(fever.trim().length === ''){
    alert('Please enter fever value')
}
if(age.trim().length === '' || age<110 && age> 0){
    alert('Please enter valid age')
}