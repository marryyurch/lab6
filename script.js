function getRandomUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            let usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = '';

            users.forEach(user => {
                let userCard = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User picture">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p><strong>Cell:</strong> ${user.cell}</p>
                        <p><strong>City:</strong> ${user.location.city}</p>
                        <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                    </div>
                `;
                usersContainer.innerHTML += userCard;
            });
        })
        .catch(error => console.error('Error:', error));
}
