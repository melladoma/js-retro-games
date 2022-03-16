# js-retro-games

Tutorial by Ania Kubow, walkthrough [here](https://www.youtube.com/watch?v=ec8vSKJuZTk)

Live version can be seen [here](https://melladoma.github.io/js-retro-games/)

## Rock-paper-scissors

Description coming soon

## Memory Game

A retro grid-based game in vanilla JavaScript, HTML and CSS

### Initial tutorial principle

Deck cards are dynamically generated and randomly shuffled via script upon game loading. Card flipping is realised via setting and removing class attributes.

### Rules

Game starts by flipping over one card

- If the next card you flip matches, you are notified and you get +1 to your score => these cards disappear
- If the next card you flip does not match, you are notified and the cards flip back
  The game continues until you match all the cards on the board.

### Functions I added to the tutorial

- Fixed bug on clicking twice the same card (fixed loop)
- Replaced the alert pop-up by a timed message
- CSS formatting to integrate bumping animation
- Added reset button function : delete existing deck (via removing nodes) and re-generate a complete random deck

## Whac-a-mole

Description coming soon
