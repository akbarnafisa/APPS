import React from 'react' ;
import { render } from 'react-dom' ;
import { Router, Route, Link ,  } from 'react-router' ;
import Home from './components/HOME/homeTabs';
import Navigation  from './components/NAV/nav'


var Test = React.createClass({
  render : function(){
    return (
        <Navigation> <Home/> </Navigation>
      )
  }
});

render(<Test/> , document.getElementById('area'));
