# Veille Dashboard : semaine du 12 octobre 2026 · Angel

12 au 18 octobre 2026 · Angel

**La question :** où en sont les référentiels d'accessibilité et les obligations légales pour la console ?

**Comment :** environ 1 h. Pages du W3C et de la WAI, annonces sur le RGAA 5, site de Bercy sur l'EAA.

## Journal

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |
| 17/10/2026 | W3C WAI : WCAG 3 Working Draft de septembre 2026 | Le brouillon du 10/09/2026 propose un seul niveau de conformité, avec des paliers de rapport autour. Il reste incomplet et va encore beaucoup changer. Le W3C demande de continuer à viser WCAG 2.2 A et AA. | **Rien pour l'instant.** La console reste en WCAG 2.2 AA. Construire sur WCAG 3 maintenant reviendrait à suivre une cible qui bouge. | Aucune. On relit au prochain brouillon. |
| 17/10/2026 | Annonce DINUM du 02/03/2026, relayée par Ippon, Adimeo et d'autres | Le RGAA 5 est annoncé pour fin 2026. Il reprend les 9 nouveaux critères de WCAG 2.2 et ne rend pas caducs ceux du RGAA 4.1.2. Il couvrirait aussi les applications mobiles. | Si on audite la console sur le RGAA 4.1.2 seul, l'audit sera périmé dès la sortie du RGAA 5. Il faut ajouter dès maintenant les critères 2.2 : taille des cibles (2.5.8), focus non masqué (2.4.11), authentification accessible (3.3.8), saisie redondante (3.3.7), aide cohérente (3.2.6) et alternative au glisser-déposer (2.5.7). L'authentification accessible compte beaucoup pour des aidants : pas de captcha, pas de mémorisation imposée. | J'ajoute ces 6 critères à la checklist d'accessibilité de la console. Je vérifie l'annonce sur numerique.gouv.fr. |
| 17/10/2026 | economie.gouv.fr, page sur l'accessibilité (EAA) mise à jour en juin 2026 | Depuis juin 2025, l'EAA est contrôlé en France par la DGCCRF, avec l'ARCOM, l'ARCEP et la Banque de France. Environ 100 établissements doivent être contrôlés en 2026. Un décret n° 2026-816 du 24/08/2026 est signalé par informations.handicap.fr. | Ce n'est plus une obligation lointaine, les contrôles ont lieu. En tant que projet étudiant, on est sans doute hors champ (exemption des micro-entreprises pour les services). Mais si KansOS devient un produit, la console sera concernée. | Je le note dans le registre des risques. Décret et montants des sanctions à vérifier sur Légifrance : les chiffres trouvés se contredisent. |

## Ce qu'on a appris

Rien d'urgent côté WCAG 3. Ce qui compte vraiment, c'est le RGAA 5 avec WCAG 2.2, et on peut s'y préparer dès maintenant. L'EAA est déjà contrôlé en France.

## Limites

- Les informations sur le RGAA 5 viennent de sources secondaires, pas du texte de la DINUM.
- Les montants des sanctions de l'EAA se contredisent d'une source à l'autre.

## Restitution (18/10)

> WCAG 3 n'est pas pour tout de suite, on reste en WCAG 2.2 AA. Par contre le RGAA 5 sort fin 2026 avec les critères WCAG 2.2, donc j'ajoute 6 critères à la checklist console dès maintenant, dont l'authentification accessible, importante pour les aidants. L'EAA est contrôlé en France depuis 2025 : on est sans doute hors champ en tant que projet étudiant, mais c'est noté comme risque.

## Sources

- [W3C WAI — WCAG 3 Working Draft](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [Accessible Resources — WCAG 3.0 en septembre 2026](https://www.accessibleresources.com/post/wcag-3-september-2026-working-draft-explained)
- [Centre for Accessibility Australia — WCAG 3.0 Working Draft](https://www.accessibility.org.au/w3c-releases-updated-wcag-3-0-working-draft/)
- [Ippon — Évolution du RGAA](https://blog.ippon.fr/2026/04/13/accessibilite-numerique-evolution-du-rgaa/)
- [Adimeo — RGAA 5](https://www.adimeo.com/blog/rgaa-5-nouveautes-accessibilite-numerique)
- [Binclusive — RGAA 5](https://binclusive.io/en/blog/rgaa-5-france-digital-accessibility-standard)
- [economie.gouv.fr — Accessibilité (EAA)](https://www.economie.gouv.fr/node/3241122)
- [informations.handicap.fr — Ce qui change en France et en UE](https://informations.handicap.fr/a-accessibilite-numerique-ce-qui-change-en-france-et-en-ue-39631.php)
- [Orange — Cadre légal en France](https://a11y-guidelines.orange.com/en/planning/legal-framework-in-france/)