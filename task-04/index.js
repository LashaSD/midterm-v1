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
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 6,
    name: "Jessica Garcia",
    email: "jessica@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 7,
    name: "Daniel Rodriguez",
    email: "daniel@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 8,
    name: "Ashley Martinez",
    email: "ashley@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    email: "kevin@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 10,
    name: "Brittany Thomas",
    email: "brittany@example.com",
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

const input = document.querySelector("#search");
const cardsContainer = document.querySelector('#userList');

input.oninput = () => {
  while (cardsContainer.hasChildNodes()) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  const query = input.value;
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().trim().includes(query.toLowerCase().trim())
  })

  filteredUsers.forEach(user => {
    const card = userCreate(user);
    cardsContainer.appendChild(card);
  });
}

document.body.onload = function() {
  users.forEach(user => {
    const card = userCreate(user);
    cardsContainer.appendChild(card);
  });
}
