import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
	id: string;
	classId: string;
	workflowId: string;
	description: string;
	type: string;
	estimatedTime: number; // in minutes
	assignedDate: string;
	createdDate: string;
	dueDate: string;
	completedDate?: string | null;
	status: "to-do" | "queued" | "in progress" | "skipped" | "canceled" | "completed";
	hasPrimaryFocus: boolean;
}

interface TaskState {
	tasks: Task[];
}

const initialState: TaskState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<Task>) {
			state.tasks.push(action.payload);
		},
		updateTask(state, action: PayloadAction<Task>) {
			const { id } = action.payload;
			const existingTask = state.tasks.find((task) => task.id === id);
			if (existingTask) {
				Object.assign(existingTask, action.payload);
			}
		},
		removeTask(state, action: PayloadAction<string>) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
	},
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
