// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user’s name
            userList.appendChild(listItem); // Append the <li> to userList
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        // Error Handling
        console.error('There was a problem with the fetch operation:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
        dataContainer.style.color = '#dc3545'; // Set error message color to red
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);