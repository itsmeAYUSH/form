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
      }
      localStorage.setItem(user.name,JSON.stringify(user));
      addUser(user);
}


function addUser(user1){
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user1.name} - ${user1.email} </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

