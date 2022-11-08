export default function isPowerOfTwo(n: number): boolean {
    if (n === 1) return true;
    if (Math.floor(n / 2 ) < n / 2) return false;

    while (n >= 2) {
        n = n / 2;
        if (n === 1) {
            return true;
        }
    }
    return false;
};
