export default function hammingWeight(n: number): number {
    const str = n.toString(2);
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') counter++;
    }
    return counter;
};
