// let email = document.getElementById('email');
// let getstart = document.getElementById('getstart');
// let emailValue
// getstart.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(email.value != ''){
//         emailValue = email.value;
//         window.location.href = 'password.html'
//     }
//     else{
//         alert('Please Enter Email')
//     }
// })        
let uname = document.getElementById('uname');
let pass =document.getElementById('Password')
let checkBox = document.getElementById('Agree');
let submit = document.getElementById('submit');
        

submit.addEventListener('click',(e)=>{
e.preventDefault()
if(uname.value != '' && pass.value != '' && checkBox.checked == true)
 {
    if(uservalid()) {
          window.location.href='home.html'
              }
          else{
              alert('username password wrong')
              }
  }
    else{
          alert('fill all fields')
        }
     })
function uservalid() {
let existData = JSON.parse(localStorage.getItem('UserData'))
let valid=false;
existData.forEach(e => {
           if(e.uname==uname.value && e.password==pass.value){
           valid=true;
                                              
            }
        });
                
        return valid;

            
    }

 