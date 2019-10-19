let earth;
const options = { atmosphere: true, center: [45, 5], zoom: 4 };
earth = new WE.map('earth_div', options);
WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
  minZoom: 4,
  maxZoom: 5,
  attribution: 'NASA',
}).addTo(earth);

// const imageTile = addLayer(imageTileJson);
// const windTile = addLayer(windTileJson);
const blackTile = addLayer(blackTileJson);
// rotate();

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
    earth.setCenter([c[0], c[1] + 1 * (elapsed / 30)]);
    requestAnimationFrame(animate);
  });
}
