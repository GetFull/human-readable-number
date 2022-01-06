module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const readable = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let result = "";
    // check amount of Hundred !> 9 else return 0
    const amountOfHundred = Math.floor((number / 100) % 10);
    // check amount of Tenths !> 9 else return 0
    const amountTenths = Math.floor((number / 10) % 10);
    // check amount of Units !> 9 else return 0
    const amountOfUnits = Math.floor(number % 10);

    if (Math.floor(amountOfHundred)) {
        result += `${readable[amountOfHundred]} hundred `;
    }

    if (Math.floor(number % 100)) {
        /*  if (number) remainder of division by 100 !=0 check readable{[keys]} === (remainder of division by 100).
         Else split (remainder of division by 100) on Tenths and Units. Check them in {readable}
         */
        result +=
            readable[Math.floor(number % 100)] ||
            `${readable[amountTenths * 10]} ${readable[amountOfUnits]}`;
    }

    return result.trim();
};
