import React from 'react'
import {
    Chart,
    Interval,
    Axis,
  } from "bizcharts";

export default function BizChart() {

    const data = [
        {
          label: "Monday",
          series1: 2800,
          series2: 2260
        },
        {
          label: "Tuesday",
          series1: 1800,
          series2: 1300
        },
        {
          label: "Wednesday",
          series1: 950,
          series2: 900
        },
        {
          label: "Thursday",
          series1: 500,
          series2: 390
        },
        {
          label: "Friday",
          series1: 170,
          series2: 100
        }
      ];
  
  return (
    
    <Chart height={320} autoFit data={data} >
        <Axis
        //name="label"
        />
        <Axis name="value" position={"right"} />
        <Tooltip />
        <Interval
        position="label*value"
        //color={"type"}
        />
    </Chart>
  )
}
