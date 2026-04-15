import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert,
} from 'react-native';

const { width } = Dimensions.get('window');
const BOARD_SIZE = 8;
const CELL_SIZE = width / BOARD_SIZE;

// Типы фигур
type PieceType = 'man' | 'king';
type Player = 'white' | 'black' | null;

// Интерфейс для клетки
interface Cell {
    piece: Player;
    type: PieceType | null;
    isHighlighted: boolean;
}

// Начальная расстановка
const getInitialBoard = (): Cell[][] => {
    const board: Cell[][] = Array(BOARD_SIZE).fill(null).map(() =>
        Array(BOARD_SIZE).fill(null).map(() => ({
            piece: null,
            type: null,
            isHighlighted: false,
        }))
    );

    // Расстановка черных шашек (сверху)
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if ((row + col) % 2 === 1) {
                board[row][col] = {
                    piece: 'black',
                    type: 'man',
                    isHighlighted: false,
                };
            }
        }
    }

    // Расстановка белых шашек (снизу)
    for (let row = 5; row < 8; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if ((row + col) % 2 === 1) {
                board[row][col] = {
                    piece: 'white',
                    type: 'man',
                    isHighlighted: false,
                };
            }
        }
    }

    return board;
};

const CheckersGame: React.FC = () => {
    const [board, setBoard] = useState<Cell[][]>(getInitialBoard());
    const [currentPlayer, setCurrentPlayer] = useState<Player>('white');
    const [selectedPiece, setSelectedPiece] = useState<{
        row: number;
        col: number;
    } | null>(null);
    const [validMoves, setValidMoves] = useState<{ row: number; col: number }[]>(
        []
    );
    const [mustCapture, setMustCapture] = useState<boolean>(false);
    const [winner, setWinner] = useState<Player>(null);

    // Проверка, есть ли у игрока обязательные взятия
    const hasAnyCapture = (player: Player): boolean => {
        for (let row = 0; row < BOARD_SIZE; row++) {
            for (let col = 0; col < BOARD_SIZE; col++) {
                const cell = board[row][col];
                if (cell.piece === player) {
                    const captures = getValidCaptures(row, col);
                    if (captures.length > 0) return true;
                }
            }
        }
        return false;
    };

    // Получение всех допустимых ходов для шашки
    const getValidMoves = (row: number, col: number): { row: number; col: number }[] => {
        const cell = board[row][col];
        if (!cell.piece || cell.piece !== currentPlayer) return [];

        const moves: { row: number; col: number }[] = [];
        const direction = cell.piece === 'white' ? -1 : 1;

        // Обычные ходы
        if (!mustCapture) {
            // Ходы по диагонали
            const possibleMoves = [
                { row: row + direction, col: col - 1 },
                { row: row + direction, col: col + 1 },
            ];

            // Для дамок - ходы в обе стороны
            if (cell.type === 'king') {
                possibleMoves.push(
                    { row: row - direction, col: col - 1 },
                    { row: row - direction, col: col + 1 }
                );
            }

            possibleMoves.forEach((move) => {
                if (
                    move.row >= 0 &&
                    move.row < BOARD_SIZE &&
                    move.col >= 0 &&
                    move.col < BOARD_SIZE &&
                    !board[move.row][move.col].piece
                ) {
                    moves.push(move);
                }
            });
        }

        // Ходы со взятием
        const captures = getValidCaptures(row, col);
        moves.push(...captures);

        return moves;
    };

    // Получение всех возможных взятий для шашки
    const getValidCaptures = (row: number, col: number): { row: number; col: number }[] => {
        const cell = board[row][col];
        if (!cell.piece) return [];

        const captures: { row: number; col: number }[] = [];
        const directions = cell.type === 'king'
            ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
            : cell.piece === 'white'
                ? [[-1, -1], [-1, 1]]
                : [[1, -1], [1, 1]];

        directions.forEach(([dRow, dCol]) => {
            const jumpRow = row + dRow * 2;
            const jumpCol = col + dCol * 2;
            const midRow = row + dRow;
            const midCol = col + dCol;

            if (
                jumpRow >= 0 && jumpRow < BOARD_SIZE &&
                jumpCol >= 0 && jumpCol < BOARD_SIZE &&
                board[midRow][midCol].piece &&
                board[midRow][midCol].piece !== cell.piece &&
                !board[jumpRow][jumpCol].piece
            ) {
                captures.push({ row: jumpRow, col: jumpCol });
            }
        });

        return captures;
    };

    // Выполнение хода
    const makeMove = (toRow: number, toCol: number) => {
        if (!selectedPiece) return;

        const fromRow = selectedPiece.row;
        const fromCol = selectedPiece.col;
        const isCapture = Math.abs(toRow - fromRow) === 2;

        const newBoard = [...board.map(row => [...row])];
        const piece = newBoard[fromRow][fromCol];

        // Перемещение шашки
        newBoard[toRow][toCol] = { ...piece };
        newBoard[fromRow][fromCol] = {
            piece: null,
            type: null,
            isHighlighted: false,
        };

        // Обработка взятия
        if (isCapture) {
            const midRow = (fromRow + toRow) / 2;
            const midCol = (fromCol + toCol) / 2;
            newBoard[midRow][midCol] = {
                piece: null,
                type: null,
                isHighlighted: false,
            };

            // Проверка на возможность продолжения взятия
            const additionalCaptures = getValidCapturesForBoard(newBoard, toRow, toCol);
            if (additionalCaptures.length > 0) {
                setSelectedPiece({ row: toRow, col: toCol });
                setValidMoves(additionalCaptures);
                setBoard(newBoard);
                return;
            }
        }

        // Превращение в дамку
        if ((piece.piece === 'white' && toRow === 0) ||
            (piece.piece === 'black' && toRow === BOARD_SIZE - 1)) {
            newBoard[toRow][toCol].type = 'king';
        }

        setBoard(newBoard);
        setSelectedPiece(null);
        setValidMoves([]);

        // Смена игрока
        const nextPlayer = currentPlayer === 'white' ? 'black' : 'white';
        setCurrentPlayer(nextPlayer);

        // Проверка на победу
        checkWinner(newBoard);
    };

    // Получение взятий для конкретной позиции на доске
    const getValidCapturesForBoard = (boardState: Cell[][], row: number, col: number): { row: number; col: number }[] => {
        const cell = boardState[row][col];
        if (!cell.piece) return [];

        const captures: { row: number; col: number }[] = [];
        const directions = cell.type === 'king'
            ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
            : cell.piece === 'white'
                ? [[-1, -1], [-1, 1]]
                : [[1, -1], [1, 1]];

        directions.forEach(([dRow, dCol]) => {
            const jumpRow = row + dRow * 2;
            const jumpCol = col + dCol * 2;
            const midRow = row + dRow;
            const midCol = col + dCol;

            if (
                jumpRow >= 0 && jumpRow < BOARD_SIZE &&
                jumpCol >= 0 && jumpCol < BOARD_SIZE &&
                boardState[midRow][midCol].piece &&
                boardState[midRow][midCol].piece !== cell.piece &&
                !boardState[jumpRow][jumpCol].piece
            ) {
                captures.push({ row: jumpRow, col: jumpCol });
            }
        });

        return captures;
    };

    // Обработка клика по клетке
    const handleCellPress = (row: number, col: number) => {
        if (winner) {
            Alert.alert('Игра окончена', `Победитель: ${winner === 'white' ? 'Белые' : 'Черные'}!`);
            return;
        }

        // Если есть выбранная шашка
        if (selectedPiece) {
            const isValidMove = validMoves.some(
                move => move.row === row && move.col === col
            );

            if (isValidMove) {
                makeMove(row, col);
            } else {
                setSelectedPiece(null);
                setValidMoves([]);
            }
        } else {
            // Выбор шашки
            const cell = board[row][col];
            if (cell.piece === currentPlayer) {
                // Проверка обязательных взятий
                const mustCaptureNow = hasAnyCapture(currentPlayer);
                setMustCapture(mustCaptureNow);

                const moves = getValidMoves(row, col);

                // Если есть обязательные взятия, показываем только их
                const availableMoves = mustCaptureNow
                    ? moves.filter(move => Math.abs(move.row - row) === 2)
                    : moves;

                if (availableMoves.length > 0) {
                    setSelectedPiece({ row, col });
                    setValidMoves(availableMoves);
                }
            }
        }
    };

    // Проверка победителя
    const checkWinner = (boardState: Cell[][]) => {
        let hasWhite = false;
        let hasBlack = false;

        for (let row = 0; row < BOARD_SIZE; row++) {
            for (let col = 0; col < BOARD_SIZE; col++) {
                if (boardState[row][col].piece === 'white') hasWhite = true;
                if (boardState[row][col].piece === 'black') hasBlack = true;
            }
        }

        if (!hasWhite) setWinner('black');
        if (!hasBlack) setWinner('white');
    };

    // Сброс игры
    const resetGame = () => {
        setBoard(getInitialBoard());
        setCurrentPlayer('white');
        setSelectedPiece(null);
        setValidMoves([]);
        setWinner(null);
        setMustCapture(false);
    };

    // Отрисовка клетки
    const renderCell = (row: number, col: number) => {
        const cell = board[row][col];
        const isDark = (row + col) % 2 === 1;
        const isSelected = selectedPiece?.row === row && selectedPiece?.col === col;
        const isValidMove = validMoves.some(move => move.row === row && move.col === col);

        let backgroundColor = '#F0D9B5';
        if (isDark) backgroundColor = '#B58863';
        if (isSelected) backgroundColor = '#FFD700';
        if (isValidMove) backgroundColor = '#90EE90';

        return (
            <TouchableOpacity
                key={`${row}-${col}`}
                style={[styles.cell, { backgroundColor }]}
                onPress={() => handleCellPress(row, col)}
            >
                {cell.piece && (
                    <View
                        style={[
                            styles.piece,
                            {
                                backgroundColor: cell.piece === 'white' ? '#FFFFFF' : '#000000',
                                borderColor: cell.piece === 'white' ? '#000' : '#FFF',
                            },
                        ]}
                    >
                        {cell.type === 'king' && (
                            <Text style={styles.kingSymbol}>👑</Text>
                        )}
                    </View>
                )}
                {isValidMove && !cell.piece && <View style={styles.hint} />}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Шашки</Text>
                <Text style={styles.playerTurn}>
                    Ход: {currentPlayer === 'white' ? '⚪ Белые' : '⚫ Черные'}
                </Text>
                {winner && (
                    <Text style={styles.winner}>
                        Победитель: {winner === 'white' ? '⚪ Белые' : '⚫ Черные'}! 🎉
                    </Text>
                )}
                <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                    <Text style={styles.resetButtonText}>Новая игра</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.board}>
                {board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    playerTurn: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: 10,
    },
    winner: {
        fontSize: 24,
        color: '#FFD700',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resetButton: {
        backgroundColor: '#E74C3C',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    resetButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    board: {
        backgroundColor: '#8B5A2B',
        borderRadius: 10,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: CELL_SIZE,
        height: CELL_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    piece: {
        width: CELL_SIZE * 0.8,
        height: CELL_SIZE * 0.8,
        borderRadius: CELL_SIZE * 0.4,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    kingSymbol: {
        fontSize: CELL_SIZE * 0.4,
        position: 'absolute',
    },
    hint: {
        width: CELL_SIZE * 0.3,
        height: CELL_SIZE * 0.3,
        borderRadius: CELL_SIZE * 0.15,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
    },
});

export default CheckersGame;