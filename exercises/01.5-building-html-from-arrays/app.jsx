import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
	<li className="nav-item" key="1" >
		<a className="nav-link" href="#">
			Link to google.com
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="#" key="2">
			Link to facebook.com
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="#" key="3">
			Link to amazon.com
		</a>
	</li>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
