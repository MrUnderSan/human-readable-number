module.exports = function toReadable (number) {

    let string = '';

    function zeroToNine (n) {
        switch(n) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }

    function tenToNineteen (n) {
        switch(n) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }

    function twentyToNinetyNine (n) {
        switch(n) {
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
        }
    }

    if (number === 0) {
        return string += 'zero';

    } if (number > 0 && number < 10) {
        return string += zeroToNine(number);

    } if (number > 9 && number < 20) {
        return string += tenToNineteen(number);

    } if (number > 19 && number < 100) {
        const tens = Math.floor(number / 10),
              ones = number % 10;
        if (ones === 0) {
            return string += twentyToNinetyNine(tens);
        } else {
            return string += twentyToNinetyNine(tens) + ' ' + zeroToNine(number % 10);
        }

    } if (number > 99 && number < 1000) {
        const hundreds= Math.floor(number / 100);
        modulo = number % 100;

        if (modulo === 0) {
            return string += zeroToNine(hundreds) + ' ' + 'hundred';

        } if (modulo > 0 && modulo < 10) {
            return string += zeroToNine(hundreds) + ' ' + 'hundred' + ' ' + zeroToNine(modulo);

        } if (modulo > 9 && modulo < 20) {
            return string += zeroToNine(hundreds) + ' ' + 'hundred' + ' ' + tenToNineteen(modulo);

            
        } if (modulo > 19 && modulo < 100) {

            const hundredsTens = Math.floor(modulo / 10),
                  hundredsOnes = modulo % 10;

            if (hundredsOnes === 0) {
                return string += zeroToNine(hundreds) + ' ' + 'hundred' + ' ' + twentyToNinetyNine(hundredsTens);
            } else {
                return string += zeroToNine(hundreds) + ' ' + 'hundred' + ' ' + twentyToNinetyNine(hundredsTens) + ' ' + zeroToNine(hundredsOnes);
            }
        }
    }

};
