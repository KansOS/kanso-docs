# Veille Android : le guidage dans les applications bancaires est-il plus simple ?

23 au 29 novembre 2026 · Elias

**La question :** Depuis l'entrée en vigueur de l'European Accessibility Act (EAA), les applications bancaires décrivent-elles mieux leurs écrans, au point de rendre le guidage de KansOS plus simple ?

**Comment :** Lecture de la présentation officielle de l'EAA, d'un bilan publié un an après son entrée en vigueur, et des déclarations d'accessibilité de deux applications Android (une banque, un assureur).

**Journal**

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |
| 15/11/2026 | Mon Parcours Handicap (CNSA) — Entrée en vigueur de l'EAA | Depuis le 28 juin 2025, les services bancaires doivent rendre accessibles leurs sites, leurs applications mobiles et leurs terminaux de paiement, y compris la vocalisation des montants. Sanctions jusqu'à 300 000 € ; les très petites entreprises sont exemptées. | Une application accessible doit nommer ses boutons pour les lecteurs d'écran (norme EN 301 549). C'est la même description que lit le guidage : l'EAA joue donc en notre faveur sur les applications bancaires. | Citer l'EAA dans la note de caractérisation pour justifier la présence d'une application bancaire dans le panel. |
| 19/11/2026 | Handicap.fr — Un an après, quel bilan ? | La DGCCRF relève « un manque de conformité persistant », notamment sur « certains services bancaires ». Aucun chiffre n'est publié sur les applications bancaires. L'échéance structurante reste 2030. | L'obligation existe, mais un an après, la conformité n'est pas acquise. On ne peut pas supposer qu'une application bancaire est guidable parce qu'elle y est soumise. | Garder l'abstention à 100 % dans les critères de succès : le guidage doit toujours savoir dire qu'il ne sait pas. |
| 22/11/2026 | Fortuneo — Déclaration d'accessibilité Android | Application déclarée non conforme : 37 % des critères RGAA 4.1 respectés (13 sur 35), audit réalisé par Urbilog. Parmi les écarts cités : information donnée par la couleur seule, contrastes insuffisants, texte non agrandissable, tableaux mal annoncés par TalkBack. | Un taux global ne dit pas si un écran est guidable : seuls certains critères comptent pour nous (nom, rôle et structure des éléments). Il faut lire le détail, pas le pourcentage. | Faire un relevé ADB sur une application bancaire et le comparer à sa déclaration. |
| 23/11/2026 | MAIF — Déclaration d'accessibilité Android | Application d'assurance déclarée partiellement conforme : 79,16 % des critères respectés, audit réalisé par Temesis. Les nombres de critères publiés ne correspondent pas à ce pourcentage. | Les déclarations sont rédigées par les éditeurs, datent souvent d'avant l'EAA et ne sont pas toujours cohérentes : ce sont des indices, pas des mesures. | Croiser chaque déclaration avec nos propres relevés avant de la citer. |

## **Ce qu'on a appris**

Depuis le 28 juin 2025, l'accessibilité des applications bancaires n'est plus un choix de l'éditeur : c'est une obligation légale, contrôlée par la DGCCRF.

Cette obligation porte précisément sur l'information dont dépend le guidage de KansOS : des boutons nommés et des écrans structurés pour les lecteurs d'écran.

Une distinction apparaît entre deux constats :

- **L'obligation :** à terme, elle devrait rendre les applications bancaires plus faciles à guider, puisque les banques doivent décrire leurs écrans.
- **La réalité :** un an après, la conformité n'est pas acquise. La seule application bancaire étudiée respecte 37 % des critères.

La réponse à la question est donc : pas encore. L'EAA rend le guidage plus probable à l'avenir, mais pas plus simple aujourd'hui. Les déclarations d'accessibilité restent utiles pour choisir les applications à relever en priorité.

## **Limites**

- Une seule déclaration d'application bancaire a été lue, et elle date d'avant l'entrée en vigueur de l'EAA.
- Les déclarations sont rédigées par les éditeurs eux-mêmes : leurs chiffres ne sont pas vérifiés et pas toujours cohérents.
- Un taux de conformité global ne dit pas si un écran précis est guidable.
- Aucun relevé ADB n'a encore été réalisé sur une application bancaire dans le cadre de cette veille.
- Les déclarations des applications Ameli et France Identité n'ont pas été trouvées en ligne ; elles sont à chercher dans les applications elles-mêmes.

## **Sources**

- [Mon Parcours Handicap (CNSA) — Accessibilité numérique et handicap : entrée en vigueur de l'EAA](https://www.monparcourshandicap.gouv.fr/actualite/accessibilite-numerique-et-handicap-entree-en-vigueur-de-leaa)
- [Handicap.fr — Accessibilité numérique dans l'UE : un an après, quel bilan ? (Costil, 2026)](https://informations.handicap.fr/a-accessibilite-numerique-dans-l-ue-un-an-apres-quel-bilan-39387.php)
- [DGCCRF — Vos produits et services doivent être conformes à la directive accessibilité](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-vos-produits-et-services-doivent-etre-conformes-la-directive-accessibilite)
- [EUR-Lex — Directive (UE) 2019/882 relative aux exigences en matière d'accessibilité des produits et services](https://eur-lex.europa.eu/eli/dir/2019/882/oj)
- [Fortuneo — Déclaration d'accessibilité de l'application Android](https://www.fortuneo.fr/accessibilite/declaration-accessibilite-android)
- [MAIF — Déclaration d'accessibilité de l'application Android](https://www.maif.fr/particuliers/annexes/declaration-daccessibilite-application-android)