import React from "react";
import { useHistory } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Home = () => {
  const history = useHistory();
  let currencies = [
    {
      id: 1,
      dailyChange: "-5.9%",
      symbol: "BTCUSD",
      volume: 4648764,
      lastPrice: 1235.23,
    },
    {
      id: 2,
      dailyChange: "8.9%",
      symbol: "BTCEUR",
      volume: 487877,
      lastPrice: 12535.23,
    },
    {
      id: 3,
      dailyChange: "-1.5%",
      symbol: "ETHUSD",
      volume: 46483764,
      lastPrice: 120.23,
    },
    {
      id: 4,
      dailyChange: "-50.9%",
      symbol: "ETHEUR",
      volume: 4458764,
      lastPrice: 8235.23,
    },
    {
      id: 5,
      dailyChange: "-2.9%",
      symbol: "EOSUSD",
      volume: 56894,
      lastPrice: 125.23,
    },
  ];
  return (
    <BootstrapTable data={currencies} hover={true}>
      <TableHeaderColumn
        dataField="id"
        isKey={true}
        dataSort={true}
        width="20%"
      >
        #
      </TableHeaderColumn>
      <TableHeaderColumn dataField="symbol" dataSort={true} width="20%">
        Symbol
      </TableHeaderColumn>
      <TableHeaderColumn dataField="dailyChange" dataSort={true} width="20%">
        Daily dailyChange
      </TableHeaderColumn>
      <TableHeaderColumn dataField="volume" width="20%">
        Volume
      </TableHeaderColumn>
      <TableHeaderColumn dataField="lastPrice" width="20%">
        Last Price
      </TableHeaderColumn>
    </BootstrapTable>
  );
};
export default Home;
