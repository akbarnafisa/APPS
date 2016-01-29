import React from 'react' ;
import { render } from 'react-dom' ;

var Navigation = React.createClass({
    showLeft: function() {
        this.refs.left.show();
    },
    render: function() {
        return 	<Menu ref="left">
			        <div className="nav-header">
			          <div className="nav-burger" onClick={this.showLeft}>
			            <span/>
			            <span/>
			            <span/>
			          </div>
			        </div>
			        {this.props.children}
			        <div className="left" >
			          <MenuItem/>
			        </div>
			    </Menu>;
    }
});

var Menu = React.createClass({
    getInitialState: function() {
        return {
            visible: false  
        };
    },
    show: function() {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide.bind(this));
    },
    hide: function() {
        document.removeEventListener("click", this.hide.bind(this));
        this.setState({ visible: false });
    },
    render: function() {
        return <div>
            <div className={(this.state.visible ? "visible " : "")} id="container">{this.props.children}</div>
        </div>;
    }
});


var MenuItem = React.createClass({
    getInitialState : function(){
      return{
        focused : 0 ,
      };
    },
    clicked : function(index){
          this.setState({
            focused : index
          });
    },
    render : function(){
       var self = this;
      return(
        <div style={divStyle}>
       
          <div className="nav-inner-wrapper">
            {TabList.map(function(tabs,index){
              var style = 'nav-items';

              if(self.state.focused == index){
                 style = 'nav-items nav-focused';
              }           
              return <div key={tabs.id} className={style}>
                       <i onClick={self.clicked.bind(self,index)} className={tabs.id}></i>
                    </div>
            })  
           }
          </div>
        </div>
      )
    }
  });

  var divStyle = {
    height: '100%',
    
  };

  var TabList = [
        { id : 'fa fa-search' },
        { id : 'fa fa-child' },
        { id : 'fa fa-users' },
        { id : 'fa fa-heart' },
        { id : 'fa fa-cog' },
        { id : 'fa fa-sign-out' },
    ];

 export default Navigation ;


