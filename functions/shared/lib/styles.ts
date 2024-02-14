const stylesMap: { [key: string]: string } = {};

interface StylesError extends Error {
  key: string;
  existingStyles: string;
  newStyles: string;
}

class StylesError extends Error {
  constructor(key: string, existingStyles: string, newStyles: string) {
    super(`Key ${key} already regsitered with different styles`);
    this.key = key;
    this.existingStyles = existingStyles;
    this.newStyles = newStyles;
  }
}

export function registerCSS(key: string, newStyles: string) {
  const existingStyles = stylesMap[key];
  if (existingStyles && existingStyles !== newStyles) {
    throw new StylesError(key, existingStyles, newStyles);
  }
  stylesMap[key] = newStyles;
}

export function generateCSS() {
  return Object.values(stylesMap).join("\n\n");
}
