function highlight() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Change the color of each bold word to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Revert the color of each bold word to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
