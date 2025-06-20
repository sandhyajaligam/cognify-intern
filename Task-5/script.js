 let users = [];
let currentIndex = 0;

const userCard = document.getElementById('user-card');
const nextBtn = document.getElementById('next-btn');

function displayUser(index) {
  const user = users[index];
  userCard.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" class="avatar" />
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>📧 ${user.email}</p>
    <p>📍 ${user.location.city}, ${user.location.country}</p>
  `;
}

fetch('https://randomuser.me/api/?results=10')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    users = data.results;
    displayUser(currentIndex);
  })
  .catch(error => {
    console.error("Fetch error:", error);
    userCard.innerHTML = `<p class="error">Failed to load user data</p>`;
  });

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % users.length;
  displayUser(currentIndex);
});
