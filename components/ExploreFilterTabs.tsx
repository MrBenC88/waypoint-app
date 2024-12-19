import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip, useTheme } from "react-native-paper";

const ExploreFilterTabs = ({ activeTab, setActiveTab }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.tabContainer}>
      {["Friends", "Trips", "Cities"].map((tab) => (
        <Chip
          key={tab}
          mode={activeTab === tab ? "flat" : "outlined"}
          onPress={() => setActiveTab(tab)}
          style={[
            styles.chip,
            activeTab === tab && { backgroundColor: colors.primaryContainer },
          ]}
          textStyle={
            activeTab === tab
              ? { color: colors.onPrimary }
              : { color: colors.onSurface }
          }
        >
          {tab}
        </Chip>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  chip: {
    paddingHorizontal: 12,
  },
});

export default ExploreFilterTabs;
