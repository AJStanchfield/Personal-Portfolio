import AnalyticsTable from "../analytics/table";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


function Analytics() {
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: "#d850c3", padding: "10px", margin: "10px" }} href="/" startIcon={<HomeIcon />}>
                Return to Home
            </Button>

            <div style={{ padding: '20px' }}>
                <AnalyticsTable />
            </div>
        </>
    );
}

export default Analytics;