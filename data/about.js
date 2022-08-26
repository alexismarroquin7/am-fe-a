import { v4 as uuidv4 } from "uuid";
import { profilePicture } from "./images";


export const about = {
  id: `about`,
  title: `About me`,
  description: [
    {
      id: uuidv4(),
      text: `I am a full-stack web developer based in the Bay Area.`
    },
    {
      id: uuidv4(),
      text: `I build front-end web apps using modern JavaScript frameworks like React.js and Next.js.`
    },
    {
      id: uuidv4(),
      text: `I also make APIs with Express.js and postgreSQL.`
    },
    {
      id: uuidv4(),
      text: `Let's build something awesome.`
    }
  ],
  image: {
    ...profilePicture,
    width: "175px",
    height: "175px",
    borderRadius: "50%"
  }
}