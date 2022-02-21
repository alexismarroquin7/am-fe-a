import { createIds } from "../utils"

const routeList = [
  {
    name: "Skills",
    href: "#skills",
    variant: "outlined"
  },
  {
    name: "Contact",
    href: "#contact",
    variant: "outlined"
  }
]

export const routes = createIds('route_id', routeList, true);