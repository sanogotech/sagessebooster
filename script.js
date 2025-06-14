// Data structure for wisdoms
const wisdoms = {
    categories: [
        { id: 1, name: "Communication", icon: "fa-comments", color: "primary" },
        { id: 2, name: "Décision", icon: "fa-chess", color: "success" },
        { id: 3, name: "Leadership", icon: "fa-users", color: "warning" },
        { id: 4, name: "Gestion du Temps", icon: "fa-clock", color: "info" },
        { id: 5, name: "Résolution de Problèmes", icon: "fa-puzzle-piece", color: "danger" },
        { id: 6, name: "Intelligence Émotionnelle", icon: "fa-heart", color: "purple" },
        { id: 7, name: "Stratégie", icon: "fa-chess-board", color: "dark" },
        { id: 8, name: "Apprentissage", icon: "fa-graduation-cap", color: "primary" },
        { id: 9, name: "Relations", icon: "fa-handshake", color: "success" },
        { id: 10, name: "Éthique", icon: "fa-balance-scale", color: "warning" },
        { id: 11, name: "Adaptabilité", icon: "fa-sync-alt", color: "info" },
        { id: 12, name: "Bien-être", icon: "fa-spa", color: "danger" }
    ],
    items: [
        {
            id: 1,
            categoryId: 1,
            title: "Savoir quand parler",
            content: "La connaissance c'est savoir quoi dire, la sagesse c'est savoir quand le dire.",
            example: "En réunion, attendre que tous aient exprimé leur point de vue avant de donner le sien.",
            application: "Pratiquez le compte à 5 avant de répondre dans une conversation importante.",
            author: "Proverbe ancien",
            points: 10,
            viewed: false,
            mastered: false,
            lastViewed: null
        },
        {
            id: 2,
            categoryId: 2,
            title: "Éviter les problèmes",
            content: "L'intelligent sait résoudre les problèmes, le sage sait les éviter.",
            example: "Un manager qui anticipe les conflits d'équipe en clarifiant les rôles dès le début.",
            application: "Avant de lancer un projet, passez 20% du temps à identifier les risques potentiels.",
            author: "Lao Tzu",
            points: 15,
            viewed: false,
            mastered: false,
            lastViewed: null
        },
        {
            id: 3,
            categoryId: 3,
            title: "Servir pour diriger",
            content: "Le meilleur leader est celui dont les gens à peine remarquent l'existence.",
            example: "Un CEO qui met en avant les réalisations de son équipe plutôt que les siennes.",
            application: "Posez-vous chaque jour la question : comment puis-je aider mon équipe à réussir ?",
            author: "Lao Tzu",
            points: 20,
            viewed: false,
            mastered: false,
            lastViewed: null
        },
        // Add 147 more wisdoms following the same structure
        // ...
    ],
    quizzes: [
        {
            wisdomId: 1,
            questions: [
                {
                    question: "Dans quelle situation est-il préférable de se taire ?",
                    options: [
                        "Quand vous êtes en colère",
                        "Quand vous n'avez pas tous les faits",
                        "Quand cela pourrait blesser inutilement",
                        "Toutes ces réponses"
                    ],
                    answer: 3,
                    explanation: "Le silence est souvent la meilleure option dans ces situations pour éviter des conséquences négatives."
                },
                {
                    question: "Quelle technique peut aider à pratiquer le bon timing dans la communication ?",
                    options: [
                        "Parler immédiatement pour ne pas oublier",
                        "Compter mentalement jusqu'à 5 avant de répondre",
                        "Laisser toujours les autres parler en premier",
                        "Éviter les sujets sensibles"
                    ],
                    answer: 1,
                    explanation: "Prendre quelques secondes avant de répondre permet de mieux choisir ses mots et leur timing."
                }
                // Add more questions for this wisdom
            ]
        },
        // Add quizzes for other wisdoms
    ],
    simulations: [
        {
            wisdomId: 2,
            title: "Anticiper les problèmes dans un projet",
            scenario: "Vous êtes chef de projet et votre équipe montre des signes de tension. Deux membres s'opposent régulièrement lors des réunions.",
            steps: [
                {
                    description: "Comment réagissez-vous immédiatement ?",
                    options: [
                        "Organiser une réunion de médiation entre les deux parties",
                        "Attendre que la situation se résolve d'elle-même",
                        "Redéfinir clairement les rôles et responsabilités de chacun",
                        "Changer la composition de l'équipe"
                    ],
                    bestOption: 2,
                    feedback: "Redéfinir les rôles élimine souvent les conflits de territoire à la source.",
                    points: 10
                },
                {
                    description: "Quelle mesure préventive mettez-vous en place ?",
                    options: [
                        "Une charte de collaboration pour l'équipe",
                        "Des réunions individuelles hebdomadaires",
                        "Un système de rotation des rôles",
                        "Toutes ces options"
                    ],
                    bestOption: 3,
                    feedback: "Combiner ces approches crée un environnement qui prévient les conflits.",
                    points: 15
                }
                // More steps can be added
            ]
        }
        // Add more simulations
    ],
    badges: [
        { id: 1, name: "Apprenti Sage", icon: "fa-seedling", color: "success", condition: "Compléter 5 sagesses" },
        { id: 2, name: "Communicateur", icon: "fa-comments", color: "primary", condition: "Maîtriser 10 sagesses de communication" },
        { id: 3, name: "Stratège", icon: "fa-chess", color: "dark", condition: "Compléter toutes les sagesses de stratégie" },
        { id: 4, name: "Maître Sage", icon: "fa-crown", color: "warning", condition: "Compléter 100 sagesses" },
        { id: 5, name: "Quiz Master", icon: "fa-trophy", color: "danger", condition: "Réussir 20 quiz parfaits" }
    ]
};

// User state
const user = {
    points: 0,
    completedWisdoms: [],
    passedQuizzes: [],
    completedSimulations: [],
    earnedBadges: [],
    lastActivity: new Date()
};

// Quiz state
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;

// Simulation state
let currentSimulation = null;
let currentSimulationStep = 0;
let simulationScore = 0;

// Pagination
let currentPage = 1;
const itemsPerPage = 9;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initDashboard();
    
    // Set up event listeners
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('simulation-next').addEventListener('click', nextSimulationStep);
    document.getElementById('start-journey').addEventListener('click', startJourney);
    document.getElementById('search-button').addEventListener('click', searchWisdoms);
    document.getElementById('search-wisdom').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchWisdoms();
    });
    
    // Sort buttons
    document.querySelectorAll('[data-sort]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('[data-sort]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            sortWisdoms(this.dataset.sort);
        });
    });
    
    // Load user data from localStorage
    loadUserData();
    
    // Update UI with user data
    updateUserProgress();
});

// Initialize the dashboard
function initDashboard() {
    // Load categories in sidebar
    loadCategories();
    
    // Load wisdom of the day
    loadWisdomOfTheDay();
    
    // Load wisdom cards
    loadWisdomCards();
    
    // Set up pagination
    setupPagination();
}

// Load user data from localStorage
function loadUserData() {
    const savedUser = localStorage.getItem('sagesseUser');
    if (savedUser) {
        Object.assign(user, JSON.parse(savedUser));
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('sagesseUser', JSON.stringify(user));
}

// Update user progress UI
function updateUserProgress() {
    // Update points
    document.getElementById('user-points').textContent = `${user.points} pts`;
    document.getElementById('points-display').textContent = user.points;
    
    // Calculate completion percentage
    const completedCount = user.completedWisdoms.length;
    const totalCount = wisdoms.items.length;
    const completionPercentage = Math.round((completedCount / totalCount) * 100);
    
    // Update progress bar
    const progressBar = document.getElementById('global-progress');
    progressBar.style.width = `${completionPercentage}%`;
    progressBar.setAttribute('aria-valuenow', completionPercentage);
    document.getElementById('progress-text').textContent = `${completionPercentage}% complété`;
    
    // Update badges
    updateBadges();
}

// Update badges display
function updateBadges() {
    const container = document.getElementById('badges-container');
    container.innerHTML = '';
    
    // In a real app, you would check which badges the user has earned
    // For now, we'll just show the first 3 badges as an example
    wisdoms.badges.slice(0, 3).forEach(badge => {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'badge-icon';
        badgeEl.style.backgroundColor = `var(--${badge.color}-color)`;
        badgeEl.innerHTML = `<i class="fas ${badge.icon}"></i>`;
        badgeEl.title = `${badge.name} - ${badge.condition}`;
        container.appendChild(badgeEl);
    });
    
    // Add a "+ more" indicator if there are more badges
    if (wisdoms.badges.length > 3) {
        const moreBadges = document.createElement('div');
        moreBadges.className = 'badge-icon bg-secondary';
        moreBadges.innerHTML = `<small>+${wisdoms.badges.length - 3}</small>`;
        container.appendChild(moreBadges);
    }
}

// Load categories in sidebar
function loadCategories() {
    const sidebar = document.getElementById('categories-sidebar');
    sidebar.innerHTML = '';
    
    wisdoms.categories.forEach(category => {
        const item = document.createElement('a');
        item.href = `#category-${category.id}`;
        item.className = 'list-group-item list-group-item-action d-flex align-items-center';
        item.innerHTML = `
            <i class="fas ${category.icon} me-3 text-${category.color}"></i>
            ${category.name}
            <span class="badge bg-${category.color} ms-auto">${getWisdomCountByCategory(category.id)}</span>
        `;
        item.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(category.id);
        });
        sidebar.appendChild(item);
    });
}

// Get count of wisdoms by category
function getWisdomCountByCategory(categoryId) {
    return wisdoms.items.filter(wisdom => wisdom.categoryId === categoryId).length;
}

// Load wisdom of the day
function loadWisdomOfTheDay() {
    const container = document.getElementById('wisdom-of-the-day');
    
    // Get a random wisdom that hasn't been viewed yet, or any if all have been viewed
    let unwisdomed = wisdoms.items.filter(w => !user.completedWisdoms.includes(w.id));
    if (unwisdomed.length === 0) unwisdomed = wisdoms.items;
    
    const randomIndex = Math.floor(Math.random() * unwisdomed.length);
    const wisdom = unwisdomed[randomIndex];
    const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
    
    // Mark as viewed
    if (!wisdom.viewed) {
        wisdom.viewed = true;
        wisdom.lastViewed = new Date();
        user.points += 5; // Points for viewing
        saveUserData();
        updateUserProgress();
    }
    
    container.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-2 text-center">
                <i class="fas ${category.icon} fa-4x text-${category.color} mb-3 mb-md-0"></i>
            </div>
            <div class="col-md-10">
                <h4 class="text-${category.color}">${wisdom.title}</h4>
                <blockquote class="blockquote mb-4">
                    <p>"${wisdom.content}"</p>
                    <footer class="blockquote-footer">${wisdom.author}</footer>
                </blockquote>
                <div class="d-flex flex-wrap">
                    <button class="btn btn-sm btn-outline-${category.color} me-2 mb-2" onclick="showDetails(${wisdom.id})">
                        <i class="fas fa-info-circle me-1"></i> Détails
                    </button>
                    <button class="btn btn-sm btn-outline-${category.color} me-2 mb-2" onclick="startQuiz(${wisdom.id})">
                        <i class="fas fa-question-circle me-1"></i> Quiz
                    </button>
                    <button class="btn btn-sm btn-outline-${category.color} me-2 mb-2" onclick="startSimulation(${wisdom.id})">
                        <i class="fas fa-play-circle me-1"></i> Simulation
                    </button>
                    <span class="badge bg-${category.color} align-self-center mb-2">
                        <i class="fas fa-star me-1"></i> ${wisdom.points}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Load wisdom cards
function loadWisdomCards(filterCategoryId = null, searchTerm = '', sortBy = 'recent') {
    const container = document.getElementById('wisdom-cards-container');
    container.innerHTML = '';
    
    let filteredWisdoms = [...wisdoms.items];
    
    // Filter by category if specified
    if (filterCategoryId) {
        filteredWisdoms = filteredWisdoms.filter(wisdom => wisdom.categoryId === filterCategoryId);
    }
    
    // Filter by search term if specified
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredWisdoms = filteredWisdoms.filter(wisdom => 
            wisdom.title.toLowerCase().includes(term) || 
            wisdom.content.toLowerCase().includes(term) ||
            wisdom.author.toLowerCase().includes(term)
        );
    }
    
    // Sort wisdoms
    sortWisdoms(sortBy, filteredWisdoms);
    
    // Update count display
    document.getElementById('wisdom-count').textContent = filteredWisdoms.length;
    
    // Paginate results
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedWisdoms = filteredWisdoms.slice(startIndex, startIndex + itemsPerPage);
    
    // Display wisdoms
    if (paginatedWisdoms.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5>Aucune sagesse trouvée</h5>
                <p class="text-muted">Essayez de modifier vos critères de recherche</p>
                <button class="btn btn-sm btn-primary" onclick="resetFilters()">
                    <i class="fas fa-sync-alt me-1"></i> Réinitialiser
                </button>
            </div>
        `;
        return;
    }
    
    paginatedWisdoms.forEach(wisdom => {
        const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
        const isCompleted = user.completedWisdoms.includes(wisdom.id);
        
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 wisdom-card animate__animated animate__fadeIn';
        card.innerHTML = `
            <div class="card h-100 ${isCompleted ? 'border-success' : ''}">
                <div class="card-body">
                    ${isCompleted ? 
                        `<span class="badge bg-success category-badge">
                            <i class="fas fa-check me-1"></i>Maîtrisé
                        </span>` : 
                        `<span class="badge bg-${category.color} category-badge">${category.name}</span>`
                    }
                    <h5 class="card-title">${wisdom.title}</h5>
                    <p class="card-text">${wisdom.content}</p>
                    <div class="d-flex align-items-center mt-3">
                        <div class="progress flex-grow-1 me-2" style="height: 5px;">
                            <div class="progress-bar" style="width: ${isCompleted ? '100' : Math.floor(Math.random() * 50) + 10}%"></div>
                        </div>
                        <small class="text-muted">${isCompleted ? '100' : Math.floor(Math.random() * 50) + 10}%</small>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <button class="btn btn-sm btn-outline-${category.color}" onclick="showDetails(${wisdom.id})">
                        <i class="fas fa-eye me-1"></i> Voir plus
                    </button>
                    <span class="badge bg-${category.color} float-end">
                        <i class="fas fa-star me-1"></i> ${wisdom.points}
                    </span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Update pagination
    setupPagination(filteredWisdoms.length);
}

// Sort wisdoms
function sortWisdoms(sortBy, wisdomsArray = wisdoms.items) {
    switch(sortBy) {
        case 'recent':
            wisdomsArray.sort((a, b) => (b.lastViewed || 0) - (a.lastViewed || 0));
            break;
        case 'popular':
            wisdomsArray.sort((a, b) => (b.viewed || 0) - (a.viewed || 0));
            break;
        case 'points':
            wisdomsArray.sort((a, b) => b.points - a.points);
            break;
    }
    loadWisdomCards();
}

// Setup pagination
function setupPagination(totalItems = wisdoms.items.length) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
    prevLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            loadWisdomCards();
        }
    });
    pagination.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageLi.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            loadWisdomCards();
        });
        pagination.appendChild(pageLi);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
    nextLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            loadWisdomCards();
        }
    });
    pagination.appendChild(nextLi);
}

// Filter by category
function filterByCategory(categoryId) {
    currentPage = 1;
    loadWisdomCards(categoryId);
    const categoryName = wisdoms.categories.find(c => c.id === categoryId).name;
    document.querySelector('.card-header h5').innerHTML = `<i class="fas fa-filter me-2"></i>Sagesses: ${categoryName}`;
}

// Reset all filters
function resetFilters() {
    currentPage = 1;
    document.getElementById('search-wisdom').value = '';
    document.querySelector('.card-header h5').innerHTML = '<i class="fas fa-compass me-2"></i>Explorer les Sagesses';
    document.querySelector('[data-sort="recent"]').classList.add('active');
    loadWisdomCards();
}

// Search wisdoms
function searchWisdoms() {
    currentPage = 1;
    const searchTerm = document.getElementById('search-wisdom').value.trim();
    loadWisdomCards(null, searchTerm);
    document.querySelector('.card-header h5').innerHTML = `<i class="fas fa-search me-2"></i>Résultats pour "${searchTerm}"`;
}

// Show wisdom details
function showDetails(wisdomId) {
    const wisdom = wisdoms.items.find(w => w.id === wisdomId);
    const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
    
    // Mark as viewed if not already
    if (!wisdom.viewed) {
        wisdom.viewed = true;
        wisdom.lastViewed = new Date();
        user.points += 5; // Points for viewing
        saveUserData();
        updateUserProgress();
    }
    
    Swal.fire({
        title: wisdom.title,
        html: `
            <div class="text-start">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <span class="badge bg-${category.color}">
                        <i class="fas ${category.icon} me-1"></i>${category.name}
                    </span>
                    <span class="badge bg-warning text-dark">
                        <i class="fas fa-star me-1"></i>${wisdom.points} points
                    </span>
                </div>
                
                <blockquote class="blockquote bg-light p-3 rounded">
                    <p class="lead">"${wisdom.content}"</p>
                    <footer class="blockquote-footer mt-2">— ${wisdom.author}</footer>
                </blockquote>
                
                <div class="mt-4">
                    <h6 class="text-${category.color}"><i class="fas fa-lightbulb me-2"></i>Exemple Concret</h6>
                    <p class="ps-3">${wisdom.example}</p>
                </div>
                
                <div class="mt-4">
                    <h6 class="text-${category.color}"><i class="fas fa-hands-helping me-2"></i>Application Pratique</h6>
                    <p class="ps-3">${wisdom.application}</p>
                </div>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Marquer comme maîtrisé',
        confirmButtonColor: `#${getComputedStyle(document.documentElement).getPropertyValue(`--${category.color}-color`)}`,
        showDenyButton: true,
        denyButtonText: 'Fermer',
        footer: `
            <div class="d-flex justify-content-center">
                <button class="btn btn-sm btn-outline-${category.color} me-2" onclick="startQuiz(${wisdomId})">
                    <i class="fas fa-question-circle me-1"></i>Quiz
                </button>
                <button class="btn btn-sm btn-outline-${category.color}" onclick="startSimulation(${wisdomId})">
                    <i class="fas fa-chess-board me-1"></i>Simulation
                </button>
            </div>
        `,
        width: '800px'
    }).then((result) => {
        if (result.isConfirmed) {
            markAsMastered(wisdomId);
        }
    });
}

// Mark wisdom as mastered
function markAsMastered(wisdomId) {
    if (!user.completedWisdoms.includes(wisdomId)) {
        const wisdom = wisdoms.items.find(w => w.id === wisdomId);
        user.completedWisdoms.push(wisdomId);
        user.points += wisdom.points;
        saveUserData();
        updateUserProgress();
        
        Swal.fire({
            title: 'Félicitations !',
            text: `Vous avez maîtrisé cette sagesse et gagné ${wisdom.points} points !`,
            icon: 'success',
            confirmButtonText: 'Continuer'
        });
        
        // Reload cards to update the mastered status
        loadWisdomCards();
    } else {
        Swal.fire({
            title: 'Déjà maîtrisé',
            text: 'Vous avez déjà marqué cette sagesse comme maîtrisée.',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }
}

// Quiz functionality
function startQuiz(wisdomId) {
    currentQuiz = wisdoms.quizzes.find(q => q.wisdomId === wisdomId);
    if (!currentQuiz) {
        Swal.fire('Info', 'Pas de quiz disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentQuestionIndex = 0;
    quizScore = 0;
    showQuestion();
    
    // Update question counters
    document.getElementById('current-question').textContent = 1;
    document.getElementById('total-questions').textContent = currentQuiz.questions.length;
    
    const quizModal = new bootstrap.Modal(document.getElementById('quizModal'));
    quizModal.show();
}

function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const container = document.getElementById('quiz-content');
    
    container.innerHTML = `
        <div class="quiz-question mb-4">
            <h5>${question.question}</h5>
            <div class="list-group mt-3">
                ${question.options.map((option, index) => `
                    <label class="list-group-item ${question.answer === index ? 'correct-answer' : ''}">
                        <input class="form-check-input me-2" type="radio" name="quizAnswer" value="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update current question counter
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="quizAnswer"]:checked');
    if (!selectedOption) {
        Swal.fire('Attention', 'Veuillez sélectionner une réponse', 'warning');
        return;
    }
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = parseInt(selectedOption.value) === question.answer;
    
    if (isCorrect) {
        quizScore++;
    }
    
    // Show feedback
    Swal.fire({
        title: isCorrect ? 'Correct !' : 'Pas tout à fait',
        html: `
            <p>${question.explanation}</p>
            ${isCorrect ? 
                '<div class="text-success my-3"><i class="fas fa-check-circle fa-3x"></i></div>' : 
                '<div class="text-danger my-3"><i class="fas fa-times-circle fa-3x"></i></div>'}
            <p class="small text-muted">Score actuel: ${quizScore}/${currentQuiz.questions.length}</p>
        `,
        icon: isCorrect ? 'success' : 'error',
        confirmButtonText: 'Continuer'
    }).then(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    });
}

function finishQuiz() {
    const wisdom = wisdoms.items.find(w => w.id === currentQuiz.wisdomId);
    const percentage = Math.round((quizScore / currentQuiz.questions.length) * 100);
    let pointsEarned = 0;
    
    if (percentage >= 80) {
        pointsEarned = Math.floor(wisdom.points * 0.8); // 80% of wisdom points for excellent quiz score
    } else if (percentage >= 50) {
        pointsEarned = Math.floor(wisdom.points * 0.5); // 50% for passing
    }
    
    if (pointsEarned > 0) {
        user.points += pointsEarned;
        if (!user.passedQuizzes.includes(wisdom.id)) {
            user.passedQuizzes.push(wisdom.id);
        }
        saveUserData();
        updateUserProgress();
    }
    
    Swal.fire({
        title: 'Quiz terminé !',
        html: `
            <p>Votre score: ${quizScore}/${currentQuiz.questions.length} (${percentage}%)</p>
            ${pointsEarned > 0 ? 
                `<p class="text-success">Vous avez gagné ${pointsEarned} points de sagesse !</p>` : 
                '<p>Essayez à nouveau pour gagner des points</p>'}
            <div class="progress mt-3 mb-2">
                <div class="progress-bar" role="progressbar" style="width: ${percentage}%"></div>
            </div>
        `,
        icon: percentage >= 50 ? 'success' : 'error',
        confirmButtonText: 'OK'
    });
    
    document.getElementById('quizModal').querySelector('.btn-close').click();
}

// Simulation functionality
function startSimulation(wisdomId) {
    currentSimulation = wisdoms.simulations.find(s => s.wisdomId === wisdomId);
    if (!currentSimulation) {
        Swal.fire('Info', 'Pas de simulation disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentSimulationStep = 0;
    simulationScore = 0;
    showSimulationStep();
    
    // Update progress bar
    updateSimulationProgress();
    
    const simulationModal = new bootstrap.Modal(document.getElementById('simulationModal'));
    simulationModal.show();
}

function showSimulationStep() {
    const step = currentSimulation.steps[currentSimulationStep];
    const container = document.getElementById('simulation-content');
    
    container.innerHTML = `
        <div class="simulation-scenario mb-4">
            <h5>Scénario:</h5>
            <p class="lead">${currentSimulation.scenario}</p>
        </div>
        <div class="simulation-step">
            <h5>Étape ${currentSimulationStep + 1}/${currentSimulation.steps.length}:</h5>
            <p>${step.description}</p>
            <div class="list-group mt-3">
                ${step.options.map((option, index) => `
                    <label class="list-group-item ${step.bestOption === index ? 'correct-answer' : ''}">
                        <input class="form-check-input me-2" type="radio" name="simulationAnswer" value="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update progress bar
    updateSimulationProgress();
}

function updateSimulationProgress() {
    const progress = ((currentSimulationStep) / currentSimulation.steps.length) * 100;
    document.getElementById('simulation-progress-bar').style.width = `${progress}%`;
}

function nextSimulationStep() {
    const selectedOption = document.querySelector('input[name="simulationAnswer"]:checked');
    if (!selectedOption) {
        Swal.fire('Attention', 'Veuillez sélectionner une option', 'warning');
        return;
    }
    
    const step = currentSimulation.steps[currentSimulationStep];
    const isBestOption = parseInt(selectedOption.value) === step.bestOption;
    
    if (isBestOption) {
        simulationScore += step.points;
    }
    
    // Show feedback
    Swal.fire({
        title: isBestOption ? 'Excellente approche !' : 'Réflexion intéressante',
        html: `
            <p>${step.feedback}</p>
            ${isBestOption ? 
                `<div class="text-success my-3">
                    <i class="fas fa-check-circle fa-3x"></i>
                    <p class="mt-2">+${step.points} points</p>
                </div>` : 
                '<div class="text-warning my-3"><i class="fas fa-lightbulb fa-3x"></i></div>'}
        `,
        icon: isBestOption ? 'success' : 'info',
        confirmButtonText: 'Continuer'
    }).then(() => {
        currentSimulationStep++;
        if (currentSimulationStep < currentSimulation.steps.length) {
            showSimulationStep();
        } else {
            finishSimulation();
        }
    });
}

function finishSimulation() {
    const wisdom = wisdoms.items.find(w => w.id === currentSimulation.wisdomId);
    const percentage = Math.round((simulationScore / currentSimulation.steps.reduce((sum, step) => sum + step.points, 0)) * 100);
    
    if (simulationScore > 0) {
        user.points += simulationScore;
        if (!user.completedSimulations.includes(wisdom.id)) {
            user.completedSimulations.push(wisdom.id);
        }
        saveUserData();
        updateUserProgress();
    }
    
    Swal.fire({
        title: 'Simulation terminée !',
        html: `
            <p>Vous avez obtenu ${simulationScore} points sur un total possible de ${currentSimulation.steps.reduce((sum, step) => sum + step.points, 0)}.</p>
            <p class="text-success">Votre score: ${percentage}%</p>
            <div class="progress mt-3 mb-2">
                <div class="progress-bar" role="progressbar" style="width: ${percentage}%"></div>
            </div>
            ${percentage >= 70 ? 
                '<p class="text-success mt-3">Excellent travail ! Vous avez bien compris cette sagesse.</p>' : 
                '<p class="text-info mt-3">Bonne tentative ! Vous pouvez réessayer pour améliorer votre score.</p>'}
        `,
        icon: percentage >= 70 ? 'success' : 'info',
        confirmButtonText: 'OK'
    });
    
    document.getElementById('simulationModal').querySelector('.btn-close').click();
}

// Start journey
function startJourney() {
    Swal.fire({
        title: 'Commencez votre voyage vers la sagesse',
        html: `
            <div class="text-start">
                <p>Ce portail contient 150 sagesses opérationnelles organisées en 12 catégories.</p>
                <p>Pour chaque sagesse, vous trouverez :</p>
                <ul>
                    <li>Une explication claire</li>
                    <li>Des exemples concrets</li>
                    <li>Des applications pratiques</li>
                    <li>Un quiz pour tester votre compréhension</li>
                    <li>Une simulation pour mettre en pratique</li>
                </ul>
                <p>Gagnez des points et des badges en progressant !</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Commencer maintenant'
    });
}

// Show video intro
function showVideoIntro() {
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
}

// Make functions available globally
window.showDetails = showDetails;
window.startQuiz = startQuiz;
window.startSimulation = startSimulation;
window.filterByCategory = filterByCategory;
window.resetFilters = resetFilters;
window.loadWisdomOfTheDay = loadWisdomOfTheDay;
window.showVideoIntro = showVideoIntro;