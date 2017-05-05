const date = new Date();
const year = date.getFullYear();

const APPCONFIG = {
  brand: 'Scala',
  user: 'Luis Silva',
  year,
  productLink: 'https://themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/19582625',
  AutoCloseMobileNav: true,    // true, false. Automatically close sidenav on route change (Mobile only)
  color: {
    primary: '#AA3300',
    accent: '#A6956D',
    success: '#066506',
    info: '#66BB6A',
    infoAlt: '#7E57C2',
    warning: '#FFC107',
    danger: '#de0000',
    text: '#3D4051',
    gray: '#d0d2d7'
  },
  settings: {
    navCollapsed: false,                            // true, false
    panelCollapsed: false,                            // true, false
    navBehind: false,                               // true, false
    fixedHeader: true,                              // true, false
    sidebarWidth: 'small',                         // small, middle, large
    colorOption: '21',                              // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    theme: 'light',                                 // light, gray, dark
  }
};

module.exports = APPCONFIG;
