import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Class {
	id: string;
	name: string;
	description: string;
	tags: string[];
	instructors: string[];
	startDate: string;
	endDate: string;
	completedDate?: string | null;
	// Add any other relevant properties for classes
}

interface ClassState {
	classes: Class[];
}

const initialState: ClassState = {
	classes: [],
};

const classSlice = createSlice({
	name: "classes",
	initialState,
	reducers: {
		addClass(state, action: PayloadAction<Class>) {
			state.classes.push(action.payload);
		},
		updateClass(state, action: PayloadAction<Class>) {
			const { id } = action.payload;
			const existingClass = state.classes.find((cl) => cl.id === id);
			if (existingClass) {
				Object.assign(existingClass, action.payload);
			}
		},
		removeClass(state, action: PayloadAction<string>) {
			state.classes = state.classes.filter((cl) => cl.id !== action.payload);
		},
	},
});

export const { addClass, updateClass, removeClass } = classSlice.actions;

export default classSlice.reducer;
