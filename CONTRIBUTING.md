# Contributing to UI-Toolkit

A BIG thank you from everyone using the UI-Toolkit for taking the time to contribute! :clap:

The following is a set of guidelines for contributing to the UI-Tookit and its components,
which are hosted in the [Holiday Extras Organization](https://github.com/holidayextras) on GitHub.
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request.

This guide will be constently updated.

## New Components
* You can creat new components easily using the
[Component Generator](https://github.com/holidayextras/generator-ui-component)
* Please choose a name that decribes the component i.e `button`
* When adding a class to the template, please prefix with `component-` so when in use it doesn't conflict with existing
  components

## Submitting Issues

* You can create a [new issue](https://github.com/holidayextras/ui-toolkit/issues/new), but
  before doing that please read the notes below on submitting issues,
  and include as many details as possible with your report.
* Include screenshots and animated GIFs whenever possible; they are immensely
  helpful.
* Include the behavior you expected and other places you've seen that behavior
* Perform a [cursory search](https://github.com/holidayextras/ui-toolkit/issues)
  to see if a similar issue has already been submitted.
* Please setup a [profile picture](https://help.github.com/articles/how-do-i-set-up-my-profile-picture)
  to make yourself recognizable and so we can all get to know each other better.

## Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* Include thoughtfully-worded, well-structured
  [Jest](https://facebook.github.io/jest/) specs in the `__tests__` folder in area for developement, if the directory
  doesn't exists, please add one. Run them using `jest`. See the [Specs Styleguide](#specs-styleguide) below.

### Linting
We use [ESLint](http://eslint.org/) to ensure consistency in our repo.
Please ensure you:

* Illiminate excess white space.
* End files with a newline.

## Git Commit Messages

* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :bug: `:bug:` when fixing a bug
    * :racehorse: `:racehorse:` when improving performance
    * :memo: `:memo:` when writing docs
    * :fire: `:fire:` when removing code or files
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies

## Specs Styleguide

- Include thoughtfully-worded, well-structured
  [Jest](https://facebook.github.io/jest/) specs in the `__test__` folder.
- treat `describe` as a noun or situation.
- treat `it` as a statement about state or how an operation changes state.

### Example

```coffee
describe 'a dog', ->
 it 'barks', ->
 # spec here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # spec here
```

--
Based on the wonderful Contribution.md file from the guys and girls at [atom](https://github.com/atom/atom)
