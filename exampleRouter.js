import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'


const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <div>
            <h1>This is about yofuck!</h1>
          </div>
      
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children }
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router  history={browserHistory} >
    <Route  history={browserHistory} path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route  history={browserHistory} path="about" component={About} />
      <Route   history={browserHistory} path="inbox" component={Inbox}>
        <Route history={browserHistory}  path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('area'))



-------------------------------------------------------------------------------------------------------

var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li><Link to="user" params={{userID: "123"}}>Bob</Link></li>
          <li><Link to="user" params={{userID: "123"}} query={{showAge: true}}>Bob With Query Params</Link></li>
          <li><Link to="user" params={{userID: "abc"}}>Sally</Link></li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});

var User = React.createClass({
  mixins: [ Router.State ],

  render: function () {
    var age = this.getQuery().showAge ? '33' : '';
    var userID = this.getParams().userID;
    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name="user" path="user/:userID" handler={User}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});

-------------------------------------------------------------------------

var Home = React.createClass({
    render : function(){
      return(
        <div>
          <h1>Welcome Home you fuck!</h1>
          <ul>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          {this.props.children}
        </div>
        ) 
    }     
}); 

var User = React.createClass({

  render: function () {
      return <div >
              <h2>hai my name is bob please casdaheckout <Link to={{ pathname: '/name', query: { id: 'bob' } }}>my profile</Link></h2>
              {this.props.children}
            </div>
  } 
});

var Bob = React.createClass({

  render : function(){
    var id = this.getQuery().id;
        return    <div>
                    <h1>this is bob and this is my {id}</h1>
                  </div>
  }
});

var About = React.createClass({
  render() {
        return <div>
                <h1>This is about yofuck!</h1>
              </div>
  }
})

render((
  <Router  history={browserHistory}>
    <Route  history={browserHistory} path="/" component={Home}>
      <Route  history={browserHistory} path="about" component={About} />
      <Route history={browserHistory}  path="user" component={User}>
        <Route history={browserHistory} path="/name" component={Bob}/>
      </Route>
    </Route>
  </Router>
  ),document.getElementById('area'))


-------------------------------------------------------------------------------------------------

class User extends React.Component {
  render() {
    let { userID } = this.props.params
    let { query } = this.props.location
    let age =  query.showAge 

    return (
      <div className="User">
        <h1>User id: {userID} MOENG LOLOL</h1>
        {age}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/bob" activeClassName="active">Bob</Link></li>
          <li><Link to={{ pathname: '/bob', query: {showAge: 'FUCK' , meong : 'rawr' } }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/sallLOLy" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path=":userID" component={User} />
    </Route>
  </Router>
), document.getElementById('area'))