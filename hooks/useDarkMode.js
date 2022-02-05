import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = initValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initValue);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return {darkMode, setDarkMode, toggleDarkMode};
}