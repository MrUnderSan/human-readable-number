module.exports = function toReadable (number) {
    
    function zeroToNine (n) {
        switch(n) {
            case 1:
                console.log('one');
                break;
            case 2:
                console.log('two');
                break;
            case 3:
                console.log('three');
                break;
            case 4:
                console.log('four');
                break;
            case 5:
                console.log('five');
                break;
            case 6:
                console.log('six');
                break;
            case 7:
                console.log('seven');
                break;
            case 8:
                console.log('eight');
                break;
            case 9:
                console.log('nine');
                break;
        }
    }

    function tenToNineteen (n) {
        switch(n) {
            case 10:
                console.log('ten');
                break;
            case 11:
                console.log('eleven');
                break;
            case 12:
                console.log('twelve');
                break;
            case 13:
                console.log('thirteen');
                break;
            case 14:
                console.log('fourteen');
                break;
            case 15:
                console.log('fifteen');
                break;
            case 16:
                console.log('sixteen');
                break;
            case 17:
                console.log('seventeen');
                break;
            case 18:
                console.log('eightteen');
                break;
            case 19:
                console.log('nineteen');
                break;
        }
    }

    function twentyToNinetyNine (n) {
        switch(n) {
            case 2:
                console.log('twenty');
                break;
            case 3:
                console.log('thirty');
                break;
            case 4:
                console.log('forty');
                break;
            case 5:
                console.log('fifty');
                break;
            case 6:
                console.log('sixty');
                break;
            case 7:
                console.log('seventy');
                break;
            case 8:
                console.log('eighty');
                break;
            case 9:
                console.log('ninety');
                break;
        }
    }

    if (number === 0) {
        console.log('zero');
    } if (number > 0 && number < 10) {
        zeroToNine(num);
    } if (number > 9 && number < 20) {
        tenToNineteen(number);
    } if (number > 19 && number < 100) {
        const tens = Math.floor(number / 10);
        twentyToNinetyNine(tens);
        zeroToNine(number % 10);
    } if (number > 99 && number < 1000) {
        const hundreds= Math.floor(number / 100);
        zeroToNine(hundreds);
        console.log('hundred');
        modulo = number % 100;
        if (modulo > 0 && modulo < 10) {
            zeroToNine(modulo);
        } if (modulo > 9 && modulo < 20) {
            tenToNineteen(modulo);
        } if (modulo > 19 && modulo < 100) {
            const tens = Math.floor(modulo / 10);
            twentyToNinetyNine(tens);
            zeroToNine(modulo % 10);
        }
    }

};