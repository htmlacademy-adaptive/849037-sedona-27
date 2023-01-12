ymaps.ready(init);

  let myMap,
      myPlacemark;

  function init() {
    myMap = new ymaps.Map('map', {
      center: [34.87079664, -111.76490521],
      zoom: 7,
      controls: ['zoomControl', 'searchControl', 'typeSelector']
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.behaviors.disable([
      'scrollZoom'
    ]);

    var myPlacemark = new ymaps.Placemark([34.87306025, -111.75666547], {
      hintContent: 'Город «Седона»',
      balloonContent: 'Cедона — небольшой городок в аризоне.'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map_pin.svg',
      iconImageSize: [27, 27],
      iconImageOffset: [-20, -28]
    });

    myMap.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();
  }
