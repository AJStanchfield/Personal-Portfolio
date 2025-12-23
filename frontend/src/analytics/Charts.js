import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
} from "chart.js/auto";




export const Vis_Chart = ({chartType}) => {


let January;
let Febuary;
let March;
let April;
let May;
let June;
let July;
let August;
let September;
let October;
let November;
let December;

let PJanuary;
let PFebuary;
let PMarch;
let PApril;
let PMay;
let PJune;
let PJuly;
let PAugust;
let PSeptember;
let POctober;
let PNovember;
let PDecember;


const currChartData = [
  January = Math.random() * 100,
  Febuary = Math.random() * 100,
  March = Math.random() * 100,
  April = Math.random() * 100,
  May = Math.random() * 100,
  June = Math.random() * 100,
  July = Math.random() * 100,
  August = Math.random() * 100,
  September = Math.random() * 100,
  October = Math.random() * 100,
  November = Math.random() * 100,
  December = Math.random() * 100,
];

const priorChartData = [
  PJanuary = Math.random() * 100,
  PFebuary = Math.random() * 100,
  PMarch = Math.random() * 100,
  PApril = Math.random() * 100,
  PMay = Math.random() * 100,
  PJune = Math.random() * 100,
  PJuly = Math.random() * 100,
  PAugust = Math.random() * 100,
  PSeptember = Math.random() * 100,
  POctober = Math.random() * 100,
  PNovember = Math.random() * 100,
  PDecember = Math.random() * 100,
];


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
      borderColor: "#d850c3",
      data: currChartData,
      },
      {
      label: `Prior ${chartType}`,
      tension: 0.1,
      borderColor: "#5470fe",
      data: priorChartData,
      },
    ],
    }}
      />
    </div>
    </>
  );
}

export default Vis_Chart