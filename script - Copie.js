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
            author: "Proverbe ancien"
        },
        {
            id: 2,
            categoryId: 2,
            title: "Éviter les problèmes",
            content: "L'intelligent sait résoudre les problèmes, le sage sait les éviter.",
            example: "Un manager qui anticipe les conflits d'équipe en clarifiant les rôles dès le début.",
            application: "Avant de lancer un projet, passez 20% du temps à identifier les risques potentiels.",
            author: "Lao Tzu"
        },
        {
            id: 3,
            categoryId: 3,
            title: "Servir pour diriger",
            content: "Le meilleur leader est celui dont les gens à peine remarquent l'existence.",
            example: "Un CEO qui met en avant les réalisations de son équipe plutôt que les siennes.",
            application: "Posez-vous chaque jour la question : comment puis-je aider mon équipe à réussir ?",
            author: "Lao Tzu"
        },
		{
			id: 4,
			categoryId: 4,
			title: "Prioriser l'important",
			content: "Ce qui est urgent est rarement important, et ce qui est important est rarement urgent.",
			example: "Répondre immédiatement à tous les emails vs bloquer du temps pour un projet stratégique.",
			application: "Utilisez la matrice d'Eisenhower pour classer vos tâches quotidiennes.",
			author: "Dwight D. Eisenhower"
		},
		{
			id: 5,
			categoryId: 5,
			title: "Résolution systémique",
			content: "Si vous ne trouvez pas de solution, c'est que vous n'avez pas assez élargi le cadre.",
			example: "Résoudre les retards répétés d'un employé en examinant l'organisation du travail plutôt qu'en le sanctionnant.",
			application: "Pour tout problème, posez-vous 'Qu'est-ce qui dans le système permet que ce problème existe ?'",
			author: "Russell Ackoff"
		},
		{
			id: 6,
			categoryId: 6,
			title: "Contrôle émotionnel",
			content: "Entre le stimulus et la réponse, il y a un espace. Dans cet espace se trouve notre pouvoir de choisir.",
			example: "Prendre 10 minutes pour marcher avant de répondre à un email qui vous a mis en colère.",
			application: "Développez un rituel (respiration, marche, écriture) à insérer avant les réactions émotionnelles.",
			author: "Viktor Frankl"
		},
		{
			id: 7,
			categoryId: 7,
			title: "Perspective long terme",
			content: "Quand vous jouez aux échecs, ne regardez pas seulement le prochain coup, mais toute la partie.",
			example: "Un PDG qui refuse une opportunité lucrative à court terme pour préserver la culture d'entreprise.",
			application: "Pour chaque décision importante, imaginez ses conséquences dans 1 an, 5 ans et 10 ans.",
			author: "Garry Kasparov"
		},
        {
            id: 8,
            categoryId: 1, // Communication
            title: "Écoute active",
            content: "Écouter avec l'intention de comprendre, non de répondre.",
            example: "Lors d'une discussion, reformuler ce que l'autre a dit avant de donner votre avis.",
            application: "Lors de votre prochaine conversation, concentrez-vous sur les mots et le non-verbal de votre interlocuteur sans préparer votre réponse.",
            author: "Stephen Covey"
        },
        {
            id: 9,
            categoryId: 2, // Décision
            title: "Décider avec information",
            content: "Une décision prise sans information pertinente est une loterie.",
            example: "Un entrepreneur qui étudie le marché avant de lancer un nouveau produit.",
            application: "Avant chaque décision importante, listez les 3 informations cruciales qui vous manquent et cherchez-les.",
            author: "Peter Drucker"
        },
        {
            id: 10,
            categoryId: 3, // Leadership
            title: "Inspirer la confiance",
            content: "Le leadership est la capacité de traduire une vision en réalité.",
            example: "Un leader qui est transparent avec son équipe sur les défis et les succès de l'entreprise.",
            application: "Partagez votre vision clairement et montrez l'exemple dans vos actions quotidiennes.",
            author: "Warren Bennis"
        }
        // Add more wisdoms here (aim for 150 total)
        /*
        {
            id: X,
            categoryId: Y,
            title: "",
            content: "",
            example: "",
            application: "",
            author: ""
        },
        */
    ],
    quizzes: [
        {
            wisdomId: 1, // Quiz for "Savoir quand parler"
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
                    question: "Quel est un signe clé de la sagesse en communication ?",
                    options: [
                        "Parler beaucoup et montrer son savoir",
                        "Savoir écouter activement",
                        "Donner son avis sur tout",
                        "Interrompre pour corriger les autres"
                    ],
                    answer: 1,
                    explanation: "La sagesse en communication inclut une grande capacité d'écoute et de compréhension."
                }
            ]
        },
        {
            wisdomId: 2, // Quiz for "Éviter les problèmes"
            questions: [
                {
                    question: "Comment un sage aborde-t-il les problèmes ?",
                    options: [
                        "Il attend qu'ils arrivent pour les résoudre",
                        "Il les anticipe et les évite",
                        "Il délègue leur résolution",
                        "Il les ignore en espérant qu'ils disparaissent"
                    ],
                    answer: 1,
                    explanation: "La sagesse réside dans la capacité d'anticiper et de prévenir les problèmes avant qu'ils ne se manifestent."
                },
                {
                    question: "Quel est un exemple d'action pour éviter un problème futur ?",
                    options: [
                        "Ignorer un petit désaccord entre collègues",
                        "Faire un bilan de compétences régulier avec son équipe",
                        "Attendre la date limite pour commencer un projet",
                        "Ne jamais documenter les processus"
                    ],
                    answer: 1,
                    explanation: "Un bilan de compétences régulier peut anticiper des lacunes et éviter des problèmes de performance futurs."
                }
            ]
        }
        // Add more quizzes for other wisdoms. Remember each quiz can have multiple questions.
        /*
        {
            wisdomId: X,
            questions: [
                {
                    question: "",
                    options: [],
                    answer: Y,
                    explanation: ""
                },
                {
                    question: "",
                    options: [],
                    answer: Z,
                    explanation: ""
                }
            ]
        },
        */
    ],
    simulations: [
        {
            wisdomId: 2, // Simulation for "Éviter les problèmes"
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
                    bestOption: 2, // Corresponds to "Redéfinir clairement les rôles et responsabilités de chacun"
                    feedback: "Redéfinir les rôles élimine souvent les conflits de territoire à la source et prévient de futures tensions."
                },
                {
                    description: "Après avoir redéfini les rôles, comment assurez-vous que le problème ne resurgisse pas ?",
                    options: [
                        "Surveiller attentivement les deux membres en privé",
                        "Mettre en place des points réguliers sur l'avancement et la collaboration",
                        "Demander à un autre membre de l'équipe de superviser leur interaction",
                        "Organiser un team building pour 'casser la glace'"
                    ],
                    bestOption: 1, // Corresponds to "Mettre en place des points réguliers sur l'avancement et la collaboration"
                    feedback: "Les points réguliers permettent de suivre l'application des nouveaux rôles et de désamorcer rapidement de nouvelles tensions."
                }
            ]
        },
        {
            wisdomId: 4, // Simulation for "Prioriser l'important"
            scenario: "Vous avez une liste de tâches longue comme le bras. Votre boîte mail déborde d'urgences, mais vous savez qu'un projet stratégique à long terme est crucial.",
            steps: [
                {
                    description: "Quelle est votre première action pour aborder cette situation ?",
                    options: [
                        "Répondre à tous les emails 'urgents' en priorité",
                        "Commencer par la tâche la plus rapide pour se sentir productif",
                        "Appliquer la matrice d'Eisenhower pour classer les tâches",
                        "Demander à un collègue de l'aide sur les tâches les plus lourdes"
                    ],
                    bestOption: 2, // Corresponds to "Appliquer la matrice d'Eisenhower pour classer les tâches"
                    feedback: "La matrice d'Eisenhower est un excellent outil pour distinguer l'urgent de l'important et prioriser efficacement."
                },
                {
                    description: "Après la priorisation, vous constatez que le projet stratégique est important mais non urgent. Que faites-vous ?",
                    options: [
                        "Le repousser continuellement tant qu'il n'est pas urgent",
                        "Bloquer des créneaux dédiés dans votre agenda pour y travailler",
                        "Le confier à quelqu'un d'autre pour vous libérer du temps",
                        "Travailler dessus seulement quand vous avez un moment libre"
                    ],
                    bestOption: 1, // Corresponds to "Bloquer des créneaux dédiés dans votre agenda pour y travailler"
                    feedback: "Les tâches importantes mais non urgentes nécessitent une planification proactive pour être accomplies, sinon elles sont souvent négligées."
                }
            ]
        }
        // Add more simulations
        /*
        {
            wisdomId: X,
            scenario: "",
            steps: [
                {
                    description: "",
                    options: [],
                    bestOption: Y,
                    feedback: ""
                },
                // More steps can be added
            ]
        },
        */
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initDashboard();
    
    // Set up event listeners
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('simulation-next').addEventListener('click', nextSimulationStep);
});

// Initialize the dashboard
function initDashboard() {
    // Load categories in sidebar
    loadCategories();
    
    // Load wisdom of the day
    loadWisdomOfTheDay();
    
    // Load wisdom cards
    loadWisdomCards();
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
        item.addEventListener('click', () => filterByCategory(category.id));
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
    const randomIndex = Math.floor(Math.random() * wisdoms.items.length);
    const wisdom = wisdoms.items[randomIndex];
    const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
    
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
                <button class="btn btn-sm btn-outline-${category.color} me-2" onclick="showDetails(${wisdom.id})">
                    <i class="fas fa-info-circle"></i> Détails
                </button>
                <button class="btn btn-sm btn-outline-${category.color} me-2" onclick="startQuiz(${wisdom.id})">
                    <i class="fas fa-question-circle"></i> Quiz
                </button>
                <button class="btn btn-sm btn-outline-${category.color}" onclick="startSimulation(${wisdom.id})">
                    <i class="fas fa-play-circle"></i> Simulation
                </button>
            </div>
        </div>
    `;
}

// Load wisdom cards
function loadWisdomCards(filterCategoryId = null) {
    const container = document.getElementById('wisdom-cards-container');
    container.innerHTML = '';
    
    let filteredWisdoms = wisdoms.items;
    if (filterCategoryId) {
        filteredWisdoms = wisdoms.items.filter(wisdom => wisdom.categoryId === filterCategoryId);
    }
    
    filteredWisdoms.forEach(wisdom => {
        const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 wisdom-card';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <span class="badge bg-${category.color} category-badge">${category.name}</span>
                    <h5 class="card-title">${wisdom.title}</h5>
                    <p class="card-text">${wisdom.content}</p>
                    <div class="d-flex align-items-center mt-3">
                        <div class="progress flex-grow-1 me-2" style="height: 5px;">
                            <div class="progress-bar" style="width: ${Math.random() * 100}%"></div>
                        </div>
                        <small class="text-muted">${Math.floor(Math.random() * 100)}%</small>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <button class="btn btn-sm btn-outline-${category.color}" onclick="showDetails(${wisdom.id})">
                        <i class="fas fa-eye"></i> Voir plus
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter by category
function filterByCategory(categoryId) {
    loadWisdomCards(categoryId);
    const categoryName = wisdoms.categories.find(c => c.id === categoryId).name;
    document.querySelector('.card-header h5').textContent = `Sagesses: ${categoryName}`;
}

// Show wisdom details
function showDetails(wisdomId) {
    const wisdom = wisdoms.items.find(w => w.id === wisdomId);
    const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
    
    Swal.fire({
        title: wisdom.title,
        html: `
            <div class="text-start">
                <p class="lead">"${wisdom.content}"</p>
                <p class="text-muted mb-4">— ${wisdom.author}</p>
                
                <h6 class="mt-4 text-${category.color}"><i class="fas fa-lightbulb"></i> Exemple</h6>
                <p>${wisdom.example}</p>
                
                <h6 class="mt-4 text-${category.color}"><i class="fas fa-hands-helping"></i> Application</h6>
                <p>${wisdom.application}</p>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: `#${getComputedStyle(document.documentElement).getPropertyValue(`--${category.color}-color`).trim()}`, // Ensure color is correctly parsed
        footer: `<span class="badge bg-${category.color}">${category.name}</span>`,
        width: '800px'
    });
}

// Quiz functionality
let currentQuiz = null;
let currentQuestionIndex = 0;

function startQuiz(wisdomId) {
    currentQuiz = wisdoms.quizzes.find(q => q.wisdomId === wisdomId);
    if (!currentQuiz || currentQuiz.questions.length === 0) {
        Swal.fire('Info', 'Pas de quiz disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentQuestionIndex = 0;
    showQuestion();
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
                    <label class="list-group-item">
                        <input class="form-check-input me-2" type="radio" name="quizAnswer" value="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="quizAnswer"]:checked');
    if (!selectedOption) {
        Swal.fire('Attention', 'Veuillez sélectionner une réponse', 'warning');
        return;
    }
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = parseInt(selectedOption.value) === question.answer;
    
    Swal.fire({
        title: isCorrect ? 'Correct !' : 'Pas tout à fait',
        html: `
            <p>${question.explanation}</p>
            ${isCorrect ? 
                '<div class="text-success mt-3"><i class="fas fa-check-circle fa-3x"></i></div>' : 
                '<div class="text-danger mt-3"><i class="fas fa-times-circle fa-3x"></i></div>'}
        `,
        icon: isCorrect ? 'success' : 'error',
        confirmButtonText: 'Continuer'
    }).then(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
            showQuestion();
        } else {
            Swal.fire('Quiz terminé', 'Vous avez complété ce quiz!', 'success');
            document.getElementById('quizModal').querySelector('.btn-close').click();
        }
    });
}

// Simulation functionality
let currentSimulation = null;
let currentSimulationStep = 0;

function startSimulation(wisdomId) {
    currentSimulation = wisdoms.simulations.find(s => s.wisdomId === wisdomId);
    if (!currentSimulation || currentSimulation.steps.length === 0) {
        Swal.fire('Info', 'Pas de simulation disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentSimulationStep = 0;
    showSimulationStep();
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
            <h5>Étape ${currentSimulationStep + 1}:</h5>
            <p>${step.description}</p>
            <div class="list-group mt-3">
                ${step.options.map((option, index) => `
                    <label class="list-group-item">
                        <input class="form-check-input me-2" type="radio" name="simulationAnswer" value="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
}

function nextSimulationStep() {
    const selectedOption = document.querySelector('input[name="simulationAnswer"]:checked');
    if (!selectedOption) {
        Swal.fire('Attention', 'Veuillez sélectionner une option', 'warning');
        return;
    }
    
    const step = currentSimulation.steps[currentSimulationStep];
    const isBestOption = parseInt(selectedOption.value) === step.bestOption;
    
    Swal.fire({
        title: isBestOption ? 'Bonne approche !' : 'Réflexion intéressante',
        html: `
            <p>${step.feedback}</p>
            ${isBestOption ? 
                '<div class="text-success mt-3"><i class="fas fa-star fa-3x"></i></div>' : 
                '<div class="text-warning mt-3"><i class="fas fa-lightbulb fa-3x"></i></div>'}
        `,
        icon: isBestOption ? 'success' : 'info',
        confirmButtonText: 'Continuer'
    }).then(() => {
        currentSimulationStep++;
        if (currentSimulationStep < currentSimulation.steps.length) {
            showSimulationStep();
        } else {
            Swal.fire('Simulation terminée', 'Vous avez complété cette mise en situation!', 'success');
            document.getElementById('simulationModal').querySelector('.btn-close').click();
        }
    });
}

// Make functions available globally
window.showDetails = showDetails;
window.startQuiz = startQuiz;
window.startSimulation = startSimulation;
window.filterByCategory = filterByCategory;