/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
];

function userCreate(user) {
  let card = document.createElement('div');
  card.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar">
            <img src="https://fakeimg.pl/150x150" alt="${user.name}" />
          </div>
          <div class="user-details">
            <h3>${user.name}</h3>
            <p class="user-email">${user.email}</p>
          </div>
        </div>
      </div>
      <div class="card-content">
        <p class="user-id">User ID: ${user.id}</p>
      </div>
    </div>
  `
  return card;
}

const cardsContainer = document.querySelector('#userList');
const btn = document.querySelector("#toggleButton")
let btnToggle = false;

btn.onclick = function() {
  if (!btnToggle) {
    users.forEach(user => {
      const card = userCreate(user);
      cardsContainer.appendChild(card);
    });
    btn.innerText = "Hide Users"
  } else {
    while (cardsContainer.hasChildNodes()) {
      cardsContainer.removeChild(cardsContainer.firstChild);
    }
    btn.innerText = "Show Users"
  }
  btnToggle = !btnToggle;
}
