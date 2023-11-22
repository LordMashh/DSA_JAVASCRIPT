// Find the Most Common Words from Hash Table in javascript

function findMostCommonWords(text, numWords) {
    // Remove punctuation and convert to lowercase
    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

    // Split the cleaned text into an array of words
    const words = cleanedText.split(/\s+/);

    // Create a hash table to store word frequencies
    const wordFrequency = {};

    // Count the frequency of each word
    for (const word of words) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }

    // Convert the hash table into an array of objects
    const wordFrequencyArray = Object.keys(wordFrequency).map((word) => ({ word, count: wordFrequency[word] }));

    // Sort the array based on word frequency in descending order
    wordFrequencyArray.sort((a, b) => b.count - a.count);

    // Return the specified number of most common words
    return wordFrequencyArray.slice(0, numWords);
}

// Example usage:
const text = "This is a sample text. It some contains some words, and some words may repeat some some.";
const numWordsToFind = 1;

const mostCommonWords = findMostCommonWords(text, numWordsToFind);

console.log(`Most common ${numWordsToFind} words:`);
mostCommonWords.forEach((wordObject) => {
    console.log(`${wordObject.word}: ${wordObject.count} times`);
});
