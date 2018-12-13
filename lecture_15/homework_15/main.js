window.onload = function () {

    var gameChar = document.createElement('div');
    gameChar.classList.add('game-character');
    document.body.appendChild(gameChar);

    var left = gameChar.offsetLeft;
    var top = gameChar.offsetTop;

    var command = false;

    document.addEventListener("keydown", function (event) {

            if (gameChar.classList.contains('character_jump')) {
                gameChar.classList.remove('character_jump');
            }

            switch (event.keyCode) {
                case 91:
                    command = true;
                    sitDown();
                    break;
                case 37:
                    moveLeft(20);
                    break;
                case 38:
                    if (!command) {
                        moveUp(20);
                    }
                    break;
                case 39:
                    moveRight(20);
                    break;
                case 40:
                    if (!command) {
                        moveDown(20);
                    }
                    break;
                case 32:
                    if (!command) {
                        jump(30);
                    }
                    break;

            }
        });

    function moveRight(step) {
        if ((left + step) <= (window.innerWidth - gameChar.clientWidth)) {
            left += step;
            gameChar.style.left = left + 'px';
        } else {
            console.log("I can't move right");
        }
    }

    function moveLeft(step) {
        if (left - step >= 0) {
            left -= step;
            gameChar.style.left = left + 'px';
        } else {
            console.log("I can't move left");
        }
    }

    function moveUp(step) {
        if (top - step >= 0) {
            top -= step;
            gameChar.style.top = top + 'px';
        } else {
            console.log("I can't move top");
        }
    }

    function moveDown(step) {
        if ((top + step) <= (window.innerHeight - gameChar.clientHeight)) {
            top += step;
            gameChar.style.top = top + 'px';
        } else {
            console.log("I can't move down");
        }
    }

    function jump(h) {
        if (top - h > 0) {
            var curTop = top;
            gameChar.classList.add('character_jump');
            curTop -= h;
            gameChar.style.top = curTop + 'px';

            gameChar.addEventListener("transitionend", function () {
                gameChar.style.top = top + 'px';
            });

        } else {
            console.log("I can't jump");
        }
    }

    function sitDown() {
        var height = gameChar.clientHeight;
        var width = gameChar.clientWidth;
        gameChar.style.height = gameChar.clientHeight - gameChar.clientHeight * 0.4 + 'px';
        gameChar.style.width = gameChar.clientWidth + gameChar.clientWidth * 0.15 + 'px';

        document.addEventListener("keyup", function (ev) {
            if (ev.keyCode === 91) {
                command = false;
                gameChar.style.height = height + 'px';
                gameChar.style.width = width + 'px';
            }
        });
    }
};
