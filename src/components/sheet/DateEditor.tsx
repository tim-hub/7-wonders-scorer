import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const DataEditor = (props: any)  => {
  const ref = React.createRef();
  const { value, onKeyDown, onChange } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current.focus();
  })

  const useStyles = makeStyles({
    input: {
      maxWidth:'81px',
    }
  });


  return (
    <Input
      className={useStyles().input}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputRef={ref}
      autoFocus
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyDown={onKeyDown}
      type={'number'}
    />
  );
}

export default DataEditor;
