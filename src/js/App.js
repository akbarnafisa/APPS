import React from 'react' ;
import { render } from 'react-dom' ;
import { Router, Route, Link ,  } from 'react-router' ;
import { browserHistory } from 'react-router' ;
import { IndexRoute } from 'react-router' ;
import Profile from './components/HOME/Profile' ;
import Home from './components/HOME/homeTabs' ;


  
    var TabList = [
      { id : 'PROFILE' },
      { id : 'SHOWCASE' },
  ];

  render(
      <Home items={ TabList } />,
      document.getElementById('area')
  );
      