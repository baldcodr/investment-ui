import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Container from "@material-ui/core/Container";

// Generate Order Data
function createData(id, date, stock, unit, amount, repName) {
  return { id, date, stock, unit, amount, repName };
}

const rows = [
  createData(0, "16 Mar, 2019", "ACCESS", "3719", 356612.44, "Muna"),
  createData(1, "16 Mar, 2019", "INTBREW", "2574", 586466.99, "Ngozi"),
  createData(2, "16 Mar, 2019", "INTBREW", "1253", 1005445.81, "Muna"),
  createData(3, "16 Mar, 2019", "ACCESS", "2000", 656434.39, "Muna"),
  createData(4, "15 Mar, 2019", "NEM", "5919", 2126435.79, "Muna")
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Transactions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Title>Recent Transactions</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Stock</b>
              </TableCell>
              <TableCell>
                <b>Unit</b>
              </TableCell>
              <TableCell align="right">
                <b>Amount</b>
              </TableCell>
              <TableCell align="right">
                <b>Account Manager</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.repName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="/dashboard">
            See more transactions
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}
