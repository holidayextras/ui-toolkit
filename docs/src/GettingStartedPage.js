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
					subTitle="How to use the UI Toolkit" />

				<div className="container bs-docs-container">
					<div className="row">
						<div className="col-md-9" role="main">
							<div className="bs-docs-section">

								<h2 id="setup" className="page-header">Installing UI Toolkit</h2>
								<p className="lead">You can install UI Toolkit using Node Package Manager.</p>

								<h3>Terminal</h3>
								<div className="highlight">
									<pre>
										<code className="shell">{'$ npm install git+ssh://git@github.com:holidayextras/ui-toolkit.git\n'}</code>
									</pre>
								</div>

								<h3>package.json</h3>
									<div className="highlight">
										<pre>
											<code className="shell">{'"ui-toolkit" : "git+ssh://git@github.com:holidayextras/ui-toolkit.git"\n'}</code>
									</pre>
								</div>

								<h3>Sample Usage</h3>

								<p>You can then use <a href="/components.html">UI Toolkit's Custom Components</a> via:</p>

								<div className="highlight">
									<pre>
										<code className="js">{'var HX_Button = require(\'ui-toolkit/ui-component-button\');'}</code>
									</pre>
								</div>

								<p>You can use <a href="/custom.html">React's Default Bootstrap Components</a> via:</p>

								<div className="highlight">
									<pre>
										<code className="js">{'var Alert = require(\'ui-toolkit/react-bootstrap/lib/Alert\');'}</code>
									</pre>
								</div>

							</div>

							<div className="bs-docs-section">

								<h2 id="setup" className="page-header">UI Toolkit Themes</h2>
								<p className="lead">A collection of custom themes for UI Toolkit are listed below:</p>

								<ul>
									<li><a href="https://github.com/holidayextras/ui-brand-hx" target="_blank">Holiday Extras</a></li>
									<li><a href="https://github.com/holidayextras/ui-brand-et" target="_blank">Essential Travel</a></li>
								</ul>

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
