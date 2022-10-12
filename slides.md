# SAP OpenUI5 <!-- omit in toc -->

![OpenUI5 Banner](https://camo.githubusercontent.com/79cc251c5c489cb14c432e4861bec5c9e679e925c975f3625ab1e64984bf90ff/68747470733a2f2f6f70656e7569352e6f72672f696d616765732f4f70656e5549355f6e65775f6269675f736964652e706e67) <!-- .element: style="width:50%;" -->

--
**Constantin "Elliot" Heeren**  
![Elliot's picture](./content/images/DSC03444.jpg)  <!-- .element: style="width:50%;" -->  
Matr. : *1291292*

Note: Image size too large

--
### Content
- [Fiori](#fiori)
- [SAP UI5](#sap-ui5)
  - [Architecture](#architecture)
- [UI5 vs. *Open*UI5](#ui5-vs-openui5)
- [Usage](#usage)
- [XML Views](#xml-views)
- [XML Views](#xml-views-1)

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

--
## SAP UI5
(SAP UI Development Toolkit for HTML5)
<div style="display:flex"> <!-- .element class="fragment fade-up"  -->
<div>

+ JS-library for Fiori-compliant web-apps
+ Focus on: 
  + Displaying and modifying data
  + Business applications
+ Localization support

</div>
<img src="https://skillicons.dev/icons?i=js" alt="Js Logo" style="margin-left:auto; height:30vh">
</div>

==
### Architecture
![architecture of a sap UI5 App](content/images/architecture.png) <!--.element: style="height:70vh" -->

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

==
## Usage

```html [6,8,15-16|19,20|9-14|11]
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
        data-sap-ui-onInit="module:sap/ui/demo/walkthrough/index"
        data-sap-ui-resourceroots='{
          "sap.ui.demo.walkthrough": "./"
        }'
      >
      </script>
    </head>
  
    <body class="sapUiBody" id="content">
    </body>

  </html>
```

--
<!--.element: data-auto-animate -->
## XML Views 
webapp/index.js
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

--
<!--.element: data-auto-animate -->
## XML Views
```javascript
		viewName: "sap.ui.demo.walkthrough.view.App"
```

<div>

  webapp/view/App.view.xml
  ```xml [|1-3,6|5|3]
  <mvc:View
      xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc"
      controllerName="sap.ui.demo.walkthrough.controller.App">
  
      <Text text="Hello World"/>
  </mvc:View>
  ```
</div>
<!-- .element class="fragment fade-up"  -->

--

<iframe src="./content/App-examples/hello_world/webapp/index.html"
        style="height:75vh; width:70vw"
        class="box-border"></iframe>