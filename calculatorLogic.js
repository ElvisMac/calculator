function code(){
    class Calculator {
        // Constructor for the calculator that initialises the variables in their default state
        // This also then runs the power on sequence.
        constructor(totalNumber, currentNumber){
            this.total = totalNumber;
            this.current = currentNumber;
            this.resetFlag = false;
            this.powerOn();
        }

        powerOn(){
            // Sets the current value to blank and the total to zero in preparation for carrying
            // out any math.  Setting the current operation to undefined to ensure that the first
            // value entered into the calculator doesn't have a math operation carried out on it.
            // calcState is set to true to enable the buttons to send information into the class.
            this.current = "";
            this.total = 0;
            this.operation = undefined;
            calcState = true;
        }

        buildNumber(num){
            // Checks if the number being sent in is a decimal point and checks to see if one has
            // been entered already, breaks out of the function if this is the case.
            if (num === "." && this.current.includes(".")) return;
            if (this.prev !== ""){
                this.updateDisplay();
            }
            this.current = this.current.toString() + num.toString();
        }

        pickOperation(operation){
            if (this.current === "") return; 
            if (this.total !== ""){
                this.doMaths();
            }
            this.operation = operation;
            this.operationDisplay();
            this.total = this.current;
            this.current = "";
        }

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

        doMaths(){
            var result;
            const prev = parseFloat(this.total);
            const next = parseFloat(this.current);
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
            this.current = result;
            display.text = this.current;
            this.total = undefined;
            this.operation = "";
        }

        invertNumber(){
            this.current = 0 - this.current;
            display.text = this.current;
        }

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
    const   divIcon = calc.divIcon, mulIcon = calc.mulIcon, subIcon = calc.subIcon, addIcon = calc.addIcon;
    
    var     currentNumber = 0,
            totalNumber = 0,
            memoryNumber,
            calcState = false,
            casio;

    function sendToCalc(action){
        console.log(casio.total, casio.current, casio.resetFlag)
        switch (action) {
            case "+":
            case "-":
            case "*":
            case "/":
                casio.pickOperation(action);
                break;
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case ".":
                casio.buildNumber(action);
                casio.updateDisplay();
                break
            case "=":
                casio.doMaths();
                casio.operationDisplay();
                casio.updateDisplay();
                // Used when equals has been pressed. Detects if the values held in the screen need
                // to be cleared prior to pushing the next number button.
                casio.resetFlag = true;
            default:
                break;
        }
    }

    function checkForReset(){
        // Checks that the quals button has been pressed and that there is no operation selected by
        // the user so that if they start typing something else into the calculator, that they
        // start with a fresh calculation. Pressing an operation straight after equals will still
        // allow the user to perform a calculation on the output of the previous calculation.
        if (casio.resetFlag && casio.operation === ""){
            casio.total = "";
            casio.current = "";
            casio.resetFlag = false;
        }
    }

    onBtn.addEventListener("click", function(){
        casio = new Calculator(totalNumber, currentNumber);
        display.text = "0";
    });

    plusBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc("+");
        }
    })

    subBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc("-");
        }
    })

    divBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc("/");
        }
    })

    mulBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc("*");
        }
    })

    equalBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc("=");
        }
    })

    plmiBtn.addEventListener("click", function(){
        if (calcState === true){
            casio.invertNumber();
            casio.updateDisplay;
        }
    })

    zeroBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(0);
        }
    });

    oneBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(1);
        }
    });

    twoBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(2);
        }
    });

    threeBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(3);
        }
    });

    fourBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(4);
        }
    });

    fiveBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(5);
        }
    });

    sixBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(6);
        }
    });

    sevenBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(7);
        }
    });

    eightBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(8);
        }
    });

    nineBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(9);
        }
    });

    pointBtn.addEventListener("click", function(){
        if (calcState === true){
            checkForReset();
            sendToCalc(".");
        }
    });
}