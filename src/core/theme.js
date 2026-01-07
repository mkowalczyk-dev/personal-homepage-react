const theme = {
  color: {
    white: "#FFF",
    whisper: "#F5F5Fa",
    mystic: "#E4E6F0",
    silver: "#C4C4C4",
    grey: "#6E7E91",
    shadow: "#BAC7D580",
    woodsmoke: "#18181B",
    black: "#000000",
    sky: "#D6E4FF",
    cornflowerBlue: "#4c78ceff",
    seagull: "#aaccddff",
  },
  breakpoint: {
    tabletHorizontal: 1199,
    tabletVertical: 991,
    mobile: 767,
  },
};

export const themeLight = {
  ...theme,
  colors: {
    color: theme.color.black,
    background: theme.color.white,
  },
};

export const themeDark = {
  ...theme,
  colors: {
    color: theme.color.white,
    background: theme.color.black,
  },
};