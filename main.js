// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 const likesArray = document.getElementsByClassName('like')

 for (const like of likesArray) {
   like.addEventListener('click', (e) => {likeAction(e.target)})
 }

 function likeAction(heart) {
  mimicServerCall("fake?")
  .then(submitLike(heart))
  .catch(() => {
    alert("ERROR")
  })

  function submitLike(heart) {
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.style.color = 'red'
    } else {
      heart.innerText = EMPTY_HEART
      heart.style.color = ''
    }

  }

 }




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
