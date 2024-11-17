var servers = {
    pvp: [
        { name: 'nightpvp🌙', category: 'PVP', popular: true, description: '💥 THE #1 PVP SERVER! 💥 <br> Created by: Boltxyz' },
    ],
    roleplay: [
        
    ],
    parkour: [
        
    ],
    survivalhardcore: [
        
    ]
};

function shuffleServers(servers) {
    for (let i = servers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [servers[i], servers[j]] = [servers[j], servers[i]];
    }
}

function renderServers(category) {
    var serversContainer = document.getElementById('servers-container');
    serversContainer.innerHTML = '';

    const categoryData = category === 'all' ? Object.values(servers).flat() : servers[category];

    shuffleServers(categoryData);

    const sortedServers = categoryData.sort((a, b) => b.popular - a.popular);

    sortedServers.forEach(function(server) {
        var serverDiv = document.createElement('div');
        serverDiv.className = 'server-card';
        serverDiv.innerHTML = `
            <h2>${server.name}</h2>
            <p class="server-category">${server.category}</p>
            <p class="server-description">${server.description}</p>
            <span class="badge ${server.popular ? 'popular' : ''}">
                ${server.popular ? 'Popular' : ''}
            </span>
            <button class="play-button" onclick="window.location.href='https://bloxd.io/?lobby=${server.name}&g=worlds'">Play</button>
        `;
        serversContainer.appendChild(serverDiv);
    });
}

function handleCategorySelect() {
    var categorySelect = document.getElementById('category-select');
    var selectedCategory = categorySelect.value;
    renderServers(selectedCategory);
}

renderServers('all');

document.getElementById('category-select').addEventListener('change', handleCategorySelect);
