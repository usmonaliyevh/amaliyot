let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')

let cards = document.querySelector('.cards'),
    line_1 = document.querySelector('.line_1'),
    line_2 = document.querySelector('.line_2'),
    line_3 = document.querySelector('.line_3'),
    
    btn = document.querySelector('.btn');
    cards = document.querySelector('.cards');

let request = new XMLHttpRequest();
request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=`);
request.send();

let i = 1

request.addEventListener('load', () => {
    let data = JSON.parse(request.response);
    console.log(data);
    data.results.forEach(item => {
        if (i >= 1 && i <= 3) {
            line_1.innerHTML += `
                <div class="img_div">
                    <img src="${item['cover_photo']['urls']['full']}">
                </div>
            `
        } else if (i >= 4 && i <= 6) {
            line_2.innerHTML += `
                <div class="img_div">
                    <img src="${item['cover_photo']['urls']['full']}">
                </div>
            `
        } else if (i >= 7 && i <= 9) {
            line_3.innerHTML += `
                <div class="img_div">
                    <img src="${item['cover_photo']['urls']['full']}">
                </div>
            `
        }
        i++;
    })
})
btn.addEventListener('click', e => {
    e.preventDefault();
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=car`);
    request.send();
})
btn2.addEventListener('click', e => {
    e.preventDefault();
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=dog`);
    request.send();
})
btn3.addEventListener('click', e => {
    e.preventDefault();
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=bear`);
    request.send();
})
btn4.addEventListener('click', e => {
    e.preventDefault();
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=horse`);
    request.send();
})
btn5.addEventListener('click', e => {
    e.preventDefault();
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=house`);
    request.send();
})
