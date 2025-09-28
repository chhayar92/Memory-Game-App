# Frontend Coding Exercise – Memory Game

**Memory Game**

A fun memory game built with React, TypeScript, and Tailwind CSS. Players can enter their name, select a board size, and test their memory skills by matching tiles.


**Features**

  1. Enter player name before starting the game.
  2. Select board size: 2x2, 4x4, 4x5, or 6x6. By default 2x2 size is selected.
  3. Responsive game board.
  4. Timer displayed during the game.
  5. Number of moves is displayed during the game.
  6. End screen showing player's name, total moves, and time taken.
  7. Prevents direct navigation to /game or /end without starting a game.
  8. The application displays an Error page for any unmatched or incorrect URL.
  9. Unit tests for the StartPage component using Vitest and React Testing Library.
  10. Styled with Tailwind CSS.



**Installation**


**Install dependencies:**

npm install


**Start the development server:**

npm run dev


**Open in your browser:**

http://localhost:5173


**Folder Structure**

src/

├─ components/       # Reusable UI components

├─ context/          # React context for game state

├─ pages/            # StartPage, GamePage, EndPage, ErrorPage

├─ utils/            # Format time function

├─ App.jsx           # Main app component with routing

├─ index.jsx         # Entry point

public/

├─ images/           # Game tile images

├─ growy_logo.svg    # Tile back image



**Usage**

  1. Enter your name on the Start Page.
  2. Select the board size.
  3. Click **Start Game**.
  4. Match all pairs to complete the game.
  5. See your time and moves on the End Page.
  6. Click **Play Again** to restart.


**Testing**

Run the unit tests:

npm run test


The StartPage component is covered to ensure:

  1. Input, select, and button render correctly.
  2. Validation for player name.
  3. Context functions are called when starting the game


**Customization**

  1. Add more tile images in the public/images folder.
  2. Adjust board sizes by modifying StartPage select options.
  3. Change the game’s visual style via Tailwind classes.

