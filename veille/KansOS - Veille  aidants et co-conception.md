# KansOS - Veille : aidants et co-conception

23 nov. 2026 · Enzo

Étude réalisée le 23 novembre 2026.

## En bref

**Réponse : deux publics co-concepteurs, chacun pour son propre rôle, jamais l'un à la place de l'autre.** La personne accompagnée décide de ce qui touche à son écran et à sa vie privée. L'aidant co-conçoit la console et ce qu'il configure. Quand la personne ne peut pas s'exprimer seule, l'aidant l'aide à s'exprimer mais ne parle pas à sa place.

La littérature montre le travers à éviter : dans les projets existants, les aidants sont peu impliqués, et quand ils le sont, c'est surtout pour répondre à la place des personnes autistes ([Waardenburg et al.](https://dyl.utwente.nl/index.php/blog)). L'étude recommande cinq changements de méthode, dont deux de fond :

1. **Deux séries d'ateliers distinctes.** Personnes accompagnées d'un côté (lanceur, cadre de guidage, réglages de partage), aidants de l'autre (console). Une séance commune seulement pour arbitrer ce que l'aidant voit.
2. **La personne a le dernier mot sur ce qui est partagé.** Une règle de visibilité n'entre dans le produit que si les personnes accompagnées l'ont validée, même si tous les aidants la demandent.
3. **L'aidant facilite, il ne répond pas.** Pendant les tests, il peut reformuler ou rassurer, pas répondre. Chaque réponse est notée avec son auteur.
4. **Des séances FALC, courtes et prévisibles** : petits groupes, supports visuels, échelles en pictogrammes, programme annoncé à l'avance.
5. **Montrer ce qui a changé grâce à eux.** À chaque séance, l'équipe montre ce qui a été modifié suite à la séance précédente.

## Contexte, publics et contraintes

KansOS a deux utilisateurs dont les intérêts peuvent diverger : l'un est guidé, l'autre voit et configure. La co-conception doit donc donner une voix propre à chacun.

| Public | Qui | Ce qu'il co-conçoit | Surfaces |
| --- | --- | --- | --- |
| Personne accompagnée | Adulte que le numérique met en difficulté : âge avancé, handicap intellectuel ou cognitif, autisme, basse vision | Le lanceur, le cadre de guidage, les réglages, et surtout ce qu'elle accepte de partager | Appareil, overlay par-dessus les applis tierces |
| Aidant | Proche ou professionnel (mandataire, tuteur, éducateur) | La console, les règles, les alertes, la façon de configurer le guidage | Console web (kanso-web-dashboard) |
| Structure partenaire | Association, ESAT, service médico-social | Le cadre des tests : recrutement, consentement, lieu | Aucune directement |

Contraintes qui pèsent sur la méthode :

- **La relation aidant / personne est asymétrique.** L'aidant parle plus facilement, connaît le vocabulaire et est souvent celui qui recrute. Sans règle explicite, sa voix prend le dessus.
- **Les personnes accompagnées ont des façons de s'exprimer très différentes.** Certaines parlent peu ou pas du tout. Il faut des méthodes qui ne reposent pas sur l'oral ou l'écrit.
- **L'équipe compte cinq personnes, dans le cadre de l'EIP d'Epitech.** Les séances doivent rester légères à organiser et servir aussi l'objectif D du parcours (mesurer et tester).
- **Ce sont des personnes vulnérables.** Consentement adapté, accord de l'aidant ou du représentant légal, et peut-être un avis éthique de l'école.

## Ce que dit la recherche

Six constats fondent les choix. Chacun est suivi de sa conséquence pour KansOS.

| Constat | Ce que montrent les sources | Conséquence pour KansOS |
| --- | --- | --- |
| Les aidants servent surtout de porte-parole | Revue de 28 études sur la co-conception de technologies du quotidien pour jeunes adultes autistes : les aidants y sont peu impliqués, et surtout comme remplaçants des personnes autistes ([Waardenburg et al., Assistive Technology](https://pubmed.ncbi.nlm.nih.gov/41081779/)). | Chaque public a ses propres séances et son propre périmètre. On note toujours qui a dit quoi. |
| L'aidant peut être un bon facilitateur | Dans le projet « Design Your Life », l'aidant apparaît comme un relais possible du processus de conception, à condition d'être formé à la démarche de design ([Waardenburg et al., 2022](https://www.emerald.com/insight/content/doi/10.1108/JET-11-2021-0064)). | Un rôle explicite pour l'aidant pendant les tests : rassurer, reformuler, pas répondre. Une fiche d'une page lui explique ce rôle. |
| Aidants et personnes ne jugent pas pareil | 45 entretiens sur l'IA pour des personnes avec troubles cognitifs : les utilisateurs mettent en avant leur jugement et leur dignité, les aidants le contrôle des risques. Les protections aident les personnes aux troubles sévères mais brident celles aux troubles légers ([Meng et al., ASSETS 2026](https://arxiv.org/pdf/2608.17175)). | Le consensus des aidants ne suffit pas à valider une fonction. Les réglages de partage sont arbitrés par les personnes accompagnées. |
| Les parents veulent un suivi qui ne pèse pas | 16 parents d'adultes avec déficience intellectuelle veulent un suivi qui ne donne pas à leur enfant le sentiment d'être scruté. Ils excluent chambre et salle de bain. Mais les adultes concernés n'ont pas été interrogés eux-mêmes ([Tyshka et al., Oakland University, 2026](https://arxiv.org/pdf/2609.18970)). | Même les aidants bienveillants ont besoin d'entendre la personne elle-même. Cette étude illustre l'angle mort à éviter. |
| La surveillance pèse le lendemain | Journal quotidien de 142 binômes parent-adolescent : l'usage d'outils de surveillance est suivi d'un sentiment d'intrusion le lendemain, sans effet mesuré sur l'autonomie ([Brinberg et al., Developmental Psychology, octobre 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13726872)). | Mesurer le ressenti de la personne quelques jours après, pas seulement pendant le test. |
| L'inclusion se construit dans la durée | Projet néerlandais avec 3 co-chercheurs (déficience intellectuelle légère ou autisme) : langage simple, petits groupes, rôles clairs et retours réguliers ont fait passer les co-chercheurs de tâches imposées à des initiatives ([JMIR Human Factors, février 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12935421/)). | Associer quelques personnes accompagnées sur toute la durée de l'EIP, pas seulement pour un test ponctuel. |

## Benchmark

Les deux essais cliniques en cours confient la configuration à l'aidant. Aucun ne donne à la personne la main sur ce qui est partagé : c'est la place que KansOS peut prendre.

| Produit ou essai | Ce qu'il fait | Ce qu'on en retient |
| --- | --- | --- |
| [MapHabit](https://apps.apple.com/us/app/maphabit/id1466187296), essai [Emory University](https://clinicaltrials.gov/study/NCT07859306) | Plateforme de cartes visuelles pas à pas pour les routines, créées par les utilisateurs, les aidants ou les thérapeutes avec des photos ([Georgia Tech](https://hg.gatech.edu/node/689631)). L'essai évalue son effet sur l'autonomie et la qualité de vie de jeunes adultes autistes de 18 à 30 ans, pendant les transitions vers l'âge adulte. Fiche mise à jour en octobre 2026. | Concurrent direct, avec une validation scientifique en cours. Financé aux États-Unis par les programmes Medicaid ou les structures ([App Store](https://apps.apple.com/lb/app/maphabit/id1466187296)) : le modèle B2B se confirme. |
| [Project Independence](https://clinicaltrials.gov/study/NCT07572110), University of Miami | Intervention en ligne en une séance, menée par l'aidant, pour développer l'autonomie de jeunes autistes dans la vie quotidienne. Recrutement depuis mai 2026, fin prévue en décembre 2027. | Former l'aidant à « faire moins » est un levier à part entière. KansOS pourrait accompagner la console d'un court module « laisser faire ». |
| [Design Your Life](https://dyl.utwente.nl/index.php/blog), HAN et University of Twente (Pays-Bas) | Projet de recherche qui fait concevoir les technologies d'autonomie par les jeunes adultes autistes eux-mêmes, avec leurs aidants. | La référence méthodologique la plus proche de KansOS. À contacter : leurs outils d'atelier pourraient être réutilisés. |

## Recommandation détaillée

On répartit les décisions de conception entre les deux publics, avant le premier atelier, et on l'écrit.

**Qui décide quoi**

| Décision de conception | Qui tranche | Qui donne son avis | Si désaccord |
| --- | --- | --- | --- |
| Ce que l'aidant voit par défaut | Personnes accompagnées | Aidants | La personne l'emporte ; l'option reste activable par la personne elle-même |
| Lanceur, cadre de guidage, réglages de l'appareil | Personnes accompagnées | Aidants (sécurité, faisabilité) | La personne l'emporte, sauf risque de sécurité avéré |
| Console : vues, règles, alertes | Aidants | Personnes accompagnées (ce qui les concerne) | Aucune alerte ne dévoile une information que la personne n'a pas accepté de partager |
| Vocabulaire et ton de l'appli | Personnes accompagnées | Aidants, relecture FALC | Le mot choisi par les personnes reste |
| Déroulé des tests et consentement | Structure partenaire + équipe | Aidants | Le cadre éthique l'emporte |

**Les trois rôles possibles de l'aidant pendant une séance**

- **Facilitateur (par défaut)** : il rassure, reformule une consigne, signale la fatigue. Il ne répond jamais à la place de la personne.
- **Co-concepteur** : uniquement dans les séances sur la console, sans la personne accompagnée.
- **Interprète** : seulement si la personne ne peut pas s'exprimer autrement et si elle l'accepte. La réponse est notée « rapportée par l'aidant » et pèse moins dans les décisions.

**Déroulé des ateliers**

1. **Atelier personnes accompagnées** (45 min, 3 à 4 personnes) : maquettes papier ou téléphone de test, choix par pictogrammes, pas de lecture longue.
2. **Atelier aidants** (1 h) : la console, les règles, ce qu'ils voudraient voir et pourquoi.
3. **Séance commune d'arbitrage** (30 min) : uniquement sur le partage de données. L'équipe présente les deux points de vue, la personne choisit.
4. **Retour** : à la séance suivante, on montre ce qui a changé et pourquoi.

**Accessibilité des séances** (reprise des leçons du projet néerlandais) : programme en FALC envoyé à l'avance, même déroulé à chaque fois, échelles à trois visages, petits groupes, pauses annoncées, lieu familier si possible.

## Ce qu'il faut encore tester

Deux choix reposent sur la littérature et non sur nos utilisateurs : le rôle de facilitateur de l'aidant, et la règle « la personne tranche sur le partage ». Un test court peut les vérifier, et il peut se faire pendant le test couleurs déjà prévu, avec les mêmes participants.

**Participants.** Les 6 à 8 personnes accompagnées du test couleurs, chacune venant avec son aidant habituel. Plus les 3 aidants prévus pour la console.

**Tâches.** Sur le téléphone de test, avec de fausses données :

1. Session A, l'aidant présent comme facilitateur (fiche de rôle lue avant) : la personne choisit, parmi quatre cartes en pictogrammes, ce que son aidant peut voir (démarches terminées, demandes d'aide, appli ouverte, position).
2. Session B, l'aidant absent : même choix, avec d'autres exemples.
3. L'aidant, seul : il dit ce qu'il pense que la personne a choisi.
4. Trois jours plus tard, par téléphone ou sur place : la personne dit avec trois visages comment elle a vécu la séance et si elle changerait ses choix.

**Mesures.** Écart entre les choix de la personne en A et en B. Écart entre ce que l'aidant a deviné et ce que la personne a choisi. Nombre de fois où l'aidant répond à la place de la personne malgré la consigne. Ressenti à trois jours. Alterner l'ordre A et B d'un participant à l'autre.

**Règles de décision.**

- Si les choix changent nettement quand l'aidant est présent (au moins un tiers des participants), les réglages de partage se feront sans l'aidant, à la première installation.
- Si l'aidant répond à la place de la personne plus d'une fois par séance en moyenne, la fiche de rôle est revue et lue à voix haute en début de séance.
- Si les aidants devinent mal ce que la personne a choisi, c'est un argument pour la console : montrer à l'aidant ce que la personne a choisi de partager, et pourquoi.
- Si une personne regrette ses choix à trois jours, il faut pouvoir les modifier facilement depuis l'appareil.

**Questions ouvertes.**

- Comment recueillir l'avis des personnes qui ne parlent pas ou peu, sans passer par leur aidant ?
- Faut-il un accord éthique de l'école, et le consentement du représentant légal pour les personnes sous tutelle ?
- L'équipe Design Your Life accepterait-elle de partager ses outils d'atelier ?

## Sources

- [A closer look at the role of caregivers in co-designing everyday technology for autistic young adults: a scoping review](https://pubmed.ncbi.nlm.nih.gov/41081779/), Waardenburg et al., Assistive Technology, 2026 (en ligne en novembre 2025, [annonce de l'équipe](https://dyl.utwente.nl/index.php/2025/11))
- [Design your life: user-initiated design of technology to empower autistic young adults](https://www.emerald.com/insight/content/doi/10.1108/JET-11-2021-0064), Waardenburg et al., Journal of Enabling Technologies, 2022
- [Projet Design Your Life](https://dyl.utwente.nl/index.php/blog), HAN et University of Twente
- [Balancing Safety and Autonomy: Accessibility-Oriented Interventions in Generative AI for Cognitive Impairment](https://arxiv.org/pdf/2608.17175), Meng et al., ASSETS 2026
- [« What's going to happen after I'm gone? » Parent Perspectives on Technology in Supporting Independent Living for Adults with Intellectual Disabilities](https://arxiv.org/pdf/2609.18970), Tyshka et al., Oakland University, 2026
- [Association between Daily Parental Surveillance and Adolescent Privacy and Autonomy](https://pmc.ncbi.nlm.nih.gov/articles/PMC13726872), Brinberg et al., Developmental Psychology, octobre 2026
- [Reflections on the Inclusive Co-Design Process of a Virtual Assistant for Individuals With Complex Care Needs](https://pmc.ncbi.nlm.nih.gov/articles/PMC12935421/), JMIR Human Factors, février 2026
- [Essai MapHabit, Emory University](https://clinicaltrials.gov/study/NCT07859306), ClinicalTrials.gov ; [MapHabit sur l'App Store](https://apps.apple.com/us/app/maphabit/id1466187296) ; [Georgia Tech](https://hg.gatech.edu/node/689631)
- [Project Independence, University of Miami](https://clinicaltrials.gov/study/NCT07572110), ClinicalTrials.gov
- Veille KansOS du 22 novembre 2026 et étude couleurs du 18 novembre 2026