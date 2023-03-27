import { capitalize } from "lodash";

export const getUserInitials = (str: string): string =>
  `${capitalize(str.split(" ")[0])[0]}${capitalize(str.split(" ")[1])[0]}`;
