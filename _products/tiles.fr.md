---
title: Services WMS/WMTS/WFS et Serveur de tuiles
layout: default
lang: fr
order: 0
---

## Services WMS/WMTS/WFS/...

Depuis plusieurs années, nous hébergeons divers services WMS (*Web Map Service*), WMTS (*Web Map Tile Service*), WFS (*Web Feature Service*) pour nos clients. Ces standards de l'[*Open Geospatial Consortium (OGC)*](https://www.ogc.org/){: target="_blank"} permettent d'afficher et d'interroger des couches cartograhiques.

Nous utilisons les programmes open-source suivants : [*MapServer*](https://mapserver.org/){: target="_blank"}, [*GeoServer*](http://geoserver.org/){: target="_blank"}, [*MapCache*](https://mapserver.org/mapcache/){: target="_blank"}, [*MapProxy*](https://mapproxy.org/){: target="_blank"}.

## Serveur de tuiles
Nous hébergeons et nous occupons également du serveur de tuiles d'[OpenStreetMap Belgique](https://openstreetmap.be/){: target="_blank"} : <https://tile.geo6.be/>{: target="_blank"}.

Ce serveur de tuiles utilise les même mécaniques que le serveur de tuiles utilisé par *OpenStreetMap* sur <https://openstreetmap.org/>{: target="_blank"}.  
Il utilise [*Mapnik*](https://mapnik.org/){: target="_blank"} et les feuilles de style [*CartoCSS*](https://github.com/mapbox/carto){: target="_blank"}.  
Le style utilisé est semblable à celui utilisé par <https://openstreetmap.org/> ; il est cependant limité à la Belgique (un peu étendue au-delà des frontières) mais offre surtout la possibilité d'afficher les noms en Français et en Nééerlandais uniquement (au lieu des noms multilingues ; noms de rue à Bruxelles, par exemple). Il offre également quelques icônes suplémentaires (friteries, brasseries, ...). Le style est disponible sur *GitHub* : <https://github.com/jbelien/openstreetmap-carto-be>{: target="_blank"}

Depuis fin 2020, la génération des tuiles est complètement automatisée en utilisant [*Ansible*](https://www.ansible.com/){: target="_blank"}. Cela comprend l'installation des composants nécessaires, l'import et traitement des données *OpenStreetMap*, la génération des tuiles et la copie de celles-ci vers notre serveur de tuiles. Les "recettes" sont disponible sur *GitHub* : <https://github.com/jbelien/openstreetmap-carto-be/tree/ansible>{: target="_blank"}

Les tuiles peuvent être utilisées librement en respectant les [condition d'utilisation](https://github.com/jbelien/openstreetmap-carto-be/wiki/Politique-d'utilisation-des-tuiles){: target="_blank"}. Elles sont disponibles en Français, en Néérlandais, et avec le nom "par défaut".

Vous trouverez plus de détails sur le site d'OpenStreetMap Belgique: <https://openstreetmap.be/fr/projects/belgium-baselayer.html>{: target="_blank"}

![]({{ 'assets/images/products/tiles.png' | relative_url }}){: class="img-fluid mx-auto d-block"}
