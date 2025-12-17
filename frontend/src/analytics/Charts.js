import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
} from "chart.js/auto";




export const Vis_Chart = ({chartType}) => {




useEffect(() => {


  console.log("Charts Type")
  console.log(chartType)



},[]);

  return (
    <>


    <div className="Test Chart" style={{ height: "450px", "maxWidth": "900px", margin: "auto"}}>
      <Line
        options={{ maintainAspectRatio: false }}
      data={{
        labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
      {
      label: chartType,
      tension: 0.1,
      borderColor: "#ff249C",
      data: "50, 60, 70, 18, 90, 100, 110, 120, 130, 140, 150, 160"
      ,
      },
      {
      label: `Prior ${chartType}`,
      tension: 0.1,
      borderColor: "#00018d",
      data: "20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130"
      ,
      },
    ],
    }}
      />
    </div>
    </>
  );
}

export default Vis_Chart