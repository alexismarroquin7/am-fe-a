import { createIds } from "../utils";
import { email, github } from "./images/icons";

import {
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';

const contactLines = [
  {
    name: 'Email',
    href: `mailto:alexis.a.marroquin@gmail.com`,
    handle: 'alexis.a.marroquin@gmail.com',
    target: '_blank',
    icon: () => <EmailIcon fontSize="inherit"/>
  },
  {
    name: 'Github',
    href: `https://github.com/alexismarroquin7`,
    handle: 'alexismarroquin7',
    target: '_blank',
    icon: () => <GitHubIcon fontSize="inherit"/>
  },
  {
    name: 'Twitter',
    href: `https://twitter.com/al3xismarroquin`,
    handle: 'al3xismarroquin',
    target: '_blank',
    icon: () => <TwitterIcon fontSize="inherit"/>
  },
]; 

export const contact = {
  title: "Hit me up",
  lines: createIds('line_id', contactLines, true),
  id: "contact"
}