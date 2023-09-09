import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Mapbox from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParamList} from '../../types';
import {ScreenContainer} from '../../Components';
import {Position} from '@rnmapbox/maps/lib/typescript/types/Position';
import {calculateLocationsWithinDistance} from '../../Utils';

type Props = NativeStackScreenProps<RootStackParamList, 'MapScreen'>;
export function MapScreen(props: Props) {
  const [getCurrentLocation, setCurrentLocation] = useState<Mapbox.Location>();
  const [userAroundMe, setUserAroundMe] = useState<Array<Position>>();
  useEffect(() => {
    if (!getCurrentLocation) return;
    const {coords} = getCurrentLocation;
    const coordinates = calculateLocationsWithinDistance(
      coords.latitude,
      coords.longitude,
      10,
      10,
    );
    setUserAroundMe(coordinates);
  }, [getCurrentLocation?.timestamp]);

  useEffect(() => {
    (async () => {
      const locationPermission =
        await Mapbox.requestAndroidLocationPermissions();
      if (!locationPermission) {
        Alert.alert('We need location permission');
      }
    })();
  }, []);

  const onMarkerPressed = (longitude: number, lattitude: number) => {
    //calculate distance between current location and marker
    props.navigation.navigate('ChatScreen', {
      title: '300 meter away',
      userId: 'someUserId',
      newChat: true,
    });
  };

  return (
    <ScreenContainer
      canGoback
      navigationTitle="see nearby people"
      SafeEdges={['top', 'left', 'right']}
      noDefaultPadding>
      <Mapbox.MapView style={styles.map}>
        {getCurrentLocation && (
          <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[
              getCurrentLocation.coords.longitude,
              getCurrentLocation.coords.latitude,
            ]}
            animationMode="flyTo"
            animationDuration={4000}
          />
        )}
        {userAroundMe?.map((position, index) => (
          <Mapbox.MarkerView key={`annotation-${index}`} coordinate={position}>
            <TouchableOpacity
              onPress={() => {
                onMarkerPressed(position[0], position[1]);
              }}>
              <Icon name="location" size={38} color="red" />
            </TouchableOpacity>
          </Mapbox.MarkerView>
        ))}
        <Mapbox.UserLocation
          visible={true}
          minDisplacement={1000}
          onUpdate={location => {
            setCurrentLocation(location);
          }}
        />
      </Mapbox.MapView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  annotationContainer: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 10,
  },
  annotationText: {
    color: 'red',
  },
});
