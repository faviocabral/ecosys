import React ,{useState} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUp , faBars } from '@fortawesome/free-solid-svg-icons'

export default function ApexChart({titulo = 'Top 10 '}) {

    const [state , setState ] = useState({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690,]
          }],
          options: {
            chart: {
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 2,
                distributed: true,
                horizontal: true,
              }
            },
            colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7' ],            
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Proveedor 1', 'Proveedor 2', 'Proveedor 3', 'Proveedor 4', 'Proveedor 5', 'Proveedor 6', 'Proveedor 7',
                
              ],
            }
          },

      })


  return (

    <div className="card h-100">
        <div className="card-header border-0">
        <h3 className="card-title"><b>{titulo}</b></h3>
        <div className="card-tools">
            <a href="#" className="btn btn-tool btn-sm">
            <i className="fas fa-download" />
            </a>
            <a href="#" className="btn btn-tool btn-sm">
            <FontAwesomeIcon icon={faBars} />  
            </a>
        </div>
        </div>
        <div className="card-body p-0">

            <div id="chart">
                <Chart options={state.options} series={state.series} type="bar" height="250"/>
            </div>
        </div>
    </div>
  )
}
