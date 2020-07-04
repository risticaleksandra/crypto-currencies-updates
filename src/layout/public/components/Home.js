import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Home = ({ tickers }) => {
  const tabelHeaders = [
    { value: "index", name: "#" },
    { value: "symbol", name: "Symbol" },
    { value: "dailyChange", name: "Daily Change" },
    { value: "volume", name: "Volume" },
    { value: "lastPrice", name: "Last Price" },
  ];

  return (
    <BootstrapTable
      keyField="index"
      data={Object.values(tickers).map((row, index) => ({
        ...row,
        index: index + 1,
      }))}
      hover={true}
    >
      {tabelHeaders.map((column) => (
        <TableHeaderColumn dataField={column.value} dataSort={true} width="20%">
          {column.name}
        </TableHeaderColumn>
      ))}
    </BootstrapTable>
  );
};
export default Home;
