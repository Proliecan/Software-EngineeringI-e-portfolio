# SAP OpenUI5 <!-- omit in toc -->

![OpenUI5 Banner](https://camo.githubusercontent.com/79cc251c5c489cb14c432e4861bec5c9e679e925c975f3625ab1e64984bf90ff/68747470733a2f2f6f70656e7569352e6f72672f696d616765732f4f70656e5549355f6e65775f6269675f736964652e706e67) <!-- .element: style="width:50%;" -->

Note: Attention...

--
**C. "Elliot" Heeren**  
![Elliot's picture](./content/images/DSC03444.jpg)  <!-- .element: style="width:50%;" -->  
Matr. : *1291292*

Note: Only for grading

--
### Content
- [Fiori](#fiori)
- [SAP UI5](#sap-ui5)
  - [Architecture](#architecture)
- [UI5 vs. *Open*UI5](#ui5-vs-openui5)
- [Usage](#usage)
  - [Initialization](#initialization)
  - [XML Views](#xml-views)
  - [Controller](#controller)
  - [Model (e.g. JSON / XML / *OData*)](#model-eg-json--xml--odata)
- [Case Study](#case-study)
- [Assessment](#assessment)

Note: 
- MVC:
  - I will show you **three little example apps**
- I will talk about 30 min. in total.

==
## Fiori
<!-- ![Fiori Concept](content/images/Fiori-concept.png) -->
UI Design-Concept von SAP:
+ Standardized:
  + across all SAP products
  + across all devices
+ Open Standard

[Fiori Design Guidelines](https://experience.sap.com/fiori-design/) <!--.element target="_blank"--> <br>
[Button Design](https://experience.sap.com/fiori-design-web/button/) <!--.element target="_blank"--> 

Note:
- Let's start with Fiori:
  - Is a **design concept**
  - **Proprietary** and invented at SAP
  - Used there for the majority of web-UI
  - Well thought through:
    - By **professional full-time UI-designers**
    - Key aspects:
      - Easy and intuitive **navigation**
      - Straight-forward **data visualization and manipulation**
      - **Inclusive and accessible** design
  - Became the pretty-much-**standard in business Software**
  
--
## SAP UI5
(SAP UI Development Toolkit for HTML5)
<div style="display:flex"> <!-- .element class="fragment fade-up"  -->
<div>

+ JS-library for Fiori-compliant web-apps
+ Focus on: 
  + Displaying and modifying data
  + Business applications
+ Really good localization support
+ Out-of-the-box components

</div>
<img src="https://skillicons.dev/icons?i=js" alt="Js Logo" style="margin-left:auto; height:30vh">
</div>

Note:
+ Wait, I thought we would talk about UI here?
  + **JS-library for Fiori-compliant web-apps**
  + Focuses on the **same key aspects**
  + i18-System:
    + brings really **easy Localization**
    + makes UI built with UI5 even more accessible
  + Delivers a huge set of **components and controls** out-of-the-box

==
### Architecture
![architecture of a sap UI5 App](content/images/architecture.png) <!--.element: style="height:50vh" -->

Note:
- This is the architecture of a typical **set of SAP UI5 apps**. 
- They are made to function as a whole collection
  - No Company uses only one app
    - e.g: Vacation, payslip download, work schedule, ...
  - Usually apps are connected by the Fiori Launchpad
    - SAP product
    - launcher for cloud-deployed apps (e.g. Cloud Foundry)

- **Picture**

--
## UI5 vs. *Open*UI5

<div style="display:flex">
<div> <!-- .element class="fragment fade-up"  -->

SAP UI5
+ All features:
    + Core runtime libraries
    + All Control
+ (In-House) Support
+ Faster Patches
+ Only for SAP

</div>
<div> <!-- .element class="fragment fade-up"  -->

Open UI5
+ Not all features:
  + Core runtime libraries
  + only some additional libraries
+ Open Source <br> (Apache License 2.0): <br> [GitHub.com](https://github.com/SAP/openui5)
</div>
</div>

Note:
+ Let's talk IP (Interlectual Property)
+ In general: 
  + SAP owns SAP UI5
  + But: free, open source version: OpenUI5 (Apache License 2.0)

==<!--.element: data-auto-animate -->
## Usage

### Initialization

```html [6,8,15-16|19,20|9-13|14]
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>SAPUI5 Walkthrough</title>
      <script
        id="sap-ui-bootstrap"
        src="https://sdk.openui5.org/resources/sap-ui-core.js"
        data-sap-ui-theme="sap_fiori_3_dark"
        data-sap-ui-async="true"
        data-sap-ui-resourceroots='{
          "sap.ui.demo.walkthrough": "./"
        }'
        data-sap-ui-onInit="module:sap/ui/demo/walkthrough/index"
      >
      </script>
    </head>
  
    <body class="sapUiBody" id="content">
    </body>

  </html>
```

Note:
- Load script
- Style body and make it known to UI5
- Specify parameters:
  - Theme (see Fiori?)
  - Asynchronous UI loading (reduces loading time)
  - resource roots (useful for bigger apps)
- Initialization module
--
<!--.element: data-auto-animate -->
### Initialization <!-- omit in toc -->
/index.js
```javascript [|1-3|6-10|7]
  sap.ui.define([
    "sap/ui/core/mvc/XMLView"
  ], function (XMLView) {
    "use strict";
  
    XMLView.create({
      viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oView) {
      oView.placeAt("content");
    });
  
  });
```

Note:
- just gonna gloss over it here
- sap.ui.define: defines a new module
  - Dependency matrix
- Create a new view
- Path to view (virtual module path)

--
<!--.element: data-auto-animate -->
### XML Views
```javascript
  viewName: "sap.ui.demo.walkthrough.view.App"
```
```javascript
  data-sap-ui-resourceroots='{
          "sap.ui.demo.walkthrough": "./"
        }'
```

<div>

  /view/App.view.xml
  ```xml [|1-3,5|4]
  <mvc:View
      xmlns="sap.m">
  
      <Text text="Hello World"/>
  </mvc:View>
  ```
</div>
<!-- .element class="fragment fade-up"  -->

Note:

--
<!-- .element data-background-iframe="/content/ui5_examples/view/webapp" -->
Note:
- Hello-world App

--
<!--.element: data-auto-animate -->

### Controller

<div>

  ```xml [1-2,15|5-13|3]
  <mvc:View
    xmlns="sap.m"
    controllerName="hello_world.controller.say">
  
      <Button icon="sap-icon://geographic-bubble-chart"
              type="Accept"
              press="onHello"
              text="Say Hello"></Button>
  
      <Input placeholder="Name"
             width="20vw"
             id="name"
             submit="onHello"></Input>
  
  </mvc:View>
  ```
</div><!-- .element class="fragment fade-up"  -->

Note:
- Another view
- Controller name = virtual controller path

--
<!--.element: data-auto-animate -->
### Controller <!-- omit in toc -->

```xml
<mvc:View controllerName="hello_world.controller.say">
```
```javascript
  data-sap-ui-resourceroots='{
          "hello_world": "./"
        }'
```

<div>

  /controller/say.controller.js
  ```javascript [1-3, 13|6-12]
    sap.ui.define(['sap/m/MessageToast',
                   'sap/ui/core/mvc/Controller'],
      function(MessageToast, Controller) {
      "use strict";

      var PageController = 
              Controller.extend("hello_world.controller.say", {

          // custom event handlers here
      });

      return PageController;
    });
  ```
</div>
<!-- .element class="fragment fade-up" -->

Note:
- File path
- Define new module
  - Note **'Controller' dependency**
- Extend module of the controller  
  => virtual module already exists!

--
<!--.element: data-auto-animate -->
### Controller <!-- omit in toc -->

/controller/say.controller.js
```javascript [9-19]
  sap.ui.define(['sap/m/MessageToast',
                 'sap/ui/core/mvc/Controller'],
    function(MessageToast, Controller) {
    "use strict";

    var PageController = 
            Controller.extend("hello_world.controller.say", {

      onHello: function (evt) {
        let name = this.getView().byId("name").getValue();

        let message = ""
        if (name === "")
          message = "Hello World!"
        else
          message = "Hello " + name + "!"

        MessageToast.show(message);
      }
    });

    return PageController;
  });
```
Note:
- 'Message Toast' dependency
  - Is a nice way to show **popup-messages on the UI**

--
<!-- .element data-background-iframe="/content/ui5_examples/controller/webapp" -->
Note:
- Interactive hello-world app
- Note: Everything is on GitHub  
  if you want to take a look at it.

--
<!--.element: data-auto-animate -->
### Model (e.g. JSON / XML / *<u>OData</u>*)
/model/cities.json

```json [2-14|16-24]
{
  "cities": [
    {
      "country": "AD",
      "name": "Sant Julià de Lòria",
      "lat": "42.46372",
      "lng": "1.49129"
    },
    {
      "country": "AD",
      "name": "Pas de la Casa",
      "lat": "42.54277",
      "lng": "1.73361"
    }, ...],

  "countries": [
    {
      "name": "Afghanistan",
      "code": "AF"
    },
    {
      "name": "land Islands",
      "code": "AX"
    }, ...]
}
```
Note:
- UI5 can use any model:
  - XML
  - oData
    - Well established **protocol**
      - for data transfer
      - used by most SAP products  
        => good support in UI5
- Here: typical **json-model**
- Note the encoding errors - UI5 will correct them

This model contains:
- Some **cities**
- Some **countries**

--
<!--.element: data-auto-animate -->

### Model (e.g. JSON / XML / *<u>OData</u>*) <!-- omit in toc -->
**Loading:**

```javascript [2,3|9-12,20-21|15-18]
sap.ui.define(['sap/ui/core/mvc/Controller',
               'sap/ui/model/json/JSONModel'],
  function(Controller, JSONModel) {
  "use strict";

  var PageController = 
        Controller.extend("cities.controller.app", {

    onInit: function() {
      let oModel = new JSONModel();
      // loading can be sync or async
      oModel.loadData('./model/cities.json', null, false);
      let data = oModel.getData();

      data.cities.forEach(city => {
        city.description = 
          "latitude: " + city.lat + " | longitude: " + city.lng;
      });

      this.getView().setModel(oModel);
    }

  });
  return PageController;
});

```

Note:
Initialize json-model
- Load **dependency**
- In controller (here '`onInit()`'):
  - **Load Data** from file (or other source)
  - Set model in view
- Iterate the model and **manipulate data**

--
<!--.element: data-auto-animate -->
### Model (e.g. JSON / XML / *<u>OData</u>*) <!-- omit in toc -->
**Using in view:**

```xml [6-14|7,12-14]
<mvc:View
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc"
  controllerName="cities.controller.app">
	
  <List headerText="Cities of The World"
        items="{/cities}"
        growing="true"
        growingThreshold="20"
        growingScrollToLoad="true">
      <StandardListItem 
          title="{name}"
          info="{country}"
          description="{description}"/>
  </List>

</mvc:View>
```

Note:
- Define a List
  - With 1(!) list item
- Use data from model
  - If one attribute is an array  
    => Component will iterate all members
  - So: we will have a `<StandardListItem />` for each city

--
<!-- .element data-background-iframe="/content/ui5_examples/model/webapp" -->
Note:
- List App
- Now you begin to see the use of out-of-the-box components and controls

==

## Case Study
<div style="display:flex;align-items: center;">
  <img src="https://static.finnhub.io/img/finnhub_2020-05-09_20_51/logo/logo-gradient2.png" style="width:10vw;height: fit-content;flex-grow:1;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/OpenUI5_logo_horizontal_blue.svg" style="width:40vw;height: fit-content;flex-grow:1">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" style="height:5vw;height: fit-content;flex-grow:1">
</div>

Note:

--
<!-- .element data-background-iframe="/content/ui5_examples/stock-tracker/webapp" -->
Note:

==

## Assessment
**Why should one use SAP OpenUI5?**
<div style="display:flex">
<div> <!-- .element class="fragment fade-up"  -->

Advantages:
+ Fiori-Design Compliant:
  + Unified standardized design
  + Accessible Webapps
  + Skip UI-design phase mostly
+ SAP-standard
+ Exceptional docs

</div>
<div> <!-- .element class="fragment fade-up" style="max-width:50%"  -->

Disadvantages:
+ Lots of boilerplate code
+ Separation of technology and concerns  
  -> complicated structure
+ Terrible loading times  
  (client side rendering)
</div>
</div>

<!-- --

## MIP <!-- omit in toc -->
**(Most important points)** -->

Note:

==

# Q & A <!-- omit in toc -->

Note:

--

## Sources <!-- omit in toc -->

<div style="text-align:left">

- [ui5.sap.com](https://ui5.sap.com/ )

Images:
- [wikimedia.org](https://wikimedia.org)
- [finnhub.io](https://finnhub.io)
</div>