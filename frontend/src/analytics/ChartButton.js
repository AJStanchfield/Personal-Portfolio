import {memo, useState, useRef } from "react";


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TimelineIcon from '@mui/icons-material/Timeline';
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";


import Vis_Chart from "./Charts";
import ChartPDFButton from "./ChartPDFButton";






const ChartButton = ({DataName}) => {

const chartLoading = () => false;

const [open, setOpen] = useState(false)
const componentRef = useRef(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


//Create Dialog that include pdf export and Vis_Charts from chart.js
//Fix Sizing Issue
//Find Way to get the id to be in ChartInfo.Js

    return(
        <div>
        <LoadingButton
                align="right"
                aria-label="ChartButton"
                variant="contained"
                style={{
                  "padding": "1.5px 3px",
                  "margin": "-6px 0px",
                  "background": "#00018d",
                  ":hover": {
                    backgroundColor: "#20c997",
                  },
                  ...(!chartLoading && {
                    color: "#FFF",
                  }),
                }}
                loading={chartLoading}
                disabled={chartLoading}
                loadingIndicator={
                  <CircularProgress style={{ color: "white" }} size={16} />
                }
                onClick={handleClickOpen}
              >
                <TimelineIcon/>
            </LoadingButton>

            <Dialog
            onClose={handleClose}
            aria-labelledby="dialog-title"
            open={open}
            maxWidth="lg"
            fullWidth={true}

            >
                <DialogTitle sx={{ m: 0, p: 1, pl: 2 }} id="dialog-title">
                {DataName} Chart
                </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
            })}
             >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ p: 2 }} ref={componentRef}>
            <Vis_Chart chartType={DataName}/>
        </DialogContent>
        <DialogActions>
          <ChartPDFButton pdfRef={componentRef}/>
        </DialogActions>
            </Dialog>




    </div>
    );
}

export default memo(ChartButton)