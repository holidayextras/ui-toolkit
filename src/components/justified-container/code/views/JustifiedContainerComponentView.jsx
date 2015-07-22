var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function(){
    return {
      styles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    };
  },
  render: function(){
    return require('../templates/JustifiedContainerComponentTemplate.jsx')(this.props);
  }
});
