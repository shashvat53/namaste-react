# Namaste React 🚀

### Episode 01 - Inception

**CDN**: Content delivery network.

**CROSSORIGIN**: letting browser know that we are expecting data and allows CORS to fetch data from the link mentioned in src.

**package.json**: it is a configuration for NPM
We have 2 types of dependency that an app has. One is Dev dependency (generally required in development phase) and other is Normal dependency.

---

### Episode 02 - Igniting Our App

React does not makes an App fast on it own. It needs help from some extra packages to become fast.

**NPM**: It is everything but not Node Package Manager. It is a repository where all modules/package resides and we can download/install those package to utilize them in our project.

**package.json**: is a configuration for npm. It keeps track of what dependencies are required for the app to run and also what version of dependencies. Package and dependency is same thing.

**parcel** is a bundler. This package bundles/minifies/cached/compressed/clean our code so that we can shipped it to production.

**Installing package**: npm install -D parcel. _-D_ mean that we only need to install the package for development environment. We have 2 types of dependencies, Dev-dependency and norma dependency. Dev dependencies are meant to be only used in development environment and normal dependencies are meant to be used in both dev and prod environment.

**^ and ~ in package.json**:

- ^ will update all minor and patch update. for example if our current version is 2.4.2, then using ^, our package will update to all version greater than 2.4.2, for example 2.4.5 or 2.5 etc, but less than version 3.0.0. Used as default notation. Generally the version is read as major:minor:patch (4:1:2). Tilda (~) is only for patch update and Carrot (^) is for minor update.

- ~ is basically used for approximately equivalent version. It is meant for bug fixes or patch updates. if our current version is 2.4.2, then we can update to version greater than 2.4.2 and less than 2.5 , for example, 2.4.3, 2.4.3.5, etc

- **package-lock.json**: It keeps track of exact version of dependencies as compare to the package.json that contains details of dependencies up to which it can be upgraded using ^ and ~. Package-lock.json also keep track of all dependencies and their exact version on which our dependencies depend.

- **Transative Dependencies**: The dependencies onw which our dependencies depends are called translative dependencies.

- It is important to put package.json and package-lock.json on github. package-lock.json is as important as package.json because it contains exact version of dependencies and dependencies of dependencies.

- We can start/ignite our app using parcel by below command. Now when we make any changes to the code, it will be automatically update our app in browserlist

  ```javascript
  npx parcel index.html
  ```

- **npx**: npx simply means executing a package where as npm means installing our package.

- We will now install react in our app and stop using CDN to get react as getting react from CDN is a costly thing because we will need to make a call to CDN and download react every time some access our app and also through CDN we only get a specific version of react. If react version change, we will have to make changes in our code. If we install react and use it, then it will much easier. We will not use -D flag this time as this is not a dev dependency.

  ```javascript
  npm install react
  ```

  ```javascript
  npm install react-dom
  ```

- **parcel**
  When parcel creates a dev/prod bundle, it stores it in _dist_ folder. It will create 3 files, index.html, index.css and index.js. Even if we have 100s of file in our project, Parcel will compress them to these 3 file which will be production ready.

  - Builds apps

  - Creates Local Server

  - Host app on Local Server

  - HMR: Hot Module Replacement, Automatically refreshing page when there is change in code. It does that by using File Watching Algo which is build in C++.

  - It creates a cache and hence faster builds.

  - It does Image Optimization.

  - In production build, parcel will also minifies our code or I should rather say Bundles our files.

  - It will also compress files.

  - Constant Hashing

  - Differential Bundling - When app is opened in all different browser and different version of these browser. Parcel will create different bundles for each of those browser and their version.

  - Gives better Error Suggestions.

  - In dev env, parcel lets us use https.

  - Tree Shaking - if we have 100 of codes in our code but we using only 10 of those function, parcel will only build those 10 functions that we use and neglect unused 90 functions.

  - Different dev and prod build. We create a prod build but adding a _build_ keyword. Also don't forget to remove "main" keyword and its value from package.json

    ```javascript
    npx parcel build index.html
    ```

- React is not the only thing that makes an app fast but also depends on bundlers like parcel.

- **Browserslist**: We can add a new key in package.json called _browserslist_ to let parcel know the browsers and its version that will support our app. It basically means that the app will work perfectly on the browser and its version mentioned in browserslist and might or might not on other browsers. Check below link:

  `https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb24%3D`

  ```javascript
  "browserslist": [
    "last 2 version of chrome", // will work perfectly on lats 2 version of chrome
    "last 2 version", // will work perfectly on lats 2 version of all browsers
    "cover 95.5% of US", // will work perfectly on all browsers and its version so that 95.5% of all people in US can access it perfectly
  ]
  ```

---

### Episode 03 - Laying the foundation

- JSX is not a part of react. JSX is different and React is different.

- We are write React without JSX but it is easier when we use jsx.

- JSX is not HTML but is HTML like syntax. Infact, JSX is more closer to XML lie syntax. JSX syntax looks like HTML/XML.

- In the core of React, we use createElement to create an element. But it is complex and not developer friendly. So we use JSX from which we can create react element when the code is compiled.

- JSX is not a pure javascript as it is not understandable by js engine. The JSX before going to JS engine, it is transpiled (converted) to react object by babel, that can be understandable bby JS engine.

- Generally we have 2 types of component in react,Class based component (old way not not used anymore), functional based component(new way).

- Component name always start with capital letter

- We can write a component inside a JSX:

  ```javascript
  <div>
    <ComponentName />
  </div>
  ```

- We can render a component inside a functional component in 3 ways:

  - `<ComponentName />`
  - `<ComponentName></ComponentName>`
  - `{ComponentName()}`

- Functional component returns som sort of React Element or a JSX code.

- **React.Fragment**: we use this when we want to return more than one JSX element. in this case we will wrap both element inside React.Fragment. React Fragment acts like an Empty Tag

  ```javascript
  <React.Fragment></React.Fragment>
  ```

  We can also use shorthand of this by simply using `<></>`

- **Component Composition** - When we have one or more components inside a component, it is component composition

- In return statement of function component, we can write javascript inside curly braces `{}`

- We can write component inside another component, react element inside component, component inside react element, react element inside another react element

- It is very important to define/declare a component/react element before using it inside another component/react element.

---

### Episode 04 - Talk is cheap, show me the code

<!--
  Header
    - Logo
    - Nav Items
  Body
    - Search
    - RestaurantContainer
      - RestaurantCard
        - Image
        - Name
        - Cuisines
        - Rating
        - Dev Time
        - Avg Price
  Footer
    - Copyright
    - Links
    - Address
    - Contact
 -->

- Config Driven UI - Websites are driven by data from API... like a website will show different data in different parts of world aur at different time of the day... Example, food delivery apps show different restaurants or offers in different region.

- Keys in Map: Key are important as it lets React to uniquely identify a component. If we have 10 items withour key, the react will treat them as same item and now if one more item is added, then it will render all 11 items. If all Items have keys than react can identify each item and knows that new item has a key that is not rendered and so it will only render the 11th item.

---

### Episode 05 - Lets get Hooked

- <></> => Empty tags/React.Fragments shorthand.

- **Reconciliation** - React is faster because it using reconciliation/React Fiber. React creates a copy of DOM in virtual DOM. Now whenever there is change in state variable, the component re-renders and it compares the new DOM with the copy of DOM in virtual DOM and only updates the difference of the DON in the actual DOM. SO if In a component, the name of a person is in h1 tag and when the name change, the component re-renders, in this case since only the text inside h1 tag is changed, React will only chang this h1 tag in actual DOM. This is called Diff algorithm and this is what makes react super fast. It is fast because, in virtual DOM, DOM is represented as JS object and not HTML tags and comparing 2 objects is always fast.

- **Export/Import**: We have 2 types of export/Import, Default and Normal.

  - Default Export: One JS file can only have one default export. This kind of exports have a keyword _default_.

    ```javascript
    export default myObj;
    ```

    When importing objects that are exported with default keyword, we can use any name as the file will only have one default export. We also don't need any curly braces for importing the same the same.

    ```javascript
    import youObject from './FileName;
    ```

    This will import myObj but will be identified as yourObject in this file.

  - Named Export: All export other than default export are Named export. These kind of export has no special key word. One JS file can has any number of named export.

    ```javascript
    export myObj;
    ```

    When importing these objects, we need to use curly braces and also need to use exactly same name as used to export

    ```javascript
    import { myObj } from "./FileName";
    ```

- **State Variable**: state variable a special variable in react that are defined inside a components and any change in state variable, causes the component in which the state variable is defined to re-render. We create state variable using a useState hook

- **Why we need state variable**: React keeps the track of state variable. Whenever there is change in state variable, React will rerender the component and display the updated UI. On contrary, whenever there is change in local variable, React will not notice it and it will not be reflected on UI.

- **Hook**: hooks are special js functions that do different task.

- **useState()** => JS function (or React Hook) that returns an array of sate variable and a function used to update the value of that state.

  ```javascript
  import { useState } from "react";
  ```

  ```javascript
  const [myState, setMyState] = useState("1");
  ```

  Above we have used a hook called useState to declare a state variable, _myState_, and a function, _setMySate_, that will be used to update the value of state variable, _myState_. We passed the value of 1 to the hook, useState, which will make the initial value of state variable, myState, as 1.

---

### Episode 06 - Exploring the World!!

- **async-await**: _await_ allow us to wait till function marked with _async_ returns. A function can me made to work asynchronously by adding a keyword _async_ before its definition. This function always returns a promise.

- **useEffect Hook**: If we have a part of code that we do not want to execute every time our component re-renders, but only on certain conditions, like change in state of a specific or group of state variables, then we place that code in useEffect. Such state variables are called dependencies of eseEffect are ate passed as 2nd argument of the function in arrays. If we want to execute something only once during the lifecycle of a component, then we only pass an empty array as 2nd arguments

  ```javascript
  useEffect(() => {}, [stateVariable1, stateVariable2]);
  ```

We can have any number of useEffect in a component. It is important to note that useEffect is called after component is rendered. It is also important to know that that state variable on which useEffect() depends, is not changes inside useEffect(), else it will end up in an infinite loop. If we don't have an dependency array, then code inside useEffect() will be called every time our component re-render.

- **CORS**: Cross Origin Resource Sharing. This is an mechanism that uses http headers to tells the browser if a specific webapp can share its resource with other app. The main point to note here is that both webapp should have different origin. For example, api call from local to Swiggy.

- **Optional Chaining(?.)**: This is a JS feature that allows us to access properties of an object or elements of array without having to check if the object or array is null or undefined.

```javascript
  let user: {
      name: "shashvat",
      address: {
          houseNumber: 102,,
          street: "New Street",
          country: "India"
      }
  }
  console.log(user.address.state) // will return undefined.
  console.log(user.address.state?.a) // will return undefined as we used optional chaining to access property a of undefined.
  console.log(user.address.state.a) // will return error as we try to access property a of undefined
```

TODO: -

- use fetch and axios to get live data from Swiggy API.

- We make an API call in useEffect Hook().

- Api call will return an readable stream which we will convert into json using data.json().

- When we make an API call from localhost, our browser blocks that request for security purpose. To bypass this we use a plugin ALLOW CORS plugin which w can install from chrome store.

Learn about CORS and Optional Chaining

- Never create a component inside another component. No one is toping us from doing so but it is not recommended by facebook itself. This is because every time our component will be rendered, the inner component will be re-created.

- Never use any hook inside an if/else block because a state variable will only be present if the condition is met and it will create inconsistencies in code. Also never use hook inside for loop as state variable life will last as long as the loop exists.

- Never use useState outside functional components.

---

Important Notes: -

You acn fix your api from this Link

```
  https://github.com/namastedev/namaste-react/commit/d3f0d801df96fb40a7d03cb411c72a469bbaef51
```

### Episode 07 - Finding the Path!!

To navigate in App, we need to define paths, clicking on which different components will be loaded giving us a feel for MPA and not SPA.

- **Server Side Routings Vs Client Side Routing**: In SSR, all page come from the server. SO if we click on a link, it makes request to server, gets the response and renders page to the browser. In CCR, the entire application is sent to the client at one and when user clicks on the link, it simply gets rendered on browser without making any request to the server.

- **React-Router-Dom** - This is a most widely used package that allows us to create routes with ease and navigate through the app. This package allows us to creates routes in many ways but one I like is creating routes using _useRoutes_ hook.

  - _BrowserRouter_: This is a component provided by the package and we need to wrap our entire package inside this component. Doing so lets React know that we everything inside this will be navigatable. If we have any component outside BrowserRouter component, will give us error.

    ```javascript
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ```

  - _createBrowserRouter_: This is a hook that allows us to create all possible routes in one component in separate js file. Doing so makes it very easy in maintaining the routing logics.

  - _Link_:

  - _useParams_:

  - _Outlet_: All the children gos into Outlet. It is kind of a place holder.

  - _useRouteError_: This is another hook that we get from this package and this hook returns the error that we get.

  - _Routes_:

  - _Route_:

  - _NavLink_:

  - _Navigate_:

  - _NavLink_:

  - _useNavigate_:

  - _useSearchParams_:

  - _useLocation_:
