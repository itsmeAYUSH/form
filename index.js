//////////////////////////////BUTTON CLICK//////////////////////////////

var btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    document.querySelector('.btn').style.color = "white";
    document.querySelector('.btn').style.background = "black";
});


//////////////////////////////DOM//////////////////////////////

window.addEventListener("DOMContentLoaded", () => {
    // const localStorageObj = localStorage;
    // const localstoragekeys  = Object.keys(localStorageObj)

    // for(var i =0; i< localstoragekeys.length; i++){
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     addUser(userDetailsObj)
    // }
    axios.get("https://crudcrud.com/api/621c587c0e7f45f1bf78a8ff67debe51/appointmentDate/")
    .then((response)=>{
        for(var i=0 ; i<response.data.length ; i++){
            addUser(response.data[i])
        }
    })
})
//////////////////////////////POST REQUEST//////////////////////////////

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    let obj = {
        name,
        email,
      }
      axios.post("https://crudcrud.com/api/621c587c0e7f45f1bf78a8ff67debe51/appointmentDate/",obj)
      .then((response)=>{
        addUser(response.data)
        //   console.log(response.data._id)
      })
      .catch((err)=>{
        const er = document.getElementById('error');
        er.innerHTML = 'Something Went Wrong';
          console.log(err);
      })
    //   localStorage.setItem(obj.email,JSON.stringify(obj));
    //   addUser(obj);
}

//////////////////////////////DISPLAY USER TO SCREEN //////////////////////////////

function addUser(user){
    if(localStorage.getItem(user.email)!== null){
        removeUser(user.email);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name}- ${user.email}
    <button class="editbtn" onCLick=editUser('${user.name}','${user.email}')>Edit</button>
    <button class="deletebtn" onCLick=deleteUser('${user._id}')>X</button>
     
    </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

//////////////////////////////DELETE USER FROM SERVER //////////////////////////////

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/621c587c0e7f45f1bf78a8ff67debe51/appointmentDate/${userId}`)
    .then((response)=>{
    removeUser(userId)
    })
    .catch((err) => {
        console.log(err)
    })
}

//////////////////////////////DELETE USER FROM SCREEN //////////////////////////////

function removeUser(userId){
    const parentNode = document.getElementById('listOfUsers');
    const deletingChildNode = document.getElementById(userId);
    if(deletingChildNode){
        parentNode.removeChild(deletingChildNode);
    }
}  

//////////////////////////////EDIT USER //////////////////////////////

function editUser(name,emailId){
    document.getElementById('username').value = name;
    document.getElementById('emailId').value = emailId;
    deleteUser(emailId);

}
