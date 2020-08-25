import React, { useCallback, useRef, CSSProperties, ReactNode } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { reset } from '../../store/cities/actions';
import { setCoordinates, unsetCoordinates } from '../../store/coordinates/actions';

import mapStyles from '../../styles/themes/night/mapStyles';
import styles from './Map.module.css';

interface Props {
  overlay?: ReactNode;
}

const Map: React.FC<Props> = (props: Props) => {
  const { overlay } = props;

  const dispatch = useDispatch();
  const coordinates = useSelector((state: ApplicationState) => state.coordinates);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const defaultZoom = Number(process.env.NEXT_PUBLIC_MAP_DEFAULT_ZOOM);

  const mapRef = useRef<google.maps.Map<Element>>();

  const containerStyle: CSSProperties = {
    width: '100vw',
    height: '100vh',
  };

  const latLngBounds: google.maps.LatLngBoundsLiteral = {
    north: 85,
    south: -85,
    west: -180,
    east: 180,
  };

  const center: google.maps.LatLngLiteral = {
    lat: 20,
    lng: 0,
  };

  const options: google.maps.MapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    backgroundColor: '#0b0e2f',
    minZoom: 3,
    restriction: {
      latLngBounds,
      strictBounds: true,
    },
  };

  const handleMapLoad = useCallback((map: google.maps.Map<Element>) => {
    mapRef.current = map;
    mapRef.current.setCenter(center);
    mapRef.current.setZoom(defaultZoom);
  }, []);

  const handleMapClick = useCallback(
    (event: google.maps.MouseEvent) => {
      dispatch(reset());
      dispatch(
        setCoordinates({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        }),
      );
    },
    [coordinates],
  );

  const handleMarkerClick = useCallback(() => {
    dispatch(reset());
    dispatch(unsetCoordinates());
  }, []);

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap options={options} onLoad={handleMapLoad} onClick={handleMapClick} mapContainerStyle={containerStyle}>
        <>
          {coordinates && (
            <Marker
              position={{
                lat: coordinates.lat,
                lng: coordinates.lng,
              }}
              icon={{
                url: '/images/marker.svg',
                scaledSize: new window.google.maps.Size(30, 40),
              }}
              onClick={handleMarkerClick}
            />
          )}
          <div className={styles.overlay}>{overlay}</div>
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
