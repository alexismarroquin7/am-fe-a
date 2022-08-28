import { createIds } from "../utils";
import { responsiveWebDesign, wireframingAndPrototyping, restApi } from "./images";

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const skillsList = [
  {
    name: 'Responsive Web Design',
    description: 'I use a modern approach that optimizes layouts for any device from desktops, to tablets, and mobile phones.',
    icon: () => <DevicesIcon fontSize="inherit"/>
  },
  {
    name: 'Wireframing & Prototyping',
    description: 'I make low-fidelity designs to provide an opportunity to walk through the structure of a website before making design desicions.',
    icon: () => <DesignServicesIcon fontSize="inherit"/>
  },
  {
    name: 'Dynamic Content',
    description: 'I create REST APIs that allow for automatic updates to any content that changes.',
    icon: () => <CloudSyncIcon fontSize="inherit"/>
  }
];

const programmingLanguages = [
  {
    name: 'JavaScript ES6'
  },
  {
    name: 'CSS 3'
  },
  {
    name: 'HTML 5'
  },
  {
    name: 'Python 3'
  },
  {
    name: 'C++ 11'
  },
  {
    name: 'PostgreSQL'
  },
  {
    name: 'SQLite3'
  },
]

const frontEndLibraries = [
  {
    name: 'Redux.js'
  },
  {
    name: 'Cypress.js'
  },
  {
    name: 'Axios'
  },
  {
    name: 'Material-UI'
  },
  {
    name: 'Styled-JSX'
  },
  {
    name: 'Styled-Components'
  },
]

const frontEndFrameworks = [
  {
    name: 'React.js'
  },
  {
    name: 'Next.js'
  }
]

const backEndFrameworks = [
  {
    name: 'Node.js'
  },
  {
    name: 'Express.js'
  }
]

const backEndLibraries = [
  {
    name: 'Knex.js'
  },
  {
    name: 'Bcrypt.js'
  },
  {
    name: 'JSON Web Token'
  },
  {
    name: 'Supertest'
  },
  {
    name: 'Express Session'
  },
  {
    name: 'Puppeteer'
  },
]


const other = [
  {
    name: 'Bash'
  },
  {
    name: 'Git'
  },
  {
    name: 'Linux'
  },
]

export const skills = {
  title: `My Skills`,
  list: createIds('id', skillsList, true),
  more: {
    'Programming Languages': createIds('id', programmingLanguages, true),
    'Front-end Libraries': createIds('id', frontEndLibraries, true),
    'Back-end Libraries': createIds('id', backEndLibraries, true),
    'Front-end Frameworks': createIds('id', frontEndFrameworks, true),
    'Back-end Frameworks': createIds('id', backEndFrameworks, true),
    'Other': createIds('id', other, true),
  },
  id: "skills"
}