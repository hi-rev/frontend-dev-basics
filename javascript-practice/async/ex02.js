const myAsyncFn02 = function(param) {
    return new Promise(function(resolve, reject) {
        
        // 비동기 코드
        // 파일 시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout
        
        setTimeout(function() {
            if (param === 'data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    })
}

// module.main == module: 단독으로 실행할 때만 실행됨
if (require.main == module) {
    // test01: success
    myAsyncFn02("data")
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.error(error);
        });

    console.log("wait.....");
}

module.exports = myAsyncFn02;