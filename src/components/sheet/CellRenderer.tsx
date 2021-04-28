import TableCell from '@material-ui/core/TableCell';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cellSelected: {
    border: '1px double #2185d0',
    boxShadow: 'inset 0 -100px 0 rgba(33,133,208,.15)',
    // width: '81px',
    // fontSize: '0.8em',
  },
  cellDefault: {
    // width: '81px',
    // fontSize: '0.8em',
  }
});

/**
 *
 * You can also strongly type all the Components or SFCs that you pass into ReactDataSheet.
 * https://github.com/nadbm/react-datasheet#cell-renderer
 * @param props
 */
const CellRenderer = (props: any) => {
  const styles = useStyles();

  return (
    <TableCell
      className={props?.selected ? styles.cellSelected : styles.cellDefault}
      size={'small'}
      variant={'body'}
      width={'10%'}
      onMouseDown={props.onMouseDown}
      onMouseOver={props.onMouseOver}
      onDoubleClick={props.onDoubleClick}
      onSelect={props.onSelect}
      onClick={props.onClick}
    >
      {props.children}
    </TableCell>
  );
};

export default CellRenderer;
