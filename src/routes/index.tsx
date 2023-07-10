import { createBrowserRouter } from "react-router-dom";
import { Sandbox } from "../views";

const router = createBrowserRouter([{
    path: "/sandbox",
    element: <Sandbox />
}])

export default router;