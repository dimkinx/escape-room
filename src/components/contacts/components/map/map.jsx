import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import contactsMap from '../../../../assets/img/contacts-map.jpg';
import iconBlip from '../../../../assets/img/icon-blip.svg';
import * as S from './map.styled';
import 'leaflet/dist/leaflet.css';
import { MapParam, MapIconParam } from '../../../../constants';

function MapPlaceholder() {
  return (
    <S.MapImage
      src={contactsMap}
      width={MapParam.Size.Width}
      height={MapParam.Size.Height}
      alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
    />
  );
}

const customIcon = new Icon({
  iconUrl: iconBlip,
  iconSize: [
    MapIconParam.Size.Width,
    MapIconParam.Size.Height,
  ],
  iconAnchor: [
    MapIconParam.AnchorPosition.X,
    MapIconParam.AnchorPosition.Y,
  ],
});

function Map() {
  return (
    <MapContainer
      center={[
        MapParam.Location.Latitude,
        MapParam.Location.Longitude,
      ]}
      zoom={MapParam.Zoom}
      scrollWheelZoom={false}
      placeholder={<MapPlaceholder />}
      style={{
        position: 'relative',
        display: 'flex',
        width: `${MapParam.Size.Width}px`,
        height: `${MapParam.Size.Height}px`,
        marginLeft: 'auto',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          MapIconParam.Location.Latitude,
          MapIconParam.Location.Longitude,
        ]}
        icon={customIcon}
      />
    </MapContainer>
  );
}

export default Map;
