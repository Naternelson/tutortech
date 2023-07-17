import { createBrowserRouter } from "react-router-dom";
import { Sandbox, Homepage } from "../views";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/sandbox",
		element: <Sandbox />,
	},
]);

export default router;
