import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {Component} from 'react';
import { Helmet } from 'react-helmet'

import Tickets from './pages/Tickets/Tickets'
import Overview from './pages/Overview/Overview'
import Ideas from './pages/Ideas/Ideas'
import Contacts from './pages/Contacts/Contacts'
import Sidebar from './containers/Sidebar/Sidebar'

import './assets/styles/main.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activPage: ''
    }

    this.setActivPage = this.setActivPage.bind(this);
  }

  setActivPage(page) {
    this.setState({
      activPage: page
    })
  }


  render() {
    
    return (
      <Router>
        <div className="App">
        <Helmet>
          <title>React Adminka</title>
        </Helmet>

        <Sidebar
          activPage={this.state.activPage}
          setActivPage={this.setActivPage}
        />

        {/* <Toolbar/> */}

        {/* <Tickets/> */}
        <div className="content">



          <Switch>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/overview' component={Overview}/>
            <Route path='/ideas' component={Ideas}/>
            <Route path='/contacts' component={Contacts}/>

          </Switch>
        </div>
      </div>
      </Router>
    );
  } 
}

export default App;
