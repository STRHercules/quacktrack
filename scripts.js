document.addEventListener('DOMContentLoaded', function () {
    // Registration form submission
    document.getElementById('registration-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        // Capture form data
        const formData = new FormData(event.target);
        // Simulate form submission
        console.log('Registration form data:', Object.fromEntries(formData));
        alert('Registration form submitted');
    });

    // Connect with Instagram
    document.getElementById('instagram-connect')?.addEventListener('click', function() {
        // Simulate Instagram connection
        alert('Instagram connected');
    });

    // Connect with Discord
    document.getElementById('discord-connect')?.addEventListener('click', function() {
        // Simulate Discord connection
        alert('Discord connected');
    });

    // Register new duck form submission
    document.getElementById('register-duck-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        // Capture form data
        const formData = new FormData(event.target);
        // Generate a QR code for the duck (placeholder functionality)
        const duckName = formData.get('duck-name');
        const qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = `QR Code for ${duckName}`;
        alert('New duck registered');
    });

    // New thread form submission
    document.getElementById('new-thread-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        // Capture form data
        const formData = new FormData(event.target);
        // Simulate thread creation
        console.log('New thread data:', Object.fromEntries(formData));
        alert('New thread created');
    });

    // Upload photo form submission
    document.getElementById('upload-photo-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        // Capture form data
        const formData = new FormData(event.target);
        // Simulate photo upload
        const photoFile = formData.get('photo');
        const caption = formData.get('caption');
        const duckTag = formData.get('duck-tag');
        const gallery = document.querySelector('#gallery .thumbnails');
        const newPhoto = document.createElement('img');
        newPhoto.src = URL.createObjectURL(photoFile);
        newPhoto.alt = caption;
        gallery.appendChild(newPhoto);
        alert('Photo uploaded');
    });

    // Initialize the map with placeholder functionality
    if (document.getElementById('map')) {
        // Replace this with actual map initialization code
        const mapDiv = document.getElementById('map');
        mapDiv.innerHTML = 'Map would be initialized here';
    }

    // Search functionality for ducks
    document.getElementById('duck-search')?.addEventListener('input', function(event) {
        const searchQuery = event.target.value.toLowerCase();
        const duckList = document.getElementById('duck-list');
        const ducks = duckList.getElementsByTagName('li');
        for (let duck of ducks) {
            const duckText = duck.textContent.toLowerCase();
            duck.style.display = duckText.includes(searchQuery) ? '' : 'none';
        }
    });

    // Simulate fetching leaderboard data
    if (document.getElementById('user-leaderboard')) {
        const userLeaderboard = [
            { username: 'User1', quacks: 300 },
            { username: 'User2', quacks: 250 },
            { username: 'User3', quacks: 200 },
        ];

        const userLeaderboardList = document.getElementById('user-leaderboard').getElementsByTagName('ol')[0];
        userLeaderboardList.innerHTML = '';
        userLeaderboard.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.username} - ${user.quacks} Quacks`;
            userLeaderboardList.appendChild(listItem);
        });
    }

    if (document.getElementById('duck-leaderboard')) {
        const duckLeaderboard = [
            { duckName: 'Duck1', quacks: 150 },
            { duckName: 'Duck2', quacks: 120 },
            { duckName: 'Duck3', quacks: 100 },
        ];

        const duckLeaderboardList = document.getElementById('duck-leaderboard').getElementsByTagName('ol')[0];
        duckLeaderboardList.innerHTML = '';
        duckLeaderboard.forEach(duck => {
            const listItem = document.createElement('li');
            listItem.textContent = `${duck.duckName} - ${duck.quacks} Quacks`;
            duckLeaderboardList.appendChild(listItem);
        });
    }
});
