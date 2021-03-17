import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';




export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  export const button=withStyles((theme)=>({
    padding:10,
    height:20
  }))(Button);
  
  export function createData(serial_no, Products, PRICE, TAX, TOTAL_PRICE) {
    return { serial_no, Products, PRICE, TAX, TOTAL_PRICE };
  }


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);