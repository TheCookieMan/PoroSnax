function premiereLaunch() {
    var first = localStorage.getItem('first');
    if (first === 0 || first === null) {
        localStorage.setItem('nbrsnacks', 0);
        localStorage.setItem('first', 1);
        localStorage.setItem('clicOk', 0);
    }
}

function nbrGateaux() {
    document.getElementById('gateaux').innerHTML = localStorage.getItem('nbrsnacks');
}

function giveSnack() {
    var nbrSnack = localStorage.getItem('nbrsnacks');
    nbrSnack = parseInt(nbrSnack) + 1;
    localStorage.setItem('nbrsnacks', nbrSnack);
    nbrGateaux();
}

function animation() {
    var clic = localStorage.getItem('clicOk');
    var snacks = localStorage.getItem('nbrsnacks');
    if (clic === 0 || clic === "0") {
        document.getElementById('coeur').style.display = 'block';
        document.getElementById('coeur').classList.add('moove');
        if (snacks >= 200) {
            document.getElementById('coeurUn').style.display = 'block';
            document.getElementById('coeurUn').classList.add('mooveMiroir'); 
        }
        localStorage.setItem('clicOk', 1);
        setTimeout('close();', 2000);
    }
}
close();

function close() {
    document.getElementById('coeur').classList.remove('moove');
    document.getElementById('coeur').style.display = 'none';
    document.getElementById('coeurUn').classList.remove('moove');
    document.getElementById('coeurUn').style.display = 'none';
    localStorage.setItem('clicOk', 0);
}

function verifNote() {
    var noteDonnee = localStorage.getItem('noteDonnee');
    if (noteDonnee === 0 || noteDonnee === null || noteDonnee === "0") {
        document.getElementById('lienA').innerHTML = "NOTER";
        document.getElementById('lienA').style.display = "inline-block";
        document.getElementById('icone').classList.remove('fa-check');
        document.getElementById('icone').classList.add('fa-star');
        document.getElementById('btn-noter').classList.remove('bouton-ok');
        document.getElementById('btn-noter').classList.add('lien-noter');
    } else {
        document.getElementById('lienA').style.display = "none";
        document.getElementById('icone').classList.remove('fa-star');
        document.getElementById('icone').classList.add('fa-check');
        document.getElementById('btn-noter').classList.remove('lien-noter');
        document.getElementById('btn-noter').classList.add('bouton-ok');
    }
}

function note() {
    /* var noteDonnee = localStorage.getItem('noteDonnee'); */
    localStorage.setItem('noteDonnee', 1);
    verifNote();
}

/* FONCTIONS SUCCES */

function progression() {
    var snacks = localStorage.getItem('nbrsnacks');
    snacksZero = snacks / 10;
    if (snacksZero >= 100) {
        snacksZero = 100;
        document.getElementById('barre').style.width = snacksZero + '%';
        document.getElementById('pourcentage').innerHTML = snacksZero + '%';
    } else if (snacksZero < 100) {
        document.getElementById('barre').style.width = snacksZero + '%';
        document.getElementById('pourcentage').innerHTML = snacksZero + '%';
    }
    var snacksUn = snacks / 100;
    if (snacksUn >= 100) {
        snacksUn = 100;
        document.getElementById('barreUne').style.width = snacksUn + '%';
        document.getElementById('pourcentageUn').innerHTML = snacksUn + '%';
    } else if (snacksUn < 100) {
        document.getElementById('barreUne').style.width = snacksUn + '%';
        document.getElementById('pourcentageUn').innerHTML = snacksUn + '%';
    }
    var snacksDeux = snacks / 10000;
    if (snacksDeux >= 100) {
        snacksDeux = 100;
        document.getElementById('barreDeux').style.width = snacksDeux + '%';
        document.getElementById('pourcentageDeux').innerHTML = snacksDeux + '%';
    } else if (snacksDeux < 100) {
        document.getElementById('barreDeux').style.width = snacksDeux + '%';
        document.getElementById('pourcentageDeux').innerHTML = snacksDeux + '%';
    }
}

/* SUCCES */

function apparition() {
    document.getElementById("succes").style.display = 'block';
    document.getElementById("succes").classList.remove('disparition');
    document.getElementById("succes").classList.add('apparition');
}

function disparition() {
    document.getElementById("succes").classList.remove('apparition');
    document.getElementById("succes").classList.add('disparition');
}

/* REINITIALISER */

function reinit(confirm) {
    if (confirm === 2) {
        localStorage.setItem('nbrsnacks', 0);
        nbrGateaux();
        progression();
        document.getElementById("succes").classList.remove('apparition');
        document.getElementById("succes").classList.add('disparition');
        document.getElementById("popup").classList.add('opacite');
        setTimeout('document.getElementById("popup").style.display = "none"', 1000);
        setTimeout('document.getElementById("popup").classList.remove("opacite");', 1000);
    } else if (confirm === 1) {
        document.getElementById("succes").classList.remove('apparition');
        document.getElementById("succes").classList.add('disparition');
        document.getElementById("popup").classList.add('opacite');
        setTimeout('document.getElementById("popup").style.display = "none"', 1000);
        setTimeout('document.getElementById("popup").classList.remove("opacite");', 1000);
    } else if (confirm === 0) {
        document.getElementById("popup").style.display = 'block';
        document.getElementById("succes").classList.remove('apparition');
        document.getElementById("succes").classList.add('disparition');
    }
}
