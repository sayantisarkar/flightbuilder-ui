import React , { Component, useEffect, useState, useRef }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ConnectingFlights =(props)=>{
    console.log("In conneCting");

    const [flightData, setFlightData] = useState([]);

    useEffect(() => {
        retrieveConnectingFlights();
      }, []);


    const retrieveConnectingFlights = () => {
        axios.get('http://localhost:8088/flight-schedules/'+props.dep +"/"+props.arr).then(response => {
            setFlightData(response.data);
        });
     };

     const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });

      const classes = useStyles();
     return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Onward Flight</StyledTableCell>
            <StyledTableCell align="right">Dep Airport</StyledTableCell>
            <StyledTableCell align="right">Arrival Airport</StyledTableCell>
            <StyledTableCell align="right">Dep Time</StyledTableCell>
            <StyledTableCell align="right">Arr Time</StyledTableCell>
            <StyledTableCell align="right">Connecting Flight</StyledTableCell>
            <StyledTableCell align="right">Dep Airport</StyledTableCell>
            <StyledTableCell align="right">Arrival Airport</StyledTableCell>
            <StyledTableCell align="right">Dep Time</StyledTableCell>
            <StyledTableCell align="right">Dep Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flightData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.onwardFlightNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.onwardDepAirport}</StyledTableCell>
              <StyledTableCell align="right">{row.onwardArrAirport}</StyledTableCell>
              <StyledTableCell align="right">{row.onwardDepTime}</StyledTableCell>
              <StyledTableCell align="right">{row.onwardArrTime}</StyledTableCell>
              <StyledTableCell align="right">{row.connFlightNo}</StyledTableCell>
              <StyledTableCell align="right">{row.connDepAirport}</StyledTableCell>
              <StyledTableCell align="right">{row.connArrAirport}</StyledTableCell>
              <StyledTableCell align="right">{row.connDepTime}</StyledTableCell>
              <StyledTableCell align="right">{row.connArrTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     );
     

}
export default ConnectingFlights;

