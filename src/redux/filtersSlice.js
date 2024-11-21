import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
		name: ""
	},
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
      changeFilter: (state, action) => {
         state.filters.name = action.payload;
      },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.filters.name;