import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage';
import RootLayout from './pages/rootLayout';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Error from './components/error';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<HomePage />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/projects"
				element={<Projects />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
			<Route
				path="*"
				element={<Error />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
