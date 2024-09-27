function createProjectCards() {
    fetch('../project.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const projectCards = document.querySelector('.project-cards');
            const row = document.createElement('div');
            row.className = 'row g-4'; // g-4 adds gutters between columns

            data.forEach(project => {
                const col = document.createElement('div');
                col.className = 'col-12 col-md-6 col-lg-4'; // 1 column on small, 2 on medium, 3 on large screens
                
                const card = document.createElement('div');
                card.className = 'card h-100'; // h-100 ensures all cards in a row have the same height
                
                card.innerHTML = `
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-text flex-grow-1">${project.summary}</p>
                        <a href="${project.link}" class="btn btn-primary mt-auto" target="_blank">show more</a>
                    </div>
                `;
                
                col.appendChild(card);
                row.appendChild(col);
            });

            projectCards.appendChild(row);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    createProjectCards();
});