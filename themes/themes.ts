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

export const midnightOcean = {
  ...DefaultTheme,
  colors: {
    primary: "#0077B6", // Deep Ocean Blue for primary buttons
    primaryContainer: "#023E8A", // Darker blue for container backgrounds
    secondary: "#90E0EF", // Light Aqua for highlights and accents
    secondaryContainer: "#CAF0F8", // Pale blue for secondary backgrounds
    background: "#03045E", // Deep Midnight Blue for background
    surface: "#001233", // Dark blue for surfaces like cards
    surfaceVariant: "#001F3F", // Slightly lighter blue for surface variant
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#E0E0E0",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#CFF4FC",
    onSecondary: "#001F3F",
    onSecondaryContainer: "#90E0EF",
    onSurface: "#E0E0E0",
    onSurfaceVariant: "#A0A0C0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#90E0EF",
    outlineVariant: "#00B4D8",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#E0E0E0",
    inverseOnSurface: "#03045E",
    inversePrimary: "#0077B6",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const darkCrimson = {
  ...DefaultTheme,
  colors: {
    primary: "#B22222", // Crimson for buttons and accents
    primaryContainer: "#800000", // Deep red container background
    secondary: "#FA8072", // Salmon pink for highlights
    secondaryContainer: "#FFE4E1", // Light pink container background
    background: "#2B2B2B", // Dark gray for background
    surface: "#3F3F3F", // Slightly lighter gray for cards
    surfaceVariant: "#555555", // Surface variant for contrast
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#FFFFFF",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#FFFFFF",
    onSecondary: "#2B2B2B",
    onSecondaryContainer: "#800000",
    onSurface: "#FFFFFF",
    onSurfaceVariant: "#A0A0A0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#B22222",
    outlineVariant: "#FA8072",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#2B2B2B",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#B22222",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const nightAmethyst = {
  ...DefaultTheme,
  colors: {
    primary: "#9B5DE5", // Deep Amethyst Purple for buttons
    primaryContainer: "#5A189A", // Rich purple for container backgrounds
    secondary: "#F15BB5", // Soft pink for secondary accents
    secondaryContainer: "#FFD6E6", // Light pink for container background
    background: "#2E2B55", // Deep royal purple for background
    surface: "#3C2A59", // Slightly lighter purple for cards
    surfaceVariant: "#472D6C", // Dark purple for surface variant
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#FFFFFF",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#FFD6E6",
    onSecondary: "#2E2B55",
    onSecondaryContainer: "#5A189A",
    onSurface: "#FFFFFF",
    onSurfaceVariant: "#A0A0C0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#9B5DE5",
    outlineVariant: "#F15BB5",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#2E2B55",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#9B5DE5",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const obsidianShadow = {
  ...DefaultTheme,
  colors: {
    primary: "#434343",
    primaryContainer: "#1C1C1C",
    secondary: "#828282",
    secondaryContainer: "#404040",
    background: "#121212",
    surface: "#181818",
    surfaceVariant: "#212121",
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#FFFFFF",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#404040",
    onSecondary: "#121212",
    onSecondaryContainer: "#505050",
    onSurface: "#FFFFFF",
    onSurfaceVariant: "#A0A0A0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#707070",
    outlineVariant: "#4F4F4F",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#121212",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#434343",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const abyssalNight = {
  ...DefaultTheme,
  colors: {
    primary: "#001F54",
    primaryContainer: "#00296B",
    secondary: "#00509E",
    secondaryContainer: "#001F54",
    background: "#001B44",
    surface: "#011627",
    surfaceVariant: "#112240",
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    text: "#FFFFFF",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#011627",
    onSecondary: "#FFFFFF",
    onSecondaryContainer: "#00296B",
    onSurface: "#FFFFFF",
    onSurfaceVariant: "#A0A0C0",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    onError: "#FFFFFF",
    outline: "#00509E",
    outlineVariant: "#00509E",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#001B44",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#001F54",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const lofiChillwave = {
  ...DefaultTheme,
  colors: {
    primary: "#A29BFE", // Pastel purple for buttons
    primaryContainer: "#D6CCFF", // Soft light purple for container backgrounds
    secondary: "#81ECEC", // Soft teal for accents
    secondaryContainer: "#D3F8F8", // Light teal container background
    background: "#F8F8FF", // Light blueish-white for backgrounds
    surface: "#FFFFFF", // Clean white for cards and surfaces
    surfaceVariant: "#F1F1FF", // Very light blueish variant for surface
    text: "#2F2F2F", // Dark grey for text
    onPrimary: "#FFFFFF", // Text/icons on primary color
    onPrimaryContainer: "#4A235A", // Text/icons on primary container
    onSecondary: "#2F2F2F", // Text/icons on secondary color
    onSecondaryContainer: "#2F2F2F", // Text/icons on secondary container
    onSurface: "#2F2F2F", // Text/icons on surface
    onSurfaceVariant: "#5F6368", // Text/icons on surface variant
    error: "#FF7675", // Light red for errors
    outline: "#BDC3C7", // Subtle outline color
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const cyberpunkNeon = {
  ...DefaultTheme,
  colors: {
    primary: "#FF00FF", // Bright magenta for action buttons
    primaryContainer: "#550055", // Dark magenta container background
    secondary: "#00FFFF", // Electric blue for accents
    secondaryContainer: "#003366", // Dark blue for secondary backgrounds
    background: "#0F0F1F", // Deep cyberpunk black for background
    surface: "#1A1A2E", // Dark blue for cards and surfaces
    surfaceVariant: "#2E2E5E", // Lighter blue variant for surfaces
    text: "#FFFFFF", // White text for readability
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#FF00FF",
    onSecondary: "#FFFFFF",
    onSecondaryContainer: "#00FFFF",
    onSurface: "#FFFFFF",
    onSurfaceVariant: "#A0A0A0",
    error: "#FF6B6B", // Light red for errors
    outline: "#FF00FF",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const lofiCoffeeHouse = {
  ...DefaultTheme,
  colors: {
    primary: "#B5651D", // Coffee brown for action buttons
    primaryContainer: "#FFD7B5", // Light cream for container backgrounds
    secondary: "#A67C52", // Tan for highlights
    secondaryContainer: "#F5F5DC", // Beige for container backgrounds
    background: "#F2EAD3", // Warm cream background
    surface: "#FFFFFF", // Clean white surface
    surfaceVariant: "#E4D8C8", // Subtle brown variant for surfaces
    text: "#3F2A1D", // Dark brown text
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#3F2A1D",
    onSecondary: "#3F2A1D",
    onSecondaryContainer: "#B5651D",
    onSurface: "#3F2A1D",
    onSurfaceVariant: "#7B5734",
    error: "#FF6B6B", // Light red for errors
    outline: "#B5651D",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const sunsetGlow = {
  ...DefaultTheme,
  colors: {
    primary: "#FF8C42", // Bright orange for buttons
    primaryContainer: "#FFD7B5", // Soft peach container background
    secondary: "#FFB6B6", // Light pink for accents
    secondaryContainer: "#FFE5E5", // Soft blush container background
    background: "#FFF4E4", // Warm pastel peach for background
    surface: "#FFFFFF",
    surfaceVariant: "#FFE4CC",
    text: "#2F2F2F",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#4A2100",
    onSecondary: "#2F2F2F",
    onSecondaryContainer: "#4A154B",
    onSurface: "#2F2F2F",
    onSurfaceVariant: "#5F6368",
    error: "#FF6B6B", // Light red for errors
    outline: "#FFA07A",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const monochromeMinimal = {
  ...DefaultTheme,
  colors: {
    primary: "#333333",
    primaryContainer: "#1A1A1A",
    secondary: "#B2B2B2",
    background: "#F2F2F2",
    surface: "#FFFFFF",
    surfaceVariant: "#DDDDDD",
    text: "#000000",
    onPrimary: "#FFFFFF",
    onSurface: "#000000",
  },
};

export const pixelRetro = {
  ...DefaultTheme,
  colors: {
    primary: "#8CAA64", // Soft green Gameboy screen color
    primaryContainer: "#3B4721", // Deep green for container
    secondary: "#A7C957", // Lighter green for accents
    secondaryContainer: "#F2FFE0", // Light yellow-green background
    background: "#E0F8CF", // Retro Gameboy background
    surface: "#C5E3C6",
    surfaceVariant: "#B2D3B2",
    text: "#2B2B2B", // Dark text to simulate old pixel screens
    onPrimary: "#2B2B2B",
    onPrimaryContainer: "#FFFFFF",
    onSecondary: "#2B2B2B",
    onSurface: "#2B2B2B",
    error: "#D32F2F",
    outline: "#8CAA64",
    shadow: "rgba(0, 0, 0, 0.3)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const electricCandy = {
  ...DefaultTheme,
  colors: {
    primary: "#FF66B2", // Hot pink for buttons
    primaryContainer: "#FFD1E8", // Light pink container
    secondary: "#69E4FF", // Sky blue for highlights
    secondaryContainer: "#DFF7FF", // Very light blue container
    background: "#FFF8F4", // Soft peachy pink for background
    surface: "#FFFFFF",
    surfaceVariant: "#FFE1EC",
    text: "#4A154B",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#4A154B",
    onSecondary: "#2F2F2F",
    onSurface: "#4A154B",
    error: "#FF6B6B",
    outline: "#FFA07A",
    shadow: "rgba(0, 0, 0, 0.1)",
    scrim: "rgba(0, 0, 0, 0.2)",
    backdrop: "rgba(0, 0, 0, 0.3)",
  },
};

export const woodlandFantasy = {
  ...DefaultTheme,
  colors: {
    primary: "#4F7942", // Deep green forest color
    primaryContainer: "#A8D5BA", // Soft green container background
    secondary: "#CD853F", // Earthy brown for highlights
    secondaryContainer: "#FFF4E1", // Light beige container
    background: "#F8F5E4", // Light cream background
    surface: "#FFFFFF",
    surfaceVariant: "#EEE8AA",
    text: "#2F2F2F",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#3F5821",
    onSecondary: "#2F2F2F",
    onSurface: "#2F2F2F",
    error: "#FF6B6B",
    outline: "#6B8E23",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.3)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export const animeAesthetic = {
  ...DefaultTheme,
  colors: {
    primary: "#FF66B2", // Cherry blossom pink for main actions and buttons
    primaryContainer: "#FFCCE5", // Soft pastel pink for container backgrounds
    secondary: "#6A5ACD", // Deep anime purple for secondary actions
    secondaryContainer: "#D9D0FF", // Soft lavender for containers
    tertiary: "#76EEC6", // Aqua for accents and playful touches
    tertiaryContainer: "#E0F7FA", // Super light aqua container
    background: "#FFF1F3", // Soft pink-tinted white for a dreamy anime vibe
    surface: "#FFFFFF", // Pure white for clean card and input surfaces
    surfaceVariant: "#FBE7E8", // Light pink variant of surface
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    text: "#2F2F2F", // Dark gray for strong readability
    onPrimary: "#FFFFFF", // Text/icons on primary color
    onPrimaryContainer: "#6B213F", // Text/icons on primary container
    onSecondary: "#FFFFFF", // Text/icons on secondary color
    onSecondaryContainer: "#4F4F4F",
    onTertiary: "#FFFFFF",
    onTertiaryContainer: "#0E4F42",
    onSurface: "#4A154B", // Deep purple text on surfaces
    onSurfaceVariant: "#6D3A5D",
    onError: "#FFFFFF", // Text/icons on error color
    outline: "#FFC1CC", // Blush pink outline for inputs and borders
    outlineVariant: "#FFB6C1", // Lighter variant for outlines
    error: "#FF6B6B", // Bright red for form validation errors
    errorContainer: "#FFE6E6", // Light red for error container background
    inverseSurface: "#4A154B", // Dark purple for inverse surface (anime midnight)
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#FF66B2", // Used for contrasting button backgrounds in dark mode
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
    elevation: {
      level0: "transparent",
      level1: "rgba(0,0,0,0.05)",
      level2: "rgba(0,0,0,0.08)",
      level3: "rgba(0,0,0,0.12)",
      level4: "rgba(0,0,0,0.15)",
      level5: "rgba(0,0,0,0.20)",
    },
  },
};

export const sunriseAnime = {
  ...DefaultTheme,
  colors: {
    primary: "#FF8C42", // Sunset orange for primary buttons
    primaryContainer: "#FFECB3", // Soft yellow-orange container
    secondary: "#FFD700", // Golden yellow for accents
    secondaryContainer: "#FFF8DC", // Light cream container
    tertiary: "#87CEEB", // Sky blue for peaceful accents
    tertiaryContainer: "#E0F7FA", // Soft blue container
    background: "#FFFDE7", // Light yellow for background
    surface: "#FFFFFF",
    surfaceVariant: "#FFFAE5",
    text: "#4A154B",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#7F2800",
    onSecondary: "#4A154B",
    onSecondaryContainer: "#FFD700",
    onTertiary: "#4A154B",
    onTertiaryContainer: "#0E4F42",
    onSurface: "#4A154B",
    onSurfaceVariant: "#6D3A5D",
    onError: "#FF6B6B",
    outline: "#FFA07A",
    outlineVariant: "#FFD1A6",
    error: "#FF6B6B",
    errorContainer: "#FFDAD4",
    inverseSurface: "#4A154B",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#FF8C42",
    shadow: "rgba(0, 0, 0, 0.2)",
    scrim: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};
