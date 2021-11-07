import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';

const response = [
  {
    id: '1',
    coordinates: {
      latitude: -12.3734794,
      longitude: 130.8713297,
    },
    title: 'Orange Precinct',
    description: 'Building 4',
    icon: require('../assets/map-marker-icon.png')
  },
  {
    id: '2',
    coordinates: {
      latitude: -12.372851,
      longitude: 130.8696757,
    },
    title: 'Information Center',
    description: 'Student Center',
    icon: require('../assets/map-marker-icon.png')
  },
  {
    id: '3',
    coordinates: {
      latitude: -12.3722946,
      longitude: 130.8703456,
    },
    title: 'Blue Precinct',
    description: 'Building 1',
    icon: require('../assets/blue-map-icon.png')
  },
  {
    id: '4',
    coordinates: {
      latitude: -12.3736072,
      longitude: 130.868114,
    },
    title: 'Purple Precinct',
    description: 'Building 1',
    icon: require('../assets/map-marker-icon.png')
  },
  {
    id: '5',
    coordinates: {
      latitude: -12.371637,
      longitude: 130.8694498,
    },
    title: 'CDU Library',
    description: 'Red Precinct Building 8',
    icon: require('../assets/map-marker-icon.png')
  },
  {
    id: '6',
    coordinates: {
      latitude: -12.3752053,
      longitude: 130.8725879,
    },
    title: 'Green Precinct',
    description: 'Building 4',
    icon: require('../assets/green-map-icon.png')
  },
  {
    id: '7',
    coordinates: {
      latitude: -12.3718707,
      longitude: 130.8660188,
    },
    title: 'Pink Precinct',
    description: 'Building 9',
    icon: require('../assets/pink-map-icon.png')
  },
  {
    id: '8',
    coordinates: {
      latitude: -12.3710227,
      longitude: 130.8680088,
    },
    title: 'Yellow Precinct',
    description: 'Building 9',
    icon: require('../assets/pink-map-icon.png')
  }
]


const TabOne = (props) => {
    return (
       
          <View style={styles.map}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: -12.3734794,
         longitude: 130.8713297,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     {response.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            >
              <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
     </MapView>
   </View>
    )
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default TabOne;


