function initMap() {
    const polandCenter = { lat: 52.0, lng: 19.0 }; // Centrum Polski

    const map = new google.maps.Map(document.getElementById('map'), {
        center: polandCenter,
        zoom: 6
    });

    const points = [
        {
            name: 'PCK1',
            position: { lat: 52.2204, lng: 21.0135 },
            description: 'PCK1.'
        },
        {
            name: 'PCK2',
            position: { lat: 50.064650, lng: 19.944980 },
            description: 'PCK2.'
        },
        {
            name: 'PCK3',
            position: { lat: 51.107885, lng: 17.038538 },
            description: 'PCK3.'
        },
        {
            name: 'PCK4',
            position: { lat: 53.428543, lng: 14.552812 },
            description: 'PCK4.'
        },
        {
            name: 'PCK5',
            position: { lat: 54.372158, lng: 18.638306 },
            description: 'PCK5.'
        },
        {
            name: 'PCK6',
            position: { lat: 51.246453, lng: 22.568446 },
            description: 'PCk6.'
        },
        {
            name: 'PCK7',
            position: { lat: 53.125996, lng: 23.141733 },
            description: 'PCK&.'
        },
    ];

    const pointList = document.getElementById('point-list');

    points.forEach(function (point, index) {
        const marker = new google.maps.Marker({

            position: point.position,
            map: map,
            title: point.name
        });

        const listItem = document.createElement('div');
        const text = document.createElement('span')
        const img = document.createElement('div')
        listItem.classList.add('item')
        img.classList.add('img')
        text.textContent = point.name;
        text.classList.add('points')

        listItem.addEventListener('click', function () {
            map.panTo(point.position);
            map.setZoom(15); // Opcjonalne: zbliżenie do punktu po kliknięciu na liście
        });

        pointList.appendChild(listItem);
        listItem.appendChild(img)
        listItem.appendChild(text)
    });
}