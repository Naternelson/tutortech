import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
// Import other reducers if you have more slices

const rootReducer = combineReducers({
	tasks: taskReducer,
	// Add other slices here
});

export default rootReducer;
