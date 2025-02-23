"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktest_task_nilsen"] = self["webpackChunktest_task_nilsen"] || []).push([["src_pages_favorites_ui_FavoritesPage_FavoritesPage_tsx-src_entities_cat_ui_Cat_module_scss-sr-4ceea0"],{

/***/ "./src/pages/favorites/ui/FavoritesList/FavoritesList.module.scss":
/*!************************************************************************!*\
  !*** ./src/pages/favorites/ui/FavoritesList/FavoritesList.module.scss ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favorites-list\": () => (/* binding */ _1)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\nvar _1 = \"GcOa7xTN\";\n\n\n    if(true) {\n      (function() {\n        var localsJsonString = \"{\\\"favorites-list\\\":\\\"GcOa7xTN\\\"}\";\n        // 1740346786091\n        var cssReload = __webpack_require__(/*! ../../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/FavoritesList/FavoritesList.module.scss?");

/***/ }),

/***/ "./src/pages/favorites/ui/FavoritesList/FavoritesList.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/favorites/ui/FavoritesList/FavoritesList.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_lib_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames */ \"./src/shared/lib/classNames.ts\");\n/* harmony import */ var entities_cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/cat */ \"./src/entities/cat/index.ts\");\n/* harmony import */ var _FavoritesList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavoritesList.module.scss */ \"./src/pages/favorites/ui/FavoritesList/FavoritesList.module.scss\");\n/* harmony import */ var _NotFoundFavoriteCats_NotFoundFavoriteCats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NotFoundFavoriteCats/NotFoundFavoriteCats */ \"./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n/**\n * Интерфейс пропсов для компонента FavoritesList.\n */\n\n/**\n * Компонент FavoritesList отображает список избранных котиков.\n *\n * @param props.cats - Массив объектов ICat[], представляющих избранные котики.\n * @returns JSX-элемент со списком избранных котиков или сообщением об отсутствии данных.\n *\n * @remarks\n * Если массив cats пустой, отображается компонент NotFoundFavoriteCats.\n * Для каждого котика создаётся компонент Cat.\n */\n\nvar FavoritesList = function FavoritesList(props) {\n  var cats = props.cats;\n\n  /**\n   * Если список избранных котиков пуст, отображаем компонент NotFoundFavoriteCats.\n   */\n\n  if (!cats.length) {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NotFoundFavoriteCats_NotFoundFavoriteCats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {});\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: (0,shared_lib_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_FavoritesList_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"favorites-list\"]),\n    children: cats.map(function (cat) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(entities_cat__WEBPACK_IMPORTED_MODULE_2__.Cat, {\n        cat: cat\n      }, cat.id);\n    })\n  });\n};\n\n// Устанавливаем displayName для отладки\nFavoritesList.displayName = \"FavoritesList\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesList);\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/FavoritesList/FavoritesList.tsx?");

/***/ }),

/***/ "./src/pages/favorites/ui/FavoritesPage/FavoritesPage.module.scss":
/*!************************************************************************!*\
  !*** ./src/pages/favorites/ui/FavoritesPage/FavoritesPage.module.scss ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favorites-page\": () => (/* binding */ _1)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\nvar _1 = \"eT3DgWAU\";\n\n\n    if(true) {\n      (function() {\n        var localsJsonString = \"{\\\"favorites-page\\\":\\\"eT3DgWAU\\\"}\";\n        // 1740346785954\n        var cssReload = __webpack_require__(/*! ../../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/FavoritesPage/FavoritesPage.module.scss?");

/***/ }),

/***/ "./src/pages/favorites/ui/FavoritesPage/FavoritesPage.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/favorites/ui/FavoritesPage/FavoritesPage.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var shared_lib_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames */ \"./src/shared/lib/classNames.ts\");\n/* harmony import */ var _FavoritesPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavoritesPage.module.scss */ \"./src/pages/favorites/ui/FavoritesPage/FavoritesPage.module.scss\");\n/* harmony import */ var _FavoritesList_FavoritesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoritesList/FavoritesList */ \"./src/pages/favorites/ui/FavoritesList/FavoritesList.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n/**\n * Компонент FavoritesPage отображает страницу с избранными котиками.\n *\n * @remarks\n * Этот компонент извлекает список избранных котиков из localStorage и состояния Redux.\n * Если в состоянии Redux обновляется список избранных котиков, компонент перечитывает данные из localStorage.\n */\n\nvar FavoritesPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    favoritesCats = _useState2[0],\n    setFavoritesCats = _useState2[1];\n  var catsFromState = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {\n    return state.favorite.favoriteCats;\n  });\n\n  /**\n   * Эффект для чтения данных из localStorage при монтировании компонента\n   * или при изменении списка избранных котиков в состоянии Redux.\n   */\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // Обновляем состояние компонента\n    // Читаем данные из localStorage и парсим их как массив ICat[]\n    setFavoritesCats(JSON.parse(localStorage.getItem(\"favoriteCats\") || '[]'));\n  }, [catsFromState]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: (0,shared_lib_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_FavoritesPage_module_scss__WEBPACK_IMPORTED_MODULE_3__[\"favorites-page\"]),\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FavoritesList_FavoritesList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      cats: favoritesCats\n    })\n  });\n});\n\n// Устанавливаем displayName для отладки\nFavoritesPage.displayName = \"FavoritesPage\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/FavoritesPage/FavoritesPage.tsx?");

/***/ }),

/***/ "./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.module.scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.module.scss ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"not-found-container\": () => (/* binding */ _1),\n/* harmony export */   \"not-found-message\": () => (/* binding */ _2),\n/* harmony export */   \"not-found-title\": () => (/* binding */ _3)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\nvar _1 = \"KeCKeaxH\";\nvar _2 = \"a5gemPaJ\";\nvar _3 = \"QhTlROGF\";\n\n\n    if(true) {\n      (function() {\n        var localsJsonString = \"{\\\"not-found-container\\\":\\\"KeCKeaxH\\\",\\\"not-found-message\\\":\\\"a5gemPaJ\\\",\\\"not-found-title\\\":\\\"QhTlROGF\\\"}\";\n        // 1740346786172\n        var cssReload = __webpack_require__(/*! ../../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.module.scss?");

/***/ }),

/***/ "./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.tsx":
/*!******************************************************************************!*\
  !*** ./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotFoundFavoriteCats_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundFavoriteCats.module.scss */ \"./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.module.scss\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n/**\n * Компонент NotFoundFavoriteCats отображает сообщение о том,\n * что у пользователя нет любимых котиков.\n *\n * @returns JSX-элемент с сообщением об отсутствии любимых котиков.\n */\n\nvar NotFoundFavoriteCats = function NotFoundFavoriteCats() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    className: _NotFoundFavoriteCats_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"not-found-container\"],\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h2\", {\n      className: _NotFoundFavoriteCats_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"not-found-title\"],\n      children: \"\\u041D\\u0435\\u0442 \\u043B\\u044E\\u0431\\u0438\\u043C\\u044B\\u0445 \\u043A\\u043E\\u0448\\u0435\\u043A\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n      className: _NotFoundFavoriteCats_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"not-found-message\"],\n      children: \"\\u0412\\u044B \\u043F\\u043E\\u043A\\u0430 \\u043D\\u0435 \\u0434\\u043E\\u0431\\u0430\\u0432\\u0438\\u043B\\u0438 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043A\\u043E\\u0442\\u0430 \\u0432 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435.\"\n    })]\n  });\n};\n\n// Устанавливаем displayName для отладки\nNotFoundFavoriteCats.displayName = \"NotFoundFavoriteCats\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundFavoriteCats);\n\n//# sourceURL=webpack://test-task-nilsen/./src/pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats.tsx?");

/***/ })

}]);