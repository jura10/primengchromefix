webpackJsonp(["dataviewdemo.module"],{

/***/ "./src/app/components/dataview/dataview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataView */
/* unused harmony export DataViewLayoutOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_objectutils__ = __webpack_require__("./src/app/components/utils/objectutils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginator_paginator__ = __webpack_require__("./src/app/components/paginator/paginator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataView = (function () {
    function DataView(el, objectUtils) {
        this.el = el;
        this.objectUtils = objectUtils;
        this.layout = 'list';
        this.pageLinks = 5;
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.emptyMessage = 'No records found';
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.trackBy = function (index, item) { return item; };
        this.loadingIcon = 'fa fa-spin fa-2x fa-circle-o-notch';
        this.onPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSort = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.first = 0;
        this._sortOrder = 1;
    }
    DataView.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    };
    Object.defineProperty(DataView.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataView.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        },
        enumerable: true,
        configurable: true
    });
    DataView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'listItem':
                    _this.listItemTemplate = item.template;
                    break;
                case 'gridItem':
                    _this.gridItemTemplate = item.template;
                    break;
            }
        });
        this.updateItemTemplate();
    };
    DataView.prototype.updateItemTemplate = function () {
        switch (this.layout) {
            case 'list':
                this.itemTemplate = this.listItemTemplate;
                break;
            case 'grid':
                this.itemTemplate = this.gridItemTemplate;
                break;
        }
    };
    Object.defineProperty(DataView.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.updateTotalRecords();
        },
        enumerable: true,
        configurable: true
    });
    DataView.prototype.changeLayout = function (layout) {
        this.layout = layout;
        this.updateItemTemplate();
    };
    DataView.prototype.updateTotalRecords = function () {
        this.totalRecords = this.lazy ? this.totalRecords : (this._value ? this._value.length : 0);
    };
    DataView.prototype.paginate = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    };
    DataView.prototype.sort = function () {
        var _this = this;
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else if (this.value) {
            this.value.sort(function (data1, data2) {
                var value1 = _this.objectUtils.resolveFieldData(data1, _this.sortField);
                var value2 = _this.objectUtils.resolveFieldData(data2, _this.sortField);
                var result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (_this.sortOrder * result);
            });
        }
        this.onSort.emit({
            sortField: this.sortField,
            sortOrder: this.sortOrder
        });
    };
    DataView.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    DataView.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows
        };
    };
    DataView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    DataView.prototype.filter = function (value) {
        if (this.value && this.value.length) {
            var searchFields = this.filterBy.split(',');
            this.filteredValue = this.objectUtils.filter(this.value, searchFields, value);
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataView.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataView.prototype, "totalRecords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataView.prototype, "pageLinks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], DataView.prototype, "rowsPerPageOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "paginatorPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "alwaysShowPaginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataView.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "lazy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "emptyMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DataView.prototype, "onLazyLoad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataView.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], DataView.prototype, "trackBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "filterBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataView.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataView.prototype, "loadingIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DataView.prototype, "onPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DataView.prototype, "onSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */]),
        __metadata("design:type", Object)
    ], DataView.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* Footer */]),
        __metadata("design:type", Object)
    ], DataView.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], DataView.prototype, "templates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DataView.prototype, "sortField", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataView.prototype, "sortOrder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataView.prototype, "value", null);
    DataView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-dataView',
            template: "\n        <div [ngClass]=\"{'ui-dataview ui-widget': true, 'ui-dataview-list': (layout === 'list'), 'ui-dataview-grid': (layout === 'grid')}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-dataview-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-dataview-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'fa fa-spin fa-2x ' + loadingIcon\"></i>\n            </div>\n            <div class=\"ui-dataview-header ui-widget-header ui-corner-top\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-top\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            <div class=\"ui-dataview-content ui-widget-content\">\n                <div class=\"ui-g\">\n                    <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"paginator ? ((filteredValue||value) | slice:(lazy ? 0 : first):((lazy ? 0 : first) + rows)) : (filteredValue||value)\" [ngForTrackBy]=\"trackBy\">\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: rowData, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n                    <div *ngIf=\"isEmpty()\" class=\"ui-widget-content ui-g-12\">{{emptyMessage}}</div>\n                </div>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            <div class=\"ui-dataview-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__utils_objectutils__["a" /* ObjectUtils */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__utils_objectutils__["a" /* ObjectUtils */]])
    ], DataView);
    return DataView;
}());

var DataViewLayoutOptions = (function () {
    function DataViewLayoutOptions(dv) {
        this.dv = dv;
    }
    DataViewLayoutOptions.prototype.changeLayout = function (event, layout) {
        this.dv.changeLayout(layout);
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataViewLayoutOptions.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataViewLayoutOptions.prototype, "styleClass", void 0);
    DataViewLayoutOptions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-dataViewLayoutOptions',
            template: "\n        <div [ngClass]=\"'ui-dataview-layout-options ui-selectbutton ui-buttonset'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <a href=\"#\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'list')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'list'}\">\n                <i class=\"fa fa-bars ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a><a href=\"#\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'grid')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'grid'}\">\n                <i class=\"fa fa-th-large ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [DataView])
    ], DataViewLayoutOptions);
    return DataViewLayoutOptions;
}());

var DataViewModule = (function () {
    function DataViewModule() {
    }
    DataViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__common_shared__["g" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__paginator_paginator__["a" /* PaginatorModule */]],
            exports: [DataView, __WEBPACK_IMPORTED_MODULE_3__common_shared__["g" /* SharedModule */], DataViewLayoutOptions],
            declarations: [DataView, DataViewLayoutOptions]
        })
    ], DataViewModule);
    return DataViewModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dataview/dataviewdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataViewDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataviewdemo__ = __webpack_require__("./src/app/showcase/components/dataview/dataviewdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataViewDemoRoutingModule = (function () {
    function DataViewDemoRoutingModule() {
    }
    DataViewDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dataviewdemo__["a" /* DataViewDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], DataViewDemoRoutingModule);
    return DataViewDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dataview/dataviewdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataView</span>\r\n        <span>DataView displays data in grid or list layout with pagination, sorting and filtering features.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataView #dv [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\" paginatorPosition=\"both\" filterBy=\"brand\"\r\n        [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'140px'}\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n                        <div style=\"position:relative\">\r\n                            <input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\r\n                        <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"listItem\">\r\n            <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\r\n                <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-8 car-details\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\"><b>{{car.vin}}</b></div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\"><b>{{car.year}}</b></div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\"><b>{{car.brand}}</b></div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\"><b>{{car.color}}</b></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-1 search-icon\">\r\n                    <button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCar($event, car)\"></button>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-car pTemplate=\"gridItem\">\r\n            <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\r\n                <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\">\r\n                    <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\r\n                    <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n                    <button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCar($event, car)\" style=\"margin-top:0\"></button>\r\n                </p-panel>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataView>\r\n\r\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [minY]=\"70\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\">\r\n        <div class=\"ui-g\" *ngIf=\"selectedCar\">\r\n            <div class=\"ui-g-12\" style=\"text-align:center\">\r\n                <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\">\r\n            </div>\r\n            <div class=\"ui-g-4\">Vin: </div>\r\n            <div class=\"ui-g-8\">{{selectedCar.vin}}</div>\r\n\r\n            <div class=\"ui-g-4\">Brand: </div>\r\n            <div class=\"ui-g-8\">{{selectedCar.brand}}</div>\r\n\r\n            <div class=\"ui-g-4\">Year: </div>\r\n            <div class=\"ui-g-8\">{{selectedCar.year}}</div>\r\n\r\n            <div class=\"ui-g-4\">Color: </div>\r\n            <div class=\"ui-g-8\">{{selectedCar.color}}</div>\r\n        </div>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DataViewModule&#125; from 'primeng/dataview';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid.</p>\r\n\r\n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Injectable&#125; from 'angular2/core';\r\nimport &#123;Http, Response&#125; from 'angular2/http';\r\nimport &#123;Car&#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCarsLarge() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-large.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataViewDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Layouts</h3>\r\n            <p>DataView has two layout modes; \"list\" and \"grid\" where a separate template is used to render an item in each mode. In list mode name of the template is \"listItem\" whereas\r\n                in grid mode it is \"gridItem\". In grid mode, the ng-template element should contain a div element as a wrapper with <a [routerLink]=\"['/grid']\">Grid CSS</a> style class of your choice.</p>\r\n            <p>Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Sections</h3>\r\n            <p>Header and Footer are the two sections that are capable of displaying custom content.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>DataViewLayoutOptions</h3>\r\n            <p>When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. p-dataViewLayoutOptions is a helper component\r\n                to display a buttonset to choose the layout mode in DataView. Location of the p-dataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element\r\n                you can create your own that updates the layout property of the DataView.\r\n            </p>\r\n\r\n            <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;p-dataViewLayoutOptions&gt;&lt;/p-dataViewLayoutOptions&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;p-dataViewLayoutOptions&gt;&lt;/p-dataViewLayoutOptions&gt;\r\n    &lt;/p-footer&gt;\r\n\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Paginator</h3>\r\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\r\n                of page links to display.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\" [paginator=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging happens. To implement lazy loading, enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object\r\n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\r\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\" [paginator=\"true\" [rows]=\"10\"\r\n    [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Sorting</h3>\r\n            <p>sortField and sortOrder properties are available for sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.\r\n                Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView [value]=\"cars\" [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\"\r\n            (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"&#123;'min-width':'15em'&#125;\"&gt;&lt;/p-dropdown&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div&gt;\r\n            &#123;&#123;car.id&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            &#123;&#123;car.year&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataViewSortDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    sortOptions: SelectItem[];\r\n\r\n    sortKey: string;\r\n\r\n    sortField: string;\r\n\r\n    sortOrder: number;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n\r\n        this.sortOptions = [\r\n            &#123;label: 'Newest First', value: '!year'&#125;,\r\n            &#123;label: 'Oldest First', value: 'year'&#125;,\r\n            &#123;label: 'Brand', value: 'brand'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    onSortChange(event) &#123;\r\n        let value = event.value;\r\n\r\n        if (value.indexOf('!') === 0) &#123;\r\n            this.sortOrder = -1;\r\n            this.sortField = value.substring(1, value.length);\r\n        &#125;\r\n        else &#123;\r\n            this.sortOrder = 1;\r\n            this.sortField = value;\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <h3>Filtering</h3>\r\n            <p>Filtering is implemented by defining the filterBy property and  calling the filter function of the component, for flexibility there is no built-in UI available so that a custom UI can be used for the filter element.\r\n                Here is an example that uses an input field. filterBy is a string and multiple fields can be defined with a comma separated list.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataView #dv [value]=\"cars\" filterBy=\"brand\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\"&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &#123;&#123;car.id&#125;&#125;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &#123;&#123;car.year&#125;&#125;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n</code>\r\n</pre>\r\n            <h3>Custom UI Elements</h3>\r\n            <p>As mentioned above, layout options selector, sorting and filtering are baked-in and no strict UI is enforces to make it possible to come up with your own UI elements\r\n                to enable these features.\r\n            </p>\r\n\r\n            <h3>Loading Status</h3>\r\n            <p>DataView has a loading property, when enabled a spinner icon is displayed to indicate data load.\r\n                An optional loadingIcon property can be passed in case you'd like a different loading icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataview [value]=\"cars\" [loading]=\"loading\"&gt;\r\n    //content\r\n&lt;/p-dataview&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>layout</td>\r\n                            <td>string</td>\r\n                            <td>list</td>\r\n                            <td>Layout of the items, valid values are \"list\" and \"grid\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginator</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified as true, enables the pagination.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>5</td>\r\n                            <td>Number of page links to display in paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorPosition</td>\r\n                            <td>string</td>\r\n                            <td>bottom</td>\r\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShowPaginator</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorDropdownAppendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>No records found.</td>\r\n                            <td>Text to display when there is no data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>trackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterBy</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Comma separated list of fields in the object graph to search against.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loading</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a loader to indicate data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-circle-o-notch</td>\r\n                            <td>The icon to show while indicating data load is in progress.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br></td>\r\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.first: Index of first record in page<br>\r\n                                event.rows: Number of rows on the page</td>\r\n                            <td>Callback to invoke when pagination occurs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSort</td>\r\n                            <td>event.field: Name of the sort field.<br>\r\n                                event.order: Order of the sort.</td>\r\n                            <td>Callback to invoke when sorting occurs.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-dataview</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dataview-header</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dataview-footer</td>\r\n                            <td>Footer section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dataview-content</td>\r\n                            <td>Container of items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-loading</td>\r\n                            <td>Loader mask.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-loading-content</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datagrid\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n    &lt;p-dataView #dv [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\" paginatorPosition=\"both\" filterBy=\"brand\"\r\n    [sortField]=\"sortField\" [sortOrder]=\"sortOrder\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;div class=\"ui-g\"&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n                    &lt;p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"&#123;'min-width':'15em'&#125;\"&gt;&lt;/p-dropdown&gt;\r\n                &lt;/div&gt;\r\n                &lt;div class=\"ui-g-6 ui-md-4 filter-container\"&gt;\r\n                    &lt;div style=\"position:relative\"&gt;\r\n                        &lt;input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\"&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt;\r\n                &lt;div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\"&gt;\r\n                    &lt;p-dataViewLayoutOptions&gt;&lt;/p-dataViewLayoutOptions&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"listItem\"&gt;\r\n        &lt;div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-8 car-details\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&lt;b&gt;&#123;&#123;car.vin&#125;&#125;&lt;/b&gt;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&lt;b&gt;&#123;&#123;car.year&#125;&#125;&lt;/b&gt;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&lt;b&gt;&#123;&#123;car.brand&#125;&#125;&lt;/b&gt;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&lt;b&gt;&#123;&#123;car.color&#125;&#125;&lt;/b&gt;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-1 search-icon\"&gt;\r\n                &lt;button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCar($event, car)\"&gt;&lt;/button&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"gridItem\"&gt;\r\n        &lt;div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\"&gt;\r\n            &lt;p-panel [header]=\"car.vin\" [style]=\"&#123;'text-align':'center'&#125;\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" width=\"60\"&gt;\r\n                &lt;div class=\"car-detail\"&gt;&#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;hr class=\"ui-widget-content\" style=\"border-top:0\"&gt;\r\n                &lt;button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCar($event, car)\" style=\"margin-top:0\"&gt;&lt;/button&gt;\r\n            &lt;/p-panel&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataView&gt;\r\n\r\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\"&gt;\r\n    &lt;div class=\"ui-g\" *ngIf=\"selectedCar\"&gt;\r\n        &lt;div class=\"ui-g-12\" style=\"text-align:center\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;selectedCar.brand&#125;&#125;.png\"&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;Vin: &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;&#123;&#123;selectedCar.vin&#125;&#125;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-4\"&gt;Brand: &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;&#123;&#123;selectedCar.brand&#125;&#125;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-4\"&gt;Year: &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;&#123;&#123;selectedCar.year&#125;&#125;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-4\"&gt;Color: &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;&#123;&#123;selectedCar.color&#125;&#125;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataViewDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar: Car;\r\n\r\n    displayDialog: boolean;\r\n\r\n    sortOptions: SelectItem[];\r\n\r\n    sortKey: string;\r\n\r\n    sortField: string;\r\n\r\n    sortOrder: number;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n\r\n        this.sortOptions = [\r\n            &#123;label: 'Newest First', value: '!year'&#125;,\r\n            &#123;label: 'Oldest First', value: 'year'&#125;,\r\n            &#123;label: 'Brand', value: 'brand'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    selectCar(event: Event, car: Car) &#123;\r\n        this.selectedCar = car;\r\n        this.displayDialog = true;\r\n        event.preventDefault();\r\n    &#125;\r\n\r\n    onSortChange(event) &#123;\r\n        let value = event.value;\r\n\r\n        if (value.indexOf('!') === 0) &#123;\r\n            this.sortOrder = -1;\r\n            this.sortField = value.substring(1, value.length);\r\n        &#125;\r\n        else &#123;\r\n            this.sortOrder = 1;\r\n            this.sortField = value;\r\n        &#125;\r\n    &#125;\r\n\r\n    onDialogHide() &#123;\r\n        this.selectedCar = null;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/dataview/dataviewdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewDemoModule", function() { return DataViewDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataviewdemo__ = __webpack_require__("./src/app/showcase/components/dataview/dataviewdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataviewdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/dataview/dataviewdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dataview_dataview__ = __webpack_require__("./src/app/components/dataview/dataview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__ = __webpack_require__("./src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog_dialog__ = __webpack_require__("./src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dropdown_dropdown__ = __webpack_require__("./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DataViewDemoModule = (function () {
    function DataViewDemoModule() {
    }
    DataViewDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__dataviewdemo_routing_module__["a" /* DataViewDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_dataview_dataview__["a" /* DataViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__["a" /* PanelModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_dropdown_dropdown__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dataviewdemo__["a" /* DataViewDemo */]
            ]
        })
    ], DataViewDemoModule);
    return DataViewDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dataview/dataviewdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataViewDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("./src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataViewDemo = (function () {
    function DataViewDemo(carService) {
        this.carService = carService;
    }
    DataViewDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsLarge().then(function (cars) { return _this.cars = cars; });
        this.sortOptions = [
            { label: 'Newest First', value: '!year' },
            { label: 'Oldest First', value: 'year' },
            { label: 'Brand', value: 'brand' }
        ];
    };
    DataViewDemo.prototype.selectCar = function (event, car) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    };
    DataViewDemo.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    DataViewDemo.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    DataViewDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/dataview/dataviewdemo.html"),
            styles: ["      \n        .ui-button { \n            margin-top: 3em;\n        }  \n\n        .filter-container {\n            text-align: center;\n        }\n\n        @media (max-width: 40em) {\n            .car-details, .search-icon {\n                text-align: center;\n                margin-top: 0;\n            }\n\n            .filter-container {\n                text-align: left;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DataViewDemo);
    return DataViewDemo;
}());



/***/ })

});
//# sourceMappingURL=dataviewdemo.module.chunk.js.map