import * as React from "react";
import ReactDataSheet from "react-datasheet";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { CATEGORIES } from '../constants/categories';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const initialGrid = [
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

const useStyles = makeStyles({
  cellSelected: {
    border: '1px double #2185d0',
    boxShadow: 'inset 0 -100px 0 rgba(33,133,208,.15)',
  },
  cellDefault: {

  }
});

export default class Create extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      grid: initialGrid,
    };
  }

  dataEditor = (props: any)=> {
    return (
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={props.value} onChange={(e)=>{
        props.onChange(e.target.value)
      }} onKeyDown={props.onKeyDown} />
    );
  }

  /**
   *
   * You can also strongly type all the Components or SFCs that you pass into ReactDataSheet.
   * https://github.com/nadbm/react-datasheet#cell-renderer
   * @param props
   */
  cellRenderer =  (
    props: any
  ) => {

    const styles = useStyles();

    return (
      <TableCell
        className={props?.selected ? styles.cellSelected : styles.cellDefault}
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


  rowRenderer =(props: any) => {
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

  sheetRenderer = (props: any) => (
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
        cellRenderer={this.cellRenderer}
        sheetRenderer={this.sheetRenderer}
        rowRenderer={this.rowRenderer}
        dataEditor={
          this.dataEditor
        }
      />
    );
  }
}
