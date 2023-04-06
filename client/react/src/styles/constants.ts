const laptopSize = 889;
const smallDeviceSize = 600;
const primary = '#E7473C';
const offWhite = '#F0F0F0';
const secondary = '#E77C3C';
const secondaryHover = '#61C791';
/** 
 * Some other options for colors
#61C791
#3C92E7
#E7C13C
#9C3CE7
#E77C3C
*/

const fitPageContentMediaQuery = `
  @media only screen and (min-width: ${laptopSize}px) {
    max-width: ${laptopSize}px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const borderBox = `
  box-sizing: border-box;
`;

export {
  smallDeviceSize,
  laptopSize,
  primary,
  offWhite,
  secondary,
  secondaryHover,
  fitPageContentMediaQuery,
  borderBox,
};

/* For extremely small screen devices (595px and below) */
// @media only screen and (max-width: 595px) {...}

/* Small screen devices (600px and above) */
// @media only screen and (min-width: 600px) {...}

/* Medium screen devices (768px and above) */
// @media only screen and (min-width: 768px) {...}

/* Big screen devices (889px and above) */
// @media only screen and (min-width: 889px) {...}

/* Extra big screen devices (1200px and above) */
// @media only screen and (min-width: 1200px) {...}

/* For extremely small screen devices (595px and below) */
// @media only screen and (max-width: 595px) {...}

/* Small screen devices (600px and above) */
// @media only screen and (min-width: 600px) {...}

/* Medium screen devices (768px and above) */
// @media only screen and (min-width: 768px) {...}

/* Big screen devices (889px and above) */
// @media only screen and (min-width: 889px) {...}

/* Extra big screen devices (1200px and above) */
// @media only screen and (min-width: 1200px) {...}
