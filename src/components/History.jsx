import React from 'react';

const History = ({ hsitory, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to Game Start' : `Go to Move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
