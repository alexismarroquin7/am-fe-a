import { createIds } from "../utils";

const skillsList = [
  {
    name: 'Responsive Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: {}
  },
  {
    name: 'Wireframing & Prototyping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: {}
  },
  {
    name: 'REST APIs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: {}
  }
];

export const skills = {
  title: `My Skills`,
  list: createIds('skill_id', skillsList, true)
}