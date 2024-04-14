let map;

async function initMap() {
  const position = { lat: 56.947, lng: 24.108 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "N/A",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Latvia",
  });
}

initMap();