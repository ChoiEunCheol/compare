const fs = require("fs");
const path = require("path");

class FileComparator {
  constructor(operator, operand) {
    this.operator = operator;
    this.operand = operand;
  }

  isTxtFile(fileName) {
    return path.extname(fileName).toLowerCase() === ".txt";
  }

  compare() {
    try {
      if (!this.isTxtFile(this.operator) || !this.isTxtFile(this.operand)) {
        console.error("둘 다 txt파일이 아닙니다.");
        return false;
      }

      const filePathOperator = path.join(__dirname, operator);
      const filePathOperand = path.join(__dirname, operand);

      const dataOperator = fs.readFileSync(filePathOperator, "utf-8");
      const dataOperand = fs.readFileSync(filePathOperand, "utf-8");

      return dataOperator === dataOperand;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const comparator = new FileComparator('operator.txt', 'operand.txt');
const areFileEqual = comparator.compare();
console.log(areFileEqual);