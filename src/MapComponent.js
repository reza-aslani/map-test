import { MapContainer, Marker, Popup, TileLayer, useMap, Circle } from 'react-leaflet'
import AreaSelect from './AreaSelect';
import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { LatLngTuple } from 'leaflet';

export default function MapComponent() {

  const position: LatLngTuple = [34.0, 54.0];
  const markersPos: Array<{ ind: number, pos: LatLngTuple }> = [
    { ind: 100, pos: [34.0, 54.0] },
    { ind: 100, pos: [34.0, 55.1] },
    { ind: 100, pos: [34.0, 56.2] }
  ]

  return (
    <MapContainer center={position} zoom={7} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='روشنایی هوشمند' />
      <AreaSelect />
      {
        //  stroke?: boolean | undefined;
        //  color?: string | undefined;
        //  weight?: number | undefined;
        //  opacity?: number | undefined;
        //  lineCap?: LineCapShape | undefined;
        //  lineJoin?: LineJoinShape | undefined;
        //  dashArray?: string | number[] | undefined;
        //  dashOffset?: string | undefined;
        //  fill?: boolean | undefined;
        //  fillColor?: string | undefined;
        //  fillOpacity?: number | undefined;
        //  fillRule?: FillRule | undefined;
        //  renderer?: Renderer | undefined;
        //  className?: string | undefined;
        
        markersPos.map((item, i) => <Circle key={i}
        center={item.pos}
          radius={5000}
          color={'red'}
          fillColor={'yellow'}
          stroke={true}
          fillOpacity={0.6}
        >
      
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          
        </Circle>)
      }
    </MapContainer>
  );
}


