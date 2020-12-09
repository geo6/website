---
title: WMS/WMTS/WFS services and Tile server
category: products
layout: default
lang: en
order: 3
---

## WMS/WMTS/WFS/... services
For several years, we have been hosting various WMS (Web Map Service), WMTS (Web Map Tile Service), WFS (Web Feature Service) services for our customers. These [Open Geospatial Consortium (OGC)](https://www.ogc.org/){: target="_blank"} standards allow to display and query map layers.

We mainly use the following open-source programs: [*MapServer*](https://mapserver.org/){: target="_blank"}, [*GeoServer*](http://geoserver.org/){: target="_blank"}, [*MapCache*](https://mapserver.org/mapcache/){: target="_blank"}, [*MapProxy*](https://mapproxy.org/){: target="_blank"}
## Tile server
We also host and manage the tile server of [OpenStreetMap Belgium](https://openstreetmap.be/){: target="_blank"}: <https://tile.geo6.be/>{: target="_blank"} 

This tile server uses the same stack as the tile server used by OpenStreetMap on <https://openstreetmap.org/>{: target="_blank"} . It uses Mapnik and CartoCSS style sheets.  
The style used is similar to the one used by <https://openstreetmap.org/> ; however, it is limited to Belgium (a little extended beyond the borders) but offers the possibility to display names in French and Dutch only (instead of multilingual names; street names in Brussels, for example). It also offers some additional icons (*friteries*, breweries, ...) and can be adapted to the specific needs of the customer.  
The style is available on GitHub: <https://github.com/jbelien/openstreetmap-carto-be>{: target="_blank"}

Since the end of 2020, tile generation is fully automated using [Ansible](https://www.ansible.com/){: target="_blank"}. This includes the installation of the necessary packages and librairies, the import and processing of the OpenStreetMap data, the generation of the tiles and the copy of the tiles to our production server.  
The "recipes" are available on GitHub: <https://github.com/jbelien/openstreetmap-carto-be/tree/ansible>{: target="_blank"}

The tiles can be used freely if you respect the [terms of use](https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy){: target="_blank"}. Tiles are available in French, Dutch, and with the "default" name.

More details can be found on the OpenStreetMap Belgium website: <https://openstreetmap.be/fr/projects/belgium-baselayer.html>{: target="_blank"}

![]({{ 'assets/images/products/tiles.png' | relative_url }}){: class="img-fluid mx-auto d-block"}
