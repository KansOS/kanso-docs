# Veille Backend & Tooling : semaine du 26 octobre 2026 · Lucas

**La question :** Comment anticiper l'arrivée de Node.js 26 LTS, les évolutions de TypeScript et la transition de l'écosystème NestJS tout en garantissant la stabilité du backend KansoOS ?

**Comment :** Environ 1 h. Dépôts GitHub officiels (`nestjs/nest`, `microsoft/TypeScript`, `jestjs/jest`), bulletins de publication Node.js Release Working Group, documentation `ts-jest`.

## Journal

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |
| 28/10/2026 | Node.js Release Working Group, SDX Development, Suzu Tech | **Node.js 26 devient officiellement Active LTS** le 28 octobre 2026. Node 24 passe en Maintenance LTS et Node 22 (notre runtime actuel) reste en Maintenance jusqu'en avril 2027. Node 26 apporte le support natif de l'API `Temporal`, V8 14.6 et de meilleures performances. | KansoOS est documenté sous Node 22. Il reste 6 mois avant sa fin de support (EOL), mais la migration des images Docker (`Dockerfile` et `Dockerfile.dev`) vers Node 26 LTS doit être préparée d'ici Q1 2027 pour vérifier la recompilation des modules natifs (`argon2`). | Créer une branche de test `chore/node-26-lts` pour valider le build Docker et l'exécution des tests Jest sous Node 26. |
| 29/10/2026 | GitHub `nestjs/schedule` & `nestjs/nest` releases | Modernisation de l'écosystème NestJS vers l'ESM natif et préparation de la ligne Nest 12. Les paquets satellites (ex: `@nestjs/schedule` 12.0) passent en Pure ESM et suppriment les shims d'imports profonds (`/dist/enums/...`). Node 20.19+ / 22.12+ est désormais exigé au minimum. | KansoOS utilise NestJS 11.x avec `module: "nodenext"`. Nos modules (`auth`, `spaces`, `prisma`) doivent proscrire les _deep imports_ dans les dossiers de build des dépendances NestJS pour éviter toute rupture lors des prochaines mises à jour minoritaires/majeures. | Vérifier via audit de code qu'aucun import relatif n'intervient sur les internals de paquets `@nestjs/*`. |
| 31/10/2026 | TypeScript Blog, Changelog TS 6.0 | Stabilisation des règles de transition vers TypeScript 6 / 7. Le comportement des configurations change : l'option `types` de `tsconfig.json` passe à `[]` par défaut (au lieu de charger implicitement tout `node_modules/@types`), et `rootDir` se verrouille au dossier racine du `tsconfig`. | Si nous mettons à jour TypeScript sans ajuster `tsconfig.json`, l'absence de déclaration explicite dans `types` provoquera l'échec de résolution des types globaux Node ou Jest (`@types/node`, `@types/jest`). | Ajouter explicitement `"types": ["node", "jest"]` et `"rootDir": "./src"` dans le `tsconfig.json` du projet. |

## Ce qu'on a appris

Les évolutions de notre stack (Node.js, NestJS, TS, Jest) pointent vers deux impératifs :

1. **Échéance Node.js :** Node 22 arrive en fin de vie en avril 2027. Le passage à Node 26 Active LTS constitue notre cible de migration pour le début d'année 2027.
2. **Rigueur des configurations :** TypeScript et les bibliothèques NestJS durcissent l'isolation ESM et la résolution des types. Expliciter notre configuration `tsconfig` évitera les régressions lors des montées de version.

## Limites

- Les builds Docker de KansoOS n'ont pas encore été testés avec une image de base `node:26-alpine`.
- La compatibilité binaire du package de hachage `argon2` avec la nouvelle version de V8 sous Node 26 doit être validée lors des tests d'intégration.
- Aucune régression immédiate sur NestJS 11 v11.1.x n'impose de refactoring d'urgence cette semaine.

## Restitution (01/11)

> Première veille technique sur la stack Backend & Tooling. L'actualité marquante est la promotion de **Node.js 26 en Active LTS** le 28 octobre. Notre version actuelle (Node 22) restant supportée jusqu'en avril 2027, nous avons le temps de planifier la mise à jour des Dockerfiles. Côté TypeScript et NestJS, il convient d'expliciter la section `types` dans le `tsconfig.json` pour éviter toute rupture lors des prochaines montées de version des types Node/Jest.

## Sources

- [Node.js — Release Schedule & LTS Status](https://nodejs.org/en/about/previous-releases)
- [SDX Development — Node.js 26 LTS arrives on October 28, 2026](https://sdx-development.com/en/news/web-development/node-js-26-lts-new-features-migration-october-2026)
- [Suzu Technology — Node.js 26 becomes LTS upgrade guide](https://suzutechnology.com/insights/nodejs-26-lts-upgrade-guide-october-2026/)
- [GitHub — NestJS Monorepo Releases](https://github.com/nestjs/nest/releases)
- [GitHub — NestJS Schedule Releases](https://github.com/nestjs/schedule/releases)
- [TypeScript 6.0 Features and Breaking Changes](https://pooyagolchian.com/blog/typescript-6-features-2026/)
- [ts-jest — Documentation & Releases](https://kulshekhar.github.io/ts-jest/)