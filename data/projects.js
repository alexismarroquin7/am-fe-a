import { createIds } from "../utils"

const projectList = [
  {
    name: 'CarrierCalc.io',
    description: 'This app aims to make it easier for the user to estimate how much it will cost today and monthly with any certain carrier.',
    github: 'https://github.com/alexismarroquin7/carrier-calc',
    url: 'carriercal.io'
  }
]

export const project = {
  id: "projects",
  title: "Projects",
  list: createIds('id', projectList, true)
}