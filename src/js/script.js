function createProjectCards() {
    fetch('./project.json')
        .then(response => response.json())
        .then(data => {
            const projectCards = document.querySelector('.project-cards');
            const row = document.createElement('div');
            row.className = 'row pb-2';
            // データを逆順に表示
            data.reverse().forEach(project => {
                const col = document.createElement('div');
                col.className = 'col-12 col-md-6 col-lg-4 p-2';
                
                const card = document.createElement('div');
                card.className = 'card h-100';
                
                card.innerHTML = `
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-text flex-grow-1">${project.summary}</p>
                        <a href="${project.link}" class="btn btn-outline-primary mt-auto" target="_blank">show more</a>
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