function code(){
    class Calculator {
        // Constructor for the calculator that initialises the variables in their default state
        // This also then runs the power on sequence.
        constructor(totalNumber, currentNumber){
            this.total = totalNumber;
            this.current = currentNumber;
            this.lastButtonPressed = "";
            this.resetFlag = false;
            this.operationLock = false;
            this.powerOn();
        }

        powerOn(){
            // Sets the current value to blank and the total to zero in preparation for carrying
            // out any math.  Setting the current operation to undefined to ensure that the first
            // value entered into the calculator doesn't have a math operation carried out on it.
            // calcState is set to true to enable the buttons to send information into the class.
            calcState = true;
            display.text = "0";
            memoryNumber = 0;
            calc.memIcon.visible = false;
            this.current = "";
            this.total = 0;
            this.operation = undefined;
            this.lastButtonPressed = "";
            this.operationLock = false;
            calc.repIcon.visible = false;
            calc.errIcon.visible = false;
            this.operationDisplay();
        }

        buildNumber(num){
            // Checks if the number being sent in is a decimal point and checks to see if one has
            // been entered already, breaks out of the function if this is the case.
            if (this.current.toString().includes(".") && num === ".") return;
            // If the number length exceeds 8 characters (not counting the decimal point) then
            // prevent further entry.
            if (this.current.toString().includes(".") && this.current.length >= 9) return;
            // If the number length without a decimal point is 8 or more, then prevent further
            // character entry.
            if (this.current.length >= 8 && this.current.indexOf(".") === -1) return;
            // This builds the display number and updates the screen to reflect current input.
            this.current = this.current.toString() + num.toString();
            this.updateDisplay();
        }

        // Used to help with resetting the calculator after doing any repeating operations
        setLastButton(button){
            this.lastButtonPressed = button;
        }

        getLastButton(){
            return this.lastButtonPressed;
        }

        // Selects the operation to be carried out next, and if there is a value stored in the
        // total variable, then it will perform the calculation before setting the calculator up 
        // for the next value to be entered.
        setOperator(operation){
            // If nothing has been entered into the calculator yet this will just break from this function
            if (this.current === ""){
                this.operation = operation;
                this.operationDisplay();
                this.total = display.text;
                return;
            } 
            // Resets the operation lock if a different operand is selected.
            if (this.operationLock){
                this.total = "";
                this.operationLock = false;
                calc.repIcon.visible = false;
            }
            if (this.total !== ""){
                this.doMaths();
            }

            this.operation = operation;
            this.operationDisplay();
            this.total = display.text;
            this.current = "";
        }

        doMaths(){
            var result;
            // The total and current values need to be parsed as floats prior to carrying out
            // any maths otherwise the method will return NaN.
            const prev = parseFloat(this.total);
            const next = parseFloat(this.current);
            console.log(prev, next);
            if (isNaN(prev) || isNaN(next)) return;
            switch (this.operation) {
                case "+":
                    result = prev + next;
                    break;
                case "-":
                    result = prev - next;
                    break;
                case "/":
                    result = prev / next;
                    break;
                case "*":
                    result = prev * next;
                    break;
                default:
                    return;
            }
            // Set the current value to the result and clear total of any value prior to continuing
            // and then clear the operation in preparation for the next.
            display.text = this.limitResult(result);
            
            this.operation = undefined;
        }

        limitResult(num){
            var spliceSize = undefined;
            var stringNum = num.toString();
            if (stringNum.includes(".") && stringNum.length > 9){
                spliceSize = 9;
            };
            
            if (stringNum.length > 8 && stringNum.indexOf(".") === -1){
                spliceSize = 8;
            };
            
            if (spliceSize !== undefined){
                calc.errIcon.visible = true;
                calcState = false;
                return stringNum.slice(0, spliceSize);
            } else {
                return stringNum;
            }
        }

        // Clears the display of operand icons then checks if one has been selected and sets it
        // to be visible.
        operationDisplay(){
            divIcon.visible = false;
            mulIcon.visible = false;
            addIcon.visible = false;
            subIcon.visible = false;
            switch (this.operation) {
                case "+":
                    addIcon.visible = true;
                    break;
                case "-":
                    subIcon.visible = true;
                    break;
                case "/":
                    divIcon.visible = true;
                    break;
                case "*":
                    mulIcon.visible = true;
                    break;
                default:
                    return;
            }
        }

        // Similar to the doMaths function, however this needs to work in a slightly different way
        // due to the way the last value and next values need to interact (if a next value was provided)
        repeatOperation(){
            var result;
            const prev = parseFloat(this.total);
            // This checks to see if the user entered another value to the calculator after locking
            // in the operator. If they didn't then this will set the current value to that of the 
            // total value before carrying out the operation.
            if (this.current === ""){
                this.current = this.total;
            }
            const next = parseFloat(this.current);

            switch (this.operation) {
                case "+":
                    result = next + prev;
                    break;
                case "-":
                    result = next - prev;
                    break;
                case "/":
                    result = next / prev;
                    break;
                case "*":
                    result = next * prev;
                    break;
                default:
                    return;
            }

            this.current = result;
            this.updateDisplay();
        }

        memoryOperation(action){
            var result;
            if (this.total !== ""){
                this.doMaths();
                result = parseFloat(display.text);
                this.current = result;
                this.updateDisplay();
            } else {
                result = parseFloat(display.text);
            }
            
            switch (action){
                case "mr":
                    this.current = memoryNumber;
                    break;
                case "m-":
                    memoryNumber -= result;
                    break;
                case "m+":
                    memoryNumber += result;
                    memIcon.visible = true;
                    break;
                case "mc":
                    memIcon.visible = false;
                    memoryNumber = 0;
                    break;
                default:
                    return;
            }
            console.log(result);
            this.operation = undefined;
            this.operationDisplay();
            this.total = display.text;
            this.updateDisplay();
            this.current = "";
        }

        // Simply takes the current number on screen and subtracts it from zero.  If the number
        // being subtracted is a negative, it will be subtracting a negative number to leave a 
        // positive number instead.
        invertNumber(){
            this.current = 0 - display.text;
            this.updateDisplay();
        }

        // Refreshes the calculator display.
        updateDisplay(){
            display.text = this.current;
        }
    }


    const   calc = stage.children[0],
            onBtn = calc.onBtn,
            cBtn  = calc.cBtn,
            acBtn = calc.acBtn,
            display = calc.digitsTxt,
            // Memory buttons
            mcBtn = calc.mcBtn,
            mrBtn = calc.mrBtn,
            mSubBtn = calc.mSubBtn,
            mAddBtn = calc.mAddBtn,
            //Operand Buttons
            percentBtn = calc.percentBtn,
            rootBt = calc.rootBtn,
            divBtn = calc.divBtn,
            mulBtn = calc.mulBtn,
            subBtn = calc.subBtn,
            plusBtn = calc.plusBtn,
            plmiBtn = calc.plmiBtn,
            equalBtn = calc.equalBtn,
            // Number Buttons
            pointBtn = calc.pointBtn,
            zeroBtn = calc.zeroBtn,
            oneBtn = calc.oneBtn,
            twoBtn = calc.twoBtn,
            threeBtn = calc.threeBtn,
            fourBtn = calc.fourBtn,
            fiveBtn = calc.fiveBtn,
            sixBtn = calc.sixBtn,
            sevenBtn = calc.sevenBtn,
            eightBtn = calc.eightBtn,
            nineBtn = calc.nineBtn;
            // Display Icons
    const   divIcon = calc.divIcon, mulIcon = calc.mulIcon, subIcon = calc.subIcon, addIcon = calc.addIcon, memIcon = calc.memIcon, repIcon = calc.repIcon, errIcon = calc.errIcon;
    
    var     currentNumber = 0,
            totalNumber = 0,
            memoryNumber = 0,
            calcState = false,
            casio;

    function checkForReset(){
        // Checks that the quals button has been pressed and that there is no operation selected by
        // the user so that if they start typing something else into the calculator, that they
        // start with a fresh calculation. Pressing an operation straight after equals will still
        // allow the user to perform a calculation on the output of the previous calculation.
        if (casio.resetFlag && casio.operation === undefined){
            casio.total = "";
            casio.current = "";
            casio.resetFlag = false;
        }
    }

    function operatorToCalc(action){
        if (casio.operation === action && action !== "=" && casio.current === ""){
            casio.operationLock = true;
            calc.repIcon.visible = true;
        }
        casio.setLastButton(action);
        casio.setOperator(action);
    }

    onBtn.addEventListener("click", function(){
        casio = new Calculator(totalNumber, currentNumber);
    });

    mcBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.memoryOperation("mc");
        }
    });

    mrBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.memoryOperation("mr");
        }
    });

    mAddBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.memoryOperation("m+");
        }
    });

    mSubBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.memoryOperation("m-");
        }
    });

    plusBtn.addEventListener("click", function(){
        if (calcState === true){
            operatorToCalc("+");
        }
    });

    subBtn.addEventListener("click", function(){
        if (calcState === true){
            operatorToCalc("-");
        }
    });

    divBtn.addEventListener("click", function(){
        if (calcState === true){
            operatorToCalc("/");
        }
    });

    mulBtn.addEventListener("click", function(){
        if (calcState === true){
            operatorToCalc("*");
        }
    });

    equalBtn.addEventListener("click", function(){
        if (calcState === true){
            if (casio.operationLock){
                casio.setLastButton("=");
                casio.repeatOperation();
            } else {
                operatorToCalc("=");
            }

        }
    });

    plmiBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.invertNumber();
            casio.updateDisplay();
        }
    });

    zeroBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(0);
        }
    });

    oneBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(1);
        }
    });

    twoBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(2);
        }
    });

    threeBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(3);
        }
    });

    fourBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(4);
        }
    });

    fiveBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(5);
        }
    });

    sixBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(6);
        }
    });

    sevenBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(7);
        }
    });

    eightBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(8);
        }
    });

    nineBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(9);
        }
    });

    pointBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            casio.buildNumber(".");
        }
    });
}