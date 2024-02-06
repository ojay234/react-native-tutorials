import { Alert, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/color";

function LocationPicker() {


  async function verifyPermissions() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "you need to grant location permission to use this app"
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await Location.getCurrentPositionAsync();

    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      {/* <View style={styles.mapPreview}>  </View> */}
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
