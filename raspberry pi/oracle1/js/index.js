
function beAnOracle() {
  var countEl = document.querySelector('.counter');
  var countBar = document.querySelector('.progress-bar');
  var x = 0;

  function clearScreen() {

    //x = 0;
    countEl.innerHTML = "";
    //console.log(x)
  }

  function addNewComment() {
    var randomCommentNumber = Math.floor(Math.random() * 69);
    console.log(randomCommentNumber);
    switch(randomCommentNumber)
    {
    case 0:
        countEl.innerHTML = "Your senses are correct.";
        break;
    case 1:
        countEl.innerHTML = "Allow yourself to be in your power.";
        break;
    case 2:
        countEl.innerHTML = "Listen first.";
        break;
    case 3:
        countEl.innerHTML = "The appropriate answer will reveal itself.";
        break;
    case 4:
        countEl.innerHTML = "Keep what's true in front of you.";
        break;
    case 5:
        countEl.innerHTML = "You are the source of your wisdom";
        break;
    case 6:
        countEl.innerHTML = "Start at the beginning";
        break;
    case 7:
        countEl.innerHTML = "Recognize the opportunity laid in front of you.";
        break;
    case 8:
        countEl.innerHTML = "Opening doors reveals possibilities";
        break;
    case 9:
        countEl.innerHTML = "Your inner voice whispers the truth.";
        break;
    case 10:
        countEl.innerHTML = "Speak your truth even if your voice shakes.  Emma Goldman";
        break;
    case 11:
        countEl.innerHTML = "You own everything that happens to you.   Anne Lamontt";
        break;
    case 12:
        countEl.innerHTML = "Introduce yourself to those you find around you.";
        break;
    case 13:
        countEl.innerHTML = "You are enough";
        break;
    case 14:
        countEl.innerHTML = "Comparison kills creativity";
        break;
    case 15:
        countEl.innerHTML = "Listen to the truth within your heart.";
        break;
    case 16:
        countEl.innerHTML = "Being nice isn't the same as being sincere.";
        break;
    case 17:
        countEl.innerHTML = "Know your humanity to be a warrior in life.";
        break;
    case 18:
        countEl.innerHTML = "Acknowledgement is the sweetest, easiest gift to a friend.";
        break;
    case 19:
        countEl.innerHTML = "Even those who wait still serve";
        break;
    case 20:
        countEl.innerHTML = "Your key is made of stone and starlight";
        break;
    case 21:
        countEl.innerHTML = "Bitterness does not bare fruit";
        break;
    case 22:
        countEl.innerHTML = "If you chase two rabbits you will catch none";
        break;
    case 23:
        countEl.innerHTML = "Fear is the mindkiller       Frank Herbert";
        break;
    case 24:
        countEl.innerHTML = "Feel fear and do it anyway";
        break;
    case 25:
        countEl.innerHTML = "Who would we be without our pain?";
        break;
    case 26:
        countEl.innerHTML = "Tell your story. ";
        break;
    case 27:
        countEl.innerHTML = "The oak does not compare itself to the bamboo nor the bamboo to the oak.";
        break;
    case 28:
        countEl.innerHTML = "Today is an opportunity to begin another adventure.";
        break;
    case 29:
        countEl.innerHTML = "Through pain, love is medicine.";
        break;
    case 30:
        countEl.innerHTML = "Each soul carries a universe inside of it. Discover yours.";
        break;
    case 31:
        countEl.innerHTML = "Breathe is the truth of this moment.";
        break;
    case 32:
        countEl.innerHTML = "Where ever you go, there you are.       Buckaroo Banzai";
        break;
    case 33:
        countEl.innerHTML = "Dance with the one who brung you.";
        break;
    case 34:
        countEl.innerHTML = "There is no try, only do.";
        break;
    case 35:
        countEl.innerHTML = "Don't bite the hand that feeds you.";
        break;
    case 36:
        countEl.innerHTML = "Delay is increasingly expensive.";
        break;
    case 37:
        countEl.innerHTML = "Yes is the world";
        break;
    case 38:
        countEl.innerHTML = "Yes is easy, but no is more defining.";
        break;
    case 39:
        countEl.innerHTML = "Saying no to one thing is saying yes to another.";
        break;
    case 40:
        countEl.innerHTML = "Embrace failure.";
        break;
    case 41:
        countEl.innerHTML = "Don't comment, create; don't describe, evoke; don't refer, be.";
        break;
    case 42:
        countEl.innerHTML = "Be yourself, unless you're a jerk.";
        break;
    case 43:
        countEl.innerHTML = "Stop shoulding all over yourself.";
        break;
    case 44:
        countEl.innerHTML = "It is clear you have given too many fucks about that.";
        break;
    case 45:
        countEl.innerHTML = "Dance like no on is watching.";
        break;
    case 46:
        countEl.innerHTML = "The only thing to fear is fear itself..... and zombies.";
        break;
    case 47:
        countEl.innerHTML = "We should consider every day lost on which we have not danced at least once.";
        break;
    case 48:
        countEl.innerHTML = "Stop asking screens for advice.";
        break;
    case 49:
        countEl.innerHTML = "What other people think of you is none of your business.";
        break;
    case 50:
        countEl.innerHTML = "Before you embark on a journey of revenge, dig two graves.     Confuscious";
        break;
    case 51:
        countEl.innerHTML = "If you point your finger, three fingers point back.         Confuscious";
        break;
    case 52:
        countEl.innerHTML = "The person who has no imagination has no wings.     Muhammad Ali";
        break;
    case 53:
        countEl.innerHTML = "Feet, what do I need them for when I have wings to fly.    Frida Kahlo";
        break;
    case 54:
        countEl.innerHTML = "Nah, try again.";
        break;
    case 55:
        countEl.innerHTML = "Yes.";
        break;
    case 56:
        countEl.innerHTML = "No.";
        break;
    case 57:
        countEl.innerHTML = "Yeah, well, like, that is just your opinion, man.    The Big Lebaowski";
        break;
    case 58:
        countEl.innerHTML = "Dreams are often most profound when they seem the most crazy.";
        break;
    case 59:
        countEl.innerHTML = "Intent and outcome are hardly coincidence.";
        break;
    case 60:
        countEl.innerHTML = "Hear what people say, listen to what people do.      Jean Margaret";
        break;
    case 61:
        countEl.innerHTML = "I don't think you mean what you think it means.";
        break;
    case 62:
        countEl.innerHTML = "Be the whiskey in the room full of wine.";
        break;
    case 63:
        countEl.innerHTML = "We learn most from our pain.";
        break;
    case 64:
        countEl.innerHTML = "Raise your words, not your voice. It is rain that grows flowers, not thunder.    Rumi";
        break;
    case 65:
        countEl.innerHTML = "Yesterday I was clever so I wanted to change the world. Today I am wise so I am changing myself.     Rumi";
        break;
    case 66:
        countEl.innerHTML = "Your path is for you too to walk.";
        break;
    case 67:
        countEl.innerHTML = "Choose a path where cobblestones are easily put in front of you.";
        break;
    case 68:
        countEl.innerHTML = "They place doubts about yourself as you walk down the path, but you need only walk past them as if they were fallen leaves.   Vernon Howard";
        break;


    }

  }
  document.onkeypress=function(e){
    console.log("key pressed");
    addNewComment();
    //var audioUrl = "audio/cash_register.mp3";
    //var audio = new Audio(audioUrl);
    //audio.play();
  }
  document.onclick = function(e){
    console.log("clearing");
    clearScreen();
    //var audioUrl = "audio/beep.mp3";
    //var audio = new Audio(audioUrl);
    //audio.play();
  }
}

beAnOracle();
