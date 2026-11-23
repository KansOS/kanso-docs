# Veille Dashboard : semaine du 26 octobre 2026 · Angel

26 octobre au 1er novembre 2026 · Angel

**La question :** un déploiement sans services Google est-il réaliste, et qu'est-ce qui le contraint côté Android ?

**Comment :** environ 1 h. Presse spécialisée Android, blogs de Murena et d'iodé, forum F-Droid.

## Journal

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansOS | Suite donnée |
| --- | --- | --- | --- | --- |
| 31/10/2026 | Wikipédia « Keep Android Open », Android Authority, forum F-Droid | La vérification des développeurs Android est appliquée depuis le 30/09/2026 au Brésil, en Indonésie, à Singapour et en Thaïlande, et doit s'étendre au monde entier en 2027 sur les appareils certifiés Google. Sans développeur vérifié, l'installation passe par un parcours avancé avec 24 h d'attente. Les ROM non certifiées (GrapheneOS, etc.) ne sont pas concernées. Google a ajusté son calendrier le 02/10/2026. | Ça touche la distribution du launcher hors Play Store sur les téléphones classiques. Dès 2027, il faudra un compte développeur vérifié, sinon on ne peut pas raisonnablement demander à nos utilisateurs ce parcours de 24 h. Sur une ROM dégooglisée, la contrainte disparaît : c'est un argument pour cette option de déploiement. | Transmis à Elias, puisque la politique Google Play est dans son périmètre. Calendrier exact à vérifier sur developer.android.com. |
| 31/10/2026 | Android Authority, Heise, Android Police, blogs de Murena et d'iodé | Depuis 2026, Google ne publie le code source AOSP qu'aux 2e et 4e trimestres. Les ROM prennent du retard : le support du Pixel 10 a été retardé sur GrapheneOS. /e/OS 4.x et iodéOS 7 (LineageOS 23, 34 appareils) sont sur Android 16. | Pour un déploiement sur ROM dégooglisée, la base réaliste est **Android 16** jusqu'à au moins mi-2027. Le launcher ne doit pas dépendre de fonctions propres à Android 17 sur ces ROM. | J'ajoute « Android 16 = version de référence pour les ROM » à la matrice de compatibilité. |
| 31/10/2026 | Android Authority (désassemblage d'APK), The Hacker News | **Hors de mon périmètre, mais critique.** Dans Android 17 bêta 2, quand l'utilisateur active la protection avancée, les applications non déclarées `isAccessibilityTool` perdent le service d'accessibilité. Seuls les lecteurs d'écran, les contacteurs, la commande vocale et le braille ont le droit à ce statut. Rien de tel en Android 16 QPR3 stable. | Le guidage KansOS lit l'arbre d'accessibilité. Si un utilisateur active la protection avancée sous Android 17, il est possible que le launcher ne puisse plus lire aucun écran. Ça toucherait directement notre point dur. | **Transmis en priorité à Elias.** C'est une bêta, donc à confirmer sur la doc officielle Android 17 et à tester sur l'émulateur. |

## Ce qu'on a appris

Les deux alertes viennent de Google et vont dans le même sens : plus l'appareil est certifié Google, plus il est contraint. Ça renforce l'option du déploiement sur ROM dégooglisée, avec Android 16 comme base.

## Limites

- La restriction d'accessibilité ne vient que d'une version bêta et n'est pas confirmée en stable.
- Le calendrier de la vérification des développeurs a déjà bougé une fois.
- Je n'ai pas testé moi-même la compatibilité des ROM.

## Restitution (01/11)

> Deux alertes Google pour Elias. Un : en 2027, il faudra un compte développeur vérifié pour installer le launcher hors Play. Deux : en Android 17 bêta, la protection avancée coupe l'accessibilité aux applis qui ne sont pas des outils d'accessibilité reconnus, ce qui pourrait bloquer notre guidage. Les deux vont dans le sens d'un déploiement sur ROM dégooglisée, qui sont toutes encore sur Android 16.

## Sources

- [Wikipédia — Keep Android Open](https://en.wikipedia.org/wiki/Keep_Android_Open)
- [Android Authority — Règles de sideloading](https://www.androidauthority.com/how-to-bypass-android-developer-verification-sideloading-rules-3718002/)
- [Forum F-Droid — Vérification des développeurs](https://forum.f-droid.org/t/google-will-require-developer-verification-to-install-android-apps-including-sideloading/33123)
- [Android Authority — AOSP deux fois par an](https://www.androidauthority.com/aosp-source-code-schedule-3630018/)
- [Heise — Google halves release cycle for AOSP](https://www.heise.de/en/news/Android-Google-halves-release-cycle-for-AOSP-source-code-11132493.html)
- [Android Police — Bad news for custom ROMs](https://www.androidpolice.com/google-new-android-source-code-release-schedule-bad-news-custom-roms/)
- [PiunikaWeb — AOSP Q2 et Q4](https://piunikaweb.com/2026/01/07/android-aosp-source-code-q2-and-q4-pixel-monthly-security-patches-unchanged/)
- [Next — /e/OS 4.0](https://next.ink/242791/disponible-e-os-4-0-sattaque-a-la-migration-de-gmail)
- [Murena — Feuille de route /e/OS 2026](https://community.e.foundation/t/joining-the-wave-murena-e-os-2026-roadmap/82084)
- [iodé — iodéOS 7 disponible](https://blog.iode.tech/iodeos-7-is-now-officially-available/)
- [Android Authority — Protection avancée et accessibilité](https://www.androidauthority.com/android-advanced-protection-mode-accessibility-apk-teardown-3640742/)
- [The Hacker News — Android 17 bloque les applis non-accessibilité](https://thehackernews.com/2026/03/android-17-blocks-non-accessibility.html)