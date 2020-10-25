



function queryToObject(query) {

   var params = query.substr(1).split('&');
   var dict = {}, i, param;
   if (params !== "") {
        for (i = 0; i < params.length; i += 1) {
            param = params[i].split('=');          // преобразуем ключ=значение в массив [ключ,значение]
            if (param.length === 2) {
                dict[param[0]] =
                    decodeURIComponent(param[1].replace(/\+/g, " ")); // декодируем значение параметра, походу преобразуя все знаки + в пробелы
            }
        }
    }
    return dict;

};

window.queryToObject = queryToObject;

export default queryToObject;
