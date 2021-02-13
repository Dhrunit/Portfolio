import Home from './pages/Home/Home'
import { Route, Switch } from 'react-router-dom'
function App() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
		</Switch>
	)
}

export default App
