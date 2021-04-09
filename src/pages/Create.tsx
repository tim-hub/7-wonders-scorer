import * as React from 'react';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";

export interface GridElement extends ReactDataSheet.Cell<GridElement, number> {
  value: number | null | string;
}

class MyReactDataSheet extends ReactDataSheet<GridElement, number> { }

interface AppState {
  grid: GridElement[][];
}

//You can also strongly type all the Components or SFCs that you pass into ReactDataSheet.
let cellRenderer: ReactDataSheet.CellRenderer<GridElement, number> = (props) => {
  const backgroundStyle = props.cell.value && props.cell.value < 0 ? {color: 'red'} : undefined;
  return (
    <td style={backgroundStyle} onMouseDown={props.onMouseDown} onMouseOver={props.onMouseOver} onDoubleClick={props.onDoubleClick}  className="cell">
      {props.children}
    </td>
  )
}

export default class Create extends React.Component<{}, AppState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      grid: [
        [
          { readOnly: true, value: '' },
          { value: 'A', readOnly: true },
          { value: 'B', readOnly: true },
          { value: 'C', readOnly: true },
          { value: 'D', readOnly: true },
        ],
        [
          { readOnly: true, value: 1 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 2 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
        [
          { readOnly: true, value: 3 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 4 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
      ]
    }
  }
  render () {
    return (
      <MyReactDataSheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row])
          changes.forEach(({cell, row, col, value}) => {
            grid[row][col] = {...grid[row][col], value}
          })
          this.setState({grid})
        }}
        cellRenderer={cellRenderer}
      />
    )
  }
}
