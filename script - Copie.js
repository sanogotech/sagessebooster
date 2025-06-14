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
        },
        // --- Ensuring at least 7 wisdoms per category ---
        // Category 1: Communication
        {
            id: 11,
            categoryId: 1,
            title: "La clarté avant tout",
            content: "Ce qui se conçoit bien s'énonce clairement.",
            example: "Rédiger des emails concis et directs, sans jargon inutile.",
            application: "Avant d'envoyer un message important, lisez-le à voix haute pour vérifier sa clarté.",
            author: "Nicolas Boileau"
        },
        {
            id: 12,
            categoryId: 1,
            title: "Le feedback constructif",
            content: "Le feedback est le petit déjeuner des champions.",
            example: "Donner un retour sur la performance d'un collègue en se basant sur des faits précis, pas des jugements.",
            application: "Quand vous donnez du feedback, utilisez le modèle STAR (Situation, Tâche, Action, Résultat).",
            author: "Ken Blanchard"
        },
        {
            id: 13,
            categoryId: 1,
            title: "Adapter son message",
            content: "Parlez à chacun selon son langage.",
            example: "Expliquer un concept technique à un non-spécialiste en utilisant des analogies simples.",
            application: "Avant une présentation, identifiez le public et adaptez votre vocabulaire et vos exemples.",
            author: "Proverbe"
        },
        {
            id: 14,
            categoryId: 1,
            title: "L'art du questionnement",
            content: "Il est plus facile de juger l'esprit d'un homme par ses questions que par ses réponses.",
            example: "Poser des questions ouvertes pour encourager la discussion et obtenir plus d'informations.",
            application: "Lors d'une conversation, alternez les affirmations avec des questions pour engager l'autre.",
            author: "Voltaire"
        },
        {
            id: 15,
            categoryId: 1,
            title: "Le silence est d'or",
            content: "Parfois, le silence est la meilleure réponse.",
            example: "Ne pas réagir immédiatement à une provocation pour éviter d'escalader un conflit.",
            application: "Apprenez à faire des pauses dans vos conversations pour laisser de l'espace à l'autre et à la réflexion.",
            author: "Proverbe"
        },

        // Category 2: Décision
        {
            id: 16,
            categoryId: 2,
            title: "La décision rapide, le regret lent",
            content: "Une décision rapide est parfois une mauvaise décision. Une non-décision est toujours une mauvaise décision.",
            example: "Prendre le temps d'évaluer les options avant de choisir un fournisseur important, mais ne pas procrastiner la décision.",
            application: "Fixez-vous une date limite pour les décisions importantes et tenez-vous-y.",
            author: "Proverbe"
        },
        {
            id: 17,
            categoryId: 2,
            title: "L'analyse post-décision",
            content: "Les erreurs sont une partie de la vie. Le non-apprentissage des erreurs est l'idiotie.",
            example: "Après un projet, analyser ce qui a fonctionné et ce qui n'a pas fonctionné dans les décisions prises.",
            application: "Créez un 'journal de décision' où vous notez les décisions importantes et leurs résultats.",
            author: "Proverbe"
        },
        {
            id: 18,
            categoryId: 2,
            title: "La règle des 70%",
            content: "Prenez une décision quand vous avez 70% de l'information nécessaire.",
            example: "Ne pas attendre d'avoir toutes les données imaginables pour lancer un nouveau produit, mais avoir suffisamment de confiance.",
            application: "Identifiez le seuil de confiance que vous avez besoin pour prendre une décision et agissez une fois atteint.",
            author: "Colin Powell"
        },
        {
            id: 19,
            categoryId: 2,
            title: "Penser en scénarios",
            content: "Préparez-vous au pire, espérez le meilleur.",
            example: "Lors d'une décision d'investissement, considérer les scénarios optimiste, réaliste et pessimiste.",
            application: "Pour toute décision majeure, listez 3 scénarios (positif, neutre, négatif) et leurs conséquences.",
            author: "Proverbe"
        },
        {
            id: 20,
            categoryId: 2,
            title: "La réversibilité de la décision",
            content: "Certaines décisions sont des portes, d'autres sont des murs.",
            example: "Savoir identifier si une décision est facilement réversible pour se permettre d'expérimenter.",
            application: "Classez vos décisions en 'Type 1' (irréversible) et 'Type 2' (réversible) et adaptez votre processus.",
            author: "Jeff Bezos"
        },
        {
            id: 21,
            categoryId: 2,
            title: "L'avis extérieur",
            content: "Celui qui ne consulte que soi-même a un fou pour conseiller.",
            example: "Demander l'avis d'experts ou de collègues expérimentés avant de prendre une décision complexe.",
            application: "Avant de décider, parlez-en à au moins deux personnes de confiance qui ont une perspective différente.",
            author: "Proverbe"
        },

        // Category 3: Leadership
        {
            id: 22,
            categoryId: 3,
            title: "L'exemple d'abord",
            content: "Le leadership est l'action, non la position.",
            example: "Un leader qui arrive tôt et travaille dur inspire son équipe à faire de même.",
            application: "Identifiez une habitude que vous souhaitez voir chez votre équipe et incarnez-la.",
            author: "Donald McGannon"
        },
        {
            id: 23,
            categoryId: 3,
            title: "Déléguer pour grandir",
            content: "Le rôle d'un leader n'est pas de faire tout le travail, mais de développer ceux qui le feront.",
            example: "Confier des responsabilités importantes à des membres d'équipe pour les faire monter en compétence.",
            application: "Listez les tâches que vous faites et que d'autres pourraient faire ; commencez à déléguer progressivement.",
            author: "Unknown"
        },
        {
            id: 24,
            categoryId: 3,
            title: "Vision et inspiration",
            content: "Là où il n'y a pas de vision, les gens périssent.",
            example: "Un leader qui communique clairement la mission et les objectifs à long terme de l'entreprise.",
            application: "Définissez une vision inspirante pour votre équipe et rappelez-la régulièrement.",
            author: "Proverbe"
        },
        {
            id: 25,
            categoryId: 3,
            title: "L'humilité du leader",
            content: "Le vrai pouvoir est dans la modestie.",
            example: "Un leader qui admet ses erreurs et cherche à apprendre de son équipe.",
            application: "Pratiquez l'écoute active et soyez ouvert aux suggestions, même critiques.",
            author: "Gandhi"
        },
        {
            id: 26,
            categoryId: 3,
            title: "Développer ses équipes",
            content: "Les leaders ne créent pas de suiveurs, ils créent plus de leaders.",
            example: "Mettre en place des programmes de mentorat et de formation pour le développement de carrière des employés.",
            application: "Identifiez les potentiels de leadership dans votre équipe et offrez-leur des opportunités de croissance.",
            author: "Tom Peters"
        },
        {
            id: 27,
            categoryId: 3,
            title: "La résilience en leadership",
            content: "Un leader est un marchand d'espoir.",
            example: "Maintenir le moral de l'équipe et la motivation même face à l'adversité ou aux échecs.",
            application: "Lors de moments difficiles, mettez l'accent sur les solutions et les apprentissages, pas sur les problèmes.",
            author: "Napoléon Bonaparte"
        },
        // Category 4: Gestion du Temps (already has 7)
        {
            id: 28,
            categoryId: 4,
            title: "La loi de Parkinson",
            content: "Le travail s'étale de manière à occuper le temps disponible pour son achèvement.",
            example: "Donner un délai court mais réaliste pour une tâche pousse à l'efficacité.",
            application: "Fixez des délais stricts pour vos tâches, même si elles ne sont pas imposées.",
            author: "Cyril Northcote Parkinson"
        },
        {
            id: 29,
            categoryId: 4,
            title: "Le bloc de temps",
            content: "Planifiez votre travail et travaillez votre plan.",
            example: "Bloquer des créneaux horaires spécifiques dans l'agenda pour des tâches sans interruption.",
            application: "Utilisez un calendrier pour planifier des blocs de temps dédiés aux tâches importantes et complexes.",
            author: "Norman Vincent Peale"
        },
        {
            id: 30,
            categoryId: 4,
            title: "La méthode Pomodoro",
            content: "La concentration par intervalles permet une productivité maximale.",
            example: "Travailler 25 minutes intensément, puis prendre 5 minutes de pause.",
            application: "Utilisez un minuteur pour travailler par sessions courtes et focalisées.",
            author: "Francesco Cirillo"
        },
        {
            id: 31,
            categoryId: 4,
            title: "Éliminer le superflu",
            content: "La simplicité est la sophistication suprême.",
            example: "Supprimer les réunions inutiles ou réduire leur durée.",
            application: "Évaluez régulièrement vos activités et éliminez celles qui n'apportent pas de valeur ajoutée.",
            author: "Léonard de Vinci"
        },
        {
            id: 32,
            categoryId: 4,
            title: "La planification matinale",
            content: "Gagnez une heure le matin, et vous la poursuivrez toute la journée.",
            example: "Dédier les premières 30 minutes de la journée à planifier les tâches du jour.",
            application: "Chaque matin, avant de commencer, listez et priorisez les 3 tâches les plus importantes à accomplir.",
            author: "Richard Whately"
        },
        {
            id: 33,
            categoryId: 4,
            title: "Le juste à temps",
            content: "Ne faites rien avant que cela ne doive être fait, à moins que cela ne vous y aide.",
            example: "Ne pas commencer une tâche trop tôt si les informations requises ne sont pas encore stables.",
            application: "Évitez de stocker des tâches ou des informations 'juste au cas où' ; agissez au bon moment.",
            author: "Proverbe"
        },
        {
            id: 34,
            categoryId: 4,
            title: "L'art de dire non",
            content: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre.",
            example: "Refuser poliment une sollicitation qui ne correspond pas à vos priorités actuelles.",
            application: "Apprenez à identifier ce qui n'est pas votre priorité et à décliner les demandes de manière respectueuse.",
            author: "Steve Jobs"
        },

        // Category 5: Résolution de Problèmes (Add 6 more to reach 7+)
        {
            id: 35,
            categoryId: 5,
            title: "Comprendre avant de résoudre",
            content: "Un problème bien posé est à moitié résolu.",
            example: "Prendre le temps d'analyser toutes les facettes d'un problème avant de proposer une solution.",
            application: "Avant de chercher des solutions, listez tous les aspects du problème et les parties prenantes affectées.",
            author: "Charles F. Kettering"
        },
        {
            id: 36,
            categoryId: 5,
            title: "La méthode des 5 Pourquoi",
            content: "Posez-vous 'Pourquoi ?' cinq fois pour trouver la cause racine.",
            example: "Un équipement tombe en panne. Pourquoi ? (Il y a eu une surcharge). Pourquoi ? (Le disjoncteur n'a pas fonctionné). Etc.",
            application: "Face à un problème récurrent, utilisez cette méthode pour creuser au-delà des symptômes.",
            author: "Sakichi Toyoda"
        },
        {
            id: 37,
            categoryId: 5,
            title: "Penser en dehors de la boîte",
            content: "La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent.",
            example: "Si une approche ne fonctionne pas, essayer une solution radicalement différente.",
            application: "En situation de blocage, forcez-vous à envisager des solutions non conventionnelles.",
            author: "Albert Einstein"
        },
        {
            id: 38,
            categoryId: 5,
            title: "L'approche par les contraintes",
            content: "Chaque système est limité par au moins une contrainte.",
            example: "Identifier le goulot d'étranglement dans un processus de production pour améliorer l'efficacité globale.",
            application: "Cherchez la principale contrainte qui empêche l'atteinte de votre objectif et concentrez-vous dessus.",
            author: "Eliyahu M. Goldratt"
        },
        {
            id: 39,
            categoryId: 5,
            title: "Tester et apprendre",
            content: "L'échec est le pilier du succès.",
            example: "Mettre en œuvre une solution provisoire, observer les résultats, puis l'ajuster ou la remplacer.",
            application: "Adoptez une approche itérative : 'Construire, Mesurer, Apprendre'.",
            author: "Proverbe"
        },
        {
            id: 40,
            categoryId: 5,
            title: "La pensée critique",
            content: "Ne crois pas tout ce que tu penses.",
            example: "Remettre en question ses propres hypothèses avant de prendre une décision hâtive face à un problème.",
            application: "Avant de valider une solution, cherchez activement des arguments qui pourraient la réfuter.",
            author: "Proverbe"
        },
        {
            id: 41,
            categoryId: 5,
            title: "Visualiser la solution",
            content: "L'esprit est comme un parachute, il ne fonctionne que s'il est ouvert.",
            example: "Utiliser des diagrammes ou des cartes mentales pour représenter le problème et les solutions possibles.",
            application: "Dessinez votre problème et les étapes pour le résoudre. La visualisation aide à clarifier.",
            author: "Frank Zappa"
        },

        // Category 6: Intelligence Émotionnelle (Add 6 more to reach 7+)
        {
            id: 42,
            categoryId: 6,
            title: "Reconnaître ses émotions",
            content: "Ce n'est pas ce qui nous arrive qui compte, mais la façon dont nous réagissons à ce qui nous arrive.",
            example: "Prendre conscience de sa colère avant de la laisser influencer une décision.",
            application: "Pratiquez le 'scan corporel' : où ressentez-vous vos émotions dans votre corps ?",
            author: "Épictète"
        },
        {
            id: 43,
            categoryId: 6,
            title: "Gérer le stress",
            content: "Le stress n'est pas ce qui vous arrive, mais la façon dont vous réagissez à ce qui vous arrive.",
            example: "Utiliser des techniques de relaxation (respiration profonde, méditation) face à une situation stressante.",
            application: "Identifiez vos déclencheurs de stress et développez des stratégies proactives pour y faire face.",
            author: "Hans Selye"
        },
        {
            id: 44,
            categoryId: 6,
            title: "L'empathie, un super-pouvoir",
            content: "Marcher dans les chaussures d'un autre.",
            example: "Essayer de comprendre le point de vue d'un collègue difficile avant de le juger.",
            application: "Avant une conversation difficile, imaginez-vous à la place de l'autre personne et ses motivations.",
            author: "Proverbe amérindien"
        },
        {
            id: 45,
            categoryId: 6,
            title: "Optimisme réaliste",
            content: "Il faut une bonne dose d'optimisme pour être capable de gérer la réalité.",
            example: "Rester positif face à un défi sans ignorer les obstacles concrets.",
            application: "Entourez-vous de personnes positives et pratiquez la gratitude au quotidien.",
            author: "Chris Hadfield"
        },
        {
            id: 46,
            categoryId: 6,
            title: "Motivation intrinsèque",
            content: "Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous découvrez pourquoi.",
            example: "Trouver le sens et la passion dans son travail au-delà de la rémunération.",
            application: "Définissez vos valeurs fondamentales et assurez-vous que vos actions quotidiennes les reflètent.",
            author: "Mark Twain"
        },
        {
            id: 47,
            categoryId: 6,
            title: "Influence positive",
            content: "Vous êtes la moyenne des cinq personnes avec lesquelles vous passez le plus de temps.",
            example: "Choisir consciemment les personnes avec lesquelles on interagit pour leur influence positive.",
            application: "Évaluez votre entourage et cherchez à passer plus de temps avec ceux qui vous inspirent et vous élèvent.",
            author: "Jim Rohn"
        },
        {
            id: 48,
            categoryId: 6,
            title: "Maîtrise de soi",
            content: "Celui qui est maître de soi est plus grand que celui qui est maître du monde.",
            example: "Garder son calme et sa lucidité lors d'une crise professionnelle ou personnelle.",
            application: "Pratiquez des exercices de pleine conscience pour augmenter votre conscience de vos pensées et réactions.",
            author: "Bouddha"
        },
        {
            id: 49,
            categoryId: 6,
            title: "Expression saine des émotions",
            content: "Les émotions non exprimées ne meurent jamais. Elles sont enterrées vivantes et ressortent plus tard sous des formes plus laides.",
            example: "Communiquer ses frustrations de manière calme et constructive plutôt que de les refouler.",
            application: "Trouvez des moyens sains d'exprimer vos émotions : journal intime, parler à un ami de confiance, faire de l'exercice.",
            author: "Sigmund Freud"
        },
        {
            id: 50,
            categoryId: 6,
            title: "Fixer des limites émotionnelles",
            content: "Votre paix intérieure est votre responsabilité.",
            example: "Savoir dire non à des demandes qui drainent votre énergie émotionnelle.",
            application: "Identifiez vos limites et communiquez-les clairement et respectueusement aux autres.",
            author: "Proverbe"
        },

        // Category 7: Stratégie (Add 6 more to reach 7+)
        {
            id: 51,
            categoryId: 7,
            title: "La vision à long terme",
            content: "Si vous ne savez pas où vous allez, n'importe quel chemin vous y mènera.",
            example: "Établir une vision claire et des objectifs à long terme pour une entreprise ou un projet.",
            application: "Passez du temps à définir précisément ce que le succès signifie pour vous dans 5, 10, 20 ans.",
            author: "Lewis Carroll"
        },
        {
            id: 52,
            categoryId: 7,
            title: "L'analyse SWOT",
            content: "Connais-toi toi-même, connais ton ennemi, et tu n'auras pas à craindre le résultat de cent batailles.",
            example: "Réaliser une analyse des forces, faiblesses, opportunités et menaces avant de lancer un projet.",
            application: "Appliquez l'analyse SWOT à vos projets personnels ou professionnels pour une meilleure stratégie.",
            author: "Sun Tzu"
        },
        {
            id: 53,
            categoryId: 7,
            title: "La flexibilité stratégique",
            content: "Le plan est rien, la planification est tout.",
            example: "Avoir un plan, mais être prêt à l'adapter en fonction des nouvelles informations ou circonstances.",
            application: "Réévaluez régulièrement votre stratégie et soyez prêt à pivoter si nécessaire.",
            author: "Dwight D. Eisenhower"
        },
        {
            id: 54,
            categoryId: 7,
            title: "Avantage comparatif",
            content: "Ne cherchez pas à être le meilleur, cherchez à être unique.",
            example: "Une entreprise qui se différencie par un service client exceptionnel plutôt que par les prix les plus bas.",
            application: "Identifiez ce qui vous rend unique (compétence, approche) et capitalisez dessus.",
            author: "Unknown"
        },
        {
            id: 55,
            categoryId: 7,
            title: "L'approche itérative",
            content: "La perfection n'est pas atteignable, mais si nous courons après la perfection, nous pouvons attraper l'excellence.",
            example: "Lancer un produit en version beta pour recueillir des feedbacks et l'améliorer progressivement.",
            application: "Divisez vos grands objectifs en petites étapes, testez, apprenez et ajustez.",
            author: "Vince Lombardi"
        },
        {
            id: 56,
            categoryId: 7,
            title: "La concentration des ressources",
            content: "Le général qui gagne une bataille ne fait pas beaucoup de calculs avant. Le général qui perd une bataille fait beaucoup de calculs avant.",
            example: "Allouer la majorité des ressources d'une entreprise à son cœur de métier le plus rentable.",
            application: "Concentrez votre énergie et vos ressources sur les 20% d'activités qui génèrent 80% des résultats.",
            author: "Sun Tzu"
        },
        {
            id: 57,
            categoryId: 7,
            title: "Mesurer le succès",
            content: "Ce qui est mesuré est géré.",
            example: "Définir des indicateurs clés de performance (KPIs) pour suivre l'avancement d'une stratégie.",
            application: "Fixez des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis).",
            author: "Peter Drucker"
        },
        {
            id: 58,
            categoryId: 7,
            title: "L'art de l'anticipation",
            content: "Les meilleurs stratèges construisent leurs ponts avant d'en avoir besoin.",
            example: "Préparer un plan de continuité des affaires avant une catastrophe potentielle.",
            application: "Identifiez les risques futurs potentiels et élaborez des plans d'atténuation ou de contingence.",
            author: "Sun Tzu"
        },
        {
            id: 59,
            categoryId: 7,
            title: "Le jeu à somme non nulle",
            content: "L'océan bleu existe pour ceux qui osent y nager.",
            example: "Créer un nouveau marché ou segment de clientèle au lieu de se battre sur un marché existant saturé.",
            application: "Cherchez des opportunités où vous pouvez créer de la valeur au lieu de simplement la partager avec des concurrents.",
            author: "W. Chan Kim & Renée Mauborgne"
        },

        // Category 8: Apprentissage (Add 7-9)
        {
            id: 60,
            categoryId: 8,
            title: "L'apprentissage continu",
            content: "Le monde change et évolue, apprenez à vous adapter ou disparaissez.",
            example: "Se tenir informé des nouvelles technologies et compétences requises dans son domaine.",
            application: "Définissez un temps hebdomadaire dédié à l'apprentissage de nouvelles compétences ou connaissances.",
            author: "Proverbe"
        },
        {
            id: 61,
            categoryId: 8,
            title: "Apprendre de ses erreurs",
            content: "Je n'ai pas échoué. J'ai juste trouvé 10 000 façons qui ne fonctionnent pas.",
            example: "Analyser un échec de projet pour en tirer des leçons et éviter de reproduire les mêmes erreurs.",
            application: "Après chaque échec, prenez le temps de débriefing : Qu'est-ce qui s'est passé ? Qu'ai-je appris ? Que ferai-je différemment ?",
            author: "Thomas Edison"
        },
        {
            id: 62,
            categoryId: 8,
            title: "La curiosité est la clé",
            content: "La curiosité est la mèche de la bougie de l'apprentissage.",
            example: "Poser des questions, explorer de nouveaux sujets, ne pas accepter les choses telles quelles.",
            application: "Lisez des livres sur des sujets variés, regardez des documentaires, discutez avec des experts.",
            author: "William Arthur Ward"
        },
        {
            id: 63,
            categoryId: 8,
            title: "La pratique délibérée",
            content: "C'est en forgeant qu'on devient forgeron.",
            example: "Passer des heures à résoudre des problèmes spécifiques pour maîtriser une compétence.",
            application: "Identifiez les domaines où vous voulez vous améliorer et pratiquez délibérément, en recherchant un feedback constant.",
            author: "Proverbe"
        },
        {
            id: 64,
            categoryId: 8,
            title: "L'humilité d'apprendre",
            content: "Le sage ne se croit pas sage.",
            example: "Reconnaître qu'on ne sait pas tout et être ouvert aux nouvelles idées, même venant de juniors.",
            application: "Adoptez une mentalité de 'débutant' même dans votre domaine d'expertise.",
            author: "Lao Tzu"
        },
        {
            id: 65,
            categoryId: 8,
            title: "Le mentorat et le coaching",
            content: "Si j'ai vu plus loin, c'est en montant sur les épaules de géants.",
            example: "Chercher des mentors pour guider son parcours professionnel et personnel.",
            application: "Identifiez des personnes que vous admirez et demandez-leur conseil, ou trouvez un coach.",
            author: "Isaac Newton"
        },
        {
            id: 66,
            categoryId: 8,
            title: "Transférer les connaissances",
            content: "Le savoir n'est utile que s'il est partagé.",
            example: "Organiser des sessions de partage de connaissances au sein de l'équipe ou de l'entreprise.",
            application: "Enseignez ce que vous apprenez aux autres. Expliquer renforce votre propre compréhension.",
            author: "Proverbe"
        },
        {
            id: 67,
            categoryId: 8,
            title: "L'apprentissage interculturel",
            content: "Voyager, c'est apprendre à écouter ce que les autres ont à dire.",
            example: "S'immerger dans d'autres cultures pour élargir sa perspective et ses méthodes de pensée.",
            application: "Exposez-vous à différentes cultures, que ce soit par le voyage, la lecture ou les interactions.",
            author: "Claude Lévi-Strauss"
        },
        {
            id: 68,
            categoryId: 8,
            title: "La lecture comme outil",
            content: "Un livre est une arme. C'est l'arme la plus puissante du monde.",
            example: "Lire régulièrement des livres sur des sujets variés pour acquérir de nouvelles compétences.",
            application: "Défiez-vous à lire un livre par mois sur un sujet en dehors de votre zone de confort.",
            author: "Khalil Gibran"
        },

        // Category 9: Relations (Add 7-9)
        {
            id: 69,
            categoryId: 9,
            title: "Construire la confiance",
            content: "La confiance est le ciment de toute relation.",
            example: "Tenir ses promesses, être transparent et respecter ses engagements.",
            application: "Soyez fiable et intègre dans toutes vos interactions. La confiance se construit sur la durée.",
            author: "Stephen Covey"
        },
        {
            id: 70,
            categoryId: 9,
            title: "La communication non violente",
            content: "Parlez pour être compris, écoutez pour comprendre.",
            example: "Exprimer ses besoins sans accuser l'autre, se concentrer sur les faits et les sentiments.",
            application: "Utilisez le modèle OSBD (Observation, Sentiment, Besoin, Demande) pour vos communications difficiles.",
            author: "Marshall Rosenberg"
        },
        {
            id: 71,
            categoryId: 9,
            title: "L'appréciation des différences",
            content: "Si deux personnes ont toujours la même opinion, l'une d'elles est inutile.",
            example: "Valoriser la diversité des opinions et des approches au sein d'une équipe.",
            application: "Recherchez activement des points de vue différents du vôtre avant de prendre une décision.",
            author: "Winston Churchill"
        },
        {
            id: 72,
            categoryId: 9,
            title: "Gérer les conflits",
            content: "Le conflit n'est pas l'absence d'amour. Le conflit est le reflet des tentatives d'amour.",
            example: "Aborder les désaccords directement et constructivement, en cherchant une solution mutuellement acceptable.",
            application: "En cas de conflit, concentrez-vous sur le problème, pas sur la personne, et cherchez des solutions gagnant-gagnant.",
            author: "Gandhi"
        },
        {
            id: 73,
            categoryId: 9,
            title: "Le réseautage intentionnel",
            content: "Votre réseau est votre richesse.",
            example: "Participer à des événements professionnels pour rencontrer de nouvelles personnes et établir des liens.",
            application: "Cultivez votre réseau en offrant de l'aide avant d'en demander. La réciprocité est clé.",
            author: "Proverbe"
        },
        {
            id: 74,
            categoryId: 9,
            title: "Le pardon",
            content: "Le pardon ne change pas le passé, mais il élargit l'avenir.",
            example: "Pardonner une erreur à un collègue pour avancer et maintenir une relation de travail saine.",
            application: "Pratiquez le pardon, envers les autres et envers vous-même, pour vous libérer du ressentiment.",
            author: "Paul Boese"
        },
        {
            id: 75,
            categoryId: 9,
            title: "L'authenticité",
            content: "Soyez vous-même, tous les autres sont déjà pris.",
            example: "Exprimer ses vraies opinions et sentiments tout en étant respectueux.",
            application: "N'ayez pas peur de montrer votre vulnérabilité. Cela renforce les liens authentiques.",
            author: "Oscar Wilde"
        },
        {
            id: 76,
            categoryId: 9,
            title: "La gratitude",
            content: "La gratitude est la plus belle fleur qui jaillit de l'âme.",
            example: "Remercier sincèrement un collègue pour son aide ou son soutien.",
            application: "Exprimez régulièrement votre gratitude aux personnes qui comptent pour vous, professionnellement et personnellement.",
            author: "Henry Ward Beecher"
        },
        {
            id: 77,
            categoryId: 9,
            title: "L'investissement dans les relations",
            content: "Les relations humaines sont le pétrole d'une civilisation.",
            example: "Prendre le temps de déjeuner avec des collègues, même si ce n'est pas directement lié au travail.",
            application: "Considérez les relations comme un investissement à long terme. Donnez avant de recevoir.",
            author: "Paul Valéry"
        },

        // Category 10: Éthique (Add 7-9)
        {
            id: 78,
            categoryId: 10,
            title: "L'intégrité",
            content: "Fais ce que tu dis et dis ce que tu fais.",
            example: "Respecter ses promesses et ses engagements, même face à des pressions.",
            application: "Alignez vos paroles et vos actions. Votre réputation est votre actif le plus précieux.",
            author: "Proverbe"
        },
        {
            id: 79,
            categoryId: 10,
            title: "La transparence",
            content: "L'honnêteté est la meilleure des politiques.",
            example: "Communiquer ouvertement les défis et les succès à son équipe et aux parties prenantes.",
            application: "Soyez transparent sur vos intentions et vos processus, cela renforce la confiance.",
            author: "Benjamin Franklin"
        },
        {
            id: 80,
            categoryId: 10,
            title: "La responsabilité",
            content: "Ce n'est pas parce que c'est difficile que nous n'osons pas, c'est parce que nous n'osons pas que c'est difficile.",
            example: "Prendre la responsabilité de ses erreurs et en tirer les leçons, sans rejeter la faute.",
            application: "Assumez les conséquences de vos actions et inactions. Le blâme est contre-productif.",
            author: "Sénèque"
        },
        {
            id: 81,
            categoryId: 10,
            title: "Le bien commun",
            content: "Un individu n'a pas vécu pour rien s'il a allégé le fardeau d'une seule autre personne.",
            example: "Prendre des décisions qui bénéficient à la communauté ou à la société, au-delà du seul profit.",
            application: "Avant chaque décision, demandez-vous : 'Quel est l'impact sur les autres et sur le bien commun ?'",
            author: "Charles Dickens"
        },
        {
            id: 82,
            categoryId: 10,
            title: "La justice et l'équité",
            content: "Traite les autres comme tu voudrais être traité.",
            example: "Appliquer les mêmes règles et standards à tous les membres de l'équipe, sans favoritisme.",
            application: "Assurez-vous que vos décisions sont équitables et justes pour toutes les parties concernées.",
            author: "La Règle d'or"
        },
        {
            id: 83,
            categoryId: 10,
            title: "Le respect de la vie privée",
            content: "Ne fais pas aux autres ce que tu ne voudrais pas qu'ils te fassent.",
            example: "Protéger les données personnelles des clients ou des employés et ne pas les partager sans consentement.",
            application: "Respectez la confidentialité et la vie privée d'autrui comme vous respecteriez la vôtre.",
            author: "Confucius"
        },
        {
            id: 84,
            categoryId: 10,
            title: "La persévérance éthique",
            content: "Le vrai test de caractère ne vient pas quand tout va bien, mais quand vous affrontez la controverse et le défi.",
            example: "Maintenir ses principes éthiques même sous pression ou face à des gains potentiels importants mais malhonnêtes.",
            application: "Définissez un code d'éthique personnel et professionnel et tenez-vous-y fermement.",
            author: "Martin Luther King Jr."
        },
        {
            id: 85,
            categoryId: 10,
            title: "L'éthique de la donnée",
            content: "Avec un grand pouvoir vient une grande responsabilité.",
            example: "Utiliser les données de manière responsable et ne pas les manipuler pour induire en erreur.",
            application: "Lorsque vous travaillez avec des données, assurez-vous de leur intégrité et de leur utilisation éthique.",
            author: "Voltaire / Spider-Man"
        },
        {
            id: 86,
            categoryId: 10,
            title: "L'exemple moral",
            content: "Votre vie est votre message au monde.",
            example: "Agir de manière à être un modèle d'intégrité et de comportement éthique pour les autres.",
            application: "Soyez conscient que vos actions, plus que vos paroles, définissent votre éthique.",
            author: "Gandhi"
        },

        // Category 11: Adaptabilité (Add 7-9)
        {
            id: 87,
            categoryId: 11,
            title: "Le changement est la seule constante",
            content: "Ce n'est pas le plus fort de l'espèce qui survit, ni le plus intelligent. C'est celui qui sait le mieux s'adapter au changement.",
            example: "Une entreprise qui réussit à pivoter son modèle d'affaires face à une perturbation du marché.",
            application: "Accueillez le changement comme une opportunité plutôt qu'une menace. Développez votre résilience.",
            author: "Charles Darwin"
        },
        {
            id: 88,
            categoryId: 11,
            title: "La flexibilité mentale",
            content: "L'obstination est la voie de la défaite.",
            example: "Être capable de revoir ses positions et ses croyances face à de nouvelles preuves.",
            application: "Exercez votre esprit à envisager plusieurs perspectives et à changer d'avis quand les faits le justifient.",
            author: "Sun Tzu"
        },
        {
            id: 89,
            categoryId: 11,
            title: "L'apprentissage rapide",
            content: "Le taux d'apprentissage de l'organisation doit être égal ou supérieur au taux de changement de l'environnement.",
            example: "Former rapidement ses équipes aux nouvelles technologies ou méthodologies.",
            application: "Investissez dans votre propre apprentissage et celui de votre équipe pour rester pertinent.",
            author: "Reg Revans"
        },
        {
            id: 90,
            categoryId: 11,
            title: "La pensée agile",
            content: "Livrer de la valeur tôt et souvent, et s'adapter au changement.",
            example: "Développer des projets par itérations courtes, en intégrant les retours à chaque étape.",
            application: "Adoptez une approche agile dans vos projets : planifiez, exécutez, évaluez, ajustez.",
            author: "Principes Agile"
        },
        {
            id: 91,
            categoryId: 11,
            title: "La résilience",
            content: "Tomber sept fois, se relever huit.",
            example: "Se remettre d'un échec ou d'une déception et continuer à avancer avec détermination.",
            application: "Cultivez votre capacité à rebondir après les difficultés. Chaque chute est une occasion d'apprendre.",
            author: "Proverbe japonais"
        },
        {
            id: 92,
            categoryId: 11,
            title: "L'expérimentation",
            content: "Celui qui ne fait pas d'erreurs ne fait rien.",
            example: "Lancer de petites expériences pour tester de nouvelles idées avant un déploiement à grande échelle.",
            application: "Osez sortir de votre zone de confort et tester de nouvelles approches. L'échec fait partie du processus.",
            author: "Theodore Roosevelt"
        },
        {
            id: 93,
            categoryId: 11,
            title: "L'ouverture au feedback",
            content: "Le feedback est le don d'une nouvelle perspective.",
            example: "Solliciter activement les retours des autres pour s'améliorer et s'adapter.",
            application: "Cherchez le feedback, même s'il est critique. C'est une source précieuse d'information pour l'adaptation.",
            author: "Proverbe"
        },
        {
            id: 94,
            categoryId: 11,
            title: "Le désapprentissage",
            content: "Le problème n'est pas d'apprendre des choses nouvelles, c'est de désapprendre les anciennes.",
            example: "Abandonner des méthodes de travail obsolètes, même si elles ont été efficaces par le passé.",
            application: "Identifiez les habitudes ou les croyances qui vous limitent et travaillez consciemment à les 'désapprendre'.",
            author: "Herbert Simon"
        },
        {
            id: 95,
            categoryId: 11,
            title: "Anticiper le changement",
            content: "Prépare-toi pour le pire, espère le meilleur.",
            example: "Réaliser une veille stratégique pour identifier les tendances émergentes et leurs impacts potentiels.",
            application: "Développez une habitude d'analyse prospective pour mieux anticiper et vous préparer aux évolutions.",
            author: "Proverbe"
        },

        // Category 12: Bien-être (Add 7-9)
        {
            id: 96,
            categoryId: 12,
            title: "L'équilibre vie pro/perso",
            content: "Personne sur son lit de mort n'a jamais souhaité avoir passé plus de temps au bureau.",
            example: "Fixer des limites claires entre le travail et la vie personnelle pour éviter le burnout.",
            application: "Définissez vos priorités au-delà du travail et bloquez du temps pour elles dans votre agenda.",
            author: "Attr. à Stephen Covey"
        },
        {
            id: 97,
            categoryId: 12,
            title: "Prendre soin de son corps",
            content: "Un esprit sain dans un corps sain.",
            example: "Pratiquer une activité physique régulière et adopter une alimentation équilibrée.",
            application: "Intégrez l'exercice et une nutrition saine dans votre routine quotidienne comme une priorité.",
            author: "Juvénal"
        },
        {
            id: 98,
            categoryId: 12,
            title: "La pleine conscience",
            content: "Vivez l'instant présent.",
            example: "Se concentrer pleinement sur une tâche ou une activité sans se laisser distraire par les pensées passées ou futures.",
            application: "Pratiquez la méditation de pleine conscience quelques minutes par jour pour ancrer votre esprit.",
            author: "Bouddha"
        },
        {
            id: 99,
            categoryId: 12,
            title: "La gestion du stress (Bien-être)",
            content: "Le calme est la plus grande arme contre le stress.",
            example: "Développer des techniques de relaxation ou des hobbies pour décompresser après une journée intense.",
            application: "Identifiez ce qui vous aide à vous détendre (musique, lecture, nature) et intégrez-le régulièrement.",
            author: "Proverbe"
        },
        {
            id: 100,
            categoryId: 12,
            title: "Le sommeil réparateur",
            content: "Le repos est la clé de la productivité.",
            example: "Prioriser un sommeil de qualité en respectant un horaire régulier et un environnement propice.",
            application: "Créez une routine de sommeil, éteignez les écrans avant le coucher et assurez-vous que votre chambre est sombre et calme.",
            author: "Proverbe"
        },
        {
            id: 101,
            categoryId: 12,
            title: "La connexion sociale",
            content: "Le bonheur, c'est la connexion.",
            example: "Entretenir des relations saines avec la famille, les amis et les collègues.",
            application: "Prenez régulièrement des nouvelles de vos proches et participez à des activités sociales.",
            author: "Proverbe"
        },
        {
            id: 102,
            categoryId: 12,
            title: "Le sens et le but",
            content: "Celui qui a un 'pourquoi' pour vivre peut supporter presque n'importe quel 'comment'.",
            example: "Aligner ses actions avec ses valeurs profondes et ses objectifs de vie.",
            application: "Passez du temps à réfléchir à ce qui donne du sens à votre vie et à votre travail.",
            author: "Friedrich Nietzsche"
        },
        {
            id: 103,
            categoryId: 12,
            title: "L'auto-compassion",
            content: "Soyez aussi bon envers vous-même que vous le seriez envers votre meilleur ami.",
            example: "Éviter l'auto-critique excessive et se traiter avec gentillesse en cas d'échec.",
            application: "Lorsque vous faites face à des difficultés, parlez-vous avec bienveillance, comme vous le feriez pour un être cher.",
            author: "Kristin Neff"
        },
        {
            id: 104,
            categoryId: 12,
            title: "Le lâcher-prise",
            content: "Le contrôle est une illusion.",
            example: "Accepter les choses que l'on ne peut pas changer et se concentrer sur celles que l'on peut influencer.",
            application: "Pratiquez le lâcher-prise sur les situations ou les résultats qui échappent à votre contrôle.",
            author: "Proverbe"
        }
    ],
    quizzes: [
        // Quizzes for Category 1: Communication (at least 3 questions)
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
                },
                {
                    question: "Pourquoi est-il important de 'compter à 5' avant de répondre dans une conversation importante ?",
                    options: [
                        "Pour paraître plus réfléchi",
                        "Pour laisser l'autre personne parler davantage",
                        "Pour éviter une réponse impulsive et potentiellement regrettable",
                        "Pour se souvenir de ce qu'on voulait dire"
                    ],
                    answer: 2,
                    explanation: "Prendre un instant avant de répondre permet de filtrer les impulsions et de formuler une réponse plus sage."
                }
            ]
        },
        // Quizzes for Category 2: Décision (at least 3 questions)
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
                },
                {
                    question: "Selon Lao Tzu, quelle est la différence entre l'intelligent et le sage face aux problèmes ?",
                    options: [
                        "L'intelligent les crée, le sage les subit.",
                        "L'intelligent les résout, le sage les évite.",
                        "L'intelligent les analyse, le sage les ignore.",
                        "L'intelligent les amplifie, le sage les minimise."
                    ],
                    answer: 1,
                    explanation: "Lao Tzu souligne que l'intelligence se manifeste dans la résolution, tandis que la sagesse prévient."
                }
            ]
        },
        // Quizzes for Category 3: Leadership (at least 3 questions)
        {
            wisdomId: 3, // Quiz for "Servir pour diriger"
            questions: [
                {
                    question: "Selon Lao Tzu, comment se manifeste le meilleur leader ?",
                    options: [
                        "Par sa forte présence et son contrôle direct",
                        "Par sa capacité à être à peine remarqué, car l'équipe est autonome",
                        "Par le nombre de décisions qu'il prend",
                        "Par sa capacité à déléguer toutes les tâches"
                    ],
                    answer: 1,
                    explanation: "Le meilleur leader est celui dont l'influence est si subtile que l'équipe pense avoir accompli les choses par elle-même."
                },
                {
                    question: "Pourquoi un CEO devrait-il mettre en avant les réalisations de son équipe plutôt que les siennes ?",
                    options: [
                        "Pour éviter d'être critiqué",
                        "Pour inspirer et motiver l'équipe, et renforcer leur sentiment d'appartenance",
                        "Pour cacher ses propres faiblesses",
                        "Pour se décharger de la responsabilité"
                    ],
                    answer: 1,
                    explanation: "Mettre en avant l'équipe renforce la cohésion, la motivation et le sentiment d'accomplissement collectif."
                },
                {
                    question: "Quel type de question un leader doit-il se poser chaque jour pour appliquer la sagesse 'Servir pour diriger' ?",
                    options: [
                        "Comment puis-je augmenter ma propre productivité ?",
                        "Comment puis-je aider mon équipe à réussir ?",
                        "Quels sont les problèmes que je dois résoudre seul aujourd'hui ?",
                        "Comment puis-je prouver mon autorité ?"
                    ],
                    answer: 1,
                    explanation: "Se concentrer sur l'aide à l'équipe est l'essence du leadership de service."
                }
            ]
        },
        // Quizzes for Category 4: Gestion du Temps (at least 3 questions)
        {
            wisdomId: 4, // Quiz for "Prioriser l'important"
            questions: [
                {
                    question: "Quelle matrice est recommandée pour classer les tâches quotidiennes selon leur importance et leur urgence ?",
                    options: [
                        "La matrice SWOT",
                        "La matrice BCG",
                        "La matrice d'Eisenhower",
                        "La matrice Ansoff"
                    ],
                    answer: 2,
                    explanation: "La matrice d'Eisenhower est spécifiquement conçue pour la gestion du temps basée sur l'urgence et l'importance."
                },
                {
                    question: "Selon la sagesse, pourquoi est-il dangereux de se concentrer uniquement sur les tâches urgentes ?",
                    options: [
                        "Parce qu'elles sont rarement importantes et détournent des objectifs stratégiques.",
                        "Parce qu'elles sont généralement faciles à déléguer.",
                        "Parce qu'elles créent du stress inutile.",
                        "Parce qu'elles ne mènent jamais à des résultats concrets."
                    ],
                    answer: 0,
                    explanation: "Les tâches urgentes peuvent nous empêcher de travailler sur ce qui est réellement important pour nos objectifs à long terme."
                },
                {
                    question: "Quel est un exemple de tâche importante mais non urgente ?",
                    options: [
                        "Répondre à un appel d'urgence d'un client",
                        "Élaborer une stratégie à long terme pour l'entreprise",
                        "Régler un problème technique bloquant la production",
                        "Payer une facture dont la date limite est aujourd'hui"
                    ],
                    answer: 1,
                    explanation: "L'élaboration de stratégies est cruciale pour l'avenir mais n'est pas toujours soumise à une échéance immédiate."
                }
            ]
        },
        // Quizzes for Category 5: Résolution de Problèmes (at least 3 questions)
        {
            wisdomId: 5, // Quiz for "Résolution systémique"
            questions: [
                {
                    question: "Selon Russell Ackoff, si vous ne trouvez pas de solution, que devriez-vous faire ?",
                    options: [
                        "Abandonner le problème",
                        "Demander à quelqu'un d'autre de le résoudre",
                        "Élargir le cadre de votre réflexion",
                        "Vous concentrer uniquement sur les symptômes"
                    ],
                    answer: 2,
                    explanation: "Ackoff suggère que la solution se trouve souvent en changeant la perspective ou le niveau d'analyse du problème."
                },
                {
                    question: "Quel est l'objectif de se poser la question 'Qu'est-ce qui dans le système permet que ce problème existe ?' ?",
                    options: [
                        "Trouver un coupable",
                        "Identifier les causes profondes et structurelles du problème",
                        "Démontrer la complexité du système",
                        "Se décharger de la responsabilité"
                    ],
                    answer: 1,
                    explanation: "Cette question vise à passer des symptômes aux causes systémiques pour une résolution durable."
                },
                {
                    question: "Un employé est toujours en retard. Selon la résolution systémique, quelle approche est la plus sage ?",
                    options: [
                        "Le sanctionner immédiatement",
                        "Analyser son emploi du temps personnel",
                        "Examiner l'organisation du travail et les contraintes qui mènent aux retards",
                        "Le licencier"
                    ],
                    answer: 2,
                    explanation: "La résolution systémique cherche les causes profondes dans l'environnement de travail plutôt que d'attribuer la faute à l'individu."
                }
            ]
        },
        // Quizzes for Category 6: Intelligence Émotionnelle (at least 3 questions)
        {
            wisdomId: 6, // Quiz for "Contrôle émotionnel"
            questions: [
                {
                    question: "Que représente l'espace entre le stimulus et la réponse dans la citation de Viktor Frankl ?",
                    options: [
                        "Le temps perdu",
                        "Notre capacité à choisir notre réaction",
                        "Le moment où l'on devient en colère",
                        "L'opportunité de fuir la situation"
                    ],
                    answer: 1,
                    explanation: "Cet espace symbolise notre liberté de ne pas réagir de manière impulsive mais de choisir une réponse consciente."
                },
                {
                    question: "Quelle est une application pratique pour développer le contrôle émotionnel ?",
                    options: [
                        "Répondre immédiatement à tout message",
                        "Développer un rituel de pause avant de réagir émotionnellement",
                        "Ignorer ses émotions",
                        "Laisser les émotions dicter vos actions"
                    ],
                    answer: 1,
                    explanation: "Mettre en place un rituel permet d'interrompre le cycle stimulus-réponse et d'introduire un choix conscient."
                },
                {
                    question: "Vous recevez un email agressif. Quelle est l'action la plus sage basée sur le contrôle émotionnel ?",
                    options: [
                        "Répondre immédiatement avec la même agressivité",
                        "Supprimer l'email et l'ignorer",
                        "Prendre du recul (marcher, respirer) avant de formuler une réponse",
                        "Se plaindre à un collègue"
                    ],
                    answer: 2,
                    explanation: "Prendre du recul permet de gérer la réaction émotionnelle initiale et d'envoyer une réponse plus appropriée et professionnelle."
                }
            ]
        },
        // Quizzes for Category 7: Stratégie (at least 3 questions)
        {
            wisdomId: 7, // Quiz for "Perspective long terme"
            questions: [
                {
                    question: "Que signifie la citation 'Quand vous jouez aux échecs, ne regardez pas seulement le prochain coup, mais toute la partie' en stratégie ?",
                    options: [
                        "Il faut toujours planifier plusieurs coups à l'avance",
                        "Il faut anticiper les conséquences lointaines de chaque décision",
                        "Il faut être un bon joueur d'échecs pour être stratège",
                        "Il faut se concentrer sur les victoires à court terme"
                    ],
                    answer: 1,
                    explanation: "La vraie stratégie implique de comprendre l'impact futur de vos actions présentes, bien au-delà de l'immédiat."
                },
                {
                    question: "Pourquoi un PDG pourrait-il refuser une opportunité lucrative à court terme selon la perspective à long terme ?",
                    options: [
                        "Parce qu'il ne voit pas l'intérêt de l'argent",
                        "Pour préserver des valeurs ou une culture d'entreprise cruciales pour la pérennité",
                        "Par peur du risque",
                        "Pour éviter de surcharger l'équipe"
                    ],
                    answer: 1,
                    explanation: "Les décisions stratégiques priorisent souvent les bénéfices à long terme (comme la culture ou la réputation) sur les gains financiers immédiats."
                },
                {
                    question: "Quelle est une application clé de la 'perspective long terme' pour une décision importante ?",
                    options: [
                        "Prendre la décision la plus rapide possible",
                        "Ignorer les risques futurs",
                        "Imaginer les conséquences de la décision dans 1, 5 et 10 ans",
                        "Se fier uniquement à l'intuition"
                    ],
                    answer: 2,
                    explanation: "Évaluer les impacts à différentes échelles de temps est essentiel pour une décision stratégiquement sage."
                }
            ]
        },
        // Quizzes for Category 8: Apprentissage (at least 3 questions)
        {
            wisdomId: 60, // Quiz for "L'apprentissage continu"
            questions: [
                {
                    question: "Pourquoi est-il crucial d'adopter une attitude d'apprentissage continu ?",
                    options: [
                        "Pour devenir un expert dans un seul domaine fixe",
                        "Pour s'adapter à un monde en constante évolution",
                        "Pour éviter de faire des erreurs",
                        "Pour prouver sa supériorité intellectuelle"
                    ],
                    answer: 1,
                    explanation: "L'apprentissage continu est vital pour rester pertinent et efficace dans un environnement qui change rapidement."
                },
                {
                    question: "Quelle est une méthode efficace pour apprendre de ses erreurs ?",
                    options: [
                        "Les ignorer et passer à autre chose",
                        "Les attribuer aux autres",
                        "Les analyser pour en tirer des leçons et ajuster son approche",
                        "Les cacher pour ne pas être jugé"
                    ],
                    answer: 2,
                    explanation: "L'analyse post-mortem des erreurs est une méthode puissante pour l'amélioration continue."
                },
                {
                    question: "Que signifie 'la curiosité est la mèche de la bougie de l'apprentissage' ?",
                    options: [
                        "Que l'apprentissage est une activité solitaire",
                        "Que la curiosité allume et maintient le désir d'apprendre",
                        "Que la curiosité est une distraction",
                        "Qu'il faut se contenter de ce que l'on sait déjà"
                    ],
                    answer: 1,
                    explanation: "La curiosité est le moteur qui pousse à explorer, découvrir et acquérir de nouvelles connaissances."
                }
            ]
        },
        // Quizzes for Category 9: Relations (at least 3 questions)
        {
            wisdomId: 69, // Quiz for "Construire la confiance"
            questions: [
                {
                    question: "Quel est le fondement de toute relation saine, selon Stephen Covey ?",
                    options: [
                        "La richesse",
                        "Le pouvoir",
                        "La confiance",
                        "Le succès individuel"
                    ],
                    answer: 2,
                    explanation: "La confiance est essentielle pour des relations solides et durables, qu'elles soient personnelles ou professionnelles."
                },
                {
                    question: "Comment pratiquer la 'communication non violente' dans une conversation difficile ?",
                    options: [
                        "Accuser l'autre de ses torts",
                        "Se concentrer sur les faits, ses sentiments et ses besoins pour exprimer une demande",
                        "Crier pour se faire entendre",
                        "Éviter le dialogue pour ne pas générer de conflit"
                    ],
                    answer: 1,
                    explanation: "La CNV encourage l'expression authentique des besoins sans jugement ni accusation, favorisant la compréhension mutuelle."
                },
                {
                    question: "Pourquoi est-il important d'apprécier les différences d'opinions dans une équipe ?",
                    options: [
                        "Pour créer plus de désaccords",
                        "Pour stimuler la créativité et trouver des solutions plus robustes",
                        "Pour prouver que l'on a toujours raison",
                        "Pour ralentir le processus de décision"
                    ],
                    answer: 1,
                    explanation: "La diversité des opinions enrichit la réflexion, permet d'explorer plus de facettes et conduit à de meilleures décisions."
                }
            ]
        },
        // Quizzes for Category 10: Éthique (at least 3 questions)
        {
            wisdomId: 78, // Quiz for "L'intégrité"
            questions: [
                {
                    question: "Que signifie vivre avec intégrité ?",
                    options: [
                        "Faire ce qui est facile",
                        "Aligner ses paroles et ses actions, être honnête et moral",
                        "Changer ses principes selon les circonstances",
                        "Ne se soucier que de son propre intérêt"
                    ],
                    answer: 1,
                    explanation: "L'intégrité implique une cohérence entre ce que l'on dit, ce que l'on fait et les valeurs que l'on prône."
                },
                {
                    question: "Selon la sagesse, quelle est la 'meilleure des politiques' ?",
                    options: [
                        "La diplomatie",
                        "La ruse",
                        "La transparence et l'honnêteté",
                        "Le secret"
                    ],
                    answer: 2,
                    explanation: "L'honnêteté et la transparence construisent la confiance et une réputation solide à long terme."
                },
                {
                    question: "Pourquoi est-il important de prendre la responsabilité de ses erreurs ?",
                    options: [
                        "Pour être puni",
                        "Pour en tirer des leçons et démontrer sa maturité",
                        "Pour rejeter la faute sur autrui",
                        "Pour paraître faible"
                    ],
                    answer: 1,
                    explanation: "Assumer ses responsabilités est un signe de maturité et une opportunité d'apprentissage et de croissance."
                }
            ]
        },
        // Quizzes for Category 11: Adaptabilité (at least 3 questions)
        {
            wisdomId: 87, // Quiz for "Le changement est la seule constante"
            questions: [
                {
                    question: "Quelle est la meilleure approche face au changement selon Charles Darwin ?",
                    options: [
                        "Résister au changement à tout prix",
                        "Ignorer le changement en espérant qu'il disparaisse",
                        "S'adapter et évoluer avec le changement",
                        "Laisser les autres s'adapter en premier"
                    ],
                    answer: 2,
                    explanation: "Darwin souligne que la capacité d'adaptation est clé pour la survie et le succès."
                },
                {
                    question: "Comment la 'flexibilité mentale' aide-t-elle à l'adaptabilité ?",
                    options: [
                        "En s'accrochant à ses premières idées",
                        "En étant incapable de revoir ses positions",
                        "En étant ouvert à de nouvelles perspectives et en pouvant changer d'avis",
                        "En ne pensant qu'à une seule solution"
                    ],
                    answer: 2,
                    explanation: "La flexibilité mentale permet de s'ajuster aux nouvelles informations et aux réalités changeantes."
                },
                {
                    question: "Pourquoi l'expérimentation est-elle une composante clé de l'adaptabilité ?",
                    options: [
                        "Pour garantir le succès dès le premier essai",
                        "Pour éviter tout risque d'échec",
                        "Pour tester de nouvelles idées, apprendre rapidement et pivoter si nécessaire",
                        "Pour prouver que l'on a toujours raison"
                    ],
                    answer: 2,
                    explanation: "L'expérimentation permet d'apprendre de manière empirique et d'affiner son approche face à l'incertitude."
                }
            ]
        },
        // Quizzes for Category 12: Bien-être (at least 3 questions)
        {
            wisdomId: 96, // Quiz for "L'équilibre vie pro/perso"
            questions: [
                {
                    question: "Pourquoi est-il essentiel de maintenir un bon équilibre entre vie professionnelle et personnelle ?",
                    options: [
                        "Pour travailler plus d'heures au bureau",
                        "Pour éviter le burnout et maintenir une bonne santé mentale et physique",
                        "Pour prouver que l'on n'a pas d'ambition",
                        "Pour être moins performant au travail"
                    ],
                    answer: 1,
                    explanation: "Un équilibre sain est crucial pour la durabilité de la performance et le bien-être général."
                },
                {
                    question: "Quelle est une pratique de pleine conscience efficace pour vivre l'instant présent ?",
                    options: [
                        "Penser constamment au passé et au futur",
                        "La méditation ou des exercices de respiration consciente",
                        "Se laisser distraire par les notifications",
                        "Faire plusieurs tâches en même temps"
                    ],
                    answer: 1,
                    explanation: "La pleine conscience ancre l'esprit dans le moment présent, réduisant l'anxiété et augmentant la concentration."
                },
                {
                    question: "Pourquoi le sommeil réparateur est-il considéré comme un pilier du bien-être et de la productivité ?",
                    options: [
                        "Pour prolonger le temps d'éveil",
                        "Pour recharger le corps et l'esprit, améliorer la concentration et l'humeur",
                        "Pour ne pas avoir à travailler",
                        "Pour se fatiguer davantage"
                    ],
                    answer: 1,
                    explanation: "Un sommeil de qualité est fondamental pour la récupération physique et mentale, influençant directement la performance et l'humeur."
                }
            ]
        }
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
        // Add more simulations for other wisdoms.
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initDashboard();
    
    // Set up event listeners
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('simulation-next').addEventListener('click', nextSimulationStep);

    // Smooth scroll for "Commencer le voyage" button
    document.querySelector('.hero-section .btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('dashboard').scrollIntoView({
            behavior: 'smooth'
        });
    });
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
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            filterByCategory(category.id);
            // Scroll to the wisdom cards section after filtering
            document.getElementById('wisdom-cards-container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
// Add event listener for refresh wisdom button
document.getElementById('refresh-wisdom').addEventListener('click', loadWisdomOfTheDay);

// Modified loadWisdomOfTheDay function to handle both initial load and refresh
function loadWisdomOfTheDay() {
    const container = document.getElementById('wisdom-of-the-day');
    const randomIndex = Math.floor(Math.random() * wisdoms.items.length);
    const wisdom = wisdoms.items[randomIndex];
    const category = wisdoms.categories.find(c => c.id === wisdom.categoryId);
    
    // Add fade-out then fade-in animation
    container.style.opacity = 0;
    setTimeout(() => {
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
        container.style.opacity = 1;
    }, 300);
}

/* function loadWisdomCards(filterCategoryId = null) {
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
					<br>
                    <h5 class="card-title">${wisdom.title}</h5>
                    <p class="card-text">${wisdom.content}</p>
                    <div class="d-flex align-items-center mt-3">
                        <div class="progress flex-grow-1 me-2" style="height: 5px;">
                            <div class="progress-bar bg-${category.color}" style="width: ${Math.random() * 100}%"></div>
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
    // Update the section title
    const sectionTitleElement = document.querySelector('.card.shadow-sm .card-header.bg-success h5');
    if (filterCategoryId) {
        const categoryName = wisdoms.categories.find(c => c.id === filterCategoryId).name;
        sectionTitleElement.textContent = `Explorer les Sagesses: ${categoryName}`;
    } else {
        sectionTitleElement.textContent = `Explorer les Sagesses`;
    }
}
 */
// Filter by category (renamed for clarity to ensure it updates the section title)
function filterByCategory(categoryId) {
    loadWisdomCards(categoryId);
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
        confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue(`--${category.color}-color`).trim(),
        footer: `<span class="badge bg-${category.color}">${category.name}</span>`,
        width: '800px'
    });
}

// Quiz functionality
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0; // To track score for learn mode

function startQuiz(wisdomId) {
    currentQuiz = wisdoms.quizzes.find(q => q.wisdomId === wisdomId);
    if (!currentQuiz || currentQuiz.questions.length === 0) {
        Swal.fire('Info', 'Pas de quiz disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentQuestionIndex = 0;
    quizScore = 0; // Reset score for new quiz
    showQuestion();
    const quizModal = new bootstrap.Modal(document.getElementById('quizModal'));
    quizModal.show();
}

function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const container = document.getElementById('quiz-content');
    
    container.innerHTML = `
        <div class="quiz-question mb-4">
            <h5>Question ${currentQuestionIndex + 1} / ${currentQuiz.questions.length}:</h5>
            <p>${question.question}</p>
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
    
    if (isCorrect) {
        quizScore++;
    }

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
            Swal.fire({
                title: 'Quiz terminé !',
                html: `Vous avez obtenu ${quizScore} bonnes réponses sur ${currentQuiz.questions.length}.`,
                icon: 'success',
                confirmButtonText: 'Fermer'
            });
            document.getElementById('quizModal').querySelector('.btn-close').click();
        }
    });
}

// Simulation functionality
let currentSimulation = null;
let currentSimulationStep = 0;
let simulationScore = 0; // To track simulation performance

function startSimulation(wisdomId) {
    currentSimulation = wisdoms.simulations.find(s => s.wisdomId === wisdomId);
    if (!currentSimulation || currentSimulation.steps.length === 0) {
        Swal.fire('Info', 'Pas de simulation disponible pour cette sagesse pour le moment.', 'info');
        return;
    }
    
    currentSimulationStep = 0;
    simulationScore = 0; // Reset score for new simulation
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
            <h5>Étape ${currentSimulationStep + 1} / ${currentSimulation.steps.length}:</h5>
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
    
    if (isBestOption) {
        simulationScore++;
    }

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
            Swal.fire({
                title: 'Simulation terminée !',
                html: `Vous avez complété cette mise en situation avec ${simulationScore} bonnes approches sur ${currentSimulation.steps.length}.`,
                icon: 'success',
                confirmButtonText: 'Fermer'
            });
            document.getElementById('simulationModal').querySelector('.btn-close').click();
        }
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
