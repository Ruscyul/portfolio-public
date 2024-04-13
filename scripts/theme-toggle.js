const toggleThemeButton = document.querySelector("#toggleThemeButton");

function setThemePreference(theme) {
  localStorage.setItem(storageKey, theme)
}

function applyTheme(theme) {
  document.firstElementChild.setAttribute("data-theme", theme);
  updateToggleButton(theme)
}

function toggleTheme(theme) {
  return theme === 'dark' ? 'light' : 'dark';
}

function updateToggleButton(theme) {
  const lightIcon = document.querySelector(".header__theme-light-icon")
  const darkIcon = document.querySelector(".header__theme-dark-icon")

  lightIcon.style.display = theme === "dark" ? "none" : "block"
  darkIcon.style.display = theme === "dark" ? "block" : "none"
}

toggleThemeButton.addEventListener("click", () => {
  themePreference = toggleTheme(themePreference);
  applyTheme(themePreference)
  setThemePreference(themePreference)
})