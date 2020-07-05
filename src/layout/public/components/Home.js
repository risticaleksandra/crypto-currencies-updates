import React, { useMemo } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";

const columns = [
  {
    dataField: "index",
    text: "#",
  },
  {
    dataField: "symbol",
    text: "Symbol",
  },
  {
    dataField: "dailyChange",
    text: "Daily Change",
  },

  {
    dataField: "volume",
    text: "Volume",
  },
  {
    dataField: "lastPrice",
    text: "Last Price",
  },
];

const Home = ({ tickers }) => {
  return useMemo(() => {
    return (
      <Container fluid>
        <Row className="wrapper">
          <Col className="flexAlligmentCenter">
            <Table
              striped
              variant="light"
              hover
              size="sm"
              className="homeTable"
              borderless
            >
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="homeTableHeader">
                      {column.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.values(tickers).map((row, index) => (
                  <tr key={index} className="tableInfo">
                    <td>{index + 1}</td>
                    <td>{row.symbol}</td>
                    <td>{row.dailyChange}</td>
                    <td>{row.volume}</td>
                    <td>{row.lastPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }, [tickers]);
};

export default Home;
