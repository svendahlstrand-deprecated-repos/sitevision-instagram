# SiteVision Instagram

En enkel skriptmodul för att visa ett Instagram-flöde.

## Förberedelser

Innan du kan sätta igång behöver du två saker:

1. Ett konto hos Instagram.
2. En så kallad *access token*.

### Hur du får tag i en *access token*

En *access token* behövs för att kunna visa ett Instagram-flöde på en webbplats. Det kan vara krångligt att få tag på. Lättast är att [följa stegen hos Style Hatch](http://stylehatch.co/instagram/).

En *access token* ser ut så här:

    438335995.11c41e6.9cece9f89c3c489d8430b2f6d5127312

## Installera skript-modulen

1. Lägg in en ny skriptmodul där du vill ha Instagram-flödet, det kan vara på en sida eller mall.
2. Klistra in innehållet i filen `server.js` under JavaScript.
3. Klistra in innehållet i filen `view.vm` under Velocity.
4. Klistra in din *acccess token* under inställningarna.

### Att göra inställningar

Längst upp i skript-delen gör du inställningar. Det ser ut så här:

    var settings = {
      accessToken: 'YOUR ACCESS TOKEN',
      numberOfMedia: 5,
      userId: 12345
    };

Alla inställningar behöver inte vara med.

#### accessToken

Denna inställning behövs för att skriptet ska fungera. Läs mer om hur du får tag i en *access token* längre upp i dokumentet. Exempel:

    accessToken: '438335995.11c41e6.9cece9f89c3c489d8430b2f6d5127312'

#### numberOfMedia

Antalet bilder som ska visas. Om inställningen inte är med visas 20 bilder. Exempel:

    numberOfMedia: 3

#### userId

Vems Instagram-flöde som ska visas. Om inställningen inte är med visas ditt flöde. Det finns en tjänst som hjälper dig [hitta användar-id](http://jelled.com/instagram/lookup-user-id). Exempel:

    userId: 7830961

## Sätt cache på skript-modulen

Det är en bra idé att sätta cache på skriptmodulen. Det gör att sidan kommer ladda snabbare. Använd inställningen *Per sida* och sätt en ganska lång giltighetstid, till exempel en timma. [Läs mer om Cache hos SiteVision](http://help3.sitevision.se/SiteVision_3_0/portletCache.html).

## Ändra presentationen

Hur du väljer att presentera Instagram-flödet är upp till dig. Velocity-delen är bara ett exempel som det är fritt fram att ändra i.