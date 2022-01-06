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

    // if (numLength === 1) {
    //     return ten[number.toString()[0]];
    // }

    // if (numLength === 2) {
    //     return (
    //         ten[number.toString()[0] + number.toString()[1]] ||
    //         ten[number.toString()[0] * 10] + " " + ten[number.toString()[1]]
    //     );
    // }

    // if (numLength === 3) {
    //     return (
    //         ten[number.toString()[0]] +
    //         " hundred " +
    //         (ten[number.toString()[1] + number.toString()[2]] ||
    //             ten[number.toString()[1] * 10] +
    //                 " " +
    //                 ten[number.toString()[2]])
    //     );
    // }

    let result = "";

    if (Math.floor(number / 100)) {
        result += `${readable[Math.floor(number / 100)]} hundred `;
    }

    if (Math.floor(number % 100)) {
        result +=
            readable[Math.floor(number % 100)] ||
            `${readable[Math.floor((number % 100) / 10) * 10]} ${
                readable[Math.floor(number % 10)]
            }`;
    }

    return result.trim();
};
