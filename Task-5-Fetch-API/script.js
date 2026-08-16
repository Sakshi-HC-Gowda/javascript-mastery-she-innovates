// ============================================
// script.js
// Async JavaScript and Fetch API
// ============================================


const loadUsersBtn =
    document.getElementById("loadUsersBtn");

const usersContainer =
    document.getElementById("usersContainer");

const status =
    document.getElementById("status");


// ============================================
// Fetch Users
// ============================================

async function fetchUsers() {

    status.textContent = "Loading users...";

    usersContainer.innerHTML = "";


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check if request was successful

        if (!response.ok) {

            throw new Error(
                "Failed to fetch user data"
            );

        }


        // Convert response into JSON

        const users = await response.json();


        displayUsers(users);

        status.textContent =
            "Users loaded successfully!";

    }

    catch (error) {

        status.textContent =
            "Error: " + error.message;

    }

}


// ============================================
// Display Users
// ============================================

function displayUsers(users) {

    users.forEach(function(user) {

        const card =
            document.createElement("div");

        card.classList.add("user-card");


        card.innerHTML = `
            <h2>${user.name}</h2>

            <p>
                <strong>Username:</strong>
                ${user.username}
            </p>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${user.phone}
            </p>

            <p>
                <strong>City:</strong>
                ${user.address.city}
            </p>
        `;


        usersContainer.appendChild(card);

    });

}


// ============================================
// Button Event
// ============================================

loadUsersBtn.addEventListener(
    "click",
    fetchUsers
);