import { memo, useState, useEffect, useCallback } from "react";
import FormattedCurrency from "./FormattedCurrency";
import Variance from "./Variance";
import ChartButton from "./ChartButton";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";


const AnalyticsTable = ({}) => {

const formatPercent = (num) => {
        if (num) {
            return num?.toLocaleString('en-US', {
              style: 'percent',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
        } else {
            return "0%"
        }
    }

    const getTableHead = (headerName) => (
        <TableHead sx={{ 'backgroundColor': '#d850c3' }}>
          <TableRow>
            <TableCell>
                <span
                    style={{
                        color: "#d850c3",
                        background: "white",
                        borderRadius: "3px",
                        display: "inline-block",
                        minWidth: "175px",
                        textAlign: "center"
                    }}
                >
                    {headerName}
                </span>
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>Current Period</TableCell>
            <TableCell align="center" style={{ color: "white" }}>Prior Period</TableCell>
            <TableCell align="center" style={{ color: "white" }}>Variance</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Chart</TableCell>
          </TableRow>
        </TableHead>
    )

    return (
        <>
        <div className="section-content" style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', margin: '0 0 16px 0' }}>Analytics Dashboard</h1>
            <TableContainer
                className="analytics-table four-row mt-3 Financial"
                component={Paper}
                style={{ width: '100%' }}>
                <Table sx={{ minWidth: 650 }}>
                        {getTableHead("Financials")}
                        <TableBody>
                            <TableRow hover={true}>
                                <TableCell>
                                    Total Sales
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Total Sales" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Route Sales
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Route Sales" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Event Sales
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Event Sales" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Average Order Value
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Average Order Value" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Refunds
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Refunds" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Discounts
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Discounts" /></TableCell>
                            </TableRow>
                            <TableRow hover={true}>
                                <TableCell>
                                    Tips
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="right"><ChartButton DataName="Tips" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>


    );
}

export default AnalyticsTable;
