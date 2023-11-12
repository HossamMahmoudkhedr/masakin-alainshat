import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage';
import RootLayout from './pages/rootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<HomePage />}
			/>
			{/* <Route path='*' element={<Error />} /> */}
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
