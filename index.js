let earth;
const options = { atmosphere: true, center: [0, 0], zoom: 3 };
earth = new WE.map('earth_div', options);
WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
  minZoom: 3,
  maxZoom: 5,
  attribution: 'NASA',
}).addTo(earth);

const imageTile = addLayer(imageTileJson);

const windTile = addLayer(windTileJson);
// windTile.setOpacity(0.7);

rotate();

function addLayer(tileJson) {
  const tile = WE.tileLayerJSON(tileJson);
  tile.addTo(earth);
  return tile;
}

function rotate() {
  let before = null;
  requestAnimationFrame(function animate(now) {
    const c = earth.getPosition();
    const elapsed = before ? now - before : 0;
    before = now;
    earth.setCenter([c[0], c[1] + 0.5 * (elapsed / 30)]);
    requestAnimationFrame(animate);
  });
}
