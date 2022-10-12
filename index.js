//click-event
var btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    document.querySelector('.btn').style.color = "white";
    document.querySelector('.btn').style.background = "black";

});

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;


    let user = {
        name: name,
        email: email,
      };

    localStorage.setItem('user',JSON.stringify(user));
    
}
