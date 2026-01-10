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
    mineShaft: "#252525",
    sky: "#D6E4FF",
    scienceBlue: "#0366D6",
    blumine: "#2188FF",
    seagull: "#aaccddff",
    boulder: "#757575",
  },
  breakpoint: {
    tabletHorizontalMax: 1199,
    tabletVerticalMax: 991,
    mobile: 767,
  },
};

export const themeLight = {
  ...theme,
  colors: {
    font: theme.color.black,
    fontAnother: theme.color.grey,
    background: theme.color.white,
    border: theme.color.whisper,
  },
};

export const themeDark = {
  ...theme,
  colors: {
    font: theme.color.white,
    fontAnother: theme.color.white,
    background: theme.color.mineShaft,
    tileBackground: theme.color.boulder,
    border: theme.color.shadow,
  },
};