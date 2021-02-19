import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import About from './pages/About/About'
import Work from './pages/Work/Work'

import { Route, Switch } from 'react-router-dom'
function App() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/about' exact component={About} />
			<Route path='/skills' exact component={Skills} />
			<Route path='/work' exact component={Work} />
		</Switch>
	)
}

export default App
