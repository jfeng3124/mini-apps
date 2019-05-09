import Cell from './Cell.jsx';

const Row = ({ row, play }) => (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
);

export default Row;