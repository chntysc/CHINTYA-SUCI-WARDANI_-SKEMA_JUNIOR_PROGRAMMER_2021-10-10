//create calculator
class Calculator {
    //take all input and the display it
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }
    //clearing all number and operation on display calcu
    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined
    }
    //operation using percentages
    persen(){
        let calculate
        const currentt = parseFloat(this.currentOperand)
        calculate = currentt / 100
        this.calculate=calculate
        this.currentOperand=this.calculate
    }
    //append number on calculator
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        
    }
    //choosing operator
    chooseOperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand !==''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand=''

    }
    //math operation
    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev -current
                break
            case 'x':
                computation = prev * current
                break
            case '÷':
                computation = prev/ current
                break
            default:
                return
        }
        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand = ''
    }
    //update display on calculator screen
    updateDisplay(){
        
        this.currentOperandText.innerText = this.currentOperand
        if (this.operation !=null){
            this.previousOperandText.innerText=
            `${this.previousOperand} ${this.operation}`
        } else{
            this.previousOperandText.innerText =''
        }

    }
}
//create variable
const numbersButton = document.querySelectorAll('[data-number]')
const operators = document.querySelectorAll('[data-operation]')
const equalOperator =document.querySelector('[data-equal]')

//single element input using .querySelector
const allClear =document.querySelector('[all-clear]')
const persenButton=document.querySelector('[data-persen]')
const previousOperandText =document.querySelector('[data-previous-operand]')
const currentOperandText =document.querySelector('[data-current-operand]')

// call calculator class
const calculator = new Calculator(previousOperandText,currentOperandText)

//input and display number
numbersButton.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operators.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalOperator.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})
allClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
persenButton.addEventListener('click', button => {
    calculator.persen()
    calculator.updateDisplay()
  })

// saya mencoba calculator ini dengan melakukan beberapa operasi 
// seperti penjumlahan, pengurang, pembagian, dan perkalian
// semuanya berjalan lancar baik bahkan untuk nilai float
// persen pada program ini bekerja dengan langsung mengalikan 
// bilangan dengan 1/100 