/**
 * URL 다루기
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: URL 전부를 Encoding, 사용(X), deplecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURL: URL 전체 중 파라미터 encoding 한다. url 전체를 encoding 해야하는 경우 사용(O)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURLComponent: url 전체를 encoding 해야하는 경우 사용(X) 값만 Encoding 해야하는 경우, 사용(O)
var url4 = encodeURIComponent(url);
console.log(url4);

// 4.
// 만들어야 할 URL
// "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com"
var url = "http://www.mysite.com/user"
var formData = {
    name: "둘리",
    email: "dooly@gmail.com"
}

var toQueryString = function(o) {
    var qs = [];
    for (prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]))
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));
