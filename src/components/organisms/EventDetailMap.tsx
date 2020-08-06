import React, { FC } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

import { Event } from 'apis/connpassAPI';
import styles from 'styles/components/organisms/EventDetailMap.module.scss';

interface EventDetailMapProps {
  event: Event;
}

const EventDetailContent: FC<EventDetailMapProps> = ({
  event: { lat, lon: lng },
}) => {
  const position = { lat: Number(lat), lng: Number(lng) };
  const mapStyle = { width: '100%', height: '100%' };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>開催場所</h3>
      <div className={styles.content}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={15}
            center={position}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
              streetViewControl: false,
            }}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default EventDetailContent;
