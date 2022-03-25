import { v4 as uuidv4 } from "uuid";
import { arEmojiWave } from "./images";


export const about = {
  id: `about`,
  title: `About me`,
  description: [
    {
      id: uuidv4(),
      text: `I am a full-stack developer based in the Bay Area and am passionate for writing code that comes to life.`
    },
    {
      id: uuidv4(),
      text: `Self-motivated, problem solver with an appetite for knowledge.`
    },
    {
      id: uuidv4(),
      text: `My interests include technology, language learning, travel, culinary arts, filmmaking, latin music, and podcasts.`
    },
    {
      id: uuidv4(),
      text: `Open to take on more ambitious projects.`
    },
    {
      id: uuidv4(),
      text: `Let's build something awesome.`
    }
  ],
  image: {
    ...arEmojiWave,
    width: "175px",
    height: "175px",
    borderRadius: "50%"
  }
}