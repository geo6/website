---
title: Addresses and Geocoding
category: products
layout: default
lang: en
order: 4
---

In Belgium, address databases are managed by the regions : [*UrbIS*](https://bric.brussels/en/our-solutions/urbis-solutions/urbis-data){: target="_blank"} for Brussels, [*CRAB*](https://overheid.vlaanderen.be/informatie-vlaanderen/producten-diensten/centraal-referentieadressenbestand-crab){: target="_blank"} for Flanders, and [*PICC*](https://geoportail.wallonie.be/georeferentiel/PICC){: target="_blank"}/[*ICAR*](https://geoportail.wallonie.be/georeferentiel/icar){: target="_blank"} for Wallonia.

For more than 15 years, we have been integrating these 3 databases (with different structures) into a single database containing addresses from all over Belgium.

We have also developed a geocoding API allowing the search for addresses and points of interest (geocoding), the search for an address based on geographical coordinates (reverse geocoding), and the possibility to have additional information aggregated and based on the administrative code ([NIS code of a municipality](https://statbel.fgov.be/fr/propos-de-statbel/methodologie/classifications/geographie){: target="_blank"}, for example).

Access to the API is secure. A token is required to use it; we decided to use the [JSON Web Tokens](https://jwt.io/){: target="_blank"} standard.

You can consult the documentation and test the API: <https://api-v2.geo6.be/>  
You can also participate in the development of the API, the source code of the API is open and available on GitHub: <https://github.com/geo6/api>

---
## *Geocoder PHP*

The [*Geocoder PHP*](https://geocoder-php.org/){: target="_blank"} library is a widely used library; it allows to query a whole range of geocoding APIs and to retrieve the results in a unique way whatever the API used (*OpenStreetMap*, *Google Maps*, *Bing Maps*, *Here*, *Pelias*, ...).

We have developed the modules for the official geocoding APIs in Belgium (in addition to the module for our geocoding API) but also the module for the official geocoding API of the French Government.

**Belgium**

* *bpost* : <https://github.com/geo6/geocoder-php-bpost-provider>{: target="_blank"} (downloaded more than 10.000 times)
* *GeoPunt* : <https://github.com/geo6/geocoder-php-geopunt-provider>{: target="_blank"}  (downloaded more than 5.000 times)
* *Service Public de Wallonie (SPW)* : <https://github.com/geo6/geocoder-php-spw-provider>{: target="_blank"}
* *UrbIS* : <https://github.com/geo6/geocoder-php-urbis-provider>{: target="_blank"}
* *GEO-6* : <https://github.com/geo6/geocoder-php-geo6-provider>{: target="_blank"}

**France**

* *Addok* : <https://github.com/geo6/geocoder-php-addok-provider>{: target="_blank"}  (downloaded more than 35.000 times)
