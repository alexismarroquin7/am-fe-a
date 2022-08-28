import { createIds } from "../utils"

const routeList = [
  {
    name: "Home",
    href: "/",
    variant: "outlined"
  },
  {
    name: "Skills",
    href: "#skills",
    variant: "outlined"
  },
  {
    name: "Projects",
    href: "#projects",
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