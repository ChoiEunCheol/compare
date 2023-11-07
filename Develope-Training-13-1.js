const fs = require("fs");
const path = require("path");

const isTxtFile = (fileName) => {
  let result = path.extname(fileName).toLowerCase() === ".txt";
  return result;
};
//extname : 파일의 확장자 반환
//toLowerCase : 소문자로 변환

const compareFile = (operator, operand) => {
  try {
    if (!isTxtFile(operator) || !isTxtFile(operand)) {
      console.error("둘 다 txt파일이 아닙니다.");
      return false;
    }

    const filePathOperator = path.join(__dirname, operator);
    const filePathOperand = path.join(__dirname, operand);

    const dataOperator = fs.readFileSync(filePathOperator, "utf-8");
    const dataOperand = fs.readFileSync(filePathOperand, "utf-8");

    let isResult = dataOperator === dataOperand;

    return isResult;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const areFilesEqual = compareFile('operator.txt','operand.txt');
console.log(areFilesEqual);