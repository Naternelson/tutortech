import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workflow {
	id: string;
	classId: string;
	name: string;
	description: string;
    tags: string[];
    startDate: string;
    endDate: string;
    status: "to-do" | "queued" | "in progress" | "skipped" | "canceled" | "completed";
    completedDate?: string | null;
	// Add any other relevant properties for workflows
}

interface WorkflowState {
	workflows: Workflow[];
}

const initialState: WorkflowState = {
	workflows: [],
};

const workflowSlice = createSlice({
	name: "workflows",
	initialState,
	reducers: {
		addWorkflow(state, action: PayloadAction<Workflow>) {
			state.workflows.push(action.payload);
		},
		updateWorkflow(state, action: PayloadAction<Workflow>) {
			const { id } = action.payload;
			const existingWorkflow = state.workflows.find((wf) => wf.id === id);
			if (existingWorkflow) {
				Object.assign(existingWorkflow, action.payload);
			}
		},
		removeWorkflow(state, action: PayloadAction<string>) {
			state.workflows = state.workflows.filter((wf) => wf.id !== action.payload);
		},
	},
});

export const { addWorkflow, updateWorkflow, removeWorkflow } = workflowSlice.actions;

export default workflowSlice.reducer;
