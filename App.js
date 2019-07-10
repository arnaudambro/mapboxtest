
import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import variables from './env'
import exampleIcon from './assets/example.png';

MapboxGL.setAccessToken(variables.MAPBOX_API_TOKEN);

const styles = {
  icon: {
    iconImage: ['get', 'icon'],

    iconSize: [
      'match',
      ['get', 'icon'],
      'example',
      1.2,
      'airport-15',
      1.2,
      /* default */ 1,
    ],
  },
};

const featureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
      properties: {
        icon: 'example',
      },
      geometry: {
        type: 'Point',
        coordinates: [-117.20611157485, 52.180961084261],
      },
    },
    {
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
      properties: {
        icon: 'airport-15',
      },
      geometry: {
        type: 'Point',
        coordinates: [-117.205908, 52.180843],
      },
    },
    {
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
      properties: {
        icon: 'pin',
      },
      geometry: {
        type: 'Point',
        coordinates: [-117.206562, 52.180797],
      },
    },
  ],
};

class ShapeSourceIcon extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView style={{ flex: 1 }}>
          <MapboxGL.Camera
            zoomLevel={17}
            centerCoordinate={[-117.20611157485, 52.180961084261]}
          />
          <MapboxGL.Images
            images={{example: exampleIcon, assets: ['pin']}}
          />
          <MapboxGL.ShapeSource
            id="exampleShapeSource"
            shape={featureCollection}
          >
            <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon} />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}

export default ShapeSourceIcon;

