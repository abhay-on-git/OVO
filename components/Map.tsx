import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region = ()=>()
  return (
    <View className="w-full h-[300px] rounded-lg overflow-hidden">
      <MapView
        provider={PROVIDER_DEFAULT}
        className="w-full h-full"
        tintColor="black"
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
        // showsBuildings={true}
        // initialRegion={}
      >
        <Text>Map</Text>
      </MapView>
    </View>
  );
};

export default Map;
