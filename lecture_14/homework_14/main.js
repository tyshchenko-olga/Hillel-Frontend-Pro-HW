window.onload = function () {
    var rangeValue = document.querySelector('input[name=range]');
    var numberValue = document.querySelector('input[name=number]');
    var rangeData = document.querySelector('.range_display');
    var pecentData = document.querySelector('.percent_display');


    rangeValue.addEventListener('change', function (ev) {
        numberValue.value = ev.target.value;
        rangeData.style.height = ev.target.value + 'px';
        pecentData.style.height = culcComission(ev.target.value);


    });

    numberValue.addEventListener('input', function (ev) {
        if (numberValue.value <= 100 && numberValue.value >= 0) {
            rangeValue.value = ev.target.value;
            rangeData.style.height = ev.target.value + 'px';
            pecentData.style.height = culcComission(ev.target.value);
            console.log(culcComission(ev.target.value));

        } else {
            alert('Enter number between 0 and 100');
        }
    });

    function culcComission(x) {
        var height;
        if (x >= 0 && x < 20) {
            height = 2 + 'px'
        }
        if (x >= 20 && x < 50) {
            height = 4 + 'px'
        }
        if (x >= 50 && x < 75) {
            height = 6 + 'px'
        }
        if (x >= 75 && x <= 100) {
            height = 8 + 'px'
        }

        return height;
    }


};
