document.addEventListener('DOMContentLoaded', function () {
    let counter1 = 0;
    let counter2 = 0;

    const CounterText1 = document.getElementById('counterText1');
    const CounterText2 = document.getElementById('counterText2');

    const counterReal = document.getElementById('counterone');
    const counterBarca = document.getElementById('countertwo');

    const incrementReal = document.getElementById('incrementRealButton');
    const decrementReal = document.getElementById('decrementRealButton');
    const incrementBarca = document.getElementById('incrementBarcaButton');
    const decrementBarca = document.getElementById('decrementBarcaButton');

    const ms1 = document.getElementById('macSonucu1');
    const msX = document.getElementById('macSonucuX');
    const ms2 = document.getElementById('macSonucu2');

    const twoAlt = document.getElementById('twoAlt');
    const twoUst = document.getElementById('twoUst');

    const oneAlt = document.getElementById('oneAlt');
    const oneUst = document.getElementById('oneUst');

    const kgV = document.getElementById('kgVar');
    const kgY = document.getElementById('kgYok');

    // triangles start

    function showGreenTriangle(element) {
        const value = parseFloat(element.innerText);
        const triangle = element.nextElementSibling; // Üçgenin olduğu yer

        triangle.classList.add('green-triangle');
        triangle.classList.remove('red-triangle');
    }

    function showRedTriangle(element) {
        const value = parseFloat(element.innerText);
        const triangle = element.nextElementSibling; // Üçgenin olduğu yer

        triangle.classList.add('red-triangle');
        triangle.classList.remove('green-triangle');
    }

    // triangles end



    function decrementMS1() {
        ms1.innerText = (parseFloat(ms1.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(ms1.innerText) - 0.30).toFixed(2);
    }

    function incrementMS1() {
        ms1.innerText = (parseFloat(ms1.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(ms1.innerText) + 0.30).toFixed(2);
    }

    function decrementMSX() {
        msX.innerText = (parseFloat(msX.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(msX.innerText) - 0.30).toFixed(2);
    }

    function incrementMSX() {
        msX.innerText = (parseFloat(msX.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(msX.innerText) + 0.30).toFixed(2);
    }

    function incrementMS2() {
        ms2.innerText = (parseFloat(ms2.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(ms2.innerText) + 0.30).toFixed(2);
    }

    function decrementMS2() {
        ms2.innerText = (parseFloat(ms2.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(ms2.innerText) - 0.30).toFixed(2);
    }

    // --------- Mac sonucu end -------------

    function incrementtwoAlt() {
        twoAlt.innerText = (parseFloat(twoAlt.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(twoAlt.innerText) + 0.30).toFixed(2);
    }

    function decrementtwoAlt() {
        twoAlt.innerText = (parseFloat(twoAlt.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(twoAlt.innerText) - 0.30).toFixed(2);
    }

    function incrementtwoUst() {
        twoUst.innerText = (parseFloat(twoUst.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(twoUst.innerText) + 0.30).toFixed(2);
    }

    function decrementtwoUst() {
        twoUst.innerText = (parseFloat(twoUst.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(twoUst.innerText) - 0.30).toFixed(2);
    }

    // 2.5 ust / alt end


    function incrementoneUst() {
        oneUst.innerText = (parseFloat(oneUst.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(oneUst.innerText) + 0.30).toFixed(2);
    }

    function decrementoneUst() {
        oneUst.innerText = (parseFloat(oneUst.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(oneUst.innerText) - 0.30).toFixed(2);
    }

    function incrementoneAlt() {
        oneAlt.innerText = (parseFloat(oneAlt.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(oneAlt.innerText) + 0.30).toFixed(2);
    }

    function decrementtoneAlt() {
        oneAlt.innerText = (parseFloat(oneAlt.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(oneAlt.innerText) - 0.30).toFixed(2);
    }

    // 1.5 ust / alt end

    function incrementkgV() {
        kgV.innerText = (parseFloat(kgV.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(kgV.innerText) + 0.30).toFixed(2);
    }

    function decrementkgV() {
        kgV.innerText = (parseFloat(kgV.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(kgV.innerText) - 0.30).toFixed(2);
    }

    function incrementkgY() {
        kgY.innerText = (parseFloat(kgY.innerText) + 0.30 < 0) ? '0.00' : (parseFloat(kgY.innerText) + 0.30).toFixed(2);
    }

    function decrementtkgY() {
        kgY.innerText = (parseFloat(kgY.innerText) - 0.30 < 0) ? '0.00' : (parseFloat(kgY.innerText) - 0.30).toFixed(2);
    }

    // kg var / yok end

    incrementReal.addEventListener('click', function () {
        counter1++;
        counterReal.innerText = counter1;
        decrementMS1();
        decrementMSX();
        incrementMS2();
        incrementtwoAlt();
        decrementtwoUst();
        decrementoneUst();
        incrementoneAlt();

        showRedTriangle(ms1);
        showGreenTriangle(ms2);
        showRedTriangle(msX);

        showRedTriangle(twoUst);
        showGreenTriangle(twoAlt);

        showRedTriangle(oneUst);
        showGreenTriangle(oneAlt);
    });

    decrementReal.addEventListener('click', function () {
        if (counter1 > 0) {
            counter1--;
            counterReal.innerText = counter1;
            incrementMS1();
            decrementMS2();
            incrementMSX();
            decrementtwoAlt();
            incrementtwoUst();
            incrementoneUst();
            decrementtoneAlt();

            showRedTriangle(ms2);
            showGreenTriangle(ms1);
            showGreenTriangle(msX);

            showRedTriangle(twoAlt);
            showGreenTriangle(twoUst);

            showRedTriangle(oneAlt);
            showGreenTriangle(oneUst);
        }
    });
    resetRealButton.addEventListener('click', function () {
        counter1 = 0;
        counter2 = 0;
        counterReal.innerText = counter1;
        counterBarca.innerText = counter2;
        ms1.innerText = '2.30';
        msX.innerText = '3.10';
        ms2.innerText = '2.70';
        twoAlt.innerText = '2.30';
        twoUst.innerText = '2.70';
        oneUst.innerText = '2.30';
        oneAlt.innerText = '3.10';
        kgV.innerText = '2.10';

    })

    incrementBarca.addEventListener('click', function () {
        counter2++;
        counterBarca.innerText = counter2;
        incrementMS1();
        decrementMSX();
        decrementMS2();
        incrementtwoAlt();
        decrementtwoUst();
        decrementoneUst();
        incrementoneAlt();

        showRedTriangle(ms2);
        showGreenTriangle(ms1);
        showRedTriangle(msX);

        showRedTriangle(twoUst);
        showGreenTriangle(twoAlt);

        showRedTriangle(oneUst);
        showGreenTriangle(oneAlt);
    })

    decrementBarca.addEventListener('click', function () {
        if (counter2 > 0) {
            counter2--;
            counterBarca.innerText = counter2;
            decrementMS1();
            incrementMS2();
            incrementMSX();
            decrementtwoAlt();
            incrementtwoUst();
            incrementoneUst();
            decrementtoneAlt();

            showRedTriangle(ms1);
            showGreenTriangle(ms2);
            showGreenTriangle(msX);

            showRedTriangle(twoAlt);
            showGreenTriangle(twoUst);

            showRedTriangle(oneAlt);
            showGreenTriangle(oneUst);
        }
    })
});