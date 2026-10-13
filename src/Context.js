import { createContext, useEffect, useReducer } from "react";
export const themeContext = createContext();

// Must match the key used by the pre-paint script in public/index.html.
const THEME_KEY = "theme";
const SYSTEM_DARK = "(prefers-color-scheme: dark)";

// localStorage can throw (private mode, blocked storage), so treat any
// failure as "nothing saved" and skip saving.
const readStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
};

// index.html has already resolved saved choice vs OS preference onto
// <html data-theme>, so start from that rather than detecting again.
const initialState = {
  darkMode: document.documentElement.dataset.theme === "dark",
  followSystem: readStoredTheme() === null,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { darkMode: !state.darkMode, followSystem: false };
    case "system":
        return state.followSystem ? { ...state, darkMode: action.darkMode } : state;
      default:
        return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const { darkMode, followSystem } = state;

  // Track OS theme changes; the reducer ignores them once the user has toggled.
  useEffect(() => {
    const query = window.matchMedia(SYSTEM_DARK);
    const onChange = (e) => dispatch({ type: "system", darkMode: e.matches });
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (!followSystem) storeTheme(theme);
  }, [darkMode, followSystem]);

  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};
