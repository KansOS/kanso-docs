# Veille Dashboard : profils, pictogrammes, aidants Angel

Étude réalisée le 19 novembre 2026.

## En bref

**Les trois volets ne changent pas l'identité. Ils changent les réglages, les icônes et le discours.** La palette, le logo et le cadre restent tels quels.

1. **Profils : des réglages par besoin, jamais par diagnostic.** Les difficultés se cumulent souvent chez une même personne. Et KansOS s'engage à ne collecter aucun diagnostic. Donc pas de « mode autisme » ni de « mode senior » : sept réglages indépendants, formulés en besoins (« Je vois mal les petits textes »).
2. **Le plus gros manque concerne les troubles moteurs.** Avec des tremblements, il faut des cibles d'au moins 18 mm, environ 112 dp. Nos 64 dp ne suffisent pas pour ce profil : il faut un réglage « Grandes cibles », et un lanceur sans défilement.
3. **Pictogrammes : les icônes au trait fin ne suffisent pas sur le téléphone.** Les icônes concrètes battent les abstraites. Les pictogrammes ARASAAC sont les plus utilisés, mais leur licence (pas d'usage commercial) pose problème avec un projet sous GPL. Recommandation : un petit jeu de pictogrammes KansOS concrets, de vraies photos pour les contacts, et toujours le mot.
4. **Aidants : ils cherchent un « contrôle parental pour adulte », et les personnes craignent d'être traitées comme des enfants.** Le site doit parler la langue des aidants pour être trouvé, puis montrer que KansOS fait autrement : décider ensemble, règles temporaires, transparence.
5. **Nouveau besoin : la lecture à voix haute des consignes.** Un tiers des personnes qui ont eu un AVC ont une aphasie, et deux tiers de celles-ci ont du mal à lire. Une consigne écrite seule ne marche pas pour elles.

## Volet 1 : Profils

**L'âge dit peu de chose ; ce sont les capacités qui décident.** Six profils couvrent l'essentiel du public de KansOS. Une même personne en cumule souvent plusieurs, d'où des réglages indépendants plutôt que des modes.

| Profil | Ce qui gêne | Ce que montrent les sources | Réglages et choix KansOS |
| --- | --- | --- | --- |
| Basse vision | Textes petits, faible contraste, objets non textuels | 81 % des utilisateurs d'aides techniques modifient leurs réglages d'accessibilité, et une app qui ignore la taille de texte du système est un obstacle courant ([Smashing](https://smashingmagazine.com/2024/02/mobile-accessibility-barriers-assistive-technology-users/)). Les objets non textuels pèsent lourd dans les besoins de grossissement ([Luo, TVST](https://pmc.ncbi.nlm.nih.gov/articles/PMC7980048)) | Respecter la taille de texte d'Android jusqu'à 200 %. Icônes et cadre grossissent avec le texte. Fond clair ou sombre au choix. Compatible TalkBack |
| Handicap intellectuel | Interfaces trop complexes, éléments système (barre de notifications, boutons accueil, retour, menu) | Ces éléments système posent problème sur deux mois de test ([Igual et al.](https://www.springerprofessional.de/guidelines-to-design-smartphone-applications-for-people-with-int/1999872)). Environ 74 % des personnes avec un handicap intellectuel utilisent un téléphone ([de Urturi Breton](https://link.springer.com/article/10.1186/2192-1121-1-1)). Les freins viennent aussi des aidants, inquiets de la vulnérabilité ([MDPI](https://www.mdpi.com/2227-7102/9/4/263)) | Mode simplifié : 6 tuiles, barre de notifications masquée, un seul bouton Retour toujours au même endroit. FALC. Pictogramme + mot |
| Autisme | Surcharge sensorielle, imprévus, langage figuré | Couleurs simples, pas de couleurs vives contrastées, mises en page prévisibles, boutons qui disent ce qu'ils font ([UK Home Office](https://ukhomeoffice.github.io/accessibility-posters/autism)). Le jaune peut être rejeté (étude principale) | Réglage « Cadre sans couleur ». Animations coupées. Ordre des tuiles fixe. Sons coupés par défaut. Langage littéral |
| Troubles moteurs (tremblements, Parkinson) | Appuis ratés ou involontaires, surtout en faisant défiler | Trois fois plus d'erreurs d'appui sur écran tactile ; recommandation portée à 18 mm minimum ([Findlater et al., CHI 2017](https://faculty.washington.edu/leahkf/pubs/CHI2017-TouchscreenAccess.pdf)). Cibles de 20 mm sans perte de performance chez les personnes atteintes de Parkinson ([guide Parkinson, Maynooth](https://mural.maynoothuniversity.ie/6621/1/PAS_user%20interface%202015.pdf)). Clics involontaires fréquents en faisant défiler ([Axess Lab](https://axesslab.com/hand-tremors/)) | **Nouveau** : réglage « Grandes cibles » à 18 mm (environ 112 dp). Accueil sans défilement. Aucun geste obligatoire (glisser, pincer). Renvoi vers les réglages Android de délai d'appui |
| Aphasie (après un AVC) | Parler, lire, écrire | Un tiers des personnes ayant eu un AVC ont une aphasie, et deux tiers de celles-ci ont des troubles de la lecture ([iReadMore, JMIR](https://neuro.jmir.org/2022/1/e39855)) | **Nouveau** : lecture à voix haute des consignes de guidage. Photos des contacts plutôt que des noms. Pictogrammes |
| Âge avancé | Icônes abstraites, gestes, confusion bleu-jaune | Les plus de 65 ans ont du mal avec certains gestes et le sens des icônes, et la famille joue un rôle clé d'« expert de proximité » ([Ávila-Muñoz et al., 2026](https://docta.ucm.es/rest/api/core/bitstreams/be0a306c-2ab2-4a8c-8ad3-48900c20b2f7/content)) | Icônes concrètes (volet 2). Cibles de 64 dp. Fond clair. L'aidant aide au paramétrage, avec la personne |

**Les sept réglages de l'appareil, formulés en besoins**

| Réglage | Formulé pour la personne | Valeurs |
| --- | --- | --- |
| Taille du texte | « Je vois mal les petits textes » | Celle d'Android, jusqu'à 200 % |
| Grandes cibles | « Ma main tremble » ou « J'appuie souvent à côté » | 64 dp (défaut) ou 112 dp |
| Fond | « L'écran m'éblouit » | Clair (défaut) ou sombre |
| Cadre | « Le jaune me gêne » | Gainé jaune (défaut) ou sans couleur |
| Police | « J'ai du mal à lire les lettres » | Lexend (défaut) ou Luciole |
| Lire à voix haute | « Je préfère écouter » | Non (défaut) ou oui |
| Animations | « Les mouvements me fatiguent » | Suit le réglage Android, ou coupées |

C'est la personne qui choisit, avec l'aidant si elle le souhaite. Aucun réglage ne déduit un trouble, et rien n'est envoyé au serveur au-delà des valeurs elles-mêmes.

## Volet 2 : Pictogrammes

**Sur le téléphone, une icône au trait fin ne suffit pas ; il faut du concret, et toujours le mot.** Lucide reste le bon choix pour la console et le site.

**Ce que disent les études**

- **Le concret bat l'abstrait.** Une application de communication fondée sur des métaphores concrètes a donné moins d'erreurs, plus de satisfaction et une préférence nette chez des seniors novices, et cet avantage durait dans le temps ([IJHCI](https://informahealthcare.com/doi/full/10.1080/10447318.2016.1265827)).
- **Les icônes habituelles des téléphones sont mal comprises.** Les écarts de compréhension entre utilisateurs âgés et jeunes sont significatifs ([Information Design Journal](https://benjamins.com/catalog/idj.18.1.03cho)). Les vraies icônes de téléphone ne font pas mieux que des icônes conçues selon des règles d'ergonomie ([Springer](https://rd.springer.com/chapter/10.1007/978-3-540-70540-6_12)).
- **ARASAAC est le jeu de pictogrammes le plus transparent de sa catégorie,** devant SPC et Bliss ([Université de Murcie](https://digitum.um.es/entities/publication/d8fee467-cdd2-41ff-9bf5-e9f484f49b16)).
- **Mais même ARASAAC ne se devine pas seul.** Sur 1 525 pictogrammes testés auprès de 521 personnes, la transparence reste plutôt faible : le sens se devine mal sans le mot, mais se reconnaît bien une fois le mot donné. Les noms d'objets concrets s'en sortent le mieux ([Díez et al., Frontiers 2024](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1467796/pdf)).

**Le problème de licence.** Les pictogrammes ARASAAC sont sous licence Creative Commons BY-NC-SA : usage non commercial, attribution, et partage dans les mêmes conditions ([ARASAAC](https://arasaac.org/about-us)). Or KansOS est publié sous GPL-3.0 et AGPL-3.0, qui autorisent l'usage commercial. Inclure ARASAAC dans les dépôts risque donc de créer un conflit de licences. **À faire valider dans l'objectif A (protéger la techno), avec votre suiveur.**

**Recommandation :** **un choix par usage**

| Usage | Choix | Pourquoi |
| --- | --- | --- |
| Console et site | Lucide au trait de 1,5 | Public aidant, schémas connus |
| Tuiles du lanceur | **Nouveau** : un jeu KansOS d'environ 30 pictogrammes concrets, pleins, trait de 2,5, dessinés dans le style du logo et publiés sous licence libre compatible (CC BY-SA) | Concret, lisible à 36 dp, sans conflit de licence, testé avec les utilisateurs |
| Contacts | La vraie photo de la personne, sinon ses initiales dans le carré du logo | Une photo se reconnaît mieux que n'importe quel pictogramme |
| Applications tierces | Leur icône officielle, avec le mot | C'est ce que la personne voit ailleurs |
| Option pour les structures | Un pack ARASAAC téléchargeable à part, hors dépôt, si la licence le permet | Beaucoup d'IME et d'ESAT l'utilisent déjà : c'est un repère familier |

**Règles pour le jeu KansOS** : un objet réel par pictogramme (un téléphone pour Appeler, une enveloppe pour Messages, un appareil photo), pas de flèche ni de symbole abstrait, toujours accompagné du mot, jamais de jaune. Les concepts abstraits (Réglages, Partager) restent hors de l'accueil en mode simplifié.

## Volet 3 : Paroles d'aidants

**Les aidants cherchent à protéger, souvent après une arnaque, et ils emploient les mots du contrôle parental. Les personnes, elles, craignent d'être traitées comme des enfants.** KansOS se joue dans l'écart entre les deux.

**Le public en chiffres**

- En 2021, 9,3 millions de personnes déclarent aider régulièrement un proche en situation de handicap ou de perte d'autonomie ([DREES](https://drees.solidarites-sante.gouv.fr/sites/default/files/2023-02/ER1255.pdf)).
- Les aidants à la vie quotidienne sont moins nombreux qu'en 2008, mais l'aide s'intensifie ([DREES, juin 2026](https://drees.solidarites-sante.gouv.fr/sites/default/files/2026-06/Embargo_ER1377_Proches_aidants.pdf)). Et 30 % des aidants assument seuls leur rôle, sans relais ([Aladom](https://www.aladom.fr/actualites/secteur-service/10948/proches-aidants-en-france-un-pilier-invisible-mais-sous-pression/)).
- Fin 2023, 712 000 majeurs sont sous tutelle ou curatelle, 16 % de plus en 15 ans ([ministère de la Justice](https://justice.gouv.fr/sites/default/files/2024-09/Infostat_197.pdf)). Avec l'habilitation familiale, on dépasse le million ([HAS](https://www.has-sante.fr/upload/docs/application/pdf/2025-01/accompagner_la_personne_necessitant_une_mesure_de_protection_juridique_argumentaire.pdf)).

**Ce qu'on lit sur les forums**

| Ce que disent les aidants | Exemple | Ce qu'on en retient |
| --- | --- | --- |
| Ils veulent un téléphone verrouillé avec une liste de contacts autorisés | Un aidant demande un compte « comme un compte enfant, mais pour un adulte » ([MacRumors](https://forums.macrumors.com/threads/restricting-access-for-elderly-parent-who-falls-victim-to-frauds.2406308)) | Le besoin est réel, et le mot qui vient est « enfant » |
| L'arnaque est le déclencheur | Une mère atteinte d'Alzheimer : l'aidant veut un appareil qui ne permette de joindre que le carnet d'adresses ([AlzConnected](https://alzconnected.org/discussion/comment/238942)) | La protection contre les arnaques est le premier usage à montrer |
| Le verrouillage total se contourne | Après le verrouillage, une mère a continué avec le téléphone d'une amie ([Bitdefender](https://www.bitdefender.com/en-au/blog/hotforsecurity/your-elderly-mom-sent-money-to-an-online-romance-scammer-what-you-can-do-now)) ; une autre cache son téléphone et accuse sa fille d'être toxique ([Caregivers](https://portal.prod.caregivers.com/questions/celebrity-scammers-492378.htm)) | Contrôler sans l'accord de la personne casse la relation et ne protège pas |
| Ils se sentent durs | « On a l'impression de leur retirer leur liberté » ([Mumsnet](https://www.mumsnet.com/talk/_chat/5403792-elderly-mum-falling-victim-to-scams)) | La culpabilité est là : le ton de KansOS doit soulager, pas accuser |

**Ce que dit la recherche**

- Les enfants adultes préfèrent les technologies de surveillance plus que leurs mères. Ils sous-estiment leur capacité à comprendre et l'importance de les associer à la décision ([Berridge & Wetle, The Gerontologist 2019](https://digital.lib.washington.edu/researchworks/items/0370bf3f-7bb3-402d-ad8a-3b8d9424318c/full)). Les auteurs appellent à des outils de décision partagée.
- Les aidants jugent la vie privée importante, mais peuvent la négliger pour obtenir les bénéfices d'un outil ([Alkhatib et al.](https://searchworks.jioinstitute.edu.in/articles/edsoai__edsoai.on1315701558)).
- La surveillance permanente transforme le domicile en zone surveillée, et un système trop intrusif finit désactivé ([Joseph, Frontiers 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12411420/)).

**Vocabulaire**

| Mot | Qui l'emploie | Décision |
| --- | --- | --- |
| Contrôle parental, bloquer, verrouiller | Les aidants, quand ils cherchent | À reprendre sur le site pour être trouvé, puis reformuler : « Vous cherchez un contrôle parental pour un adulte ? KansOS fait autrement. » |
| Règle, limiter | KansOS | À garder : neutre, compris par tous |
| Mandat | Les mandataires professionnels | Jargon pour un proche aidant : l'expliquer (« la décision du juge qui vous désigne ») ou dire « cadre » |
| Décider ensemble, accord | À introduire | C'est la réponse à la peur d'être infantilisé |
| Surveiller, contrôler | À éviter partout | Contraire à la mission |

**Limite** : ces témoignages viennent surtout de forums anglophones et de proches de personnes âgées. Les parents d'adultes avec un handicap intellectuel et les mandataires professionnels sont peu représentés. Il faudrait 3 ou 4 entretiens avec eux.

## Ce que ça change

Dix changements, rangés par là où ils s'appliquent. Les premiers sont les plus importants.

| #   | Changement | Où  | Priorité |
| --- | --- | --- | --- |
| 1   | Les sept réglages de l'appareil, formulés en besoins, sans diagnostic | Lanceur, overlay | Haute |
| 2   | Réglage « Grandes cibles » à 112 dp, accueil sans défilement, aucun geste obligatoire | Lanceur, design system (nouveau token de cible) | Haute |
| 3   | Respect de la taille de texte d'Android jusqu'à 200 % | Lanceur, overlay | Haute |
| 4   | Lecture à voix haute des consignes de guidage | Overlay | Moyenne |
| 5   | Jeu de 30 pictogrammes KansOS concrets, trait de 2,5, licence libre | Design system, lanceur | Moyenne |
| 6   | Vérifier la licence ARASAAC avant tout usage | Objectif A, suiveur | Moyenne |
| 7   | « Décider ensemble » : une règle proposée par l'aidant attend l'accord de la personne, sauf ce que le mandat impose | Console, lanceur | Haute |
| 8   | Site : reprendre les mots des aidants (contrôle parental, arnaques) pour être trouvé, puis montrer la différence | Site | Moyenne |
| 9   | Lexique : expliquer « mandat », ajouter « décider ensemble » et « accord », bannir « surveiller » | Charte, console | Basse |
| 10  | Test : au moins un participant par profil, plus 3 à 4 entretiens avec des parents d'adultes avec un handicap intellectuel et des mandataires | Protocole de test | Haute |

**Ce qui ne change pas** : la palette, le logo, le cadre gainé, Lexend comme police de marque, le fond clair par défaut.

## Sources

**Profils**

- [Mobile Accessibility Barriers For Assistive Technology Users](https://smashingmagazine.com/2024/02/mobile-accessibility-barriers-assistive-technology-users/), Smashing Magazine, 2024
- [Visual needs of smartphone magnifier users](https://pmc.ncbi.nlm.nih.gov/articles/PMC7980048), Luo et al., TVST 2021
- [Guidelines to Design Smartphone Applications for People with Intellectual Disability](https://www.springerprofessional.de/guidelines-to-design-smartphone-applications-for-people-with-int/1999872), Igual et al., 2013
- [Mobile communication for intellectually challenged people](https://link.springer.com/article/10.1186/2192-1121-1-1), de Urturi Breton et al.
- [Touchscreen usability for people with learning disabilities](https://www.mdpi.com/2227-7102/9/4/263), Education Sciences, 2019
- [Designing for users on the autistic spectrum](https://ukhomeoffice.github.io/accessibility-posters/autism), UK Home Office
- [Comparing Touchscreen and Mouse Input Performance](https://faculty.washington.edu/leahkf/pubs/CHI2017-TouchscreenAccess.pdf), Findlater et al., CHI 2017
- [User interface design guidelines for smartphone applications for people with Parkinson's](https://mural.maynoothuniversity.ie/6621/1/PAS_user%20interface%202015.pdf), Maynooth University
- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/), Axess Lab
- [iReadMore co-design](https://neuro.jmir.org/2022/1/e39855), JMIR Neurotechnology, 2022
- [Visual design and accessibility settings among older adults](https://docta.ucm.es/rest/api/core/bitstreams/be0a306c-2ab2-4a8c-8ad3-48900c20b2f7/content), Ávila-Muñoz et al., 2026

**Pictogrammes**

- [Concrete metaphors for older adults](https://informahealthcare.com/doi/full/10.1080/10447318.2016.1265827), International Journal of Human–Computer Interaction
- [Mobile phone icons for older users](https://benjamins.com/catalog/idj.18.1.03cho), Information Design Journal
- [Semantic transparency of icons in mobile devices](https://rd.springer.com/chapter/10.1007/978-3-540-70540-6_12), Springer
- [Transparence des pictogrammes ARASAAC](https://digitum.um.es/entities/publication/d8fee467-cdd2-41ff-9bf5-e9f484f49b16), Université de Murcie
- [Transparency and translucency indices for 1,525 ARASAAC pictograms](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1467796/pdf), Díez et al., Frontiers in Psychology 2024
- [What is ARASAAC?](https://arasaac.org/about-us)

**Aidants**

- [9,3 millions de proches aidants](https://drees.solidarites-sante.gouv.fr/sites/default/files/2023-02/ER1255.pdf), DREES, 2023
- [Le nombre de proches aidants baisse de 6 %](https://drees.solidarites-sante.gouv.fr/sites/default/files/2026-06/Embargo_ER1377_Proches_aidants.pdf), DREES, juin 2026
- [Proches aidants, un pilier sous pression](https://www.aladom.fr/actualites/secteur-service/10948/proches-aidants-en-france-un-pilier-invisible-mais-sous-pression/), Aladom
- [Infostat 197 : majeurs protégés](https://justice.gouv.fr/sites/default/files/2024-09/Infostat_197.pdf), ministère de la Justice, 2024
- [Accompagner la personne nécessitant une mesure de protection juridique](https://www.has-sante.fr/upload/docs/application/pdf/2025-01/accompagner_la_personne_necessitant_une_mesure_de_protection_juridique_argumentaire.pdf), HAS, 2025
- [Why older adults and their children disagree about in-home surveillance](https://digital.lib.washington.edu/researchworks/items/0370bf3f-7bb3-402d-ad8a-3b8d9424318c/full), Berridge & Wetle, 2019
- [Caregivers' Perspectives on Privacy in Aged Care Monitoring Devices](https://searchworks.jioinstitute.edu.in/articles/edsoai__edsoai.on1315701558), Alkhatib et al., 2021
- [Designing for dignity: ethics of AI surveillance in older adult care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12411420/), Joseph, Frontiers 2025
- Forums : [MacRumors](https://forums.macrumors.com/threads/restricting-access-for-elderly-parent-who-falls-victim-to-frauds.2406308), [AlzConnected](https://alzconnected.org/discussion/comment/238942), [Caregivers](https://portal.prod.caregivers.com/questions/celebrity-scammers-492378.htm), [Mumsnet](https://www.mumsnet.com/talk/_chat/5403792-elderly-mum-falling-victim-to-scams), [Bitdefender](https://www.bitdefender.com/en-au/blog/hotforsecurity/your-elderly-mom-sent-money-to-an-online-romance-scammer-what-you-can-do-now)