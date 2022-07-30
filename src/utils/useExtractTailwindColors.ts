import { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

const replaceAlphaValues = (
  colors: NonNullable<NonNullable<Config["theme"]>["colors"]> | string
) => {
  if (typeof colors === "function") {
    throw new Error("Tailwind color functions are not supported.");
  }

  if (typeof colors === "string") {
    return colors.replace("<alpha-value>", "1");
  }

  for (const key in colors) {
    colors[key] = replaceAlphaValues(colors[key]);
  }

  return colors;
};

export const useExtractTailwindColors = (rawConfig: Config) => {
  const config = resolveConfig(rawConfig);
  const colors = config.theme?.colors;
  if (!colors) throw new Error("Tailwind theme has no colors defined.");

  return replaceAlphaValues(colors);
};
