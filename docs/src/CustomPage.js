'use strict';

var React = require('react');
var fs = require('fs');

var Affix = require('react-bootstrap/lib/Affix');
var Nav = require('react-bootstrap/lib/Nav');
var SubNav = require('react-bootstrap/lib/SubNav');
var NavItem = require('react-bootstrap/lib/NavItem');

var NavMain = require('./NavMain');
var PageHeader = require('./PageHeader');
var PageFooter = require('./PageFooter');
var HolidayExtras = require('./HolidayExtras');

var CustomPage = React.createClass({
	getInitialState: function ()
	{
		return {
			activeNavItemHref: null,
			navOffsetTop: null
		};
	},

	handleNavItemSelect: function (key, href)
	{
		this.setState({
			activeNavItemHref: href
		});

		window.location = href;
	},

	componentDidMount: function ()
	{
		var elem = this.refs.sideNav.getDOMNode(),
			domUtils = Affix.domUtils,
			sideNavOffsetTop = domUtils.getOffset(elem).top,
			sideNavMarginTop = parseInt(domUtils.getComputedStyles(elem.firstChild).marginTop, 10),
			topNavHeight = this.refs.topNav.getDOMNode().offsetHeight;

		this.setState({
			navOffsetTop: sideNavOffsetTop - topNavHeight - sideNavMarginTop,
			navOffsetBottom: this.refs.footer.getDOMNode().offsetHeight
		});
	},

	render: function ()
	{
		return (
			<div>
				<NavMain activePage="custom" ref="topNav" />

				<PageHeader title="Holiday Extras" subTitle="Custom React Components for Holiday Extras" />

				<div className="container bs-docs-container">
					<div className="row">
						<div className="col-md-9" role="main">

                			{/* Button */}
							<div className="bs-docs-section">

								<h1 id="button" className="page-header">HX Button
									<pre className="pull-right">Button</pre>
								</h1>

								<HolidayExtras codeText={fs.readFileSync(__dirname + '/../examples-holiday-extras/Button.js', 'utf8')} />

							</div>

						</div>

						<div className="col-md-3">
							<Affix
								className="bs-docs-sidebar hidden-print"
								role="complementary"
								offsetTop={this.state.navOffsetTop}
								offsetBottom={this.state.navOffsetBottom}>
								<Nav
									className="bs-docs-sidenav"
									activeHref={this.state.activeNavItemHref}
									onSelect={this.handleNavItemSelect}
									ref="sideNav">
									<NavItem href="#button" key={1}>HX Button</NavItem>
								</Nav>
								<a className="back-to-top" href="#top">
									Back to top
								</a>
							</Affix>
						</div>
					</div>
				</div>

				<PageFooter ref="footer" />
			</div>
		);
	}
});

module.exports = CustomPage;
