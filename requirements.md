# Software Requirements
Link: [https://codefellows.github.io/common_curriculum/projects/SoftwareReqs](https://codefellows.github.io/common_curriculum/projects/SoftwareReqs)

1. Visioin of the product:

- Goal of the game is to play 8x8 grid. Grid is made of 64 cards total, where each card will be a pair of another card. Once both cards are selected, they will be removed from the grid. User plays until all matches are made.

2. What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)

- Helps users practice short term memory.

3. Why should we care about your product?

- Everyone needs to work on their memory. It is a muscle that needs to be worked on like everything else.

## Scope

1. IN - the product will allow for user interface an entry of name, favorite animal, and favorite color. 

- That data will then be stored in local memory for use on the second page with the card game.

- The web app will provide 8 cards to be selected for memory matching, then progress 8 cards at a time up to 32 cards max.

- The web app will provide an about us page for users to read about the app creators.

2. OUT - the program will never become a mobile app.

- It will never feature ads.

## MVP

- Minimum Viable Product will be user data transferred from entry page to game page where the cards will be displayed and the user will be able to click on each term iderated as a move until the game is completed.

## Stretch

- Adding multiple levels starting out with an 8 x 8 grid and progessing to 32 (16 x 16).

- Create leader board to register turns, scores, and time completed.

- Confetti once user finishes the game.


## Functional Requirements

1. An admin can create and delete user accounts

- User can create a name, choose their favorite animal, and favorite color. 

2. A user can update their profile information

- User can navigate through home page and re-insert name, animal, and color. 

3. A user can search all of the products in the inventory

- User is able to click anywhere on any card to reveal image on the other side, while only revealing two cards at a time.

## Dataflow

1. User submits information on homepage.

2. Inormation is stored as user clicks over to game.

3. As user progresses through game, information is stored in Local Storage to account for score.

4. Once user clicks through game, (32 cards total displayed on screen) game will end and total score will be displayed.








