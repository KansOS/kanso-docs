# Synthèse des relevés d’octobre 2026

26 et 27 octobre 2026 · Elias

**En bref :** sur le premier écran de 7 applications courantes, relevé sur un téléphone Android 14, 6 écrans offrent un bouton que le guidage peut désigner sans ambiguïté. Un seul, SNCF Connect, n'offre rien d'exploitable. C'est un premier relevé : il est trop petit pour en tirer un taux.

## Ce qui a été relevé

- **7 applications**, l'écran d'accueil de chacune, sur le téléphone Honor FNE-NX9 (Android 14). Ameli en plus, sur l'émulateur Android 16.
- **Chaque écran ouvert deux fois**, l'application complètement fermée entre les deux, pour vérifier que l'identifiant du bouton ne change pas.
- **Pas encore relevés :** Chrome et une application bancaire, pourtant prévus dans l'annexe B de la note de caractérisation.

## Comment

- **Le relevé est automatique.** Le script `releve.sh` ferme l'application, la relance et enregistre la description de l'écran avec adb (`uiautomator dump`).
- **L'analyse est automatique.** Le script `analyse.py` cherche le bouton visé dans les deux relevés et dit s'il est désignable sans ambiguïté.
- **Le choix de l'écran et du bouton visé est fait à la main.** C'est la part d'appréciation de ce relevé.
- Les fichiers sont dans le dépôt kanso-launcher, dossier `spec/mesures/couverture-2026-10/`.

## Résultats

| Application | Bouton visé | Identifiant | Le même aux 2 ouvertures | Texte utilisable | Exploitable |
| --- | --- | --- | --- | --- | --- |
| Doctolib | « Rechercher un soignant » | non | —   | oui | oui |
| SNCF Connect | barre de recherche | non | —   | non | **non** |
| La Poste | « Suivre un envoi » | oui | oui | oui | oui |
| France Identité | « Accepter et continuer » | oui | oui | oui | oui |
| Téléphone | bouton d'appel | oui | oui | oui | oui |
| WhatsApp | « Accepter et continuer » | oui | oui | oui | oui |
| Messages | « Démarrer une discussion » | oui | oui | oui | oui |
| Ameli (émulateur) | « Mes démarches » | oui | oui | oui | oui |

**Sur le téléphone : 6 écrans exploitables sur 7**, dont 5 grâce à un identifiant stable et 1 grâce au texte du bouton (Doctolib).

## Au-delà du bouton visé

Nombre d'éléments cliquables par écran, et combien portent un identifiant :

| Écran | Cliquables | Avec identifiant |
| --- | --- | --- |
| La Poste | 13  | 13  |
| Ameli (émulateur) | 12  | 11  |
| Téléphone | 11  | 8   |
| WhatsApp | 6   | 4   |
| Messages | 3   | 3   |
| France Identité | 1   | 1   |
| Doctolib | 22  | 6   |
| SNCF Connect | 18  | 0   |

Sur le téléphone, 35 éléments cliquables sur 74 portent un identifiant. Les deux applications difficiles sont aussi celles qui en portent le moins : Doctolib (6 sur 22) et SNCF Connect (aucun sur 18).

## Ce qu'on a observé

- **SNCF Connect** glisse dans sa barre de recherche des suggestions qui changent à chaque ouverture, et aucun élément de l'écran n'a d'identifiant.
- **Doctolib** affiche une page web dans l'application : son contenu n'apparaît qu'à la deuxième lecture de l'écran.
- **La Poste** a des onglets sans aucun nom : on peut les désigner, mais pas les expliquer à la personne.
- **Le guidage a été essayé en vrai sur Ameli et La Poste :** il entoure le bon bouton, ou il dit qu'il ne sait pas.

## Réponses pour l'objectif D

1. **Nombre d'écrans d'une démarche :** pas encore connu. Seuls des premiers écrans ont été relevés.
2. **Applications et écrans relevés :** le tableau des résultats ci-dessus.
3. **Écrans exploitables :** 6 sur 7 sur le téléphone. 1 sans rien d'exploitable (SNCF Connect), aucun ambigu.
4. **État du code :** le guidage sait désigner un bouton ou s'abstenir, en distinguant « introuvable » et « ambigu ». Il ne journalise pas encore ces issues, et il ne peut pas repérer seul une fausse désignation : il faut une vérification humaine.
5. **Appareils :** le Honor FNE-NX9 (Android 14) et l'émulateur Android 16.
6. **Critères de succès :** pas encore fixés, sauf le délai d'affichage (moins de 300 ms) et l'abstention (100 %).

## Limites

- Uniquement des premiers écrans, les plus simples, et pas encore une démarche complète.
- Un seul téléphone et une seule langue.
- Effectifs trop petits pour donner des pourcentages.
- Les textes des relevés ont été effacés pour ne garder aucune donnée personnelle, sauf celui du bouton visé : on ne peut donc pas compter après coup les éléments qui portent un nom.

## Suite

- Relever trois démarches complètes, écran par écran : attestation Ameli, rendez-vous Doctolib, suivi La Poste. On connaîtra ainsi le nombre d'écrans d'une démarche.
- Relever Chrome et une application bancaire.
- Journaliser les issues du guidage (désigné, introuvable, ambigu) pour les compter pendant les tests.