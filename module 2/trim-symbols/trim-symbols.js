export function trimSymbols(str, num) {
    if (num === 0 || !str) {
        return "";
    }

    if (!num) {
        return str;
    }

    let result = str[0];
    let letterCount = 1;
    for (let letter of str) {
        if (letter != result[result.length - 1]) {
            letterCount = 1;
            result += letter;
            continue;
        }

        if (letterCount < num) {
            result += letter;
            letterCount++;
        }

    }
    return result;
};