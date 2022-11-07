import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUp , faBars } from '@fortawesome/free-solid-svg-icons'

export default function NivoBar() {
    const data = [
        {
          day: "Monday",
          degress: 59
        },
        {
          day: "Lunes",
          degress: 61
        },
        {
          day: "Martes",
          degress: 55
        },
        {
          day: "Miercoles",
          degress: 78
        },
        {
          day: "jueves",
          degress: 71
        },
        {
          day: "Viernes",
          degress: 56
        },
        {
          day: "Sabado",
          degress: 67
        }
      ];
  return (      

    <ResponsiveBar
        data={data}
        keys={["degress"]}
        indexBy="day"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors={{ scheme: 'nivo' }}
        animate={true}
        enableLabel={false}
        enableGridX={true}
        enableGridY={false}
        layout="horizontal"        
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Semana',
          legendPosition: 'middle',
          legendOffset: 32
        }}        
        axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle", 
        legendOffset: -40
        }}
    />

 )
}
