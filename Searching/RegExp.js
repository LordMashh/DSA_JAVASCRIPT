// RegExp Search implementation in JavaScript with minimum time and space complexity

function regExpSearch(text, pattern) {
    const regex = new RegExp(pattern);
    const result = text.search(regex);

    return result;
}

// Example usage:
const sampleText = "This is a sample text";
const searchPattern = /sample/;

const result = regExpSearch(sampleText, searchPattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}.`);
} else {
    console.log("Pattern not found in the text.");
}
