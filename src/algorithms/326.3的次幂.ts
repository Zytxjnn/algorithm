export default function isPowerOfThree(n: number): boolean {
    if (n === 1) return true;
    if (Math.floor(n / 3 ) < n / 3) return false;

    while (n >= 3) {
        n = n / 3;
        if (n === 1) {
            return true;
        }
    }
    return false;
};
