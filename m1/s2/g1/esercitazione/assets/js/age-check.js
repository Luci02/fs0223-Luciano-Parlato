function ageCheck(eta) {
    if ( eta >= 18 && eta <= 117 ){
        document.getElementById('risultatoEta').innerHTML = 'Sei maggiorenne';
        document.getElementById('risultatoEta').style.color = 'green';
    }else if( eta <= 0 ){
        document.getElementById('risultatoEta').innerHTML = 'Inserisci un valore valido!!!';
        document.getElementById('risultatoEta').style.color = 'red';
    }else{
        document.getElementById('risultatoEta').innerHTML = 'Sei minorenne';
        document.getElementById('risultatoEta').style.color = 'blue';
    }
}