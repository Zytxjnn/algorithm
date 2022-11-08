export default  function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedArr = allowed.split("");
    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (!allowedArr.includes(word.charAt(j))){
                counter++;
                break;
            }
        }
    }

    return words.length - counter;
};
