/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

hand1 = ["8", "J", "A"];

function handValue(hand) {

  let total = 0;

  let fullHand = hand.reduce(function (a, b) { return a + b });
  console.log(fullHand);

  let containsAce = hand.includes('A');
  console.log(containsAce);

  for (i = 0; i < hand.length; i++) {

    switch (hand[i]) {
      case 'A':
        total += 11;
        break;
      case 'K': case 'Q': case 'J':
        total += 10;
        break;
      default:
        total += parseInt(hand[i]);
    }

    if (total > 21 && containsAce) {
      total -= 10;
    }

  }
  console.log(total);
  return total;
}

handValue(hand1);

function handValue2(hand) {

  let handArray = [];
  let total = 0;
  let containsAce = hand.includes('A');
  console.log(containsAce);

  for (let i in hand) {
    let card = hand[i];
    if (card == 'A') {
      handArray.push(11);
    } else if (card === 'J' || card === 'K' || card === 'Q') {
      handArray.push(10);
    } else {
      handArray.push(parseInt(hand[i]));
    }

    total = handArray.reduce(function (a, b) { return a + b });

    if (total > 21 && containsAce) {
      total -= 10;
    }
  }

  console.log(handArray);

  return total;

}

handValue2(hand1);


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/