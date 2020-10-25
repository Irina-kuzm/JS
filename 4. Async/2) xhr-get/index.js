function xhrGet(url) {




  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  xhr.onload = function() {
  return (`status ${xhr.status}`);
};

xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
  return (`Ошибка соединения`);
};

}


window.xhrGet = xhrGet;

export default xhrGet;
