'use strict';

var snyk = require('snyk');
var moment = require('moment');
var colours = require('colours');

var Report = module.exports = function(targetPath, callback) {
  if (!callback) {
    throw new Error('No callback given');
  }
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function');
  }
  snyk.test(targetPath, {})
  .then(function(results) {
    var groupedResults = Report._groupResults(results);
    var output = Report._formatVulns(groupedResults);
    var summary = Report._createSummary(groupedResults);
    output += Report._formatSummary(summary);
    callback(null, {
      text: output,
      summary: summary
    });
  })
  .catch(callback);
};

Report._risks = [
  {
    colour: 'red',
    name: 'high'
  },
  {
    colour: 'yellow',
    name: 'medium'
  },
  {
    colour: 'green',
    name: 'low'
  }
];

Report._groupResults = function(results) {
  if (!results.vulnerabilities) {
    return {};
  }

  return results.vulnerabilities.reduce(function(previous, vuln) {
    if (!previous[vuln.severity]) {
      previous[vuln.severity] = [];
    }
    previous[vuln.severity].push({
      id: vuln.id,
      name: vuln.name,
      title: vuln.title,
      path: vuln.from.slice(1), // ignore current project
      age: Report._reportAge(vuln.creationTime)
    });
    return previous;
  }, {});
};

Report._reportAge = function(reportTime) {
  return moment().diff(moment(reportTime, 'YYYY-MM-DD HH:mm:ss Z'), 'days');
};

Report._formatVulns = function(groupedData) {
  return Report._risks.reduce(function(previous, risk) {
    if (!groupedData[risk.name]) {  // might not have any risks with this level
      return previous;
    }
    return groupedData[risk.name].reduce(function(innerPrevious, vuln) {
      innerPrevious += Report._formatVuln(risk, vuln);
      return innerPrevious;
    }, previous);
  }, '');
};

Report._formatVuln = function(risk, vuln) {
  var output = colours[risk.colour](risk.name.toUpperCase() + ':\t' + vuln.name + ' - ' + vuln.title + '\n');
  output += colours[risk.colour]('\tIn: ' + vuln.path.join(' → ') + '\n');
  output += colours[risk.colour]('\tAge: ' + vuln.age + ' days old\n');
  output += colours[risk.colour]('\tMore info: https://app.snyk.io/vuln/' + vuln.id + '\n\n');
  return output;
};

Report._createSummary = function(groupedData) {
  return Report._risks.reduce(function(previous, risk) {
    previous[risk.name] = groupedData[risk.name] ? groupedData[risk.name].length : 0;
    return previous;
  }, {});
};

Report._formatSummary = function(summary) {
  var summaryOutput = Report._risks.reduce(function(previous, risk) {
    previous += colours[risk.colour](risk.name.toUpperCase() + ': ' + summary[risk.name] + '\n');
    return previous;
  }, '');
  return colours.bold('Summary\n-------\n') + summaryOutput + '\n';
};
