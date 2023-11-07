const fs = require('fs');
const path = require('path');

const isTxtFile = (fileName) => {
    let result = path.extname(fileName).toLowerCase() === '.txt';
    return result;
}
//extname : 파일의 확장자 반환
//toLowerCase : 소문자로 변환