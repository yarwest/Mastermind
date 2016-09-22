    var color = ['red', 'yellow', 'blue', 'green', 'black', 'grey', 'orange', 'brown'];
    var currentColors = [0, 0, 0, 0];
    var nColor = color.length;

    $('#start').click(function() {
        $('#start').fadeOut(500);
        $('#main').delay(500).fadeIn(500);
        $('#submit').delay(500).fadeIn(500);
        $('#reset').delay(500).fadeIn(500);
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

    $('#reset').click(function() {
        location.reload();
    });