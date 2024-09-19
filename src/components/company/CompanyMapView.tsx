import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Border } from "@/GlobalStyles";

interface CompanyMapViewProps {
  latitude: number;
  longitude: number;
  companyName: string;
  companyDescription: string;
}

const CompanyMapView: React.FC<CompanyMapViewProps> = ({ latitude, longitude, companyName, companyDescription }) => {
  if (!latitude || !longitude) {
    return <Text style={styles.noMapText}>Localização não disponível</Text>;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,  // Aproximação inicial do mapa
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={companyName}
          description={companyDescription || 'Descrição não disponível'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200,
    top: 30,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  noMapText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: 'gray',
  },
});


export default CompanyMapView;
