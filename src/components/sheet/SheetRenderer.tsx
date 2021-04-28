import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import * as React from "react";

const SheetRenderer = (props: any) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableRow />
          {"ABCDEFG".split("").map((col) => (
            <TableCell align={"center"} variant={"head"} size={"small"}>
              {col}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{props.children}</TableBody>
    </Table>
  </TableContainer>
);

export default SheetRenderer;
