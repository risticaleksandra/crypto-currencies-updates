import React, { useMemo } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Profile from "../../private/components/Profile";

const tabelHeaders = [
  { value: "index", name: "#" },
  { value: "symbol", name: "Symbol" },
  { value: "dailyChange", name: "Daily Change" },
  { value: "volume", name: "Volume" },
  { value: "lastPrice", name: "Last Price" },
];

const Home = ({ tickers }) => {
  return useMemo(() => {
    return (
        <BootstrapTable
          keyField="index"
          data={Object.values(tickers).map((row, index) => ({
            ...row,
            index: index + 1,
          }))}
          hover={true}
        >
          {tabelHeaders.map((column, index) => (
            <TableHeaderColumn
              dataField={column.value}
              dataSort={true}
              width="20%"
            >
              {column.name}
            </TableHeaderColumn>
          ))}
        </BootstrapTable>
    );
  }, [tickers]);
};

export default Home;
