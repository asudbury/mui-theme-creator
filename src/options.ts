const options = {
  showTabs: getItemAsBoolean("showTabs", getItemAsBoolean("editor", false)),
  defaultTab: getItem("defaultTab", "components"), // preview, components and ??
  showTutorial: getItemAsBoolean(
    "showTutorial",
    getItemAsBoolean("editor", false)
  ),
  showPreview: getItemAsBoolean(
    "showPreview",
    getItemAsBoolean("editor", false)
  ),
  showComponents: getItemAsBoolean(
    "showComponents",
    getItemAsBoolean("editor", true)
  ),
  showSavedThemes: getItemAsBoolean(
    "showSavedThemes",
    getItemAsBoolean("editor", false)
  ),
  showConfigDrawer: getItemAsBoolean(
    "showConfigDrawer",
    getItemAsBoolean("editor", false)
  ),
  showDocsLink: getItemAsBoolean(
    "showDocsLink",
    getItemAsBoolean("editor", false)
  ),
}

function getItem(name: string, defaultValue: string): string {
  const isBrowser = typeof window !== "undefined"

  /// first check the url parameters!!
  if (isBrowser) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const urlParam = urlParams.get(name)

    if (urlParam) {
      return urlParam
    }

    const value = localStorage.getItem(name)

    if (!value) {
      return defaultValue
    }

    return value
  }

  return ""
}

function getItemAsBoolean(name: string, defaultValue: boolean): boolean {
  const value = getItem(name, "")

  if (value === null || value === "") {
    return defaultValue
  }

  return getBoolean(value)
}

function getBoolean(value: string): boolean {
  switch (value) {
    case "true":
    case "1":
    case "on":
    case "y":
    case "yes":
      return true
    default:
      return false
  }
}

export default options
