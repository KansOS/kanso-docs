# Premiers relevés de couverture — octobre 2026

26 et 27 octobre 2026 · Elias

**La question :** sur le premier écran d'une appli, le guidage sait-il désigner le bon bouton de façon sûre ?

**Comment :** un écran par appli, ouvert deux fois avec l'appli complètement fermée entre les deux, selon le protocole de l'annexe A. Téléphone Honor FNE-NX9, Android 14. Ameli a été relevée sur l'émulateur Android 16.

## Résultats

| Appli | Élément visé | Identifiant stable | Texte utilisable | Guidable |
| --- | --- | --- | --- | --- |
| Doctolib | « Rechercher un soignant » | non | oui | oui |
| SNCF Connect | barre de recherche | non | non | **non** |
| La Poste | « Suivre un envoi » | oui | oui | oui |
| France Identité | « Accepter et continuer » | oui | oui | oui |
| Téléphone (Honor) | bouton d'appel | oui | oui | oui |
| WhatsApp | « Accepter et continuer » | oui | oui | oui |
| Messages | « Démarrer une discussion » | oui | oui | oui |
| Ameli (émulateur) | « Mes démarches » | oui | oui | oui |

**Sur le téléphone : 6 écrans guidables sur 7**, dont un seulement grâce au texte (Doctolib).

## Ce qu'on a appris

- **SNCF Connect** glisse des suggestions qui changent à chaque ouverture dans le texte de sa barre de recherche, et aucun élément de l'écran n'a d'identifiant. On ne peut donc pas la viser.
- **Doctolib** affiche une page web dans l'appli. Son contenu n'apparaît qu'à la deuxième lecture de l'écran.
- **La Poste** a des onglets sans aucun nom : on peut les désigner, mais pas les expliquer à la personne.
- Le guidage a été testé en vrai sur Ameli et La Poste : il entoure le bon bouton, ou il dit qu'il ne sait pas.

## Limites

- Uniquement des premiers écrans, les plus simples, et pas encore une démarche complète.
- Un seul téléphone, une seule langue.
- Effectifs trop petits pour donner des pourcentages.

Les relevés anonymisés et les scripts sont dans le dépôt launcher, dossier `spec/mesures/couverture-2026-10`.