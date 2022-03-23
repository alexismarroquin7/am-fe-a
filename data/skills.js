import { createIds } from "../utils";
import { responsiveWebDesign, wireframingAndPrototyping, restApis } from "./images";

const skillsList = [
  {
    name: 'Responsive Web Design',
    description: 'I use a modern approach that optimizes layouts for any device from desktops, to tablets, and mobile phones.',
    icon: responsiveWebDesign
  },
  {
    name: 'Wireframing & Prototyping',
    description: 'I make low-fidelity designs to provide an opportunity to walk through the structure of a website before making design desicions.',
    icon: wireframingAndPrototyping
  },
  {
    name: 'REST APIs',
    description: 'I create the ability to dynamically view, create, update, and delete any data that changes.',
    icon: restApis
  }
];

export const skills = {
  title: `My Skills`,
  list: createIds('skill_id', skillsList, true),
  id: "skills"
}