import { createSlice } from "@reduxjs/toolkit";
import calculatorImg from "../../assets/projects/calculator.jpg";
import sneakerEcommerce from "../../assets/projects/ecommerce.jpg";
import selectRoom from "../../assets/projects/room.jpg";
import spaceTour from "../../assets/projects/space.jpg";

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [
      { imageUrl: calculatorImg, name: "Calculator" },
      { imageUrl: sneakerEcommerce, name: "Sneakers" },
      { imageUrl: selectRoom, name: "Room Landing Page" },
      { imageUrl: spaceTour, name: "Space Tour" },
    ],
  },
  reducers: {
    showProjectList(state, action) {
      state.projects = action.payload;
    },
  },
});

export const projectActions = projectSlice.actions;
