module.exports = function toReadable (number) {
    const numberText = {
        0: "zero",
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
    };

    const numberTenText = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const lessTwenty = (el) => {
        return numberText[el];
    }

    const lessOneHundred = (el) => {
        const [first, last] = el;
        return last === "0" ? numberTenText[first] : `${numberTenText[first]} ${lessTwenty(last)}`;
    }

    const moreOneHundred = (el) => {
        const [first, middel, last] = el;
        const lastNumber = `${middel}${last}`;
        const textOneHundred = `${lessTwenty(first)} hundred`;

        if (lastNumber === '00') {
            return textOneHundred;
        }

        let lastText = "";
        if (middel === "0" && last !== "0") {
            lastText = lessTwenty(last);
        } else if (last === "0" && middel !== "0") {
            lastText = numberTenText[middel];
        } else if (Number(lastNumber) < 20) {
            lastText = lessTwenty(lastNumber);
        } else if (Number(lastNumber) >= 20) {
            lastText = lessOneHundred(lastNumber);
        }

        return `${textOneHundred} ${lastText}`;
    }

    if (number < 20) {
        return lessTwenty(number);
    }

    if (number < 100) {
        return lessOneHundred(number.toString());
    }

    return moreOneHundred(number.toString());
}
