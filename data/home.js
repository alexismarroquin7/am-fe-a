import { createIds } from "../utils";
import { headshot } from ".";

const titleIntroText = `Hello, my name is`;
const titleText = `Alexis Marroquin.`;
const subTitleText = `I build web apps.`;
const descriptionText = `I am passionate about creating digital solutions for people and businesses.`;

const buttons = [
  {
    text: 'About',
    href: '#about',
    variant: 'filled'
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
  headshot: {
    ...headshot,
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '.5rem solid #fff'
  },
  buttons: createIds('button_id', buttons, true)
}