import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// import { BrowserRouter as Router } from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Spinner from './utils/Spinner';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createHashRouter([
	{
		path: '/*',
		element: <App />,
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Spinner />} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
