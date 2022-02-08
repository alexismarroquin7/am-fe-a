import { headshot } from ".";

const titleIntroText = `Hello, my name is`;
const titleText = `Alexis Marroquin.`;
const subTitleText = `I build web apps.`;

export const home = {
  titleIntro: titleIntroText,
  title: titleText,
  subTitle: subTitleText,
  description: "I am passionate about creating digital solutions for people and businesses.",
  headshot: {
    ...headshot,
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '.5rem solid #fff'
  }
}