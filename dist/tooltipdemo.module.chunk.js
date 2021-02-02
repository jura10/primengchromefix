webpackJsonp(["tooltipdemo.module"],{

/***/ "./src/app/components/tooltip/tooltip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tooltip */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tooltip = (function () {
    function Tooltip(el, domHandler, zone) {
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    Tooltip.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.tooltipEvent === 'hover') {
                _this.mouseEnterListener = _this.onMouseEnter.bind(_this);
                _this.mouseLeaveListener = _this.onMouseLeave.bind(_this);
                _this.clickListener = _this.onClick.bind(_this);
                _this.el.nativeElement.addEventListener('mouseenter', _this.mouseEnterListener);
                _this.el.nativeElement.addEventListener('mouseleave', _this.mouseLeaveListener);
                _this.el.nativeElement.addEventListener('click', _this.clickListener);
            }
            else if (_this.tooltipEvent === 'focus') {
                _this.focusListener = _this.onFocus.bind(_this);
                _this.blurListener = _this.onBlur.bind(_this);
                _this.el.nativeElement.addEventListener('focus', _this.focusListener);
                _this.el.nativeElement.addEventListener('blur', _this.blurListener);
            }
        });
    };
    Tooltip.prototype.onMouseEnter = function (e) {
        if (!this.container && !this.showTimeout) {
            this.activate();
        }
    };
    Tooltip.prototype.onMouseLeave = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onFocus = function (e) {
        this.activate();
    };
    Tooltip.prototype.onBlur = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onClick = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.activate = function () {
        var _this = this;
        this.active = true;
        this.clearHideTimeout();
        if (this.showDelay)
            this.showTimeout = setTimeout(function () { _this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            var duration = this.showDelay ? this.life + this.showDelay : this.life;
            this.hideTimeout = setTimeout(function () { _this.hide(); }, duration);
        }
    };
    Tooltip.prototype.deactivate = function () {
        var _this = this;
        this.active = false;
        this.clearShowTimeout();
        if (this.hideDelay) {
            this.clearHideTimeout(); //life timeout
            this.hideTimeout = setTimeout(function () { _this.hide(); }, this.hideDelay);
        }
        else {
            this.hide();
        }
    };
    Object.defineProperty(Tooltip.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (this.active) {
                if (this._text) {
                    if (this.container && this.container.offsetParent)
                        this.updateText();
                    else
                        this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.create = function () {
        this.container = document.createElement('div');
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            this.domHandler.appendChild(this.container, this.el.nativeElement);
        else
            this.domHandler.appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    };
    Tooltip.prototype.show = function () {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        this.domHandler.fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    };
    Tooltip.prototype.hide = function () {
        this.remove();
    };
    Tooltip.prototype.updateText = function () {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    };
    Tooltip.prototype.align = function () {
        var position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    };
    Tooltip.prototype.getHostOffset = function () {
        if (this.appendTo === 'body' || this.appendTo === 'target') {
            var offset = this.el.nativeElement.getBoundingClientRect();
            var targetLeft = offset.left + this.domHandler.getWindowScrollLeft();
            var targetTop = offset.top + this.domHandler.getWindowScrollTop();
            return { left: targetLeft, top: targetTop };
        }
        else {
            return { left: 0, top: 0 };
        }
    };
    Tooltip.prototype.alignRight = function () {
        this.preAlign('right');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + this.domHandler.getOuterWidth(this.el.nativeElement);
        var top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignLeft = function () {
        this.preAlign('left');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left - this.domHandler.getOuterWidth(this.container);
        var top = hostOffset.top + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignTop = function () {
        this.preAlign('top');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        var top = hostOffset.top - this.domHandler.getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignBottom = function () {
        this.preAlign('bottom');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        var top = hostOffset.top + this.domHandler.getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.preAlign = function (position) {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
        var defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
        this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
    };
    Tooltip.prototype.isOutOfBounds = function () {
        var offset = this.container.getBoundingClientRect();
        var targetTop = offset.top;
        var targetLeft = offset.left;
        var width = this.domHandler.getOuterWidth(this.container);
        var height = this.domHandler.getOuterHeight(this.container);
        var viewport = this.domHandler.getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    };
    Tooltip.prototype.onWindowResize = function (e) {
        this.hide();
    };
    Tooltip.prototype.bindDocumentResizeListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.resizeListener = _this.onWindowResize.bind(_this);
            window.addEventListener('resize', _this.resizeListener);
        });
    };
    Tooltip.prototype.unbindDocumentResizeListener = function () {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    };
    Tooltip.prototype.unbindEvents = function () {
        if (this.tooltipEvent === 'hover') {
            this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
            this.el.nativeElement.removeEventListener('click', this.clickListener);
        }
        else if (this.tooltipEvent === 'focus') {
            this.el.nativeElement.removeEventListener('focus', this.focusListener);
            this.el.nativeElement.removeEventListener('blur', this.blurListener);
        }
        this.unbindDocumentResizeListener();
    };
    Tooltip.prototype.remove = function () {
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                this.domHandler.removeChild(this.container, this.appendTo);
        }
        this.unbindDocumentResizeListener();
        this.clearTimeouts();
        this.container = null;
    };
    Tooltip.prototype.clearShowTimeout = function () {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    };
    Tooltip.prototype.clearHideTimeout = function () {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    };
    Tooltip.prototype.clearTimeouts = function () {
        this.clearShowTimeout();
        this.clearHideTimeout();
    };
    Tooltip.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Tooltip.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "positionStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipStyleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("tooltipDisabled"),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "escape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "showDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "hideDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "life", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('pTooltip'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Tooltip.prototype, "text", null);
    Tooltip = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pTooltip]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], Tooltip);
    return Tooltip;
}());

var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [Tooltip],
            declarations: [Tooltip]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("./src/app/showcase/components/tooltip/tooltipdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TooltipDemoRoutingModule = (function () {
    function TooltipDemoRoutingModule() {
    }
    TooltipDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], TooltipDemoRoutingModule);
    return TooltipDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Tooltip</span>\r\n        <span>Tooltip provides advisory information for a component.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Positions</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\">                \r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\">\r\n        </div>\r\n    </div>\r\n    \r\n    <h3>Focus and Blur</h3>\r\n    <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\">\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TooltipModule&#125; from 'primeng/tooltip';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Tooltip is applied to an element with pTooltip directive where the value of the directive defines the text to display.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pTooltip=\"Enter your username\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Position</h3>\r\n            <p>There are four choices to position the tooltip, default value is \"right\" and alternatives are \"top\", \"bottom\", \"left\". Position is \r\n            specified using tooltipPosition attribute.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Events</h3>\r\n            <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Delay</h3>\r\n            <p>Tooltip is displayed or hidden instantly by default however you may add delays using showDelay and hideDelay properties which accept a number value in terms of milliseconds.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\" showDelay=\"1000\" hideDelay=\"500\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Scrolling Containers</h3>\r\n            <p>When placed inside a scrolling container like an overflown div, tooltip must be appended to another element that has\r\n                relative positioning instead of document body which is the default.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div #container style=\"display:inline-block;position:relative\"&gt;\r\n    &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" [appendTo]=\"container\"&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>pTooltip</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the tooltip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tooltipPosition</td>\r\n                            <td>string</td>\r\n                            <td>right</td>\r\n                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tooltipEvent</td>\r\n                            <td>string</td>\r\n                            <td>hover</td>\r\n                            <td>Event to show the tooltip, valid values are hover and focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>positionStyle</td>\r\n                            <td>string</td>\r\n                            <td>absolute</td>\r\n                            <td>Type of CSS position.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tooltipDisabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>string</td>\r\n                            <td>any</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\", \"target\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideDelay</td>\r\n                            <td>null</td>\r\n                            <td>number</td>\r\n                            <td>Delay to hide the tooltip in milliseconds.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showDelay</td>\r\n                            <td>null</td>\r\n                            <td>number</td>\r\n                            <td>Delay to show the tooltip in milliseconds.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>life</td>\r\n                            <td>null</td>\r\n                            <td>number</td>\r\n                            <td>Time to wait in milliseconds to hide the tooltip even it is active.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tooltipStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the tooltip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>escape</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tooltipZIndex</td>\r\n                            <td>string</td>\r\n                            <td>auto</td>\r\n                            <td>Whether the z-index should be managed automatically to always go on top or have a fixed value.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-tooltip</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tooltip-arrow</td>\r\n                            <td>Arrow of the tooltip</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tooltip-text</td>\r\n                            <td>Text of the tooltip</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tooltip\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Positions&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\"&gt;                \r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\"&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Focus and Blur&lt;/h3&gt;\r\n&lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\"&gt;\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("./src/app/showcase/components/tooltip/tooltipdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tooltip_tooltip__ = __webpack_require__("./src/app/components/tooltip/tooltip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TooltipDemoModule = (function () {
    function TooltipDemoModule() {
    }
    TooltipDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__["a" /* TooltipDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_tooltip_tooltip__["a" /* TooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */]
            ]
        })
    ], TooltipDemoModule);
    return TooltipDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipDemo = (function () {
    function TooltipDemo() {
    }
    TooltipDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/tooltip/tooltipdemo.html")
        })
    ], TooltipDemo);
    return TooltipDemo;
}());



/***/ })

});
//# sourceMappingURL=tooltipdemo.module.chunk.js.map