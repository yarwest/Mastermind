    var color = ['red', 'yellow', 'blue', 'green', 'black', 'grey', 'orange', 'brown'];
    var currentColor = 0;
    var nColor = color.length;

    $('#start').click(function() {
        $('#start').fadeOut(500);
        $('#main').delay(500).fadeIn(500);
        $('#submit').delay(500).fadeIn(500);
        $('#reset').delay(500).fadeIn(500);
    });

    $('#ball1').click(function() {
        if(currentColor == nColor-1) {
            currentColor = 0
        } else {
            currentColor++;
        }
        $('#ball1').css('background-color', color[currentColor]);
    });

    $('#ball2').click(function() {
        if(currentColor == nColor-1) {
            currentColor = 0
        } else {
            currentColor++;
        }
        $('#ball2').css('background-color', color[currentColor]);
    });

    $('#ball3').click(function() {
        if(currentColor == nColor-1) {
            currentColor = 0
        } else {
            currentColor++;
        }
        $('#ball3').css('background-color', color[currentColor]);
    });

    $('#ball4').click(function() {
        if(currentColor == nColor-1) {
            currentColor = 0
        } else {
            currentColor++;
        }
        $('#ball4').css('background-color', color[currentColor]);
    });

    $('#reset').click(function() {
        location.reload();
    });