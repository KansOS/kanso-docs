# Veille Dashboard : semaine du 16 novembre 2026 · Alexendre

9 au 15 novembre 2026 · Alexandre

**La question :** Comment les évolutions d'Android concernant la batterie, les performances et les applications en arrière-plan peuvent-elles affecter le fonctionnement de KansoOS ?

**Comment :** Environ 1 h de veille documentaire estimée. Consultation de la documentation officielle Android Developers et AOSP, notamment sur Android 16, la gestion énergétique et les performances des appareils.

**Journal**

| Date | Source | Ce qu'on a trouvé | Ce que ça change pour KansoOS | Suite donnéeCe qu'on a trouvé |
| --- | --- | --- | --- | --- |
| 16/11/2026 | Android Developers — Power Management | Depuis Android 16, les tâches exécutées en arrière-plan sont davantage soumises à des quotas d'exécution, y compris dans certaines situations où des applications bénéficiaient auparavant de moins de restrictions | KansoOS utilise différents composants qui doivent fonctionner sans intervention permanente de l'utilisateur. Certaines opérations pourraient être retardées par Android, ce qui nécessite de distinguer les tâches urgentes des tâches secondaires. | Vérifier quelles opérations nécessitent une exécution immédiate et lesquelles peuvent être reportées sans conséquence. |
| 16/11/2026 | Android Developers — App Standby Buckets | Android classe les applications selon leur fréquence d'utilisation. Une application peu utilisée peut subir des restrictions sur ses tâches planifiées, son accès au réseau et ses alarmes. | Un utilisateur de KansoOS peut ne pas ouvrir certaines applications pendant plusieurs jours. Cela ne signifie pas nécessairement que leurs fonctionnalités doivent devenir indisponibles. | Étudier le comportement des composants essentiels lorsqu'ils sont placés dans les différentes catégories de restriction Android. |
| 17/11/2026 | Android Developers — Thermal API | Android fournit des API permettant de surveiller l'état thermique d'un appareil. En cas de surchauffe, le système peut réduire les performances pour protéger le matériel. | KansoOS doit rester réactif, même sur des téléphones relativement anciens ou peu puissants. Une interface lente pourrait compliquer son utilisation, notamment pour les personnes présentant des difficultés cognitives. | Prévoir des tests sur des appareils modestes et mesurer la fluidité du launcher dans différentes conditions. |
| 17/11/2026 | Android Developers — Battery Optimization | Google recommande de limiter les opérations inutiles, de regrouper certaines tâches et d'utiliser les contraintes de planification pour économiser la batterie. | L'autonomie constitue un critère important pour KansoOS. Une consommation excessive pourrait rendre le téléphone indisponible pendant la journée et réduire la confiance des utilisateurs dans le dispositif. | Préparer des scénarios de mesure de consommation énergétique en usage normal et en veille. |

## **Ce qu'on a appris**

Android cherche à améliorer l'autonomie des smartphones en limitant les opérations exécutées lorsque les applications ne sont pas utilisées.

Ces mécanismes sont intéressants pour économiser la batterie, mais ils peuvent aussi avoir des conséquences sur certaines fonctionnalités de KansoOS.

Une distinction apparaît entre deux besoins :

- **La disponibilité :** les fonctions essentielles doivent rester accessibles et réactives, même lorsque le téléphone limite les processus en arrière-plan.
- **L'autonomie :** les opérations non urgentes doivent consommer le moins possible afin de préserver la batterie.

Cette veille souligne également l'importance de tester KansoOS sur des téléphones aux performances différentes, et pas uniquement sur des émulateurs ou des appareils récents.

## **Limites**

- Les restrictions énergétiques peuvent varier selon les fabricants et les versions d'Android.
- Les comportements documentés ne prouvent pas qu'un composant actuel de KansoOS est affecté.
- Aucun test de consommation ou de température n'a encore été réalisé dans le cadre de cette veille.
- Les API thermiques ne sont pas nécessairement prises en charge de manière identique sur tous les appareils.

## **Restitution (17/11)**

Cette semaine, je me suis intéressé à la gestion de la batterie et des performances sur Android. Android 16 impose des contraintes sur certaines tâches exécutées en arrière-plan, tandis que les mécanismes d'économie d'énergie peuvent limiter l'activité des applications peu utilisées. Pour KansoOS, cela représente un point de vigilance, car certaines fonctionnalités doivent rester disponibles sans que l'utilisateur ait besoin d'intervenir. J'ai également étudié les API thermiques d'Android, qui permettent de détecter des situations de surchauffe. Cette veille m'amène à proposer des tests d'autonomie et de fluidité sur différents téléphones afin d'évaluer la fiabilité du système dans des conditions réelles.

## **Sources**

- [Android Developers — Power Management Resource Limits](https://developer.android.com/topic/performance/power/power-details?hl=fr)
- [Android Developers — App Standby Buckets](https://developer.android.com/topic/performance/appstandby?hl=fr)
- [Android Developers — Doze and App Standby](https://developer.android.com/training/monitoring-device-state/doze-standby?hl=fr)
- [Android Developers — Thermal API](https://developer.android.com/games/optimize/adpf/thermal?hl=fr)
- [Android Developers — Optimize Battery Use](https://developer.android.com/develop/background-work/background-tasks/optimize-battery?hl=fr)
- [AOSP — Thermal Mitigation](https://source.android.com/docs/core/power/thermal-mitigation?hl=fr)