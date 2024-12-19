import React from "react";
import { StyleSheet } from "react-native";
import { useTheme, FAB as FloatingActionButton } from "react-native-paper";

const FloatingComposeButton = () => {
  const { colors } = useTheme();
  return (
    <FloatingActionButton
      icon="plus"
      color={colors.onPrimary}
      size="medium"
      onPress={() => console.log("Compose button pressed")}
      style={[styles.floatingActionButton, { backgroundColor: colors.primary }]}
    />
  );
};

const styles = StyleSheet.create({
  floatingActionButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    elevation: 4,
  },
});

export default FloatingComposeButton;
