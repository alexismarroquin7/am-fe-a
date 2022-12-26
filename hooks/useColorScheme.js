import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
  const [colorScheme, setColorScheme] = useLocalStorage("colorScheme", 'light');
  
  return { colorScheme, setColorScheme };
}