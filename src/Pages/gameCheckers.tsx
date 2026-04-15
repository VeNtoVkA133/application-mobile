import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import Square from "../Components/_Square";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler.js";

// Типы фигур
type PieceType = 'man' | 'king';
type Player = 'white' | 'black' | null;

// Интерфейс для клетки
interface Cell {
  piece: Player;
  type: PieceType | null;
  isHighlighted: boolean;
}

interface massType {
    id: number,
    color: string
}


const stratInitField = ():Cell[][] => {
  const newField: Cell[][] = Array(8).fill(null).map(() =>
    Array(8).fill(null).map(() => ({
      piece: null,
      type: null,
      isHighlighted: false,
    }))
  );

    // Расстановка черных шашек (сверху)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) {
        newField[row][col] = {
          piece: 'black',
          type: 'man',
          isHighlighted: false,
        };
      }
    }
  }

  // Расстановка белых шашек (снизу)
  for (let row = 5; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) {
        newField[row][col] = {
          piece: 'white',
          type: 'man',
          isHighlighted: false,
        };
      }
    }
  }

  return newField;
};




const GameCheckers = () => {
    const [field, setField] = useState<Cell[][]>(stratInitField());
    const [currentPlayer, setCurrentPlayer] = useState<Player>('white');
    const [selectedPiece, setSelectedPiece] = useState<{
      row: number;
      col: number;
    } | null>(null);


    const handleClick = () => {
      setField(stratInitField())
    }


    return (
        <main style={{}}>
            <div>
              <button onClick={handleClick}>новая игра</button>
                {field}
            </div>
        </main>
    )
}

export default GameCheckers