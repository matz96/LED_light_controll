# WLW_Projekt

## Abstract
Im Rahmen des Moduls wlw an der FHNW wurden je eine Server- und Clientseitige Applikation erstellt, die es erlauben, ein RGB-LED-Streifen mittels eines Shelly RGBW2 anzusteuern. Die Serverseitige API umfasst Befehle um die Helligkeit aller LEDs, wie auch die Intensität der Einzelfarben einzustellen und um den LED-Streifen komplett ein- bzw. auszuschalten.

## Aufgabenstellung
Mit dem Ziel die im Modul wlw gelernten Tools in einer praktischen Arbeit anzuwenden wurde eine Aufgabenstellung definiert, die diesem Anspruch gerecht werden sollte. Die Studenten haben sich für die Ansteuerung eines RGB-LED-Treibers der Firma Shelly entschieden.
Dabei sollte es ein einfaches Webinterface erlauben, per HTTP-Requests via Serverseitiger Applikation das Shelly-Modul anzusteuern (wiederum per API)

## Allgemeine Funktionsweise der Applikationen
Es wurden zwei Applikationen, eine client- sowie eine serverseitige Applikation, umgesetzt. Die Clientapplikation stellt das Frontend zur Verfügung, während der Server als Bindeglied zwischen Shelly und dem Client fungiert. Sämtliche Kommunikation zwischen Client und Server, respektive zwischen Server und Shelly, erfolgt durch HTTP-Requests.

### Client


### Server
Unter dem /api Endpoint wird die gesamte API zur Vefügung gestellt.
#### Serverseitige Endpoints
Die API verfügt über einen einzigen Endpoint unter /api. Sämtliche Kommunikation erfolgt vom Client über einen GET-Request mit diversen Query-Parametern. Diese sind 
1. turn
- Parameter: on, off, toggle
1. transitionTime
- Parameter: Zeit für Änderung, 0..5000ms
1. red
- Parameter: Helligkeit rote LED, 0-255
1. green
- Parameter: Helligkeit grüne LED, 0-255
1. blue
- Parameter: Helligkeit blaue LED, 0-255
1. getStatus
- Parameter: NaN, gibt sämtliche lichtspezifischen Antworten des Shelly's zurück. 


### Shelly API
Die Shelly Produktfamilie der ersten Generation stellen eine HTTP API zur Verfügung. Damit können die verschiedenen Sensoren und Aktoren via HTTP-Requests ausgelesen und gesteuert werden. Die Shelly Produktfamilie umfasst diverse Sensoren, wie z.B. Temperatur-, Gas- und Lichtsensoren sowie Aktoren wie Heizventile, Steckdosenschalter sowie diverse Relaiskonfigurationen, welche alle über WiFi angebunden sind und über die API angesprochen werden. 



## Source Code

### Client

### Server

## Roadmap
Für dieses Projekt ist noch keine Erweiterung geplant. Möglicherweise wird das Projekt aber im Rahmen einer privaten Nutzung wieder aufgegriffen.

## Authoren
Client-Applikation: Matthias Bhend
Server-Applikation: Cyril Odermatt

## License
MIT-Lizenz

