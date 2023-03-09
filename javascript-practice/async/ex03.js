const fetch = require('./ex02'); // promise를 리턴하는 비동기함수

// click 핸들러 등등에 사용됨
const ex03 = async function(param) {
    try {    
        const data = await fetch(param);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}


ex03("data");
console.log("wait...");