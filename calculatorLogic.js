function code(){
    const   calc        = stage.children[0],
            onBtn       = calc.onBtn,
            cBtn        = calc.cBtn,
            acBtn       = calc.acBtn,
            display     = calc.digitsTxt,
            memoryDisp  = calc.memoryTxt,
            operandDisp = calc.operandTxt,
            // Memory buttons
            mcBtn       = calc.mcBtn,
            mrBtn       = calc.mrBtn,
            mSubBtn     = calc.mSubBtn,
            mAddBtn     = calc.mAddBtn,
            //Operand Buttons
            percentBtn  = calc.percentBtn,
            rootBt      = calc.rootBtn,
            divBtn      = calc.divBtn,
            mulBtn      = calc.mulBtn,
            subBtn      = calc.subBtn,
            plusBtn     = calc.plusBtn,
            plmiBtn     = calc.plmiBtn,
            equalBtn    = calc.equalBtn,
            // Number Buttons
            pointBtn    = calc.pointBtn,
            zeroBtn     = calc.zeroBtn,
            oneBtn      = calc.oneBtn,
            twoBtn      = calc.twoBtn,
            threeBtn    = calc.threeBtn,
            fourBtn     = calc.fourBtn,
            fiveBtn     = calc.fiveBtn,
            sixBtn      = calc.sixBtn,
            sevenBtn    = calc.sevenBtn,
            eightBtn    = calc.eightBtn,
            nineBtn     = calc.nineBtn,
            // Display Icons
            divIcon     = calc.divIcon,
            mulIcon     = calc.mulIcon,
            subIcon     = calc.subIcon
            addIcon     = calc.addIcon;
    
    var currentNumber = 0,
        totalNumber = 0,
        memoryNumber,
        calcState = false,
        checkDecimal = false,
        operandState = "",
        nextOperand = "";

    function powerOn(){
        currentNumber = 0;
        totalNumber = 0;
        updateDisplay();
        resetOperators();
        calcState = true;
        nextOperand = "";
        checkDecimal = false;
    }

    function updateDisplay(){
        display.text = currentNumber;
    }

    function buildNumber(num){
        console.log(num);
        if (calcState === true && currentNumber.toString().length < 9){
            if(currentNumber === 0){
                if (num === "."){
                    currentNumber = `${currentNumber}${num}`;
                    console.log(currentNumber);
                    checkDecimal = true;
                    updateDisplay();
                } else if (num >=0 && num <= 9) {
                    currentNumber = num;
                    console.log(currentNumber);
                    updateDisplay();
                }

            } else {
                if (num === "."){
                    currentNumber = `${currentNumber}${num}`;
                    checkDecimal = true;
                    console.log(currentNumber);
                    updateDisplay();
                } else if (num >=0 && num <= 9) {
                    currentNumber = `${currentNumber}${num}`;
                    console.log(currentNumber);
                    updateDisplay();
                }
            }
        }
    }

    function intConversion(val1, val2){
        currentNumber = Number(val1);
        totalNumber = Number(val2);
    }

    function doMaths(op){
        if (op === "add"){
            return totalNumber + currentNumber;
        } else if (op === "sub") {
            return totalNumber - currentNumber;
        } else if (op === "div") {
            return totalNumber / currentNumber;
        } else if (op === "mul") {
            return totalNumber * currentNumber;
        }
    }

    function displayCurrentOperator(op){
        resetOperators();
        op.visible = true;
    }

    function resetOperators(){
        addIcon.visible = false;
        subIcon.visible = false;
        divIcon.visible = false;
        mulIcon.visible = false;
    }

    function setOperand(operand){
        checkDecimal = false;
        intConversion(currentNumber, totalNumber);
        if (nextOperand === ""){
            totalNumber = currentNumber;
            nextOperand = operand
            updateDisplay();
            currentNumber = 0;
        } else {
            currentNumber = doMaths(nextOperand);
            nextOperand = operand
            updateDisplay();
            totalNumber = currentNumber;
        }
    }

    function invertValue(num){
        currentNumber = 0 - num;
        updateDisplay();
    }

    onBtn.addEventListener("click", function(){
        powerOn();
    });

    plusBtn.addEventListener("click", function(){
        displayCurrentOperator(addIcon);
        setOperand("add");
    })

    subBtn.addEventListener("click", function(){
        displayCurrentOperator(subIcon);
        setOperand("sub");
    })

    divBtn.addEventListener("click", function(){
        displayCurrentOperator(divIcon);
        setOperand("div");
    })

    mulBtn.addEventListener("click", function(){
        displayCurrentOperator(mulIcon);
        setOperand("mul");
    })

    equalBtn.addEventListener("click", function(){
        resetOperators();
        setOperand("");
    })

    plmiBtn.addEventListener("click", function(){
        invertValue(currentNumber);
    })

    zeroBtn.addEventListener("click", function(){
        buildNumber(0);
    });

    oneBtn.addEventListener("click", function(){
        buildNumber(1);
    });

    twoBtn.addEventListener("click", function(){
        buildNumber(2);
    });

    threeBtn.addEventListener("click", function(){
        buildNumber(3);
    });

    fourBtn.addEventListener("click", function(){
        buildNumber(4);
    });

    fiveBtn.addEventListener("click", function(){
        buildNumber(5);
    });

    sixBtn.addEventListener("click", function(){
        buildNumber(6);
    });

    sevenBtn.addEventListener("click", function(){
        buildNumber(7);
    });

    eightBtn.addEventListener("click", function(){
        buildNumber(8);
    });

    nineBtn.addEventListener("click", function(){
        buildNumber(9);
    });

    pointBtn.addEventListener("click", function(){
        console.log("Decimal pressed")
        if (checkDecimal === false){
            buildNumber(".");
        }
    });
}