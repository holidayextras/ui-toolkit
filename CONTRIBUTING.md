# Contributing to UI-Toolkit

A BIG thank you from everyone using the UI-Toolkit for taking the time to contribute! :clap:

The following is a set of guidelines for contributing to the UI-Toolkit and its components,
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request.

This guide will be constantly updated.

## New Components
* Please choose a name that describes the component i.e `button`
* When adding a class to the template, please prefix with `component-` so when in use it doesn't conflict with existing
  components

## Submitting Issues

* You can create a [new issue](/../../issues/new), but
  before doing that please read the notes below on submitting issues,
  and include as many details as possible with your report.
* Include screenshots, animated GIFs or [screencasts](http://quickcast.io/) whenever possible; they are immensely
  helpful.
* Include the behavior you expected and other places you've seen that behavior
* Perform a [cursory search](/../../issues)
  to see if a similar issue has already been submitted.
* Please setup a [profile picture](https://help.github.com/articles/how-do-i-set-up-my-profile-picture)
  to make yourself recognizable and so we can all get to know each other better.

## Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* Include thoughtfully-worded, well-structured
  [Mocha](http://mochajs.org/) specs. See the specs styleguide below.

### Linting
We use [ESLint](http://eslint.org/) to ensure consistency in our repo.
Please ensure you:

* Eliminate excess white space.
* End files with a newline.

## Git Commit Messages

* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :new: `:new:` when fixing adding a new component
    * :bug: `:bug:` when fixing a bug
    * :racehorse: `:racehorse:` when improving performance
    * :memo: `:memo:` when writing docs
    * :fire: `:fire:` when removing code or files
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies

## Specs Styleguide

- Include [Mocha](http://mochajs.org/) specs in the `__test__` folder in area for developement, if the
  directory doesn't exist, please add one.
- Run test using `npm test`
- treat `describe` as a noun or situation.
- treat `it` as a statement about state or how an operation changes state.

### Example

```javascript
describe('a dog', function() {
  it('barks', function() {
    # spec here
  });
  describe('when the dog is happy', function() {
    it('wags its tail', function() {
      # spec here
    });
  });
});
```

--
Based on the wonderful Contribution.md file from the guys and girls at [atom](https://github.com/atom/atom)
