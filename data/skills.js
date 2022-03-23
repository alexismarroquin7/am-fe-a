import { createIds } from "../utils";
import { responsiveWebDesign, wireframingAndPrototyping, restApis } from "./images";

const skillsList = [
  {
    name: 'Responsive Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: responsiveWebDesign
  },
  {
    name: 'Wireframing & Prototyping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: wireframingAndPrototyping
  },
  {
    name: 'REST APIs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: restApis
  }
];

export const skills = {
  title: `My Skills`,
  list: createIds('skill_id', skillsList, true),
  id: "skills"
}