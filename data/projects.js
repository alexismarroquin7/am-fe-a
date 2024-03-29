import { createIds } from "../utils"

const projectList = [
  {
    name: 'PasswordPronto.com',
    description: 'This app is a password generator that aims to make it easier to the create strong passwords.',
    url: 'https://passwordpronto.com',
    svg: {
      html: () => <svg width="4rem" height="4rem" viewBox="0 0 232 311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="131.013" width="232" height="179" rx="18" fill="black"/>
          <path d="M125.5 173.513H82C79.2386 173.513 77 175.752 77 178.513V266.013C77 268.775 79.2386 271.013 82 271.013H93.5C96.2614 271.013 98.5 268.775 98.5 266.013V245.013C98.5 242.252 100.739 240.013 103.5 240.013H125.5C135.833 240.18 156.3 233.713 155.5 206.513C154.7 179.313 135.167 173.18 125.5 173.513Z" fill="white" stroke="white"/>
          <path d="M116 40C64.2061 40.3837 63.4701 80.0376 61.7316 117.26C61.6075 119.918 59.4136 122 56.7529 122H28.5249C25.5668 122 23.257 119.424 23.5511 116.481C31.1823 40.1025 35.9071 1.00001 116 1C196.003 0.999995 206.518 48.5815 208.84 116.849C208.936 119.664 206.674 122 203.857 122H175.5C172.739 122 170.502 119.757 170.495 116.996C170.39 73.814 168.006 39.6148 116 40Z" fill="black" stroke="black"/>
        </svg>
    }
  }
]

export const project = {
  id: "projects",
  title: "Projects",
  list: createIds('id', projectList, true)
}