class Deck{
    constructor(){
        this.deck = [];
    }

    reset(){

        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }
        //console.log(this.deck[2]);
        return this;
    }
    
    shuffle(){
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }


    deal(){
        var card = this.deck.pop();
        return card;
    }
}


class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = [];
    }

    takeCard(deck){
        var card = deck.deal();
        this.hand.push(card);
        return this;
    }
    showHand(){
        console.log(this.hand);
        return this;
    }

    discardCard(){
        card = this.hand.pop;
        return card;
    }
}
const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1 = new Player('Nicolas');
player1.takeCard(deck1).showHand();
player1.takeCard(deck1).showHand();
console.log(deck1);
