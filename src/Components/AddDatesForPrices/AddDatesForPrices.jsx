import React, { useState } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import DateRangeIcon from '@material-ui/icons/DateRange';
import StarRateIcon from '@material-ui/icons/StarRate';
import "../AddDatesForPrices/AddDatesForPrices.css";

function AddDatesForPrices(
  {
    //   handleChange,
    //   handleSubmit,
    //   clicked,
    //   handleClick,
    //   toggleModal,
  }
) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="add-dates-container">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Add dates for prices</Card.Title>
          </Col>
          <Col>
            <Row className="d-flex align-items-center">
              <p><StarRateIcon/>4.5</p>
              <p className="text-muted ml-2" style={{fontSize:"10px"}}>(No. Reviews)</p>
            </Row>
          </Col>
        </Row>
        <Card.Text style={{fontSize: "10px"}} className="mb-2">
        < DateRangeIcon/>Earliest availability is on 17 Jan.
        </Card.Text>
        <Table>
          <tbody>
            <tr>
              <td>
                <p className="table-headings">Check-in</p>
                <p className="text-muted">Add date</p>
              </td>
              <td>
                <p className="table-headings">Check-out</p>
                <p className="text-muted">Add date</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Row className="d-flex justify-content-around align-items-center">
                  <p className="table-headings">Guests</p>
                  <p className="text-muted">1 guest</p>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default AddDatesForPrices;
