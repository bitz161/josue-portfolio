import { themeSlice } from "./darkmode/darkmode.reducer";
import { projectSlice } from "./projects/projects.reducer";

export const reducer = {
  themes: themeSlice.reducer,
  projects: projectSlice.reducer,
};
