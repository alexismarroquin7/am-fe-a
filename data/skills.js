import { createIds } from "../utils";

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CasinoIcon from '@mui/icons-material/Casino';

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
    'Programming Languages': {
      list: createIds('id', programmingLanguages, true),
      icon: () => <CodeIcon fontSize="inherit"/>
    },
    'Front-end Libraries': {
      list: createIds('id', frontEndLibraries, true),
      icon: () => <AutoStoriesIcon fontSize="inherit"/>
    },
    'Back-end Libraries': {
      list: createIds('id', backEndLibraries, true),
      icon: () => <AutoStoriesIcon fontSize="inherit"/>
    },
    'Front-end Frameworks': {
      list: createIds('id', frontEndFrameworks, true),
      icon: () => <MiscellaneousServicesIcon fontSize="inherit"/>
    },
    'Back-end Frameworks': {
      list: createIds('id', backEndFrameworks, true),
      icon: () => <MiscellaneousServicesIcon fontSize="inherit"/>
    },
    'Other': {
      list: createIds('id', other, true),
      icon: () => <CasinoIcon fontSize="inherit"/>
    },
  },
  id: "skills"
}