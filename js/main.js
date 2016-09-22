    var color = ['red', 'yellow', 'blue', 'green', 'black', 'grey', 'orange', 'brown'];
    var currentColors = [0, 0, 0, 0];
    var nColor = color.length;
    var code = [2, 2, 2, 2];
    var correctPlace = 0;
    var nonCorrectPlace = 0;
    var i = 0;

    $('#start').click(function() {
        initGame();
    });

    $('#ball0').click(function() {
        incrementColor(0);
    });

    $('#ball1').click(function() {
        incrementColor(1);
    });

    $('#ball2').click(function() {
        incrementColor(2);
    });

    $('#ball3').click(function() {
        incrementColor(3);
    });

    function incrementColor(number) {
        if(currentColors[number] == nColor-1) {
            currentColors[number] = 0;
        } else {
            currentColors[number]++;
        }
        $('#ball' + number).css('background-color', color[currentColors[number]]);
    }

    function initGame() {
        /*generateCode();*/
        $('#start').fadeOut(500);
        $('#main').delay(500).fadeIn(500);
        $('#submit').delay(500).fadeIn(500);
        $('#reset').delay(500).fadeIn(500);
    }

    function generateCode() {
        for(i = 0; i < currentColors.length; i++) {
            code[i] = Math.floor(Math.random() * nColor-1);
        }
    }

    $('#submit').click(function() {
        for(i = 0; i < currentColors.length; i++) {
            if(currentColors[i] == code[i]) {
                ++correctPlace;
            }
        }
        if(correctPlace == 4) {
            // TODO: add win action
            $('body').toggle();
        }
    });

    $('#reset').click(function() {
        location.reload();
    });