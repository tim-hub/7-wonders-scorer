import { CATEGORIES } from '../../constants/categories';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';
import * as React from 'react';

const RowRenderer = (props: any) => {
  const category = CATEGORIES[props.row];
  return (
    <TableRow>
      <TableCell variant={'head'} size={'small'}>
        <Chip label={category.label} icon={category.icon ? category.icon : <></>} />
      </TableCell>
      {props.children}
    </TableRow>
  );
};

export default RowRenderer;
