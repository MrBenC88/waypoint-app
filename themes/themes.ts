import { DefaultTheme } from "react-native-paper";

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

export const hybridSunsetSocialAndLavenderDream = {
  ...DefaultTheme,
  colors: {
    primary: "#F97316", // Sunset Orange (Primary CTA buttons and active states)
    primaryContainer: "#FFD8B2", // Soft Peach (Hover/Press container for buttons)
    secondary: "#9F7AEA", // Lavender Purple (Secondary accents and toggles)
    secondaryContainer: "#E9D8FD", // Soft Lavender container (backgrounds)
    tertiary: "#FBBF24", // Golden Yellow (highlight color, e.g., notifications, badges)
    tertiaryContainer: "#FEF3C7", // Light Warm Yellow (highlight background)
    surface: "#FFFFFF", // Pure White (Card surfaces, modals, etc.)
    surfaceVariant: "#F3F4F6", // Light Neutral (input backgrounds, surface variants)
    background: "#FAF5FF", // Lavender Background (Main background color)
    error: "#FF6B6B", // Red for errors
    errorContainer: "#FFE6E6", // Light red background for error containers
    onPrimary: "#FFFFFF", // Text on top of the primary (for buttons)
    onPrimaryContainer: "#7F2800", // Text inside containers with the primary container color
    onSecondary: "#FFFFFF", // Text on top of the secondary (for buttons, chips, etc.)
    onSecondaryContainer: "#332E57", // Text on secondary container background
    onTertiary: "#FFFFFF", // Text on top of the tertiary (for badges, alerts, etc.)
    onTertiaryContainer: "#704C00", // Text inside containers with the tertiary container color
    onSurface: "#2F2F2F", // Text on general surface backgrounds (cards, inputs)
    onSurfaceVariant: "#4A5568", // Text on surface variant backgrounds
    onError: "#FFFFFF", // Text on red error backgrounds
    onErrorContainer: "#7F0000", // Text on error container
    onBackground: "#2F2F2F", // Text on general background
    outline: "#CBD5E1", // Used for outlines (input outlines, button borders, etc.)
    outlineVariant: "#E2E8F0", // Lighter outline for secondary elements
    inverseSurface: "#1A202C", // For dark mode, inverse of surface
    inverseOnSurface: "#EDEDED", // For dark mode, inverse of onSurface
    inversePrimary: "#F97316", // Used for contrasting button backgrounds in dark mode
    shadow: "#000000", // Pure black shadow
    scrim: "rgba(0,0,0,0.32)", // Used for modals, backdrops, etc.
    backdrop: "rgba(0,0,0,0.5)", // Backdrop overlay for modals, loaders
    elevation: {
      level0: "transparent",
      level1: "#F9FAFB", // Slight elevation (shadow)
      level2: "#F3F4F6", // Slightly higher elevation
      level3: "#E5E7EB", // Elevated shadow
      level4: "#D1D5DB", // More elevated shadow
      level5: "#9CA3AF", // Highest elevation (modals, popups)
    },
  },
};
