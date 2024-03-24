import { createContext } from "react";

export const clientContext = createContext<
  Record<string, Record<string, unknown>>
>({});
