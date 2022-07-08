import React from 'react';
import Square from './Square';

const board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={5} />
        <Square value={6} />
        <Square value={7} />
      </div>
      <div className="board-row">
        <Square value={8} />
        <Square value={9} />
        <Square value={0} />
      </div>
    </div>
  );
};

export default board;
