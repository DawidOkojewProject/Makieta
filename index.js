const texts = [
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
    `Lista potrzebnych produktów: <br> Ręczniki <br>Ryż<br>Słodycze`,
];
const contacts = [
    `Biuro Centrala <br> Tel. 777 999 800, <br> Adres ul.Akacjowa 12,<br>00-001 Warszawa`,
    `Biuro <br> Tel. 777 999 801, <br> Adres ul.Akacjowa 12,<br>10-003 Kraków`,
    `Biuro <br> Tel. 777 999 802, <br> Adres ul.Akacjowa 12,<br>45-573 Wrocław`,
    `Biuro <br> Tel. 777 999 803, <br> Adres ul.Akacjowa 12,<br>16-402 Szczecin`,
    `Biuro <br> Tel. 777 999 804, <br> Adres ul.Akacjowa 12,<br>80-007 Gdańsk`,
    `Biuro <br> Tel. 777 999 805, <br> Adres ul.Akacjowa 12,<br>20-003 Lublin`,
    `Biuro <br> Tel. 777 999 806, <br> Adres ul.Akacjowa 12,<br>15-003 Białystok`,
];
const mapPoint = '<i class="fa-solid fa-box"></i>';
const telephone = '<i class="fa-solid fa-phone"></i>';
const contactContainer = document.querySelectorAll('.contact');
const textInfoContainer = document.querySelectorAll('.textInfo');

function initMap() {
    const polandCenter = { lat: 52.0, lng: 19.0 }; // Centrum Polski

    const map = new google.maps.Map(document.getElementById('map'), {
        center: polandCenter,
        zoom: 7,
    });

    const points = [
        { name: 'PCK1', position: { lat: 52.2204, lng: 21.0135 }, description: 'PCK1.' },
        { name: 'PCK2', position: { lat: 50.06465, lng: 19.94498 }, description: 'PCK2.' },
        { name: 'PCK3', position: { lat: 51.107885, lng: 17.038538 }, description: 'PCK3.' },
        { name: 'PCK4', position: { lat: 53.428543, lng: 14.552812 }, description: 'PCK4.' },
        { name: 'PCK5', position: { lat: 54.372158, lng: 18.638306 }, description: 'PCK5.' },
        { name: 'PCK6', position: { lat: 51.246453, lng: 22.568446 }, description: 'PCk6.' },
        { name: 'PCK7', position: { lat: 53.125996, lng: 23.141733 }, description: 'PCK&.' },
    ];

    const pointList = document.getElementById('point-list');

    points.forEach(function (point, index) {
        const marker = new google.maps.Marker({
            position: point.position,
            map: map,
            title: point.name,
        });

        const listItem = document.createElement('div');
        const liItem = document.createElement('div');
        const text = document.createElement('span');
        const img = document.createElement('div');

        listItem.classList.add('listItem');
        liItem.classList.add('item');
        img.classList.add('img');
        text.textContent = point.name;
        text.classList.add('points');

        const item = document.createElement('div');
        item.classList.add('textInfo');
        item.classList.add('hidden');
        item.innerHTML = texts[index];

        const contact = document.createElement('div');
        contact.classList.add('contact');
        contact.classList.add('hidden');
        contact.innerHTML = contacts[index];

        listItem.addEventListener('click', function () {
            setTimeout(function () {
                map.panTo(point.position);
                map.setZoom(15);
            }, 100);
        });

        const contactIcon = document.createElement('div');
        contactIcon.innerHTML = telephone;
        contactIcon.classList.add('phone');
        const boxIcon = document.createElement('div');
        boxIcon.innerHTML = mapPoint;
        boxIcon.classList.add('box');

        listItem.appendChild(liItem);
        liItem.appendChild(img);
        liItem.appendChild(text);
        liItem.appendChild(contactIcon);
        liItem.appendChild(boxIcon);
        listItem.appendChild(contact);
        listItem.appendChild(item);

        contactIcon.addEventListener('click', (event) => {
            const listItem = event.target.closest('.listItem');
            const contact = listItem.querySelector('.contact');
            const contacts = document.querySelectorAll('.contact:not(.hidden)');

            contacts.forEach(item => {
                item.classList.add('hidden');
            });

            contact.classList.remove('hidden');
        });

        boxIcon.addEventListener('click', (event) => {
            const listItem = event.target.closest('.listItem');
            const textInfo = listItem.querySelector('.textInfo');
            const textInfos = document.querySelectorAll('.textInfo:not(.hidden)');

            textInfos.forEach(item => {
                item.classList.add('hidden');
            });

            textInfo.classList.remove('hidden');
        });

        pointList.appendChild(listItem);
    });
}
