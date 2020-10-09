function code(){
    class Calculator {
        constructor(totalNumber, currentNumber){
            this.total = totalNumber;
            this.current = currentNumber;
            this.powerOn();
        }

        powerOn(){
            this.current = "";
            this.total = 0;
            this.operation = undefined;
            calcState = true;
        }

        buildNumber(num){
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
            default:
                break;
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
            casio.doMaths();
            casio.operationDisplay();
            casio.updateDisplay();
        }
    })

    plmiBtn.addEventListener("click", function(){

    })

    zeroBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(0);
        }
    });

    oneBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(1);
        }
    });

    twoBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(2);
        }
    });

    threeBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(3);
        }
    });

    fourBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(4);
        }
    });

    fiveBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(5);
        }
    });

    sixBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(6);
        }
    });

    sevenBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(7);
        }
    });

    eightBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(8);
        }
    });

    nineBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(9);
        }
    });

    pointBtn.addEventListener("click", function(){
        if (calcState === true){
            sendToCalc(".");
        }
    });
}