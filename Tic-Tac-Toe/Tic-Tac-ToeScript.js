document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const restartBtn = document.getElementById('restartBtn');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartBtn.addEventListener('click', restartGame);

    function handleCellClick(e) {
        const index = e.target.dataset.index;
        if (board[index] || checkWinner()) return;
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
        } else if (board.every(cell => cell)) {
            alert('Draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function restartGame() {
        board = Array(9).fill(null);
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
    }
});
