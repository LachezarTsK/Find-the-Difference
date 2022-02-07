
/**
 * @param {string} original
 * @param {string} shuffled
 * @return {character}
 */
var findTheDifference = function (original, shuffled) {

    let ch = 0;
    const size = original.length;

    for (let i = 0; i < size; i++) {
        ch ^= original.codePointAt(i) ^ shuffled.codePointAt(i);
    }

    return String.fromCodePoint(ch ^ shuffled.codePointAt(size));
};
