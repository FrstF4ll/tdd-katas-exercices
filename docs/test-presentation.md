# C'est quoi la TDD

La TDD, pour Test Driven Development, ou Developpement piloté par test, est une méthodologie de programmation ou l'on va concevoir des tests avant de concevoir les features.

Le but : **prévoir le comportement désiré de l'app avant d'écrire du code**

Cette méthode consiste en 3 grandes étapes :

Le **RED** : Qui consiste à la création des tests
Le **GREEN** : Qui consiste à l'implémentation du code qui implémente la feature en validant les test.
Le **REFACTOR** : Qui consiste à optimiser le code qu'on a implémenté.

Une UNITÉ représente un comportement fonctionnel identifiable, avec des conditions d'entrée, une action et un résultat attendu. Par **comportement fonctionnel identifiable**, on entend surtout **"Que doit faire l'application lorsque j'entreprend cette action ?"**. **Ce n'est pas formellement une question de code, mais plutôt de ce qu'on veut et qu'on ne veut pas qu'il se passe lorsqu'on utilise un composant l'application**.

# Comment faire du bon TDD

Le problème de la TDD **c'est qu'on se retrouve vite à faire des tests pour tout, qui testent les fonctions, les classes, leurs retour**. Résultat **le moindre changement casse les tests et les rends même inutiles**.

En TDD on se demande donc **quel comportement je veux que l'application ait quand je fait cette action ?**

## Construction d'unité de comportement

Prenons l'exemple d'un formulaire de registering de membres, qu'est-ce qu'il se passe ?

1. Le formulaire s'affiche pour l'utilisateur
2. L'utilisateur entre des valeurs dans les différents champs
3. On valide ce que l'utilisateurs à écrit
4. Si c'est valide, on sauvegarde le nouveau compte pour que l'utilisateur puisse se reconnecter plus tard.

On peut voir qu'il y a une séquence logique, un processus qu'on a planifié, pour s'immaginer ce qu'on veut que l'utilisateurs fasse pour s'enregistrer.

Mais s'il entre un mail invalide ? S'il entre un mot de passe invalide ? Et si on n'arrive pas à sauvegarder le compte ni le mail de confirmation ?

**C'est là qu'on découpe en unité**

**Unité 1 :** Afficher le formulaire correctement
**Unité 2 :** Refuser les mails invalides.
**Unité 3 :** Refuser un mot de passe trop court ou pas assez complexe.
**Unité 4 :** Refuser un pseudo déjà existant
**Unité 5 :** Accepter les données.
**Unité 6 :** Sauvegarder le compte dans la base de donnée / le créer (dépendant de comment le système est construit).

On va écrire un test pour **chacune de ces unités avec du code, dépendant du language et de l'outil qu'on va utiliser**.

Exemple de code :

`W.I.P, pas encore fait`

Ce bout de code va essentiellement s'assurer que **le formulaire s'affiche bien, que les mails invalides sont rejetés, que les mots de passe invalide et les pseudo deja existant sont rejetés et ne sauvegardent pas de compte, s'assurer qu'on peut marquer des données comme valide, et qu'elles sont bien sauvegardées / envoyée à la DB**

Vous aurez écrit en soit du **code pour vérifier du code**. Vous écrivez du code de test qui **vérifie que le code de production respecte les comportements fonctionnels que vous avez définis**.

Une autre notions : **Partez du plus simple / global, puis allez en précision au fur et a mesure du test**. On ne veut pas avoir toute les conditions d'un mail valide par exemple, on veut juste s'assurer qu'un mail peut être refuser, puis après on peut essentiellement ajouter des tests unitaires pour les conditiosn quand nécèssaire.
