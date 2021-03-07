# react-widget

It's a widget coding challenge for SeQura. Thanks for the opportunity :)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Integration for notes on how to integrate it in other platform.

### Prerequisites

I've been developing with the  version v14.15.5 of node.

```
v14.15.5
```

### Installing

When you download the project you should see three folders: api, merchant-site and widget. Enter in the api folder and install the dependencies and run the server. 

```
npm install
npm start
```

Widget is the project developing by me, it's a React app. You should enter in the widget folder and install all the dependencies.
 

```
yarn or yarn install
```

when all the dependencies are installed you should run the project. The project should be running in http://localhost:3000/

```
yarn start
```

## Running the tests



### Break down into unit test

The projet has a battery of unit tests it has been developed with Jest and Enzyme. Also i've included snatsofts for the components. To execute the test you have to run the next command in your terminal:
```
yarn test
```

### State of the applicaction

As I've had to share only the instalmentFee this it has been saved in a Context Api and it shared between my app. As it is a small aplication and the only data to share it is. This is the reason why i've selected Context Api instance of others way to share the state. When i get the data from the api i save the first instalment fee of the api and saved it in the ContextApi. When the user select a new instalment from the Select component it is saved in the state and it is available for the Financing Cost component(it is children of the Modal component).

```
const { instalmentFee } = useContext(WidgetContext);
```

### Styles of the aplication(CSS)

The aplication have a css file (app.css) to avoid possible errors with the integration of our component and reset the div that containt our compoonent in the product-page.html and future integrations in others platform the best solution that i've found is use http://cleanslatecss.com/. It is a extreme CSS reset stylesheet. It has been included in the product page href="https://cdnjs.cloudflare.com/ajax/libs/cleanslate/0.10.1/cleanslate.css". This is the reason why the css of widget app is based in id and BEM and all the properties have !important to overrride the cleanslate. Also the 3 colors that i've implemented are in css vars, if in a future one of our clients wants other appearance for the widget. We will send a copy of our css and they have to override these variables with the colors that they want and integrate this css in his page. As i said before this is the best way that i found to do it, first our herarchy is strong an bases in the id of ours containers. One for the Widget component (#sequra-widget-financing-cost) and the other for the modal(#sequra-widget-financing-cost-modal), to achive it i've implemented (https://reactjs.org/docs/portals.html) i think is the best solution to avoid problems with our components in the integration page. Thi is the first time that i've implemented a widget with React, i'm sure that you know better ways to do it, if i pass to the next step of the process i'd like to talk with you about it, it has been a good challenge for me :). The widget component is liquid as this way it can be integrate in aby space, it have been build with relative units.

```
:root {
  --primary-color: #119c6e;
  --secondary-color: 247, 247, 247;
  --white-color: #fff;
  
  #sequra-widget-financing-cost .widget__heading p {
    margin: 0.5em 0 !important ;
  }
  #sequra-widget-financing-cost-modal {
    width: auto!important;
  }
```

### Services

I've created two services to manage the requests to our api, as this way the responsability to comunicate with our api live inside both method and i can import it in the part of our aplication that need to consume it. Also i've created a baseconfig file and inside i've included the url that consume these services. I'm not spliting the get with the params as it is a test the url has the params inside in a real world i'd like to split it. As the api of analytics throw errors i can captured it in our services log it and our aplication continue working.

```
export async function setEvent(event) {
  try {
    await fetch(analyticsEventsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCreditAgreements(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

```
### Components

Inside of the aplication you can see a folder with all the components that consume our aplication(Widget, Select, Modal, Loader, FinancingCost). I think in a real world the common components live and external common library of components, but for the challege all live inside of the components forlder. 

```
Widget is the orchestator of the widget it recived the data via prop from App.js

```

## Integration

For the challenge the widget is integrated in the mercant-site (product-page.html). I've integrated:
- the path with the url of the widget http://localhost:3000/widget.js
```
<script
      type="text/javascript"
      src="http://localhost:3000/widget.js"
      defer
    ></script>

```
- As i said before the cleanslate. To reset all the styles in ours containers divs.

```
<link
      href="https://cdnjs.cloudflare.com/ajax/libs/cleanslate/0.10.1/cleanslate.css"
      rel="stylesheet"
    />
```

- the containers of our app 
```
<div id="sequra-widget-financing-cost" class="cleanslate"></div>
<div id="sequra-widget-financing-cost-modal" class="cleanslate"></div>

```



- To integrate it in a real world in the webpack of the widget app i've commented the publicPath(as the widget is in my localhost it is not necessary, dont forget have the api running and widget app) if we know the server that it widget will live we should add in this part and generate a new build. As i mentioned before if the clients want's others colors it's possible include a copy of our css with this new colors. The steps before are also necessary here, the integrator should do the same as me and these others steps. As our widget is consumming the api i have doubts with the possible cors i'd like to talk with you about it if i'll pass to the next step of the process. Currently everything is working well because everything live in my localhost (3000 and 8080).

```
module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "public"),
    //publicPath: "http://localhost:3000/",
    filename: "widget.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlPlugin],
};

```

 
## Things Aside

* Desing 
  - I'd like to add a spinner instance of a text Loading...
  - Add any mediaquery for others resolutions content modal
  - Error handling if i have any error with the request to get the data, implement some info to ours users.
  - Same images in Modal content
* Testing
  - I've tried to mock the context-api to test the integration with it(i've had some trouble with Jest). I'like to have more time to finish this part.
  - Test in App.js to mock services and pass data to Widget :(
  - I'm not and expert with end to end test but i'd like to include https://www.cypress.io/ and make any test i think is a good way to test it.

* Performance
    -As the same way that i've memoize(select component) and useCallback for the select callback, i'd like to do the same in the rest of callbacks and make sure that i don't have innecesary renders but i don't have more time to do it. :(
  - As is the same request only call one time and save in a localstorages to call only the first time that the app is open.










