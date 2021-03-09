import pagination from './pagination';

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    pagination();
  }
}
