var React = require('react');

module.exports = React.createClass({

  propTypes: {
    expireDate: React.PropTypes.string
  },

  getInitialState: function() {
    var expireDate = this.updateValue(this.props.defaultValue);
    return {
      expireDate: expireDate || ''
    };
  },

  getDefaultProps: function() {
    return {
      formatInput: false,
      placeHolder: 'MM/YY'
    };
  },

  updateValue: function(expireDate) {

    if(typeof expireDate === 'undefined')
    {
      return false;
    }

    var formattedDate = expireDate.replace(/([0-9]{2})([0-9]{1,2})/g, '$1/$2').trim();
    var dateParts = formattedDate.split('/', 2);

    if(dateParts.length == 2)
    {
      var month = parseInt(dateParts[0], 10) || '';
      var year = parseInt(dateParts[1], 10) || '';

      if(month > 12)
      {
        month = 12;
      }
      else if(month > 0 && month < 12)
      {
        month = '0' + month;
      }

      if(month && year)
      {
        formattedDate = month + '/' + year;
      }
    }

    this.setState({
      expireDate: formattedDate
    });

    return formattedDate;
  },

  handleChange: function(e) {
    var expireDate = e.target.value.replace(/[^0-9\/]/g, '');
    this.updateValue(expireDate);
  },

  render: function() {
    return require('../templates/creditCardExpireTemplate.jsx')(this);
  }
});
