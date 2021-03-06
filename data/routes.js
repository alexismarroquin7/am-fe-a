import { createIds } from "../utils"

const routeList = [
  {
    name: "Home",
    href: "#home",
    variant: "outlined"
  },
  {
    name: "Skills",
    href: "#skills",
    variant: "outlined"
  },
  {
    name: "About",
    href: "#about",
    variant: "outlined"
  },
  {
    name: "Contact",
    href: "#contact",
    variant: "outlined"
  }
]

export const routes = createIds('route_id', routeList, true);