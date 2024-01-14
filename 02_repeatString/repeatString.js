const repeatString = function(sentence, repeatCount) {
    let finalSentence = '';

    if (repeatCount === 0) {
        return finalSentence;
    }
    else if (repeatCount < 0) {
        return 'ERROR';
    }

    for(let i=1; i<= repeatCount; i++) {
        finalSentence = finalSentence + sentence;
    }

    return finalSentence;
};

// Do not edit below this line
module.exports = repeatString;
