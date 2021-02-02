webpackJsonp(["accordiondemo.module"],{

/***/ "./src/app/showcase/components/accordion/accordiondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordiondemo__ = __webpack_require__("./src/app/showcase/components/accordion/accordiondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccordionDemoRoutingModule = (function () {
    function AccordionDemoRoutingModule() {
    }
    AccordionDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__accordiondemo__["a" /* AccordionDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AccordionDemoRoutingModule);
    return AccordionDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/accordion/accordiondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Accordion</span>\r\n        <span>Accordion groups a collection of contents in tabs.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <h3 class=\"first\">Default</h3>\r\n    <p-accordion>\r\n        <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\r\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather II\">\r\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather III\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n    </p-accordion>\r\n\r\n    <h3>Multiple</h3>\r\n    <p-accordion [multiple]=\"true\">\r\n        <p-accordionTab header=\"Godfather I\">\r\n            The story begins  as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather II\">\r\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n       </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather III\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n    </p-accordion>\r\n    \r\n    <h3>Tab Change Event</h3>\r\n    <p-accordion (onClose)=\"onTabClose($event)\" (onOpen)=\"onTabOpen($event)\">\r\n        <p-accordionTab header=\"Godfather I\">\r\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather II\">\r\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather III\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather IV\" [disabled]=\"true\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n    </p-accordion>\r\n    \r\n    <h3>Programmatic Change</h3>\r\n    <div style=\"margin-bottom: 1em\">\r\n        <button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"></button>\r\n    </div>\r\n        \r\n    <p-accordion [activeIndex]=\"index\">\r\n        <p-accordionTab header=\"Godfather I\">\r\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather II\">\r\n            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather III\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n        <p-accordionTab header=\"Godfather IV\">\r\n            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n        </p-accordionTab>\r\n    </p-accordion>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header =\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;AccordionModule&#125; from 'primeng/accordion';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Accordion element consists of one or more p-accordionTab elements. Title of the tab is defined using header attribute.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordion&gt;\r\n    &lt;p-accordionTab header=\"Header 1\"&gt;\r\n       Content 1\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 2\"&gt;\r\n        Content 2\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 3\"&gt;\r\n        Content 3    \r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Selected</h3>\r\n            <p>Visibility of the content is specified with the selected property that supports one or two-way binding.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordion&gt;\r\n    &lt;p-accordionTab header=\"Header 1\" [selected]=\"true\"&gt;\r\n       Content 1\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 2\"&gt;\r\n        Content 2\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 3\"&gt;\r\n        Content 3    \r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Multiple</h3>\r\n        <p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple\r\n            tabs be active at the same time.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordion [multiple]=\"true\"&gt;\r\n    &lt;p-accordionTab header=\"Header 1\"&gt;\r\n        Content 1\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 2\"&gt;\r\n        Content 2\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 3\"&gt;\r\n        Content 3    \r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Disabled</h3>\r\n        <p>A tab can be disabled by setting the disabled property to true.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordion&gt;\r\n    &lt;p-accordionTab header=\"Header 1\" [disabled]=\"true\"&gt;\r\n       Content 1\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 2\"&gt;\r\n        Content 2\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 3\"&gt;\r\n        Content 3    \r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Content at Headers</h3>\r\n            <p>Custom content can be placed at an accordion header with header element.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordionTab&gt;\r\n    &lt;p-header&gt;\r\n        Header Content\r\n    &lt;/p-header&gt;\r\n    Body Content\r\n&lt;/p-accordionTab&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Programmatic Control</h3>\r\n            <p>Tabs can be controlled programmatically using activeIndex property, in single mode it should be a number and in multiple mode an array of numbers\r\n            that define the indexes of active tabs.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"&gt;&lt;/button&gt;\r\n        \r\n&lt;p-accordion [activeIndex]=\"index\"&gt;\r\n    &lt;p-accordionTab header=\"Header 1\"&gt;\r\n       Content 1\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 2\"&gt;\r\n        Content 2\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Header 3\"&gt;\r\n        Content 3    \r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AccordionDemo &#123;\r\n    \r\n    index: number = 0;\r\n\r\n    openNext() &#123;\r\n        this.index = (this.index === 2) ? 0 : this.index + 1;\r\n    &#125;\r\n    \r\n    openPrev() &#123;\r\n        this.index = (this.index === 0) ? 2 : this.index - 1;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties for Accordion</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, multiple tabs can be activated at the same time.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>false</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines whether the elements of an inactive panel are created on load or on demand when the panel gets selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>activeIndex</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Index of the active tab or an array of indexes to change selected tab programmatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa fa-fw fa-caret-right</td>\r\n                            <td>Icon of a collapsed tab.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapseIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa fa-fw fa-caret-down</td>\r\n                            <td>Icon of an expanded tab.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Properties for AccordionTab</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Title of the tab.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selected</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if the tab is active.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines whether the tab can be selected.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClose</td>\r\n                            <td>\r\n                                event.originalEvent: Click object<br>\r\n                                event.index: Index of the tab\r\n                            </td>\r\n                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOpen</td>\r\n                            <td>\r\n                                event.originalEvent: Click object<br>\r\n                                event.index: Index of the tab\r\n                            </td>\r\n                            <td>Callback to invoke when a tab gets expanded.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-accordion (onOpen)=\"onTabOpen($event)\"&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nonTabOpen(e) &#123;\r\n    var index = e.index;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-accordion</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-accordion-header</td>\r\n                            <td>Header of a tab.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-accordion-content</td>\r\n                            <td>Content of a tab.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/accordion\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-accordion&gt;\r\n    &lt;p-accordionTab header=\"Godfather I\" [selected]=\"true\"&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\r\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;p-accordion [multiple]=\"true\"&gt;\r\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\r\n        The story begins  as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\r\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n   &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n\r\n&lt;h3&gt;Tab Change Event&lt;/h3&gt;\r\n&lt;p-accordion (onClose)=\"onTabClose($event)\" (onOpen)=\"onTabOpen($event)\"&gt;\r\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\r\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather IV\" [disabled]=\"true\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n\r\n&lt;h3&gt;Programmatic Change&lt;/h3&gt;\r\n&lt;div style=\"margin-bottom: 1em\"&gt;\r\n    &lt;button type=\"button\" pButton icon=\"fa fa-chevron-up\" (click)=\"openPrev()\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton icon=\"fa fa-chevron-down\" (click)=\"openNext()\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n    \r\n&lt;p-accordion [activeIndex]=\"index\"&gt;\r\n    &lt;p-accordionTab header=\"Godfather I\"&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather II\"&gt;\r\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather III\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n    &lt;p-accordionTab header=\"Godfather IV\"&gt;\r\n        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n    &lt;/p-accordionTab&gt;\r\n&lt;/p-accordion&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Message&#125; from '/components/common/api';\r\n\r\n@Component(&#123;\r\n    templateUrl: './accordiondemo.html'\r\n&#125;)\r\nexport class AccordionDemo &#123;\r\n\r\n    msgs: Message[];\r\n    \r\n    index: number = -1;\r\n\r\n    onTabClose(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index&#125;);\r\n    &#125;\r\n    \r\n    onTabOpen(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index&#125;);\r\n    &#125;\r\n    \r\n    openNext() &#123;\r\n        this.index = (this.index === 3) ? 0 : this.index + 1;\r\n    &#125;\r\n    \r\n    openPrev() &#123;\r\n        this.index = (this.index &lt;=0 ) ? 3 : this.index - 1;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/accordion/accordiondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDemoModule", function() { return AccordionDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordiondemo__ = __webpack_require__("./src/app/showcase/components/accordion/accordiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordiondemo_routing_module__ = __webpack_require__("./src/app/showcase/components/accordion/accordiondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion_accordion__ = __webpack_require__("./src/app/components/accordion/accordion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_growl_growl__ = __webpack_require__("./src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AccordionDemoModule = (function () {
    function AccordionDemoModule() {
    }
    AccordionDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__accordiondemo_routing_module__["a" /* AccordionDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_accordion_accordion__["a" /* AccordionModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accordiondemo__["a" /* AccordionDemo */]
            ]
        })
    ], AccordionDemoModule);
    return AccordionDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/accordion/accordiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionDemo = (function () {
    function AccordionDemo() {
        this.index = -1;
    }
    AccordionDemo.prototype.onTabClose = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
    };
    AccordionDemo.prototype.onTabOpen = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    };
    AccordionDemo.prototype.openNext = function () {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    };
    AccordionDemo.prototype.openPrev = function () {
        this.index = (this.index <= 0) ? 3 : this.index - 1;
    };
    AccordionDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/accordion/accordiondemo.html")
        })
    ], AccordionDemo);
    return AccordionDemo;
}());



/***/ })

});
//# sourceMappingURL=accordiondemo.module.chunk.js.map