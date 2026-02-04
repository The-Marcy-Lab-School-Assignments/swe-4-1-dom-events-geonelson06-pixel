// Feel free to use this array of fortunes or come up with your own!
const askButton = document.getElementById("ask-button");
const eightBall = document.getElementById("eight-ball");
const answer = document.getElementById("answer");

const fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "Very doubtful"
];

askButton.addEventListener("click", () => {
  eightBall.style.display = "none";

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  answer.textContent = fortunes[randomIndex];

  answer.style.display = "block";
});


/* 
TODO:
- [ ] Add an event listener to the ask button that:
  - [ ] hides the eight ball (hint: adjust the style.display property)
  - [ ] generates a random fortune from the fortunes array
  - [ ] shows the fortune in the answer element
*/
