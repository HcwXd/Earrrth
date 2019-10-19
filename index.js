let earth;
function initialize() {
  const options = { atmosphere: true, center: [0, 0], zoom: 3 };
  earth = new WE.map('earth_div', options);
  WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
    minZoom: 3,
    maxZoom: 5,
    attribution: 'NASA',
  }).addTo(earth);

  const image = {
    name: 'SWISSIMAGE 25m',
    description: 'The Digital Color Orthophotomosaic of Switzerland',
    attribution: 'Federal Office of Topography, swisstopo',
    type: 'baselayer',
    version: '1',
    format: 'jpg',
    minzoom: 6,
    maxzoom: 12,
    bounds: [5.894335, 45.669276, 10.567622, 47.8415],
    basename: 'swissimage25m',
    profile: 'mercator',
    scale: 1,
    tiles: ['https://i1.sndcdn.com/avatars-000109087465-2uqbx8-t500x500.jpg'],
    tilejson: '2.0.0',
    scheme: 'xyz',
  };
  const swiss = WE.tileLayerJSON(image);
  swiss.addTo(earth);

  // earth.setTilt(50);
  // earth.setHeading(300);

  // Start a simple rotation animation
  rotate();
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
