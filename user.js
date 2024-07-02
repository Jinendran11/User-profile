document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const profiles = data.results;

        const profileContainer = document.getElementById('profile-container');
        const userTableBody = document.querySelector('#user-table tbody');

        profileContainer.innerHTML = '';
        userTableBody.innerHTML = '';

        profiles.forEach(user => {
            const profileCard = document.createElement('div');
            profileCard.className = 'profile-card';
            profileCard.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;
            profileContainer.appendChild(profileCard);

            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${user.name.first} ${user.name.last}</td>
                <td>${user.email}</td>
            `;
            userTableBody.appendChild(tableRow);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Initial fetch to populate with users
fetchUsers();