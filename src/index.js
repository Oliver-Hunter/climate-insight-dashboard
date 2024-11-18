// Fetch data from the backend
fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(data => {
        const root = document.getElementById('root');
        const message = document.createElement('p');
        message.textContent = data.message;
        root.appendChild(message);
    })
    .catch(error => console.error('Error fetching data:', error));
