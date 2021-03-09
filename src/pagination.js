export default function pagination() {
  //Desktop Pagination
  const ClassName = "kpPagination__link",
    DisableClassName = "-disabled",
    currentClassName = "-active";
  const pagingnationWrapper = document.getElementById("pagingDiv"),
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
    let listValue = "";
    const wholeValue = PageUrl,
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
            listValue = listValue + "<li class='" + listDiv + " -page " + currentClassName + "'><a href='#'";
            listValue = listValue + "' class='" + ClassName + "'>" + i + "</a></li>";
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
      if ((+PageNumber) < TotalPages) {
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
      if ((+PageNumber - 4) >= 1) {
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
      if ((+PageNumber + 3) < TotalPages && +PageNumber >= 5) {
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
      if ((+PageNumber + 3) > TotalPages) {
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
      if ((+PageNumber + 3) < TotalPages) {
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
    return (listValue);
  }
  //Mobile dropdown
  function PagingMobile(PageNumber, PageSize, TotalRecords, PageUrl) {
    var wholeValue = PageUrl;
    let selectValue = "";
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
    if ((+PageNumber) < TotalPages) {
      selectValue = selectValue + "<option class='" + optionDiv + "' value='";
      selectValue = selectValue;
      selectValue = selectValue + linkUrl + ".html" + "' class='" + ClassName + "'>" + TotalPages + "</option>";
    } else if (+PageNumber === TotalPages) {
      selectValue = selectValue;
    }
    return (selectValue);
  }
  // Next Button Function
  function nextButton(PageNumber, PageSize, TotalRecords, PageUrl) {
    let ReturnValue = "";
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
    return (ReturnValue);
  }
  // Prev Button Function
  function prevButton(PageNumber, PageUrl) {
    let ReturnValue = "";
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
    return (ReturnValue);
  }
  // Prev Button Function
  function mobileEventListner() {
    pagingMobileDiv.addEventListener('change', function() {
      if (this.selectedIndex !== 0) {
        window.location.href = this.value;
      }
    });
  }

  function paginationMobileCount(PageSize, TotalRecords) {
    const TotalPages = Math.ceil(TotalRecords / PageSize);
    const lastPage = TotalPages;
    let pageCountResult = '';
    pageCountResult = '<span class="kpPagination__toIndex">  of ' + lastPage + ' pages </span>';
    pagingnationMobileCounter.innerHTML = pageCountResult;
  }

  function GetParameterByName() {
    var url = window.location.href;
    const name = url.match(/[\w-]+\.(html)/g, "\\$&"),
      output = name.toString();
    if (!output) {
      return null;
    }
    return parseInt(output, 10);
  }

  function paginationCountInit(pageNumber, PageSize, TotalRecords) {
    const end = PageSize * pageNumber,
      TotalPages = Math.ceil(TotalRecords / PageSize),
      counterWrapper = "<span class='kpPagination__fromIndex'>",
      counterTotal = ' of <span class="kpPagination__totalItems">' + TotalRecords + '</span> items</p>',
      begin = pageNumber - 1,
      start = (begin * PageSize) + 1;
    let pageCountResult = '';
    if (isNaN(pageNumber)) {
      pageCountResult = '<p>' + counterWrapper;
      pageCountResult = pageCountResult + 1 + '</span> - ' + counterWrapper + 10 + '</span>' + counterTotal;
    }    else if  (pageNumber === TotalPages) {
      console.log('last page');
      pageCountResult = '<p>' + counterWrapper;
      pageCountResult = pageCountResult + start + '</span> - ' + counterWrapper + TotalRecords + '</span>' + counterTotal;
    }
    else {
      pageCountResult = '<p>' + counterWrapper;
      pageCountResult = pageCountResult + start + '</span> - ' + counterWrapper + end + '</span>' + counterTotal;
    }
    pagingnationCounter.innerHTML = pageCountResult;
  }

  function paginationInit(pageNumber) {
    const Pagetotal = parseInt(pagingnationWrapper.getAttribute('data-total'), 10),
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
    const wholeValue = pagingnationWrapper.getAttribute('data-url'),
      pageNumber = GetParameterByName(wholeValue);
    if (isNaN(pageNumber)) {
      paginationInit(1);
    } else {
      paginationInit(pageNumber);
    }
  }
}