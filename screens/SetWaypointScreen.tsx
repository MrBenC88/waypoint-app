import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Button,
  IconButton,
  useTheme,
  TextInput,
} from "react-native-paper";
import * as Location from "expo-location";
import { CITY_SUGGESTIONS } from "../data/mockData";

const SetWaypointScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [city, setCity] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  // **Auto-detect the user's location**
  const handleDetectLocation = async () => {
    try {
      setLoadingLocation(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        setLoadingLocation(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const geocode = await Location.reverseGeocodeAsync(location.coords);
      if (geocode && geocode.length > 0) {
        const { city, country } = geocode[0];
        const formattedCity = `${city}, ${country}`;
        setCity(formattedCity);
      }
    } catch (error) {
      console.error("Error detecting location:", error);
    } finally {
      setLoadingLocation(false);
    }
  };

  // **Handles when the user is done setting the waypoint**
  const handleDone = () => {
    console.log(`Waypoint set to: ${city}`);
    navigation.goBack();
  };

  // **Handle user input for city and update autocomplete suggestions**
  const handleCityInputChange = (input) => {
    setCity(input);
    if (input.length > 2) {
      const filtered = CITY_SUGGESTIONS.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      ).slice(0, 5); //  Only show at most 5 results
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  // **Handle city selection from the suggestion list**
  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setFilteredCities([]);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {/* Header with Back Button */}
          <View style={styles.headerContainer}>
            <IconButton
              icon="arrow-left"
              size={24}
              onPress={() => navigation.goBack()}
              iconColor={colors.primary}
            />
            <Text style={[styles.headerTitle, { color: colors.onBackground }]}>
              Set Your Waypoint
            </Text>
          </View>

          {/* Input Section */}
          <View style={styles.contentContainer}>
            <Text style={[styles.label, { color: colors.onBackground }]}>
              Enter Your Current City
            </Text>

            {/* Input for City with Autocomplete */}
            <TextInput
              mode="outlined"
              label="City"
              style={styles.input}
              value={city}
              onChangeText={handleCityInputChange}
              placeholder="Start typing your city..."
              placeholderTextColor={colors.onSurfaceVariant}
              right={<TextInput.Icon icon="city" />}
            />

            {/* Autocomplete Suggestions */}
            {filteredCities.length > 0 && (
              <FlatList
                data={filteredCities}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.suggestionItem}
                    onPress={() => handleCitySelection(item)}
                  >
                    <Text
                      style={[
                        styles.suggestionText,
                        { color: colors.onSurface },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                style={styles.suggestionList}
              />
            )}

            {/* Detect Location Button */}
            <Button
              icon="crosshairs-gps"
              mode="outlined"
              onPress={handleDetectLocation}
              style={styles.locationButton}
              loading={loadingLocation}
              disabled={loadingLocation}
            >
              {loadingLocation ? "Detecting..." : "Use Current Location"}
            </Button>

            {/* Done Button */}
            <Button
              mode="contained"
              onPress={handleDone}
              style={styles.doneButton}
              labelStyle={styles.buttonText}
              disabled={!city}
            >
              Done
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 24, // Extra space for back button
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start", // 🔥 Moved to the top
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFF",
    marginBottom: 10, // 🔥 Reduced spacing
  },
  locationButton: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  doneButton: {
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  suggestionList: {
    maxHeight: 150, // Limit height
    marginBottom: 10,
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 10, // Added padding for better tap area
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  suggestionText: {
    fontSize: 16,
  },
});

export default SetWaypointScreen;
