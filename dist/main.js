(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pagination-pattern"] = factory();
	else
		root["pagination-pattern"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pagination = __webpack_require__(1);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    (0, _pagination2.default)();
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pagination;
function pagination() {
  //Desktop Pagination
  var ClassName = "kpPagination__link",
      DisableClassName = "-disabled",
      currentClassName = "-active";
  var pagingnationWrapper = document.getElementById("pagingDiv"),
      pagingnationDesktopWrap = document.getElementById("pagination"),
      kpPagination = document.querySelector(".kpPagination"),
      pagingnationMobileWrapper = document.getElementById("pagingMobileDiv"),
      pagingnationNextWrapper = document.getElementById("pagingNextDiv"),
      pagingnationPrevWrapper = document.getElementById("pagingPrevDiv"),
      pagingnationCounter = document.getElementById("paginationCount"),
      pagingnationMobileCounter = document.getElementById("selectInfoMobile"),
      listDiv = " kpPagination__item";
  // desktop function
  function desktopPagination(PageNumber, PageSize, TotalRecords, PageUrl) {
    var listValue = "";
    var wholeValue = PageUrl,
        ellipsis = "<li class='kpPagination__item -ellipsis icon-more'><span class='screenreader-only'>ellipsis</span>",
        TotalPages = Math.ceil(TotalRecords / PageSize),
        linkUrl = wholeValue + "." + TotalPages;
    //conditional if total results are under 70
    if (TotalRecords <= 70) {
      for (var i = +PageNumber - 6; i <= +PageNumber; i++) {
        if (i === 1) {
          if (+PageNumber != i) {
            listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
            listValue = listValue + wholeValue + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
          } else {
            listValue = listValue + "<li class='" + listDiv + "'><a href='#' '>" + i + "</a></li>";
          }
        }
        if (i > 1) {
          if (+PageNumber != i) {
            listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
            listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
          } else {
            listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
            listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
          }
        }
      }
      for (var i = +PageNumber + 1; i <= +PageNumber + 6; i++) {
        if (i < TotalPages) {
          //upcoming pages
          if (+PageNumber != i) {
            listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
            listValue = listValue;
            listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
          } else {
            listValue = listValue + "<span  '>" + i + "</span>";
          }
        }
      }
      // Final Page 
      if (+PageNumber < TotalPages) {
        listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
        listValue = listValue;
        listValue = listValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</a></li>";
      } else if (+PageNumber === TotalPages) {
        listValue = listValue;
      } else {
        listValue = listValue + "<li class='" + listDiv + "'><a href='";
        listValue = listValue;
        listValue = listValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</a></li>";
      }
    } else {
      //conditional to show elipse in front after 5
      if (+PageNumber - 4 >= 1) {
        listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
        listValue = listValue + wholeValue + ".html" + "' class='" + ClassName + "'>" + "1</a></li>" + ellipsis;
      }
      //conditional to show no elipse in front after 4
      if (+PageNumber == 4) {
        listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
        listValue = listValue + wholeValue + ".html" + "' class='" + ClassName + "'>" + "1</a> </li>";
      } else {
        listValue = listValue;
      }
      //conditional counting for pages 4 and under
      if (+PageNumber < 5) {
        for (var i = +PageNumber - 2; i <= +PageNumber; i++) {
          if (i === 1) {
            if (+PageNumber != i) {
              listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
              listValue = listValue + wholeValue + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
            } else {
              listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
              listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
            }
          }
          if (i > 1) {
            if (+PageNumber != i) {
              if (+PageNumber < 5) {
                listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
                listValue = listValue + wholeValue + "." + i + ".html'" + "class='" + ClassName + "'>" + i + "</a></li>";
              } else {
                listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
                listValue = listValue + wholeValue + "." + i + ".html'" + "class='" + ClassName + "'>" + i + "</a></li>";
              }
            } else {
              listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
              listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
            }
          }
        }
        for (var i = +PageNumber + 1; i <= +PageNumber + 1; i++) {
          if (i < TotalPages) {
            //upcoming pages
            if (+PageNumber != i) {
              listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
              listValue = listValue;
              listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
            } else {
              listValue = listValue + "<span  '>" + i + "</span>";
            }
          }
        }
      }
      //conditional counting for pagination over 5
      if (+PageNumber + 3 < TotalPages && +PageNumber >= 5) {
        for (var i = +PageNumber - 1; i <= +PageNumber; i++) {
          if (+PageNumber != i) {
            listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
            listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
          } else {
            listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
            listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
          }
        }
        for (var i = +PageNumber + 1; i <= +PageNumber + 1; i++) {
          if (i < TotalPages) {
            //upcoming pages
            if (+PageNumber != i) {
              listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
              listValue = listValue;
              listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
            } else {
              listValue = listValue + "<span  '>" + i + "</span>";
            }
          }
        }
      }
      //conditional counting for the last 4 pages 
      // add in screenreader 
      if (+PageNumber + 3 > TotalPages) {
        for (var i = +PageNumber - 1; i <= +PageNumber; i++) {
          if (i > 1) {
            if (+PageNumber != i) {
              listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
              listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
            } else {
              listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
              listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
            }
          }
        }
        for (var i = +PageNumber + 1; i <= +PageNumber + 1; i++) {
          if (i < TotalPages) {
            //upcoming pages
            if (+PageNumber != i) {
              listValue = listValue + "<li class='" + listDiv + " -page'><a href='";
              listValue = listValue;
              listValue = listValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</a></li>";
            } else {
              listValue = listValue + "<span  '>" + i + "</span>";
            }
          }
        }
      }
      // Final Page 
      if (+PageNumber + 3 < TotalPages) {
        listValue = listValue + "</a> </li>" + ellipsis + " </li><li class='" + listDiv + " -end'><a href='";
        listValue = listValue;
        listValue = listValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</a></li>";
      } else if (+PageNumber === TotalPages) {
        listValue = listValue;
      } else {
        listValue = listValue + "<li class='" + listDiv + " -end'><a href='";
        listValue = listValue;
        listValue = listValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</a></li>";
      }
    }
    // Final Page 
    return listValue;
  }
  //Mobile dropdown
  function PagingMobile(PageNumber, PageSize, TotalRecords, PageUrl) {
    var wholeValue = PageUrl;
    var selectValue = "";
    var TotalPages = Math.ceil(TotalRecords / PageSize),
        optionDiv = "kpPagination__option",
        linkUrl = wholeValue + "." + TotalPages;
    for (var i = +PageNumber - TotalRecords; i <= +PageNumber; i++) {
      if (i === 1) {
        if (+PageNumber != i) {
          selectValue = selectValue + "<option class='" + optionDiv + "' value='";
          selectValue = selectValue + wholeValue + ".html" + "' class='" + ClassName + "'>" + i + "</option>";
        } else {
          selectValue = selectValue + "<option class='kpPagination__option'   '>" + i + "</option>";
        }
      }
      if (i > 1) {
        if (+PageNumber != i) {
          selectValue = selectValue + "<option class='" + optionDiv + "' value='";
          selectValue = selectValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</option>";
        } else {
          selectValue = selectValue + "<option class='" + optionDiv + " " + currentClassName + "' value='";
          selectValue = selectValue + i + "' selected><span  '>" + i + "</span>";
        }
      }
    }
    for (var i = +PageNumber + 1; i <= +PageNumber + TotalRecords; i++) {
      if (i < TotalPages) {
        //upcoming pages
        if (+PageNumber != i) {
          selectValue = selectValue + "<option class='" + optionDiv + "' value='";
          selectValue = selectValue;
          selectValue = selectValue + wholeValue + "." + i + ".html" + "' class='" + ClassName + "'>" + i + "</option>";
        } else {
          selectValue = selectValue + "<span  '>" + i + "</span>";
        }
      }
    }
    // Final Page 
    if (+PageNumber < TotalPages) {
      selectValue = selectValue + "<option class='" + optionDiv + "' value='";
      selectValue = selectValue;
      selectValue = selectValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</option>";
    } else if (+PageNumber === TotalPages) {
      selectValue = selectValue;
    }
    return selectValue;
  }
  // Next Button Function
  function nextButton(PageNumber, PageSize, TotalRecords, PageUrl) {
    var ReturnValue = "";
    var wholeValue = PageUrl,
        iconNext = "<span aria-hidden='true' role='presentation'><i class='icon-chevron-forward'></i></span>",
        disabledScreenReader = "<span class='screenreader-only'>Disabled next page, pagination last page</span>",
        TotalPages = Math.ceil(TotalRecords / PageSize);
    //Next Page Button
    if (+PageNumber < TotalPages) {
      ReturnValue = ReturnValue + "<a " + "class='" + ClassName + "' href='";
      ReturnValue = ReturnValue + wholeValue + "." + (+PageNumber + 1) + ".html'>" + iconNext + "</a>";
    } else {
      ReturnValue = ReturnValue + "<a " + "class='" + ClassName + " " + DisableClassName + "' href='#'";
      ReturnValue = ReturnValue + "tabindex='-1'>" + disabledScreenReader + iconNext + "</a>";
      pagingnationNextWrapper.classList.add(DisableClassName);
    }
    return ReturnValue;
  }
  // Prev Button Function
  function prevButton(PageNumber, PageUrl) {
    var ReturnValue = "";
    var wholeValue = PageUrl,
        iconPrev = "<span aria-hidden='true' role='presentation'><i class='icon-chevron-back'></i></span>",
        disabledScreenReader = "<span class='screenreader-only'>Disabled previous page, pagination first page</span>";
    if (+PageNumber > 1) {
      if (+PageNumber == 2) {
        ReturnValue = ReturnValue + "<a " + "class='" + ClassName + "' href='";
        ReturnValue = ReturnValue + wholeValue + ".html'>" + iconPrev + "</a>";
      } else {
        ReturnValue = ReturnValue + "<a " + "class='" + ClassName + "' href='";
        ReturnValue = ReturnValue + wholeValue + "." + (+PageNumber - 1) + ".html'>" + iconPrev + "</a>";
      }
    } else {
      ReturnValue = ReturnValue + "<a " + "class='" + ClassName + " " + DisableClassName + "' href='#'";
      ReturnValue = ReturnValue + "tabindex='-1'>" + disabledScreenReader + iconPrev + "</a>";
      pagingnationPrevWrapper.classList.add(DisableClassName);
    }
    // Final Page 
    return ReturnValue;
  }
  // Prev Button Function
  function mobileEventListner() {
    pagingMobileDiv.addEventListener('change', function () {
      if (this.selectedIndex !== 0) {
        window.location.href = this.value;
      }
    });
  }

  function paginationMobileCount(PageSize, TotalRecords) {
    var TotalPages = Math.ceil(TotalRecords / PageSize);
    var lastPage = TotalPages;
    var pageCountResult = '';
    pageCountResult = '<span class="kpPagination__toIndex">  of ' + lastPage + ' pages </span>';
    pagingnationMobileCounter.innerHTML = pageCountResult;
  }

  function GetParameterByName() {
    var url = window.location.href;
    var name = url.match(/[\w-]+\.(html)/g, "\\$&"),
        output = name.toString();
    if (!output) {
      return null;
    }
    return parseInt(output, 10);
  }

  function paginationCountInit(pageNumber, PageSize, TotalRecords) {
    var end = PageSize * pageNumber,
        TotalPages = Math.ceil(TotalRecords / PageSize),
        counterWrapper = "<span class='kpPagination__fromIndex'>",
        counterTotal = ' of <span class="kpPagination__totalItems">' + TotalPages + '</span> items</p>',
        begin = pageNumber - 1,
        start = begin * PageSize + 1;
    var pageCountResult = '';
    if (isNaN(pageNumber)) {
      pageCountResult = '<p>' + counterWrapper;
      pageCountResult = pageCountResult + 1 + '</span> - ' + counterWrapper + 10 + '</span>' + counterTotal;
    } else {
      pageCountResult = '<p>' + counterWrapper;
      pageCountResult = pageCountResult + start + '</span> - ' + counterWrapper + end + '</span>' + counterTotal;
    }
    pagingnationCounter.innerHTML = pageCountResult;
  }

  function paginationInit(pageNumber) {
    var Pagetotal = parseInt(pagingnationWrapper.getAttribute('data-total'), 10),
        wholeValue = pagingnationWrapper.getAttribute('data-url'),
        rowsPerPage = 10;
    var result = desktopPagination(pageNumber, rowsPerPage, Pagetotal, wholeValue);
    var mobileResult = PagingMobile(pageNumber, rowsPerPage, Pagetotal, wholeValue);
    var nextButtonResult = nextButton(pageNumber, rowsPerPage, Pagetotal, wholeValue);
    var prevButtonResult = prevButton(pageNumber, wholeValue);
    pagingnationDesktopWrap.innerHTML = result;
    pagingnationNextWrapper.innerHTML = nextButtonResult;
    pagingnationPrevWrapper.innerHTML = prevButtonResult;
    pagingnationMobileWrapper.innerHTML = mobileResult;
    paginationMobileCount(rowsPerPage, Pagetotal);
    paginationCountInit(pageNumber, rowsPerPage, Pagetotal);
    mobileEventListner();
  }
  if (kpPagination) {
    var wholeValue = pagingnationWrapper.getAttribute('data-url'),
        pageNumber = GetParameterByName(wholeValue);
    if (isNaN(pageNumber)) {
      paginationInit(1);
    } else {
      paginationInit(pageNumber);
    }
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map