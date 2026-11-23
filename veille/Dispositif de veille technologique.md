# Dispositif de veille technologique

## À quoi elle sert

La veille sert à lever notre point dur : savoir quelle proportion des écrans d'une application tierce est assez décrite pour permettre un guidage fiable, et comment faire là où elle ne l'est pas.

Ce n'est pas un exercice documentaire. Chaque entrée du journal doit dire ce qu'elle change pour le projet, ou pourquoi elle ne change rien.

## Rythme

**1 heure par personne et par semaine**, placée librement l'équipe est répartie sur quatre pays et n'a pas les mêmes emplois du temps.

**Restitution au point de synchro hebdomadaire** du week-end, où chacun dit en deux minutes ce qu'il a trouvé.

## Répartition

Alignée sur les trois composants. Chaque binôme suit aussi le sujet transverse qui relève de son composant, pour qu'aucun domaine ne reste sans responsable.

| Composant | Qui | Domaines suivis |
| --- | --- | --- |
| **Launcher** | Elias | arbre d'accessibilité Android, API launcher, politique Google Play, modèles exécutables sur appareil |
| **Backend** | `Enzo` + `Alexandre`\+ `Lucas` | NestJS et Prisma, performance et observabilité, sécurité, chiffrement, RGPD et AI Act |
| **Dashboard** | `Angel` | accessibilité web (RGAA, WCAG), FALC, ergonomie cognitive, déploiement et ROM dégooglisées |

Une veille portée par une seule personne ne se diffuse pas : c'est pour ça qu'il y a deux personnes par composant, et que la restitution est hebdomadaire.

## Sources suivies

| Source | Ce qu'elle apporte | Binôme |
| --- | --- | --- |
| Documentation Android Accessibility | référence sur l'arbre d'accessibilité, les événements, les overlays | Launcher |
| Google Play Developer Program Policy | contrainte de distribution. C'est la seule source qui peut invalider le produit du jour au lendemain | Launcher |
| Notes AOSP | restrictions nouvelles à chaque version majeure | Launcher |
| Dépôts GitHub : `androidx`, `llama.cpp`, `executorch` | évolutions concrètes, releases, discussions d'issues | Launcher |
| NestJS, Prisma notes de version | évolutions de la stack, ruptures de compatibilité | Backend |
| CNIL actualités et recommandations | données de santé, AIPD, article 9 | Backend |
| AI Act | obligations de transparence, article 50 | Backend |
| RGAA et WCAG notes de version | référentiel d'accessibilité de la console | Dashboard |
| /e/OS, iodéOS, GrapheneOS journaux de publication | faisabilité d'un déploiement sans services Google | Dashboard |

## Journal de veille

Une ligne par entrée, format fixe :

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |

Objectif : **20 entrées minimum sur l'année**, étalées d'octobre à mai.

## Partage interne

**À partir de novembre** : un créneau dédié dans le point de synchro hebdomadaire, une personne présente à tour de rôle ce qu'elle a trouvé.

Chaque présentation est consignée dans cet espace : qui, quoi, à qui, ce qui en a été retenu.

Objectif : **6 présentations minimum sur l'année**.

## Exploitation

Sur l'année, **au moins 3 apports de la veille réellement intégrés au projet**, avec pour chacun la source d'origine et ce qu'il a changé.

## Communautés techniques

Le guide inscrit ce bloc dans l'objectif obligatoire 1, pas dans l'objectif B.

- **2 communautés** : un espace de développeurs Android orienté accessibilité, et la communauté d'un des runtimes d'inférence suivis.
- **5 contributions publiques** sur l'année : une question posée avec son contexte, une réponse donnée, un rapport de bug documenté, un retour d'expérience.
- **1 contribution externe minimum**, même modeste un correctif de documentation est recevable.
- Pour chacune : le lien, la date, le contexte, ce qui en est sorti.