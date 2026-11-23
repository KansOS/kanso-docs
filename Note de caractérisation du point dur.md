# Note de caractérisation du point dur

Projet KansOS · Technical Track Tech 4 · Objectif obligatoire 1  
16 octobre 2026

> Le problème est identifié et le protocole de mesure est écrit. Les relevés sont en cours, attendus pour le 31 octobre. Les cases `[N]` seront remplies à ce moment-là.

## 1\. Le problème

KansOS doit montrer à une personne sur quel bouton appuyer dans une application qu'elle n'a pas choisie : Ameli, sa banque, France Identité. On désigne l'élément, on explique en mots simples, et la personne agit elle-même.

On ne sait pas le faire de façon fiable aujourd'hui.

C'est cette fonction qui fait la différence avec un launcher simplifié. Sans elle, on allège l'écran d'accueil mais on n'apprend rien à personne.

## 2\. Pourquoi c'est difficile

Pour désigner un bouton, il faut savoir où il est et ce qu'il est. Un programme ne voit pas l'écran comme nous : il lit une **description de l'écran** que l'application fournit au système Android.

Cette description est écrite par les développeurs de l'application, pas par nous. Et elle est très inégale. Parfois elle est complète : « bouton, Mes démarches ». Parfois elle dit seulement qu'il y a quelque chose de cliquable à cet endroit, sans dire quoi. Dans ce cas on ne peut pas guider, parce qu'on ne sait pas lequel des boutons est le bon.

Sa qualité dépend de la façon dont l'application a été développée. Cela ne dépend pas de nous, et cela peut changer à chaque mise à jour de l'application.

Une contrainte s'ajoute : la politique de Google Play sur les services d'accessibilité, durcie le 30 octobre 2025, interdit aux applications d'exécuter des actions à la place de l'utilisateur de façon autonome, et cite les launchers parmi les catégories concernées. Faire à la place de la personne n'est donc pas une solution de repli.

## 3\. Ce qui ne marche pas

### Méthode 1 — se fier à l'identifiant de l'élément

C'est la méthode évidente : chaque élément d'un écran peut porter un identifiant. On le lit, et on surligne l'élément correspondant.

Deux choses peuvent échouer. L'identifiant peut être absent. Ou il peut changer d'une ouverture de l'application à l'autre — et dans ce cas le guidage pointerait le mauvais élément au deuxième usage.

C'est ce que nous mesurons. Protocole en annexe A.

|     | Résultat |
| --- | --- |
| Applications testées | `[N]` |
| Écrans relevés | `[N]` |
| Écrans avec un identifiant présent | `[N %]` |
| Écrans où l'identifiant est le même aux deux ouvertures | `[N %]` |
| Écrans sans rien d'exploitable | `[N %]` |

### Méthode 2 — faire deviner un programme depuis une image de l'écran

L'autre voie serait de prendre une capture d'écran et de laisser un programme deviner où appuyer.

Les meilleurs systèmes publics de ce type réussissent environ **quatre fois sur cinq**. Autrement dit, une action sur cinq est fausse. Dans une démarche bancaire ou administrative, personne n'est à côté de la personne pour rattraper l'erreur.

Deux réserves s'ajoutent. Ces scores sont annoncés par les entreprises qui vendent ces systèmes, sans vérification indépendante ; le seul chiffre issu d'une publication scientifique est nettement plus bas. Et les systèmes les plus performants sont trop gros pour tourner sur un téléphone.

Surtout, cette méthode devine à partir d'une image ce que la description de l'écran dit en clair quand elle est remplie. Elle n'a d'intérêt que là où cette description est vide — et pour savoir si ça vaut la peine, il faut d'abord savoir combien d'écrans sont concernés.

### Ce qu'on retient

Les deux méthodes échouent pour la même raison : elles supposent une information que les applications ne garantissent pas. La vraie question est donc **quelle proportion des écrans est exploitable, et ce que fait le système sur le reste**.

## 4\. Critères de succès

| Indicateur | Comment on le calcule | Seuil |
| --- | --- | --- |
| Écrans guidables | écrans où l'élément est identifiable de façon stable / écrans testés | à fixer après les premiers relevés |
| Démarches complètes | démarches guidées du début à la fin / démarches testées | à fixer après les premiers relevés |
| Désignation erronée | guidages qui pointent le mauvais élément / guidages émis | le plus bas possible, seuil à fixer |
| Délai d'affichage | temps entre l'apparition de l'écran et l'apparition de l'indication | moins de 300 ms |
| Abstention | écrans non guidables où le système le dit au lieu de deviner | 100 % |

**Pourquoi les seuils ne sont pas encore fixés.** Nous voulons partir de l'objectif produit — qu'une démarche aboutisse du début à la fin — et en déduire le taux nécessaire par écran, plutôt que de poser deux nombres sans lien entre eux. Pour cela il faut savoir combien d'écrans compte une démarche en moyenne, et c'est la mesure d'octobre qui nous le dira.

Les 300 ms viennent des seuils connus en ergonomie : au-delà d'une seconde, la personne perd le fil. On vise nettement en dessous pour que l'indication soit là avant qu'elle ait fini de lire l'écran.

L'abstention à 100 % n'est pas négociable. Un guidage faux sans prévenir est plus dangereux qu'une absence de guidage.

**Applications visées**, à valider avec un partenaire terrain quand nous en aurons un : Téléphone, Messages, Ameli, Doctolib, La Poste, France Identité, une application bancaire, SNCF Connect, WhatsApp, un navigateur.

**Si le seuil n'est pas atteignable**, nous restreindrons le guidage à une liste de démarches que nous vérifions nous-mêmes, au lieu de viser toutes les applications. C'est une réduction de périmètre, et elle devra être décidée sur une mesure.

---

## Annexe A — Protocole

Le but est qu'une autre personne puisse refaire la mesure et obtenir un résultat comparable.

|     |     |
| --- | --- |
| Appareil | `[modèle, ou émulateur Android Studio]` |
| Version d'Android | `[ ]` |
| Outil | `adb`, l'outil en ligne de commande d'Android |
| Dates | `[ ]` |
| Qui | `[prénom]` |

**Applications et écrans**

| #   | Application | Version | Écran | Élément visé |
| --- | --- | --- | --- | --- |
| 1   | Ameli | `[ ]` | accueil | bouton « Mes démarches » |
| 2   | Ameli | `[ ]` | prise de rendez-vous | champ de recherche |
| 3   | Doctolib | `[ ]` | accueil | barre de recherche |
| 4   | `[ ]` |     |     |     |

**Étapes**

1. Fermer complètement l'application : `adb shell am force-stop <paquet>`
2. Ouvrir, aller jusqu'à l'écran visé.
3. Extraire la description de l'écran : `adb shell uiautomator dump /sdcard/e.xml && adb pull /sdcard/e.xml app-NN-a.xml`
4. Refermer complètement, rouvrir, revenir au même écran.
5. Second relevé → `app-NN-b.xml`
6. Remplir la ligne correspondante de l'annexe B.

Deux ouvertures par écran. La seconde sert uniquement à vérifier que l'identifiant ne change pas d'une fois sur l'autre.

**Ce que la mesure ne couvre pas** : un seul appareil, une seule langue, pas de variation de taille de police ni de thème sombre. Nous ne testons pas non plus ce qui se passe après une mise à jour de l'application. Si les relevés sont faits sur émulateur, les applications qui refusent de s'y lancer — banques, France Identité — n'y figurent pas.

## Annexe B — Relevés

Une ligne par écran. Les fichiers sont versionnés dans `/spec/mesures/couverture-2026-10/`.

| #   | Application | Écran | Identifiant présent | Identique aux 2 ouvertures | Texte ou description utilisable | Guidable |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | Ameli | accueil |     |     |     |     |
| 2   |     |     |     |     |     |     |

**Synthèse**

|     | Nombre | Pourcentage |
| --- | --- | --- |
| Écrans relevés | `[N]` | 100 % |
| Avec identifiant | `[N]` | `[N %]` |
| Identifiant stable | `[N]` | `[N %]` |
| Rattrapables par le texte ou la description | `[N]` | `[N %]` |
| Non guidables | `[N]` | `[N %]` |

La ligne « identifiant stable » est celle qui alimente la partie 3.

## Annexe C — Sources

| Ce qu'on affirme | Source | Consultée le |
| --- | --- | --- |
| Politique Google Play durcie le 30/10/2025 sur les services d'accessibilité, launchers concernés | [Google Play Developer Program Policy](https://support.google.com/googleplay/android-developer/answer/16550159?hl=en) | `[ ]` |
| Le seul chiffre mesuré indépendamment pour un système embarquable est bas : 28 % de réussite | _Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents_, Apple, arXiv:2509.26539, octobre 2025 | 11/10/2026 |
| Scores annoncés par les éditeurs sur le test de référence AndroidWorld : entre 71 % et 79 % | agrégés sur llmreference.com/benchmark/androidworld — chiffres auto-déclarés, sans vérification indépendante | 11/10/2026 |
| La qualité de la description d'écran dépend de la technologie utilisée par l'application | documentation Android sur l'accessibilité `[lien à relever]` | `[ ]` |

Quand un chiffre est annoncé par l'entreprise qui vend le produit, nous l'indiquons. Nous ne le mettons pas sur le même plan qu'un chiffre mesuré dans une publication.