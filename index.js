function shout(string){
    
    return string.toUpperCase();
}

console.log(shout("hello"));


function whisper(string){
    return string.toLowerCase();
}

console.log(whisper("HELLO"));

function logShout(string) {
    console.log(string.toUpperCase());
}

// Example Usage:
logShout("hello"); 

function logWhisper(string) {
    console.log(string.toLowerCase());
}

// Example Usage:
logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// Example Usage:
console.log(sayHiToHeadphonedRoommate("hello")); // Output: "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("HELLO")); // Output: "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Output: "I would love to!"