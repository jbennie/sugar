# Who are Coffeekraken?

The only requirement to be part of Coffeekraken is to love coffee and krakens. If you know how to develop in html, javascript (nodejs, etc...), css (sass, etc...), it's good as well.

More seriously, we are a young collectve of front-end creative developers with a goal in mind. Build tools to make every team working day life better.
This is our first and only concern and all our tools are build around that purpose.

## Why?

Coffeekraken has been started by **employees working in the same agency**. To work together efficiently, we have though about how to structure our workflow between the different departments (developers, designers, etc...). This has pointed out some **well known technologies and concept** like:

1. **Styleguide**:
	- Give some base guidelines for developers and designer to work together
	- Keep track of what styles and components are available in a website
	- Define basic HTML markup to use across websites
2. **Documentation**:
	- Complete and nice documentation is the backbone of a good codebase
	- It allows to work in team
3. **Tests**:
	- Testing your code is the insurance of not breaking anything
	- Give confidence to work in team on the same codebase
	- Start by thinking about tests before coding gives you a nice overview of what to develop
4. **Versioning**:
	- Keep track of the project advancement
	- Allows quick restoration in case of broken codebase
	- Avoid to many non tracked code releases that are dangerous in time

All of these concepts are not new and well known by the community.
Our goal is to build tools to make each of these concepts interact with each others.

## Our tools

Here's the list of tools we have for now in order to achieve our primary focus:

> Working together as smoothly as possible

1. **[Docblock parser](https://github.com/coffeekraken/docblock-parser)** : Node package that **parse a string and return a nice JSON version of found docblocks**
	- Used as starting point to create documentations, styleguide, etc...
2. **[Docblock to markdown](https://github.com/coffeekraken/docblock-to-markdown)** : Node package that use the ```docblock-parser``` under the hood and produce markdown versions from them.
	- Used to generate **automatic API documentation from our codebase**
	- Can document any type of code (customizable)
	- **Expose a simple CLI** to use where you need
3. **[Carpenter](https://github.com/coffeekraken/carpenter)** : Node package that **provide a nice web interface** to display auto-generated styleguide and documentation for a particular website.
	- Generate **styleguide directly from CSS codebase**
	- **Aggregate used modules documentations** to have all of them at the same place
	- Tools like [Sugar](https://github.com/coffeekraken/sugar) integrate Carpenter styleguide docblocks.
	- Quick configuration through ```carpenter.config.js``` file
4. **[Testing stack](https://github.com/coffeekraken/testing-stack)** : Nice node package that **helps you to integrate unit tests**, etc...
	- Support ES6 syntax out of the box
	- Use [Karma](https://karma-runner.github.io/1.0/index.html) as underhood framework
	- Will cover through time more testing technologies and features (performance, etc...)
	- Quick configuration through ```tests.config.js``` file
