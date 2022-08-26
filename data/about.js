import { v4 as uuidv4 } from "uuid";
import { profilePicture } from "./images";


export const about = {
  id: `about`,
  title: `About me`,
  description: [
    {
      id: uuidv4(),
      text: `I am a developer based in the Bay Area. I make websites and full-stack web applications.`
    }
  ],
  image: {
    ...profilePicture,
    width: "150px",
    borderRadius: "50%"
  }
}