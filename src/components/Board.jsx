import React from 'react';
import Square from './Square';

const board = () => {
  return (
    <div>
      <div>
        <Square value={8055} />
        <Square value={8055} />
        <Square value={8055} />
      </div>
      <div>
        <Square value={8055} />
        <Square value={8055} />
        <Square value={8055} />
      </div>
      <div>
        <Square value={8055} />
        <Square value={8055} />
        <Square value={8055} />
      </div>
    </div>
  );
};

export default board;
