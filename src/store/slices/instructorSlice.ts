import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Instructor {
	id: string;
	name: string;
	email: string;
	phone: string;
    tags: string[];
    type: "instructor" | "assistant" | "guest";
	// Add any other relevant properties for instructors
}

interface InstructorState {
	instructors: Instructor[];
}

const initialState: InstructorState = {
	instructors: [],
};

const instructorSlice = createSlice({
	name: "instructors",
	initialState,
	reducers: {
		addInstructor(state, action: PayloadAction<Instructor>) {
			state.instructors.push(action.payload);
		},
		updateInstructor(state, action: PayloadAction<Instructor>) {
			const { id } = action.payload;
			const existingInstructor = state.instructors.find((instructor) => instructor.id === id);
			if (existingInstructor) {
				Object.assign(existingInstructor, action.payload);
			}
		},
		removeInstructor(state, action: PayloadAction<string>) {
			state.instructors = state.instructors.filter((instructor) => instructor.id !== action.payload);
		},
	},
});

export const { addInstructor, updateInstructor, removeInstructor } = instructorSlice.actions;

export default instructorSlice.reducer;
