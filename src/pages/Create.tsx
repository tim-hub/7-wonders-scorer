import * as React from "react";
import ReactDataSheet from "react-datasheet";
import SelectEditor from '../components/sheet/SelectEditor';
import DataEditor from '../components/sheet/DateEditor';
import CellRenderer from '../components/sheet/CellRenderer';
import RowRenderer from '../components/sheet/RowRenderer';
import SheetRenderer from '../components/sheet/SheetRenderer';

const initialGrid = [
  [
    { value: "W1", dataEditor: SelectEditor},
    {
      value: 'W2',
    },
    { value: "W3"},
    { value: "W4"},
    { value: "W5"},
    { value: "W6"},
    { value: "W7"},
  ],
  [
    { value: "P1"},
    {
      value: 'P2',
    },
    { value: "P3"},
    { value: "P4"},
    { value: "P5"},
    { value: "P6"},
    { value: "P7"},
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



export default class Create extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      grid: initialGrid,
    };
  }

  render() {
    return (
      <DataSheet
        data={this.state.grid}
        // attributesRenderer={(cell) => {'data-hint': cell.hint || {}}
        onCellsChanged={(changes) => {
          const grid = this.state.grid.map((row) => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
        valueRenderer={(cell, i, j) => {
          return cell.value;
        }}
        dataRenderer={(cell, i, j) => {
          return cell.value;
        }}
        cellRenderer={CellRenderer}
        sheetRenderer={SheetRenderer}
        rowRenderer={RowRenderer}
        dataEditor={DataEditor}
      />
    );
  }
}
