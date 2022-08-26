import { createIds } from "../utils";

const titleIntroText = `Hello, my name is`;
const titleText = `Alexis Marroquin.`;
const subTitleText = `I build web apps.`;
const descriptionText = `I am create digital solutions for people and businesses.`;

const buttons = [
  {
    text: 'About',
    href: '#about',
    variant: 'contained'
  },
  {
    text: 'Contact',
    href: '#contact',
    variant: 'outlined'
  }
]

export const home = {
  id: "home",
  titleIntro: titleIntroText,
  title: titleText,
  subTitle: subTitleText,
  description: descriptionText,
  steps: [
    'developer.',
    1000,
    'web designer.',
    1000,
    'problem solver.',
    1000,
  ],
  buttons: createIds('button_id', buttons, true)
}