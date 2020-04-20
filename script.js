
function somar() {
    let nome = document.getElementById('nome').value;
    let pim = document.getElementById('pim').checked;
    let tom = document.getElementById('tom').checked;
    let pep = document.getElementById('pep').checked;
    let prod = Number(document.getElementById('prod').value);

    if (pim == true) {

        if (prod < 32) {
            alert(`Ola ${nome} , você vai usar apenas 1 tunel para colocar a produção de pimentão`);
        }

        else {
            let result = prod / 32;
            alert(`Ola ${nome} , você vai usar ${Math.round(result)} tunel para colocar a produção de pimentão`);
        }
    }

    if (tom == true) {
        if (prod < 20) {
            alert(`Ola ${nome} , você vai usar apenas 1 tunel para colocar a produção de tomate`);
        }

        else {
            let result = prod / 20;
            alert(`Ola ${nome} , você vai usar ${Math.round(result)} tunel para colocar a produção de tomate`);
        }
    }

    if (pep == true) {
        
        if (prod < 21) {
            alert(`Ola ${nome} , você vai usar apenas 1 tunel para colocar a produção de pepino`);
        }
        else{
            let result = prod / 21;
            alert(`Ola ${nome} , você vai usar ${Math.round(result)} tunel para colocar a produção de pepino`);
        }
    }
}