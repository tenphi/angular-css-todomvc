# Angular TodoMVC Example With CSS Methodology

Based on [DanWahlin's Angular Boilerplate](https://github.com/DanWahlin/Angular-BareBones)

This version have `[mod]` directive. Plain version see [here](https://github.com/tenphi/angular-css-todomvc/)

## Order of css rules

* Root class
  * Root styles
  * Root states (`:hover`, `:active`, etc)
  * Root pseudo-classes (`::before`, `::after`, etc)
    * Root pseudo-classes styles
    * Root pseudo-classes states
    * ...
* Element class
  * Element styles
    * Element states
    * Element pseudo-classes
      * Element pseudo-classes styles
      * Element pseudo-classes states
      * ...
    * ...
  * ...
* Context styles (for example: `.root.-mod .element`)
  * ...

## Running the Application

1. Install [Node.js](http://nodejs.org)

1. Install the Angular CLI:

    `npm install -g @angular/cli`

1. Run `npm install` to install app dependencies

1. Run `ng serve -o` to start the server and launch the app
