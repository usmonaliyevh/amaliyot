

let cards = document.querySelector('.cards'),
    line_1 = document.querySelector('.line_1'),
    line_2 = document.querySelector('.line_2'),
    line_3 = document.querySelector('.line_3'),
    inp = document.querySelector('.inp')
    btn = document.querySelector('.btn');
    cards = document.querySelector('.cards');

let request = new XMLHttpRequest();
request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=${inp.value}`);
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
    request.open('GET', `https://api.unsplash.com/search/collections?client_id=huDzwvMfGpHuc-fxTVpcrDqBPDSVSuMb-2NwyND8oeM&query=${inp.value}`);
    request.send();
})

