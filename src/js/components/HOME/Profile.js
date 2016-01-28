import React from 'react'
import { render } from 'react-dom'

var Profile = React.createClass({
    render : function(){
      return(
         <div id="Profile">
         	<div className="BodyWrapper">
         		<div className="main">
         			<div className="profilPic">
         				<div className="profilPicWrapper">
         					<img src="/src/img/pic.jpg"></img>
         				</div>
         			</div>
         			<div className="profileDiscription">
         				<div className="nameUser">krystal boyd</div>
         				<div className="discriptionUser">UI/UX Designer based on California</div>
         				<div className="websiteUser">
         					<a href="">krystalboyd.com</a>
         				</div>
         			</div>
         			<div className="hireMe">
         				<a href="">HIRE ME</a>
         			</div>
         		</div>
         	</div>
         </div>
        ) 
    }     
});

export default Profile;

