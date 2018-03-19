var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

var listePhraseKaamelott = [
    "Sire ! Mon pére est peut-être unijambiste, mais moi, ma femme n'a pas de moustache !",
    "Je ne mange pas de graines !!!!",
    "Tempora mori, tempora mundis recorda. Voilà. Eh bien ça, par exemple, ça veut absolument rien dire, mais l'effet reste le même, et pourtant jai jamais foutu les pieds dans une salle de classe attention !",
    "Victoriae mundis et mundis lacrima. Bon, ça ne veut absolument rien dire, mais je trouve que c'est assez dans le ton.",
    "Nous sommes jeunes, nous marchons à pieds. J'opterai donc pour un surnom en rapport : les Petits Pédestres",
    "Moi, je m'en fous, si on me force à y retourner, je retiens ma respiration jusqu'à qu'on arrête de me forcer à y retourner.",
    "J'estime ne pas avoir à subir les fantasmes carriéristes d'une entité générationnelle réactionnaire et oppressive !",
    "La chevalerie, c'est pas là où on range les chevaux ?",
    "C'est pas faux.",
    "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
    "Ah ! oui... j' l'ai fait trop fulgurant, là. Ca va ?",
    "Si Joseph d'Arimathie a pas été trop con, vous pouvez être sûr que le Graal, c'est un bocal à anchois.",
    "Sire, Sire ! On en a gros !",
    "Moi, j'serais vous, je vous écouterais... Non, moi, j'serais nous, je vous... Si moi, j'étais vous, je vous écouterais ! Non, elle me fait chier, cette phrase !",
    "Après demain, à partir d'aujourd'hui ?",
    "Là, vous faites sirop de vingt-et-un et vous dites : beau sirop, mi-sirop, siroté, gagne-sirop, sirop-grelot, passemontagne, sirop au bon goût.",
    "Dans la vie, j'avais deux ennemis : le vocabulaire et les épinards. Maintenant j'ai la botte secrète et je bouffe plus d'épinards. Merci, de rien, au revoir messieurs-dames.",
    "Salut, Sire. Je trouve qu'il fait beau, mais encore frais, mais beau !",
    "Incandescente, c'est : qui peut accaparer des objets sans resurgir sur autrui.",
    "Dans le Languedoc, ils m'appellent Provençal. Mais c'est moi qui m'suis gouré en disant mon nom. Sinon, en Bretagne, c'est le Gros Faisan au sud, et au nord, c'est juste Ducon ..",
    "Ils ont pas de bol, quand même ! Mettre au point un truc pareil et tomber sur des cerveaux comme nous !",
    "Mais cherchez pas à faire des phrases pourries... On en a gros, c'est tout !",
    "[Dame Séli : J'ai envie de faire des tartes, voilà. Vous allez pas m'obliger à me justifier !] Ah bah non, du moment que vous nous obligez pas à les manger !",
    "Sans vouloir la ramener, la seule différence concrète avec des briques, c'est que vous appelez ça des tartes !",
    "J'pense pas que deux trous-du-cul soient plus efficaces qu'un seul !",
    "Vous êtes marié, comme moi ; vous savez que la monstruosité peut prendre des formes très diverses.",
    "Avec un pif pareil ils feraient mieux de chercher des truffes plutôt que de nous emmerder !",
    "Moi, j'ai appris à lire, et ben je souhaite ça à personne !",
    "Ben moi en général, je lui réponds 'merde'. En principe ça colle avec tout.",
    "Alors, si vous êtes plus à l'aise avec les notions concrètes, je peux vous proposer mon pied dans les noix...",
    "J'irai me coucher quand vous m'aurez juré qu'il n'y a pas dans cette forêt d'animal plus dangereux que le lapin adulte !",
    "Moi, je suis en charge des négociations protocolaires de la surveillance intérieure de l'inspection de certains postes avancés, eh bien, voyez-vous, si on me disait : Bohort, tout ça c'est fini, à partir de maintenant, vous vous occuperez des pâtisseries et du linge de maison, je vous assure, je n'hésiterai pas une seconde .",
    "Vous racontez ce qui s'est passé, d'un coup, sans vous arrêter, et si vous changez des trucs, je vous envoie le registre à travers la gueule. Vu ?",
    "C'est vrai ce qu'on dit, vous êtes le fils d'un démon et d'une pucelle ? Vous avez plus pris de la pucelle.",
    "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe. C'est nouveau. Ah non, ça c'est que nous. Parce qu'il faut être capable de passer pour des cons en un temps record. Ah non, là-dessus on a une avance considérable.",
    "Sortez-vous les doigts du cul !!!",
    "Le seigneur Perceval ne se met jamais en situation dangereuse. Pour ça, il fait preuve d'une intelligence redoutable.",
    "Et si je vous dis que vous êtes deux glands, là, vous avez du péremptoire. C'est vous qui voyez.",
    "ARTHOUR !! CUILLERE",
    "Pour savoir si il y a du vent, faut mettre le doigt dans le cul du coq ",
    "J'ai rêvé qu'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière ! ",
    "Elle est où la poulette",
    "Donc, pour résumer, je suis souvent victime des colibris, sous-entendu des types qu’oublient toujours tout, euh, non... Bref, tout ça pour dire, que je voudrais bien qu’on me considère en tant que tel.",
    "Vous n’êtes pas le plus fort, Môssieur Élias ! Quand on confond un clafoutis et une part de clafoutis, on vient pas la ramener !",
    "Moi, je dis que c'est magique à cause des merdes qui pendouillent, mais ça se trouve, c'est pas ça ...",
    "La fleur en bouquet fane, et jamais ne renaît !",
    "Arthour !… Pas changer assiette pour fromage !",
    "Arthour ! On est fort en pomme.",
    "Le caca des canards c'est caca."


];

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {

        konamiCodePosition++;

        if (konamiCodePosition == konamiCode.length) {
            activateKonamiCode();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateKonamiCode() {
    var number = Math.floor(Math.random() * listePhraseKaamelott.length);
    alert(listePhraseKaamelott[number] + " - Kaamelott (Alexandre Astier)");
}