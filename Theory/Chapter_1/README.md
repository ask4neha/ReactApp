## What is Emmet?
Emmet (formerly known as Zen Code) is basically a code editor plug-in which enables the developer for high speed coding and edting of HTML, XML and other structured code format via content assist.

for example `div#page>div.logo+ul#navigation>li*5>a` can be written for,

```html
<div id="page">
	<div class="logo"></div>
	<ul id="navigation">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</div>
```

## Difference between a Library and Framework?
The difference lies between inversion of control, which provide what. 

- Library
   * When we use libarary, we control the flow of our code.
  
- Framework 
   * It provides us slots where we put our code and framework decides when it will call it and use it.

## What is CDN? Why do we use it?
  CDN (Content Deliveery Network) is basically a network by which content is delivered to web-enabled devices with the help of caching the data near the user.
 - With CDN origin server also get less stress because of geographically situated servers provide the data to nearest users.
 - It reduces the time required to deliver the data to the user.

## Why is React known as React?
Because it reacts to change in state and prop, It changes the particular part of the code instead of refreshing the completed page.

## What is crossorigin in script tag?
Provides support for CORS( Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. ), defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.

## What is diference between React and ReactDOM?
- The react package holds the react source for components, state, props and all the code that is react.
- The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().
- The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

## What is difference between react.development.js and react.production.js files via CDN?
 the `.development` contains user understandable code while `.production` contains minified code which is optimized for production applications.
 
 ## What is async and defer?
 
Case when both of these two are not applied.
  - HTML parsing is start, as soon as script tag is encountered HTML pasing is stopped and script are fetched from the network and then executed,
   after execution is completed, HTML parsing is start again.

Case when async is applied.
  - HTML parsing is start and the script with async are fetched and as soon as scripts are arrived HTML parsing is halted and scripts are executed after scripts are 
   executed, HTML parsing starts again.

Case when defer is applied.
  - In case of defer HTML is parsed first and script with defer are fetched parally, after HTML is parsed completely, script execution is start.

 ![Async_defer](https://www.growingwiththeweb.com/images/2014/02/26/async-vs-defer-twitter.png)
 
 
 ## Q 1.  What is **emmet**?

Emmet is a plugin for text editors like VS Code that allows users to code faster.

For example in a HTML file:

1. `html:5 ` gives :

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
2. `div>div>p` gives :

```
<div>
    <div>
        <p></p>
    </div>
</div>
```

## Q 2. What is **CDN**?

CDN is known as `Content delivery network`  that provides us different type of assets / features / libraries  created by others over the internet.

## Q 3. What is **crossorigin** ?

Cross-origin resource sharing (CORS) is an HTTP based machenism that allows a server to indicate any origin other than its own from which the browser should permit loading the  resources.

## Q 4. What is the difference between `async` and `defer` ?

`async` and `defer` are boolean attributes which are used along with the `script` tag to load the external scripts efficiently in our we page.

Differences between `aasyn` and `defer`.

| Difference  |      async      |  defer |
|-------------|-----------------|--------|
| code | `<script async src = '...'></script>`  |  `<script defer src = '...'></script>`|
| Loading sequence | Does not guarantee the execution sequense of the script    | Guarantees the execution sequence of scripts in wich they are ordered.   |
| Execution sequence | Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.  | Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered.
|       |      |       |
