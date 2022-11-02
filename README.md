# React Redux Youtube

Interested in learning [Redux](https://redux.js.org/introduction/getting-started)?

### Getting Started
```
> git clone https://github.com/assohail/react-redux-youtube.git
> cd react-redux-youtube
> npm install
> npm start
```

### Used Packages
Here is the list of packages and their purpose, used to build the app. Starter packages are not listed here. 
* #### youtube-api-search
Its youtube api used for searching the different terms  
* #### lodash
Its used for debouncing, to add interval between the user's searches.

## React in General
* Data flows downward. 
* Functional vs Class-based components
* Before making new component think if it needs to manage or maintain state. It's helpful to identify to create functional or class-based component. 
* Components/views in react are snippets of code that produce ‘HTML’. React produces HTML.
* Each class based component has its own state object. State is very component level here in React, it's scope expands to application level when we use Redux. In react component, if any state change occurs, it gets rendered alongwith children immediately.
* Callbacks are great for parent child communicate but they are confusing. Used in index.js with components. In Redux there is better way for this.
