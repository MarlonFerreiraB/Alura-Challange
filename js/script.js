const cripbtn = document.getElementById('blue');


function cripto() {
    let pegar = document.getElementById('text').value;
    let printed = document.getElementById('printedtext');

    const substitutions = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    for (key in substitutions) {
        pegar = pegar.replace(new RegExp(key, 'g'), substitutions[key]);
    }
    printed.textContent = pegar;
    document.getElementById('text').value = pegar; 

    console.log(pegar);
    console.log(printed.textContent);
}


function descrip() {
    let pegarcrip = document.getElementById('text').value;
    let printedcrip = document.getElementById('printedtext');

    const substitutions = { 
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    for (key in substitutions) {
        pegarcrip = pegarcrip.replace(new RegExp(key, 'g'), substitutions[key]); 
    }
    printedcrip.textContent = pegarcrip;
}
