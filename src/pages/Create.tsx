import * as React from "react";
import ReactDataSheet from "react-datasheet";
// import "react-datasheet/lib/react-datasheet.css";
// import "./Create.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { CATEGORIES } from '../constants/categories';
import SvgIcon from '@material-ui/core/SvgIcon';
import SelectEditor from '../components/SelectEditor';

const initialGrid = [
  [
    { value: "Wonder 1"},
    {
      value: 'Wonder 2',
    },
    { value: "Player 3"},
    { value: "Player 4"},
    { value: "Player 5"},
    { value: "Player 6"},
    { value: "Player 7"},
  ],
  [
    { value: "Player 1", color: "red" },
    {
      value: 'Player 2',
    },
    { value: "Player 3"},
    { value: "Player 4"},
    { value: "Player 5"},
    { value: "Player 6"},
    { value: "Player 7"},
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
]




export interface GridElement extends ReactDataSheet.Cell<GridElement, number> {
  value: number | null | string;
  color?: string;
}

class DataSheet extends ReactDataSheet<GridElement, number> {}

interface AppState {
  grid: GridElement[][];
}

/**
 *
 * You can also strongly type all the Components or SFCs that you pass into ReactDataSheet.
 * https://github.com/nadbm/react-datasheet#cell-renderer
 * @param props
 */
const cellRenderer: ReactDataSheet.CellRenderer<GridElement, number> = (
  props
) => {
  const backgroundStyle =
    props.cell.value && props.cell.value < 0 ? { color: "red" } : undefined;

  return (
    <TableCell
      align={ props?.selected ? "left": "right"}
      onMouseDown={props.onMouseDown}
      onMouseOver={props.onMouseOver}
      onDoubleClick={props.onDoubleClick}
      onSelect={(a) => {
        console.log(a);
      }}
      onClick={(a) => {
        console.log(a);
      }}
    >
      {props.children}
    </TableCell>
  );
};

export default class Create extends React.Component<any, AppState> {
  constructor(props: never) {
    super(props);
    this.state = {
      grid: initialGrid,
    };
  }

  rowRender =(props: any) => {

    const category = CATEGORIES[props.row];

    return (
      <TableRow>
        <TableCell>
          <Chip label={category.label} icon={
            category.icon ?category.icon : <></>
          } />
        </TableCell>
        {props.children}
      </TableRow>
    )
  }

  sheetRender = (props: any) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableRow />
            {'ABCDEFG'.split('').map((col) => (
              <TableCell align={'center'}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </TableContainer>
  )

  render() {
    return (
      <DataSheet
        data={this.state.grid}
        valueRenderer={(cell, i, j) => {
          return cell.value;
        }}
        dataRenderer={(cell, i, j) => {
          return cell.value;
        }}
        // attributesRenderer={(cell) => {'data-hint': cell.hint || {}}
        onCellsChanged={(changes) => {
          const grid = this.state.grid.map((row) => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
        cellRenderer={cellRenderer}
        sheetRenderer={this.sheetRender}
        rowRenderer={this.rowRender}
      />
    );
  }
}
