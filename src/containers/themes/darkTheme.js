import {
  deepOrange900,
  deepOrange400,
  grey600,
  green600, green400, green200,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

// $dark:                  #333C44 !default; // darken Blue 100 > #343E46
// $theme_dark_text_color:       rgba(255,255,255,.7);

export default {
  spacing,
  fontFamily: 'omnes-pro',
  borderRadius: 2,
  palette: {
    primary1Color: deepOrange900,
    primary2Color: deepOrange400,
    primary3Color: grey600,
    accent1Color: deepOrange400,
    accent2Color: green400,
    accent3Color: green200,
    textColor: '#d0d2d7',
    secondaryTextColor: fade(fullWhite, 0.54),
    alternateTextColor: '#333C44',
    canvasColor: '#333C44',
    borderColor: fade(fullWhite, 0.15),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};
