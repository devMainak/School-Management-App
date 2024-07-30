import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import StudentForm from './features/students/StudentForm'
import StudentDetail from './features/students/StudentDetail'

const router = createBrowserRouter([
	{
		element: <App/>,
		path: "/"
	},
	{
		element: <StudentForm/>,
		path: "/studentform"
	},
	{
		element: <StudentDetail/>,
		path: "/studentdetail/:studentId"
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>
)