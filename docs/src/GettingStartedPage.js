'use strict';

var React = require('react');
var fs = require('fs');

var NavMain = require('./NavMain');
var PageHeader = require('./PageHeader');
var PageFooter = require('./PageFooter');
var ReactPlayground = require('./ReactPlayground');
var HolidayExtras = require('./HolidayExtras');

var Page = React.createClass({
	render: function ()
	{
		return (
			<div>
				<NavMain activePage="getting-started" />

				<PageHeader
					title="Getting Started"
					subTitle="How to use the Holiday Extras UI Toolkit" />

				<div className="container bs-docs-container">
					<div className="row">
						<div className="col-md-9" role="main">
							<div className="bs-docs-section">

								<h2 id="setup" className="page-header">Bootstrap React Components</h2>
								<p className="lead">Before you can use Holiday Extras custom React JS components, you will need to import React Bootstrap into your project.</p>

								<h3>CommonJS</h3>
								<div className="highlight">
									<pre>
										<code className="shell">{'$ npm install react@v0.10.0\n$ npm install react-bootstrap\n'}</code>
									</pre>
								</div>

								<h3>AMD</h3>
								<div className="highlight">
									<pre>
										<code className="shell">{'$ bower install react#v0.10.0\n$ bower install react-bootstrap\n'}</code>
									</pre>
								</div>

								<p>You can then use React Bootstrap Components via:</p>

								<div className="highlight">
									<pre>
										<code className="js">{'var Alert = require(\'react-bootstrap/lib/Alert\');'}</code>
									</pre>
								</div>

								<h3>View Markup</h3>
								<p>View a complete set of <a href="/components.html">React Bootstrap Components</a></p>
							</div>

							<div className="bs-docs-section">

								<h2 id="setup" className="page-header">Holiday Extras React Components</h2>
								<p className="lead">Holiday Extras has a variety of Custom React Components that you can also use in your project.</p>

								<div className="highlight">
									<pre>
										<code className="shell">{'$ npm install git+ssh://git@github.com:holidayextras/ui-component-button.git\n'}</code>
									</pre>
								</div>

								<p>You can then use React Bootstrap Components via:</p>

								<div className="highlight">
									<pre>
										<code className="js">{'var Button = require(\'ui-component-button\');'}</code>
									</pre>
								</div>

								<h3>View Markup</h3>
								<p>View a complete set of <a href="/custom.html">Holiday Extras React Components</a></p>
							</div>
						</div>
					</div>
				</div>

				<PageFooter />
			</div>
		);
	},

	shouldComponentUpdate: function ()
	{
		return false;
	}
});

module.exports = Page;
