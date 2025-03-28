# Tic-Tac-Toe Game 🎮

This is a classic Tic-Tac-Toe game built with React.js and styled with Tailwind CSS. It features player turn tracking, win/draw detection, and a "New Game" button to reset the game. The game includes SVG icons for player moves (X and O), providing an enhanced visual experience.

## Features

- 🎮 **Two-player turns**: Switches between X and O on each move.
- 🏆 **Win detection**: Automatically detects the winner.
- 🤝 **Draw detection**: Detects when the game is a draw.
- 🔄 **New Game**: Start a new game with the "New Game" button.
- 🎨 **Tailwind CSS styling**: Modern, responsive, and minimalist design.
- 💻 **SVG icons**: Animated icons for player moves (Circle for O, X for X).
  
## Technologies Used

- **React.js**: Frontend library for building UI components.
- **Tailwind CSS**: For styling and responsive design.
- **SVG Icons**: Custom player icons for X and O.
  
## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:BurhanAhmad0/PRODIGY_WD_03.git
   cd PRODIGY_WD_03
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:5173` to play the game!

## Project Structure

- **` src/components`**: Contains the `Square` component for rendering individual squares on the board.
- **` src/utils`**: Contains utility functions like `calculateWinner` to determine the winner or draw.
- **` src/pages`**: Main game page with `Board` and `Game` components.
- **` src/layouts`**: Contains `Navbar` and `Footer` components for site navigation.

## Future Enhancements

- 💡 Add difficulty levels for single-player mode against AI.
- 📱 Improve responsiveness for smaller devices.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests to improve the game or add new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
