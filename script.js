const content = document.querySelector('.content');
const h3Elements = content.querySelectorAll('h3');

/**
* TODO: Implement a function that clears all the content
* prior to generating new random content
*/
function clearAll() {
  const genContentElements = content.querySelectorAll('.gen-content');
  genContentElements.forEach((ele) => {
    content.removeChild(ele);
  })
}

/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  const randImg = getRandomData('memes');

  const newImgElement = document.createElement('img');
  newImgElement.setAttribute('src', randImg);
  newImgElement.setAttribute('class', 'gen-content');  

  clearAll();
  content.insertBefore(newImgElement, h3Elements[1]);
}

/**
* TODO: 
* - Show a random joke in the correct location
* - Never show more than 1 joke at a time
*/
function showJoke() {
  const randJokeText = getRandomData('jokes');

  const newJokeElement = document.createElement('p');
  newJokeElement.textContent = randJokeText;
  newJokeElement.setAttribute('class', 'gen-content');  

  clearAll();
  content.insertBefore(newJokeElement, h3Elements[2]);
}

/**
* TODO: 
* - Show a random quote in the correct location
* - Never show more than 1 quote at a time
*/
function showQuote() {
  const randQuote = getRandomData('quotes');

  const newQuoteElement = document.createElement('p');
  newQuoteElement.textContent = `"${randQuote.quote}"`;
  newQuoteElement.setAttribute('class', 'gen-content');

  const newAuthorElement = document.createElement('p');
  newAuthorElement.textContent = '- ' + randQuote.author;
  newAuthorElement.setAttribute('class', 'gen-content');    

  clearAll();
  content.insertBefore(newAuthorElement, h3Elements[3]);  
  content.insertBefore(newQuoteElement, newAuthorElement);
}

/**
* TODO: 
* - Show a random riddle in the correct location
* - Never show more than 1 riddle at a time
* - Always hide the riddle's answer initially
*/
function showRiddle() {
  const randRiddle = getRandomData('riddles');
  const { question, answer } = randRiddle;

  const newRiddleElement = document.createElement('p');
  newRiddleElement.textContent = question;
  newRiddleElement.setAttribute('class', 'gen-content');
  newRiddleElement.setAttribute('id', 'riddle-question');  

  const newAnswerElement = document.createElement('p');
  newAnswerElement.textContent = `- ` + answer;
  newAnswerElement.setAttribute('class', 'gen-content');
  newAnswerElement.setAttribute('id', 'riddle-answer');  
  newAnswerElement.hidden = true;

  clearAll();
  content.appendChild(newRiddleElement);
  content.appendChild(newAnswerElement);
}

/**
* TODO: Unhide the riddle's answer
* - If there is no riddle shown, alert the user that there is no riddle
* - If there is a riddle shown and an answer shown, alert the user
*   that the answer is already revealed
* - If there is a riddle shown but no answer, unhide the answer!
*/
function revealAnswer() {
  const curRiddleElement = content.querySelector('#riddle-question');
  const curAnswerElement = content.querySelector('#riddle-answer');

  if (curRiddleElement === null) {
    alert('There is no riddle to show the answer for!');
  }
  else if (curAnswerElement.hidden) {
    curAnswerElement.hidden = false;
  }
  else if (!curAnswerElement.hidden) {
    alert('The answer is already revealed!');
  }
}

/**
* This function is used to get random data.  Don't worry about how it works, just know how to use it.  Usage is pre-filled in the functions above already, but here's an explanation of the function anyways.
* 
* Valid arguments:
*
* 'memes', 'jokes', 'quotes', 'riddles'
*
* Return values:
* 
* For meme data: 
* A string representing an image url
* 
* For joke data: 
* A string representing the joke
* 
* For quote data:
* An object - { quote: '', author: '' }
* 
* For riddle data:
* An object - { question: '', answer: '' }
*
* Example usage: getRandomData('quotes');
*/
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
  { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
  { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
  { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
  { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
  { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
  { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
];

/**
 * Helper functions
 */

function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles
};
