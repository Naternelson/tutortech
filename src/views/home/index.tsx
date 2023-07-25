import { Link, Outlet } from "react-router-dom";
import { QuickMenu } from "../partials/QuickMenu";
import { Box } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Homepage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<Link to="/sandbox">Sandbox</Link>
			<Outlet />
			<QuickMenu />
		</div>
	);
};

const HomeView = () => {
	return <Box></Box>;
};


const useBehavior = () => {
    const tasks = useSelector<RootState>((state) => state.tasks);
    tasks

}