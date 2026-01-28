import { tokens } from "../tokens";

const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};

const injectObject = (
  obj: Record<string, any>,
  prefix: string,
  root: HTMLElement,
): void => {
  Object.entries(obj).forEach(([key, value]) => {
    const kebabKey = toKebabCase(key);
    const cssKey = `${prefix}-${kebabKey}`;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      injectObject(value, cssKey, root);
    } else if (typeof value === "string" || typeof value === "number") {
      root.style.setProperty(`--${cssKey}`, String(value));
    }
  });
};

export const injectCSSVariables = (): void => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  injectObject(tokens.colors, "color", root);
  injectObject(tokens.typography, "typography", root);
  injectObject(tokens.spacing, "spacing", root);
  injectObject(tokens.borderRadius, "border-radius", root);
  injectObject(tokens.shadows, "shadow", root);
  injectObject(tokens.transitions, "transition", root);
};
