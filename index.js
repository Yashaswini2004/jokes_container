const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What did the big flower say to the little flower? 'Hey, bud!'",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How does a penguin build its house? Igloos it together.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call fake spaghetti? An impasta.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "Why do cows wear bells? Because their horns don’t work!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one."
];
let idx=0;
document.getElementById("text2").innerText="//Jokes Here...:)";
document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("text2").innerText=jokes[idx];
    idx = (idx + 1) % jokes.length;
})