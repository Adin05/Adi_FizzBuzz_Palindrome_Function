export function Palindrome(input) {
    input = input.toLowerCase().trim();
    // console.log(input);
    const len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            return 'Bukan Palindrome';
        }
    }
    return 'Palindrome';
}
