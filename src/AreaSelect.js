import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function AreaSelect() {
  const map = useMap();

  function getFeaturesInView(bounds) {
    var features = [];
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        if (bounds.contains(layer.getLatLng())) {
          features.push(layer);
        }
      }
    });
    return features;
  }

  useEffect(() => {
    if (!map.selectArea) return;

    map.selectArea.enable();

    map.on("areaselected", (e) => {
      //console.log(e.bounds.toBBoxString()); // lon, lat, lon, lat
      //L.rectangle(e.bounds, { color: "blue", weight: 1 }).addTo(map);
      const markers = getFeaturesInView(e.bounds)

    });

    // // You can restrict selection area like this:
    // const bounds = map.getBounds().pad(-0.25); // save current map bounds as restriction area
    // // check restricted area on start and move
    // map.selectArea.setValidate((layerPoint) => {
    //   return bounds.contains(this._map.layerPointToLatLng(layerPoint));
    // });
    // // now switch it off
    // map.selectArea.setValidate();

  }, []);

  return null;
}
