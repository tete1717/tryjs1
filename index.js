const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

/* データ取得　*/
async function getUsers (){
  const res =await fetch("https://jsonplaceholder.typicode.com/users")
  const users =await res.json();
  return users;
}

/* リスト作成 */
function addList (user){
  const list = document.createElement("li");
  list.innerText= user.name ;
  lists.appendChild(list);
};

/* リスト追加 */
async function loadUsers () {
  const users =await getUsers();
  users.forEach(addList);
};

/* イベント */
window.addEventListener('load', loadUsers);
button.addEventListener("click",loadUsers);
