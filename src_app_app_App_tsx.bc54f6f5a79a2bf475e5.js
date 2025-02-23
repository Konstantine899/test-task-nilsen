"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_task_nilsen"] = self["webpackChunktest_task_nilsen"] || []).push([["src_app_app_App_tsx"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(e, r, t) {\n  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r)) in e ? Object.defineProperty(e, r, {\n    value: t,\n    enumerable: !0,\n    configurable: !0,\n    writable: !0\n  }) : e[r] = t, e;\n}\n\n\n//# sourceURL=webpack://test-task-nilsen/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./src/app/app/App.tsx":
/*!*****************************!*\
  !*** ./src/app/app/App.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/development/chunk-IR6S3I6Y.mjs\");\n/* harmony import */ var widgets_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/navbar/Navbar */ \"./src/widgets/navbar/Navbar.tsx\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/app/styles/index.scss\");\n/* harmony import */ var shared_config_routeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/config/routeConfig */ \"./src/shared/config/routeConfig.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n    className: \"app\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(widgets_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {\n      children: Object.values(shared_config_routeConfig__WEBPACK_IMPORTED_MODULE_3__.routeConfig).map(function (_ref) {\n        var element = _ref.element,\n          path = _ref.path;\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n          element: element,\n          path: path\n        }, path);\n      })\n    })]\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://test-task-nilsen/./src/app/app/App.tsx?");

/***/ }),

/***/ "./src/app/styles/index.scss":
/*!***********************************!*\
  !*** ./src/app/styles/index.scss ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1740351329805\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-task-nilsen/./src/app/styles/index.scss?");

/***/ }),

/***/ "./src/pages/favorites/index.ts":
/*!**************************************!*\
  !*** ./src/pages/favorites/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavoritesPage: () => (/* reexport safe */ _ui_FavoritesPage_FavoritesPage_lazy__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageAsync)\n/* harmony export */ });\n/* harmony import */ var _ui_FavoritesPage_FavoritesPage_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/FavoritesPage/FavoritesPage.lazy */ \"./src/pages/favorites/ui/FavoritesPage/FavoritesPage.lazy.tsx\");\n\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/index.ts?");

/***/ }),

/***/ "./src/pages/favorites/ui/FavoritesPage/FavoritesPage.lazy.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/favorites/ui/FavoritesPage/FavoritesPage.lazy.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavoritesPageAsync: () => (/* binding */ FavoritesPageAsync),\n/* harmony export */   FavoritesPageLazy: () => (/* binding */ FavoritesPageLazy)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var widgets_page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/page-loader/PageLoader */ \"./src/widgets/page-loader/PageLoader.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n/**\n * Ленивая загрузка компонента FavoritesPage.\n *\n * @constant {React.LazyExoticComponent<React.ComponentType>} FavoritesPageLazy\n * @description Используется для ленивой загрузки страницы избранных котиков.\n */\n\nvar FavoritesPageLazy = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_entities_cat_index_ts\"), __webpack_require__.e(\"src_pages_favorites_ui_FavoritesPage_FavoritesPage_tsx-src_entities_cat_ui_Cat_module_scss-sr-4ceea0\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FavoritesPage */ \"./src/pages/favorites/ui/FavoritesPage/FavoritesPage.tsx\"));\n});\n\n/**\n * Асинхронная версия страницы избранных котиков с поддержкой заглушки во время загрузки.\n *\n * @function FavoritesPageAsync\n * @returns {JSX.Element} JSX-элемент, содержащий FavoritesPageLazy, обёрнутый в Suspense.\n *\n * @description\n * Компонент FavoritesPageAsync использует React.lazy и Suspense для реализации ленивой загрузки страницы избранных котиков.\n * В качестве заглушки используется компонент PageLoader, который отображается, пока FavoritesPage не загружен.\n */\n\nvar FavoritesPageAsync = function FavoritesPageAsync() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(widgets_page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}),\n    children: [\" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FavoritesPageLazy, {})]\n  });\n};\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/FavoritesPage/FavoritesPage.lazy.tsx?");

/***/ }),

/***/ "./src/pages/not-found/NotFoundPage.lazy.tsx":
/*!***************************************************!*\
  !*** ./src/pages/not-found/NotFoundPage.lazy.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotFoundPageAsync: () => (/* binding */ NotFoundPageAsync),\n/* harmony export */   NotFoundPageLazy: () => (/* binding */ NotFoundPageLazy)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var widgets_page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/page-loader/PageLoader */ \"./src/widgets/page-loader/PageLoader.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nvar NotFoundPageLazy = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"src_pages_not-found_NotFoundPage_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NotFoundPage */ \"./src/pages/not-found/NotFoundPage.tsx\"));\n});\nvar NotFoundPageAsync = function NotFoundPageAsync() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(widgets_page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}),\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NotFoundPageLazy, {})\n  });\n};\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/not-found/NotFoundPage.lazy.tsx?");

/***/ }),

/***/ "./src/pages/not-found/index.ts":
/*!**************************************!*\
  !*** ./src/pages/not-found/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotFoundPage: () => (/* reexport safe */ _NotFoundPage_lazy__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageAsync)\n/* harmony export */ });\n/* harmony import */ var _NotFoundPage_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundPage.lazy */ \"./src/pages/not-found/NotFoundPage.lazy.tsx\");\n\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/not-found/index.ts?");

/***/ }),

/***/ "./src/shared/config/routeConfig.tsx":
/*!*******************************************!*\
  !*** ./src/shared/config/routeConfig.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes),\n/* harmony export */   routeConfig: () => (/* binding */ routeConfig),\n/* harmony export */   routePath: () => (/* binding */ routePath)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pages_cats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/cats */ \"./src/pages/cats/index.ts\");\n/* harmony import */ var pages_favorites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/favorites */ \"./src/pages/favorites/index.ts\");\n/* harmony import */ var pages_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/not-found */ \"./src/pages/not-found/index.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n/**\n * Перечисление всех доступных маршрутов приложения.\n */\n\nvar AppRoutes = /*#__PURE__*/function (AppRoutes) {\n  AppRoutes[\"MAIN\"] = \"main\";\n  AppRoutes[\"FAVORITES\"] = \"favorites\";\n  AppRoutes[\"NOT_FOUND\"] = \"not_found\";\n  return AppRoutes;\n}({});\n\n/**\n * Маппинг маршрутов к их путям.\n */\nvar routePath = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, AppRoutes.MAIN, \"/\"), AppRoutes.FAVORITES, \"/favorites\"), AppRoutes.NOT_FOUND, \"*\");\n\n/**\n * Конфигурация маршрутов приложения.\n */\nvar routeConfig = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, AppRoutes.MAIN, {\n  path: routePath.main,\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(pages_cats__WEBPACK_IMPORTED_MODULE_2__.CatsPage, {})\n}), AppRoutes.FAVORITES, {\n  path: routePath.favorites,\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(pages_favorites__WEBPACK_IMPORTED_MODULE_3__.FavoritesPage, {})\n}), AppRoutes.NOT_FOUND, {\n  path: routePath.not_found,\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(pages_not_found__WEBPACK_IMPORTED_MODULE_4__.NotFoundPage, {})\n});\n\n//# sourceURL=webpack://test-task-nilsen/./src/shared/config/routeConfig.tsx?");

/***/ }),

/***/ "./src/widgets/navbar/Navbar.module.scss":
/*!***********************************************!*\
  !*** ./src/widgets/navbar/Navbar.module.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"active-link\": () => (/* binding */ _1),\n/* harmony export */   link: () => (/* binding */ _2),\n/* harmony export */   nav: () => (/* binding */ _3)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\nvar _1 = \"TVcKVqpa\";\nvar _2 = \"rt36Tn5B\";\nvar _3 = \"WQ_eG6HW\";\n\n\n    if(true) {\n      (function() {\n        var localsJsonString = \"{\\\"active-link\\\":\\\"TVcKVqpa\\\",\\\"link\\\":\\\"rt36Tn5B\\\",\\\"nav\\\":\\\"WQ_eG6HW\\\"}\";\n        // 1740351329792\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-task-nilsen/./src/widgets/navbar/Navbar.module.scss?");

/***/ }),

/***/ "./src/widgets/navbar/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/widgets/navbar/Navbar.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/development/chunk-IR6S3I6Y.mjs\");\n/* harmony import */ var shared_lib_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames */ \"./src/shared/lib/classNames.ts\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/widgets/navbar/Navbar.module.scss\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n/**\n * Компонент Navbar представляет меню навигации для приложения.\n *\n * @remarks\n * Содержит две ссылки: \"Все котики\" и \"Любимые котики\".\n * Использует NavLink для поддержки активного состояния ссылок.\n */\n\nvar Navbar = function Navbar() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"nav\", {\n    className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__.nav,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"ul\", {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {\n          to: \"/\",\n          className: function className(_ref) {\n            var isActive = _ref.isActive;\n            return (0,shared_lib_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__.link, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"active-link\"], isActive));\n          },\n          children: \"\\u0412\\u0441\\u0435 \\u043A\\u043E\\u0442\\u0438\\u043A\\u0438\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {\n          to: \"/favorites\",\n          className: function className(_ref2) {\n            var isActive = _ref2.isActive;\n            return (0,shared_lib_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__.link, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"active-link\"], isActive));\n          },\n          children: \"\\u041B\\u044E\\u0431\\u0438\\u043C\\u044B\\u0435 \\u043A\\u043E\\u0442\\u0438\\u043A\\u0438\"\n        })\n      })]\n    })\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://test-task-nilsen/./src/widgets/navbar/Navbar.tsx?");

/***/ })

}]);