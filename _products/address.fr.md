---
title: Adresses et Géocodage
layout: default
lang: fr
order: 4
---

En Belgique, les bases de données d'adresses sont gérées par les régions : [*UrbIS*](https://cirb.brussels/fr/nos-solutions/urbis-solutions/urbis-data) pour Bruxelles, [*CRAB*](https://overheid.vlaanderen.be/informatie-vlaanderen/producten-diensten/centraal-referentieadressenbestand-crab) pour la Flandres, et [*PICC*](https://geoportail.wallonie.be/georeferentiel/PICC)/[*ICAR*](https://geoportail.wallonie.be/georeferentiel/icar) pour la Wallonie.

Depuis plus de 15 ans, nous intégrons ces 3 bases de données (dont la structure est  différente) dans une base de données unique reprenant les adresses de toute la Belgique.

Nous avons également développé une API de géocodage permettant la recherche d'adresses et de points d'intérêts (géocodage), la recherche d'une adresse sur base de coordonnées géographiques (géocodage inversé), et la possibilité d'avoir des informations complémentaires aggrégées et basées sur le code administratif ([code NIS d'une commune](https://statbel.fgov.be/fr/propos-de-statbel/methodologie/classifications/geographie){: target="_blank"}, par exemple).

L'accès à l'API est sécurisé. Un *token* est nécessaire pour pouvoir l'utiliser ; nous avons décidé d'utiliser le standard [*JSON Web Tokens* ](https://jwt.io/){: target="_blank"}.

Vous pouvez consulter la documentation et tester l'API : <https://api-v2.geo6.be/>  
Vous pouvez également participer au développement de l'API, le code source de l’API est ouvert et disponible sur GitHub : <https://github.com/geo6/api>

---

##  *Geocoder PHP*

La librairie [*Geocoder PHP*](https://geocoder-php.org/){: target="_blank"} est une librairie fort utilisée ; elle permet de faire des requêtes sur toute une série d'API de géocodage et permet de récupérer les résultats de manière unique quelle que soit l'API utilisée (*OpenStreetMap*, *Google Maps*, *Bing Maps*, *Here*, *Pelias*, ...).

Nous avons développé les modules pour les API officielles de géocodage en Belgique (en plus du module pour notre API de géocodage) mais également le module pour l'API de géocodage officielle du Gouvernement français.

**Belgique**

* *bpost* : <https://github.com/geo6/geocoder-php-bpost-provider>{: target="_blank"} (téléchargé plus de 10.000 fois)
* *GeoPunt* : <https://github.com/geo6/geocoder-php-geopunt-provider>{: target="_blank"}  (téléchargé plus de 5.000 fois)
* *Service Public de Wallonie (SPW)* : <https://github.com/geo6/geocoder-php-spw-provider>{: target="_blank"} 
* *UrbIS* : <https://github.com/geo6/geocoder-php-urbis-provider>{: target="_blank"} 
* *GEO-6* : <https://github.com/geo6/geocoder-php-geo6-provider>{: target="_blank"} 

**France**

* *Addok* : <https://github.com/geo6/geocoder-php-addok-provider>{: target="_blank"}  (téléchargé plus de 35.000 fois)
