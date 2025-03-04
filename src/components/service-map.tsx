import { LatLngExpression } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';

const ServiceMap = () => {
  const mapCenter: LatLngExpression = [51.3018, -0.5603];
  const latlngs: LatLngExpression[] = [
    [-0.626843, 51.1741319],
    [-0.3127429, 51.2181829],
    [-0.3070834, 51.3048792],
    [-0.3580132, 51.3740558],
    [-0.4211846, 51.396339],
    [-0.5138817, 51.4014798],
    [-0.7953796, 51.3503932],
    [-0.8481547, 51.2791339],
    [-0.7987162, 51.2086394],
  ];

  const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);

  useEffect(() => {
    setCoordinates(latlngs.map((row: LatLngExpression) => [row[1], row[0]]));
  }, []);
  const purpleOptions = {
    color: '#e11d48',
    weight: 1,
    opacity: 0.7,
  };

  return (
    <>
      <h3 className="mb-4 text-xl font-extrabold text-gray-900">
        Working mobile in this area
      </h3>
      <MapContainer
        style={{
          height: '40vh',
          borderRadius: '10px',
          filter: 'grayscale(1) opacity(0.9)',
        }}
        center={mapCenter}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon pathOptions={purpleOptions} positions={coordinates} />
      </MapContainer>
    </>
  );
};

export default React.memo(ServiceMap);
