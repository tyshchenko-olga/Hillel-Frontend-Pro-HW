function SuperMath() {

}

SuperMath.prototype.check = function (obj) {
    var conf = confirm('Do you want to' + obj.X + obj.znak + obj.Y + '?');

    if (conf === true) {
        console.log(doMath(obj));
    } else {
        p.input();
        console.log(doMath(obj));

    }
};

SuperMath.prototype.input = function () {
    do {
        obj.X = +prompt('Enter "X"');
    } while (isNaN(obj.X));

    do {
        obj.znak = prompt('Enter "znak"');
    } while (!(obj.znak === '+' || obj.znak === '-' || obj.znak === '*' || obj.znak === '/' || obj.znak === '%' || obj.znak === '^'));

    do {
        obj.Y = +prompt('Enter "Y"');
    } while (isNaN(obj.Y));

    return obj;
};


var obj = {
    X: 12,
    Y: 3,
    znak: '/'
};

function doMath() {
    var result;
    var z = obj.znak;
    var x = obj.X;
    var y = obj.Y;

    switch (z) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = x ^ y;
            break;

    }

    return result;
}

var p = new SuperMath();

p.check(obj);
