import Button from "@mui/material/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { memo } from "react";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";





const ChartPDFButton = ({ pdfRef }) => {
    const handleDownload = async () => {
        // Logic to generate and download PDF
        console.log("PDF Download initiated");
        
        if (!pdfRef.current) return;

        const canvas = await html2canvas(pdfRef.current, {
          useCORS: true,
          scale: 2,
        });

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('chart.pdf');
    };


  return (
    <div>
      <Button
        aria-label="ChartPDFButton"
        onClick= {handleDownload}
      >
        <PictureAsPdfIcon style={{ marginRight: "5px"}} />
          Export to PDF
      </Button>
    </div>
  );
}

export default memo(ChartPDFButton);