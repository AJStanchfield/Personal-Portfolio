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
            <p style={{ textAlign: 'center' }}>Numbers are Generated from a random value. In the button on the right side, you can see what would be an active chart if it were connected to the same values as the random data.</p>
            
            
            
            
            <TableContainer
                className="analytics-table four-row mt-3 Financial"
                component={Paper}
                style={{ width: '100%' }}>
                <Table sx={{ minWidth: 950 }}>
                        {getTableHead("Financials")}
                        <TableBody>
                            {
                                // Define the rows and map over them so we can create variables
                                [
                                    "Total Sales",
                                    "Route Sales",
                                    "Event Sales",
                                    "Average Order Value",
                                    "Refunds",
                                    "Discounts",
                                    "Tips",
                                ].map((label) => {
                                    // Generate values once per render so they can be reused
                                    const current = Math.random() * (1000 - 50) + 50;
                                    const prior = Math.random() * (1000 - 50) + 50;

                                    return (
                                        <TableRow key={label} hover={true}>
                                            <TableCell>{label}</TableCell>
                                            <TableCell align="center"><FormattedCurrency amount={current} /></TableCell>
                                            <TableCell align="center"><FormattedCurrency amount={prior} /></TableCell>
                                            <TableCell align="center"><Variance current={current} prior={prior} /></TableCell>
                                            <TableCell align="right"><ChartButton DataName={label} /></TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>


    );
}

export default AnalyticsTable;
