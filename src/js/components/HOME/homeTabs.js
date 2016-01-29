import React from 'react' ;
import { render } from 'react-dom' ;
import Profile from './Profile' ;
import push from 'react-burger-menu';
import classNames from 'classnames';



    var TabList = [
	      { id : 'PROFILE' },
	      { id : 'SHOWCASE' },
	  ];

	var Home = React.createClass({
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
					
					  <div>
							{this.state.focused === 0 ?
								<Profile/>
							:null}

							{this.state.focused === 1 ?
								<h1>MEOOOOOOONG</h1>
							:null}
						<div className="profileTabs">
							{TabList.map(function(tabs,index){
							  var style = 'button';

								if(self.state.focused == index){
									 style = 'button btn-active';
								}						
								return <div key={tabs.id} className={style}>
											<a onClick={self.clicked.bind(self,index)} >{tabs.id}</a>
										</div>
							})	
						 }
						</div>
					  </div>
					
				)
			}
		});

export default Home ;

