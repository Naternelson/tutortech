import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import classReducer from "./classSlice";
import workflowReducer from "./workflowSlice";
import instructorReducer from "./instructorSlice";
// Import other reducers if you have more slices

const rootReducer = combineReducers({
	tasks: taskReducer,
    classes: classReducer,
    workflows: workflowReducer,
    instructors: instructorReducer,
	// Add other slices here
});

export default rootReducer;
