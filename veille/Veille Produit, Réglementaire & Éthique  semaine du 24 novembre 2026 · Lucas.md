# Veille Produit, Réglementaire & Éthique : semaine du 24 novembre 2026 · Lucas

**La question :** Comment encadrer légalement et éthiquement la délégation des réglages du téléphone dans KansOS (qui a le droit d'agir, comment expliquer chaque restriction à la personne aidée et à quel rythme retirer progressivement l'assistance) ?

**Comment :** Environ 1 h 15. Analyse des textes de référence sur la protection des majeurs et les données personnelles (Code civil, RGPD, guides CNIL), du référentiel européen FALC (Facile à Lire et à Comprendre — UNAPEI / Inclusion Europe) et des recommandations de bonnes pratiques sur l'autodétermination et la médiation numérique (HAS, Aidants Connect).

## Journal

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |
| **19/11/2026** | Code civil (Protection juridique des majeurs) & RGPD (art. 5, 6, 7 - consentement et minimisation) | Un proche ou un éducateur spécialisé n'a pas de droit automatique et illimité sur le smartphone d'un majeur : en dehors d'une mesure judiciaire spécifique (et même sous curatelle/tutelle pour les actes strictement personnels et la vie privée), toute intervention sur un outil personnel repose sur un **mandat explicite** et un **consentement libre, éclairé et révocable** de la personne accompagnée. | La console web KansOS ne doit pas agir comme un outil de contrôle parental imposé unilatéralement. Il faut distinguer les **rôles** (proche aidant vs professionnel/éducateur), exiger une **validation explicite côté téléphone lors de l'appairage**, limiter l'accès aux seules données nécessaires (pas de lecture du contenu des messages) et rendre chaque réglage consultable par la personne aidée. | Spécifier dans le module `auth` / `spaces` un modèle de permissions granulaires par domaine, un écran d'accord initial sur mobile et un historique des modifications visible par l'utilisateur. |
| **21/11/2026** | Référentiel FALC (Inclusion Europe / UNAPEI), RGAA & RGPD (art. 12 - transparence) | Lorsqu'une restriction numérique s'applique sans explication claire (ex. appel bloqué ou fonctionnalité masquée), elle est vécue comme une punition ou une panne, générant rejet et perte de confiance. Les règles **FALC** et l'article 12 du **RGPD** imposent une information concise, sans jargon technique, utilisant des phrases courtes à la voix active qui expliquent **ce qui est bloqué, pourquoi et comment demander de l'aide**. | Chaque garde-fou actif dans KansOS (ex. contact en attente de validation, action guidée sans clic automatique) doit afficher une explication pédagogique en langage simplifié plutôt qu'un blocage muet (ex. _« Ce numéro est inconnu. Ton proche Paul doit le valider avant que tu puisses l'appeler »_). | Rédiger un catalogue de messages types en **FALC** associés à chaque état de restriction dans le frontend mobile et prévoir une icône d'explication systématique. |
| **23/11/2026** | Recommandations HAS (Autodétermination et pouvoir d'agir) & Médiation numérique (Aidants Connect / principe d'étayage) | En accompagnement médico-social, retirer une aide trop brusquement provoque une mise en échec et l'abandon de l'outil ; la maintenir indéfiniment crée une dépendance apprise. Les bonnes pratiques recommandent un **retrait graduel par domaine de compétence** (étayage / _scaffolding_), déclenché par des **preuves de réussite répétées** plutôt que par un délai fixe, avec un **droit au retour en arrière** en cas de fatigue ou de stress. | Le moteur d'autonomie progressive de KansOS ne doit pas reposer sur un chronomètre arbitraire, mais sur des **compteurs d'actions réussies sans sollicitation d'aide** par domaine (ex. appels, démarches, messages). Lorsqu'un seuil est atteint, l'app propose à la personne (et à son aidant) de débloquer le palier supérieur, tout en conservant un bouton simple _« J'ai besoin du guide »_ pour réactiver temporairement l'aide. | Définir les règles de transition entre niveaux d'autonomie (critères de passage au palier supérieur + mécanisme de réversibilité immédiate) dans le cahier fonctionnel. |

## Ce qu'on a appris

Cette veille éthique et réglementaire permet d'ancrer le cœur différenciant de KansOS - _l'effacement progressif de l'outil_ - dans des cadres reconnus :

1. **Légitimité et consentement (Qui règle ?) :** KansOS se distingue d'un contrôle parental car il s'adresse à des adultes ou jeunes adultes vers l'autonomie. La console web doit reposer sur une **délégation consentie, tracée et révocable**, avec séparation claire entre le périmètre d'un proche et celui d'un professionnel.
2. **Transparence pédagogique (Comment expliquer ?) :** Appliquer les principes du **FALC** aux règles de sécurité et de filtrage transforme une contrainte technique en repère rassurant, évitant l'infantilisation de la personne aidée.
3. **Progression adaptée au rythme réel (Quand retirer l'aide ?) :** S'appuyer sur la notion d'**étayage progressif** et d'**autodétermination** (HAS) justifie techniquement notre architecture par domaines indépendants : on retire l'aide uniquement sur les usages maîtrisés, et toujours de façon réversible.

## Limites

- **Absence de validation terrain avec des structures médico-sociales :** Les seuils concrets de passage d'un niveau d'autonomie à un autre (nombre d'actions réussies avant de proposer le retrait d'une aide) restent théoriques tant qu'ils n'ont pas été testés avec des éducateurs spécialisés et des binômes aidant/aidé.
- **Frontière juridique entre aidant familial et mandataire judiciaire :** La gestion fine des cas où une personne est sous mesure de protection (curatelle renforcée, tutelle) nécessitera une vérification juridique dédiée avant tout déploiement en établissement (ESAT, foyer de vie).
- **Risque de surcharge de notifications :** Trop de messages explicatifs ou de propositions de changement de niveau peuvent nuire à la simplicité de l'écran d'accueil ; l'équilibre UX devra être prototypé.

## Restitution (24/11)

Première veille réglementaire et éthique dédiée au positionnement produit de KansOS. Trois principes structurants en ressortent pour nos spécifications fonctionnelles :

- **Encadrer la délégation :** Exiger un consentement explicite lors de l'appairage téléphone/console web, différencier les rôles (aidant familial vs éducateur) et garantir à la personne aidée la visibilité sur les règles actives.
- **Expliquer sans infantiliser :** Formuler chaque restriction (validation de contacts, fonctionnalités masquées) selon les règles du **FALC** (phrases courtes, sans jargon, expliquant le pourquoi).
- **Désactiver l'aide par paliers réversibles :** Caler le retrait progressif de l'assistance sur des indicateurs d'usage réussi par domaine (et non sur un délai fixe), avec la possibilité de réactiver le guidage à tout moment en cas de difficulté.

## Sources

- Code civil français - Dispositions relatives à la protection juridique des majeurs (tutelle, curatelle, habilitation familiale, mandat de protection future)
- Règlement Général sur la Protection des Données (RGPD - UE 2016/679, articles 5, 6, 7 et 12) & Guides pratiques CNIL sur les personnes vulnérables
- Inclusion Europe & UNAPEI - _L'information pour tous : Règles européennes pour une information facile à lire et à comprendre (FALC)_
- DINUM - _Référentiel Général d'Amélioration de l'Accessibilité (RGAA)_
- Haute Autorité de Santé (HAS) - _Recommandations de bonnes pratiques professionnelles : Soutenir et encourager l'autodétermination et le pouvoir d'agir_
- Aidants Connect / MedNum - Référentiels d'éthique et de posture dans l'accompagnement numérique des publics fragiles