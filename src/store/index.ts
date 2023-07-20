import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

// Optional: Add any custom middleware you want to use

// Optional: Add any preloaded state if needed
const preloadedState = {};

const store = configureStore({
	reducer: rootReducer,
	// middleware: [...getDefaultMiddleware()], // Include custom middleware here
	preloadedState,
	// Optional: Enable the Redux DevTools Extension for debugging in development
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
