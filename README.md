        #Architecture du projet
Ce projet comporte deux parties

La partie Front End
Cette partie représente la partie graphique de l'application, celle que l'utilisateur voit dans son navigateur
 
La partie Back End
Cette partie permet de gèrer les données.


#Front End
Cette partie fait appel aux éléments suivants
Le Framework Javascript Angular
Le Framework CSS Bootstrap

#Back End
Cette partie permet de traiter les données.
La base de données utilisée est MongoDb.
Et le serveur node js et express


#Le code source de l'application git est:
https://github.com/josephine-1/projet_gestion_inscriptionAA.git

            #Exécution du Front End
Nous allons utiliser un éditeur de code.
Notre choix se porte sur Visual Studio code.

Il faut ouvrir le projet.
Puis nous éxécuterons les étapes suivantes
#Installation des dépendances
        npm install
#Exécution du programme
        ng serve 
        http://localhost:4200/   

        #Fonctionnement du Front End
 Cette application fonctionne en utilisant le principe des API
Ce projet propose 4 API
#Add Utilisateur
#Get All Utilisateur 
#Update Utilisateur
#Authentification 

            #Exécution du Backend
Nous allons faire fonctionner l'API 
L'API se situe dans le répertoire node-rest-api du projet.
#Les étapes à suivre sont les suivantes:
#Installer les dépendances
npm run install
 #Création de la base de données avec MongoDb
    Nom base de donnée: db
    Collection : utilisateur

 #Exécution avec la commande
node server ou nodemon server(pour avoir les mises en jours en temps réel)

        #Fonctionnement du Back End
Les api disposent des scripts permettant de:
    #Créer des Utilisateur(Inscription)
    #recupérer un ou plusieurs utilisateur(Affichage)
    #Modifier les utilisateur,changer role utilisateur,archivés et désharchivé un utilisateur.
    #Authentification(pour la connexion des utilisateur)

Il faut évidemment avoir installer MongoDb atlas
et pour la connexion avec la base de donnée:

#connect("mongodb+srv://clustermhd:Espritunis1@cluster0.mdn8s4m.mongodb.net/db")

    
