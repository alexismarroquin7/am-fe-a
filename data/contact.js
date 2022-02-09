import { createIds } from "../utils";
import { email, github } from "./images/icons";

const contactLines = [
  {
    name: 'Email',
    href: `mailto:alexis.a.marroquin@gmail.com`,
    target: '_blank',
    icon: email
  },
  {
    name: 'Github',
    href: `https://github.com/alexismarroquin7`,
    target: '_blank',
    icon: github
  }
]; 

export const contact = {
  title: "Let's get in touch.",
  lines: createIds('line_id', contactLines, true) 
}