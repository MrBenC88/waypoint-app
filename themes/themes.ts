import { DefaultTheme } from "react-native-paper";

export const forestGreen = {
  ...DefaultTheme,
  colors: {
    primary: "#2F855A", // Forest green for buttons, active states, and tabs
    primaryContainer: "#A3D9A5", // Light green for container backgrounds
    secondary: "#38A169", // Mid-green for highlights and accents
    secondaryContainer: "#C6F6D5", // Soft green for secondary backgrounds
    background: "#F0FFF4", // Light minty green background for a fresh feel
    surface: "#FFFFFF", // Used for cards, inputs, and surfaces
    surfaceVariant: "#E6F4EA", // Subtle green variant of surface for contrast
    surfaceDisabled: "rgba(0, 0, 0, 0.12)", // For disabled states
    text: "#1E3932", // Deep green for primary text
    onPrimary: "#FFFFFF", // Text/icons on primary color
    onPrimaryContainer: "#1F513B", // Text/icons on primary container
    onSecondary: "#1F3932", // Text/icons on secondary color
    onSecondaryContainer: "#2F5233", // Text/icons on secondary container
    onSurface: "#1E3932", // Text/icons on surface
    onSurfaceVariant: "#5F6368", // Text/icons on surface variant
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)", // Disabled text/icons on surface
    onError: "#FFFFFF", // Text/icons on error
    outline: "#8CA08F", // Used for borders and outlines
    outlineVariant: "#B2B2B2", // Subtle outline
    error: "#FF6B6B", // Error for form validation and errors
    errorContainer: "#FFDAD4", // Background for error containers
    inverseSurface: "#1E3932", // Inverse of surface
    inverseOnSurface: "#FFFFFF", // Text/icons on inverse surface
    inversePrimary: "#2F855A", // Inverse of primary
    shadow: "rgba(0, 0, 0, 0.2)", // Shadow color
    scrim: "rgba(0, 0, 0, 0.4)", // Scrim for modals, etc.
    backdrop: "rgba(0, 0, 0, 0.5)", // Backdrop for dialogs
    elevation: {
      level0: "transparent",
      level1: "rgba(0,0,0,0.05)",
      level2: "rgba(0,0,0,0.08)",
      level3: "rgba(0,0,0,0.12)", // This is the key that was missing
      level4: "rgba(0,0,0,0.15)",
      level5: "rgba(0,0,0,0.20)",
    },
  },
};

export const coolMistBlue = {
  ...DefaultTheme,
  colors: {
    primary: "#A0C4FF", // Light blue for buttons, active states, and tabs
    primaryContainer: "#CDE8FF", // Softer light blue for container backgrounds
    secondary: "#B9E3FF", // Softer blue for highlights and accents
    secondaryContainer: "#D8F1FF", // Light blue for secondary backgrounds
    background: "#F8FAFD", // Slightly blueish white for a soft feel
    surface: "#FFFFFF", // Used for cards, inputs, and surfaces
    surfaceVariant: "#E0F0FF", // Subtle variant of surface for contrast
    surfaceDisabled: "rgba(0, 0, 0, 0.12)", // For disabled states
    text: "#2F2F2F", // Dark gray for primary text
    onPrimary: "#FFFFFF", // Text/icons on primary color
    onPrimaryContainer: "#003F5E", // Text/icons on primary container
    onSecondary: "#2F2F2F", // Text/icons on secondary color
    onSecondaryContainer: "#4F4F4F", // Text/icons on secondary container
    onSurface: "#2F2F2F", // Text/icons on surface
    onSurfaceVariant: "#5F6368", // Text/icons on surface variant
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)", // Disabled text/icons on surface
    onError: "#FFFFFF", // Text/icons on error
    outline: "#B0BEC5", // Used for borders and outlines
    outlineVariant: "#B2B2B2", // Subtle outline
    error: "#FF6B6B", // Error for form validation and errors
    errorContainer: "#FFDAD4", // Background for error containers
    inverseSurface: "#2F2F2F", // Inverse of surface
    inverseOnSurface: "#FFFFFF", // Text/icons on inverse surface
    inversePrimary: "#005B7F", // Inverse of primary
    shadow: "rgba(0, 0, 0, 0.2)", // Shadow color
    scrim: "rgba(0, 0, 0, 0.4)", // Scrim for modals, etc.
    backdrop: "rgba(0, 0, 0, 0.5)", // Backdrop for dialogs
  },
};

export const lavenderDream = {
  ...DefaultTheme,
  colors: {
    primary: "#CBAACB", // Soft Lavender for buttons, active states, and tabs
    primaryContainer: "#F0E6F0", // Lighter Lavender for background elements
    secondary: "#FFB7C3", // Light Pink for highlights and accents
    secondaryContainer: "#FFE0E4", // Light Pink for secondary backgrounds
    background: "#F8FAFD", // Light blue mist background for soft feel
    surface: "#FFFFFF", // Used for cards, inputs, and surfaces
    surfaceVariant: "#F4E7F4", // Slightly variant of surface for subtle contrast
    surfaceDisabled: "rgba(0, 0, 0, 0.12)", // For disabled states
    text: "#2F2F2F", // Dark gray for text
    onPrimary: "#FFFFFF", // Text/icons on primary color
    onPrimaryContainer: "#5A305A", // Text/icons on primary container
    onSecondary: "#2F2F2F", // Text/icons on secondary color
    onSecondaryContainer: "#4F4F4F", // Text/icons on secondary container
    onSurface: "#2F2F2F", // Text/icons on surface
    onSurfaceVariant: "#5F6368", // Text/icons on surface variant
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)", // For disabled text
    onError: "#FFFFFF", // Text/icons on error
    outline: "#B0BEC5", // Used for borders and outlines
    outlineVariant: "#B2B2B2", // Subtle outline
    error: "#FF6B6B", // For errors (like form errors)
    errorContainer: "#FFDAD4", // Background for error containers
    inverseSurface: "#2F2F2F", // Inverse of surface
    inverseOnSurface: "#FFFFFF", // Text/icons on inverse surface
    inversePrimary: "#7A4B7A", // Inverse of primary
    shadow: "rgba(0, 0, 0, 0.2)", // Shadow color
    scrim: "rgba(0, 0, 0, 0.4)", // Scrim for modals, etc.
    backdrop: "rgba(0, 0, 0, 0.5)", // Backdrop for dialogs
  },
};

export const sunsetSocial = {
  ...DefaultTheme,
  colors: {
    primary: "#FF6363", // Playful pink-red (main call-to-action)
    primaryContainer: "#FFE4E4", // Light blush pink container background
    secondary: "#FFC107", // Bright yellow for energetic highlights
    secondaryContainer: "#FFF4CC", // Light lemon-yellow container background
    background: "#FFF9F3", // Creamy, soft background
    surface: "#FFFFFF", // Clean white surface for cards, inputs, etc.
    surfaceVariant: "#FFE6E6", // Soft pink variant of surface color
    surfaceDisabled: "rgba(0, 0, 0, 0.12)", // Used for disabled state backgrounds
    text: "#4A154B", // Deep purple for primary text (youthful but readable)
    onPrimary: "#FFFFFF", // White text/icons on primary color
    onPrimaryContainer: "#8B1A1A", // Darker red on primary container
    onSecondary: "#4A154B", // Deep purple on secondary color
    onSecondaryContainer: "#A45C00", // Deep orange on secondary container
    onSurface: "#4A154B", // Text/icons on surface (like cards, inputs)
    onSurfaceVariant: "#6D3A5D", // Subtle purple-pink on surface variant (like labels)
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)", // Disabled text/icons
    onError: "#FFFFFF", // Text/icons on error
    outline: "#FFA07A", // Soft coral outline for borders
    outlineVariant: "#FFD1A6", // Lighter variant for outlines and borders
    error: "#FF6B6B", // Error for form validation, error messages
    errorContainer: "#FFDAD4", // Background for error containers
    inverseSurface: "#4A154B", // Inverse of surface (deep purple background)
    inverseOnSurface: "#FFFFFF", // Text/icons on inverse surface
    inversePrimary: "#FF6363", // Inverse of primary color
    shadow: "rgba(0, 0, 0, 0.2)", // Shadow color for depth and elevation
    scrim: "rgba(0, 0, 0, 0.4)", // Scrim color for modals, backdrops
    backdrop: "rgba(0, 0, 0, 0.5)", // Backdrop for dialogs and modals
  },
};

export const oceanBreeze = {
  ...DefaultTheme,
  colors: {
    primary: "#00B4D8",
    primaryContainer: "#CAF0F8",
    secondary: "#90E0EF",
    secondaryContainer: "#ADE8F4",
    background: "#F0F9FF",
    surface: "#FFFFFF",
    surfaceVariant: "#E0F7FA",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#023047",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#0077B6",
    onSecondary: "#023047",
    onSecondaryContainer: "#005A71",
    onSurface: "#023047",
    onSurfaceVariant: "#5F6368",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#90E0EF",
    outlineVariant: "#A0C4FF",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#023047",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#0077B6",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const fierySunrise = {
  ...DefaultTheme,
  colors: {
    primary: "#FF4500",
    primaryContainer: "#FFD8CC",
    secondary: "#FFA07A",
    secondaryContainer: "#FFE4E1",
    background: "#FFF5E6",
    surface: "#FFFFFF",
    surfaceVariant: "#FFE8E0",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#4A154B",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#8B1A1A",
    onSecondary: "#4A154B",
    onSecondaryContainer: "#A45C00",
    onSurface: "#4A154B",
    onSurfaceVariant: "#6D3A5D",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#FFA07A",
    outlineVariant: "#FFD1A6",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#4A154B",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#FF4500",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const midnightMystery = {
  ...DefaultTheme,
  colors: {
    primary: "#1E1E2C",
    primaryContainer: "#3D3D5C",
    secondary: "#8D86C9",
    secondaryContainer: "#D8B4E2",
    background: "#1A1A2E",
    surface: "#252545",
    surfaceVariant: "#30305B",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#EDEDED",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#2E2E4E",
    onSecondary: "#EDEDED",
    onSecondaryContainer: "#6F6FBF",
    onSurface: "#EDEDED",
    onSurfaceVariant: "#A0A0C0",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#8D86C9",
    outlineVariant: "#A0A0C0",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#1E1E2C",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#8D86C9",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const twilightBliss = {
  ...DefaultTheme,
  colors: {
    primary: "#83677B",
    primaryContainer: "#F1E4E8",
    secondary: "#9A8C98",
    secondaryContainer: "#E6D5E0",
    background: "#F8F4F8",
    surface: "#FFFFFF",
    surfaceVariant: "#E6D5E0",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#2F2F2F",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#5F4353",
    onSecondary: "#2F2F2F",
    onSecondaryContainer: "#6F506F",
    onSurface: "#2F2F2F",
    onSurfaceVariant: "#5F6368",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#9A8C98",
    outlineVariant: "#B2B2B2",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#2F2F2F",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#83677B",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const neonGlow = {
  ...DefaultTheme,
  colors: {
    primary: "#39FF14", // Neon Green (main call-to-action)
    primaryContainer: "#D0FFD6", // Pale Neon Green container background
    secondary: "#FF00FF", // Neon Magenta for highlights
    secondaryContainer: "#FFD6F4", // Light Pink container background
    background: "#0D0D0D", // Dark Black for contrast
    surface: "#1C1C1C", // Dark Gray surface for cards
    surfaceVariant: "#333333", // Variant gray for subtle contrast
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#E0E0E0",
    onPrimary: "#000000",
    onPrimaryContainer: "#003300",
    onSecondary: "#FFFFFF",
    onSecondaryContainer: "#330033",
    onSurface: "#E0E0E0",
    onSurfaceVariant: "#A0A0A0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#FFD700",
    outlineVariant: "#FFA500",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#E0E0E0",
    inverseOnSurface: "#0D0D0D",
    inversePrimary: "#FF4500",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const berryBlush = {
  ...DefaultTheme,
  colors: {
    primary: "#9B2C2C", // Deep berry red
    primaryContainer: "#FFBABA",
    secondary: "#E63946", // Red coral
    secondaryContainer: "#FFD1D1",
    background: "#FFF5F5",
    surface: "#FFFFFF",
    surfaceVariant: "#F7E7E7",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#4A154B",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#4A154B",
    onSecondary: "#4A154B",
    onSecondaryContainer: "#660000",
    onSurface: "#4A154B",
    onSurfaceVariant: "#7F4F4F",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#FF9999",
    outlineVariant: "#FFCCCC",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#4A154B",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#9B2C2C",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const cyberpunkFlare = {
  ...DefaultTheme,
  colors: {
    primary: "#FF007F", // Bright Cyberpunk Pink
    primaryContainer: "#FFD1E6",
    secondary: "#00E5FF", // Neon Cyan for accents
    secondaryContainer: "#D1F5FF",
    background: "#1A1A2E",
    surface: "#252545",
    surfaceVariant: "#30305B",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#EDEDED",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#330033",
    onSecondary: "#FFFFFF",
    onSecondaryContainer: "#003333",
    onSurface: "#EDEDED",
    onSurfaceVariant: "#A0A0C0",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#00E5FF",
    outlineVariant: "#00FFFF",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#1A1A2E",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#FF007F",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const honeycombGold = {
  ...DefaultTheme,
  colors: {
    primary: "#FFC107",
    primaryContainer: "#FFF9E5",
    secondary: "#FFA000",
    secondaryContainer: "#FFF4CC",
    background: "#FFF9E5",
    surface: "#FFFFFF",
    surfaceVariant: "#FFECB3",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#4A3222",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#4A3222",
    onSecondary: "#FFFFFF",
    onSecondaryContainer: "#7F5700",
    onSurface: "#4A3222",
    onSurfaceVariant: "#7F5700",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#FFC107",
    outlineVariant: "#FFD700",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#4A3222",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#FFA000",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const arcticAurora = {
  ...DefaultTheme,
  colors: {
    primary: "#00FFCC",
    primaryContainer: "#E0FFF9",
    secondary: "#007BFF",
    secondaryContainer: "#CCE5FF",
    background: "#F0F9FF",
    surface: "#FFFFFF",
    surfaceVariant: "#E0F0FF",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#023047",
    onPrimary: "#000000",
    onPrimaryContainer: "#007B71",
    onSecondary: "#023047",
    onSecondaryContainer: "#005A71",
    onSurface: "#023047",
    onSurfaceVariant: "#5F6368",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "#FFFFFF",
    outline: "#90E0EF",
    outlineVariant: "#A0C4FF",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#023047",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#00FFCC",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};
