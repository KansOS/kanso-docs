<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.png">
  <img alt="KansOS · Registre des décisions" src="assets/header-light.png">
</picture>

# ADR 0001 · Langage et framework du backend

<table>
  <tr><td><b>Statut</b></td><td><img alt="accepté" src="assets/status-accepted.svg"></td></tr>
  <tr><td><b>Date</b></td><td>2026-09-05</td></tr>
  <tr><td><b>Décideurs</b></td><td>Équipe KansOS</td></tr>
  <tr><td><b>Relu par</b></td><td>Elias H.</td></tr>
  <tr><td><b>Lié à</b></td><td>ADR 0002</td></tr>
  <tr><td><b>Remplace</b></td><td>Aucune</td></tr>
</table>

## Contexte

Le backend doit exposer une API pour la console aidant et pour les appareils Android, et calculer les politiques d'accompagnement. L'application mobile est en Kotlin. La console web sera en TypeScript.

L'équipe est étudiante, à temps partiel, sur environ dix-huit mois. La difficulté réelle du projet se situe côté Android, service d'accessibilité, couverture sémantique des applications tierces, inférence locale. Le backend est un CRUD avec un calcul de configuration : il doit être fiable et rapide à construire, pas ambitieux.

## Critères de décision

Partage de code, coût d'apprentissage, outillage fourni, délai, risque de divergence de la logique de politique.

## Options envisagées

**A. Spring Boot**

- Avantages : même module partagé, sécurité clés en main, standard de l'industrie.
- Inconvénients : même coût que A, aucune expérience de la JVM côté serveur

**B. Kotlin + Ktor**

- Avantages : module partagé avec Android, politique en un seul exemplaire.
- Inconvénients : Kotlin Multiplatform coûteux à mettre en place, aucune expérience de Kotlin côté serveur, moins outillé

**C. TypeScript + NestJS**

- Avantages : types partagés avec la console, OpenAPI généré, Prisma, structure imposée.
- Inconvénients : rien de partagé avec Android, donc politique en deux exemplaires.

## Décision

**Option C.** Le partage utile au quotidien est serveur ↔ console, pas serveur ↔ Android. Le coût de Kotlin Multiplatform est mieux investi côté Android. La divergence se contrôle par des cas de test partagés.

**C'est un revirement** : Ktor avait été retenu en premier, pour le module partagé, avant qu'on réévalue son coût

## Conséquences

### Positives

Contrat d'API généré (`@nestjs/swagger`), migrations versionnées (Prisma), types partagés avec la console.

### Négatives

La logique de politique existe en TypeScript et en Kotlin. En contrepartie, et c'est obligatoire dès le premier lot, des cas de test partagés (`kanso-docs/spec/policy-cases/*.json`, au format `input` → `expectedPolicy`) sont exécutés par les deux CI : toute divergence fait échouer la CI.

### À surveiller

Si la politique devait être calculée sur l'appareil (fonctionnement hors ligne), la duplication deviendrait coûteuse : il faudra rouvrir cet ADR.

## Réversibilité

**Moyenne.** Réécrire le backend prendrait des semaines, mais le moteur de politique, isolé et testé indépendamment du langage, se porte facilement.
