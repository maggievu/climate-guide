import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// import dataCategories from './dataSource/categories.json';
import chartConfig from './dataSource/chartConfig.json';
import dataSet1 from './dataSource/dataset1.json';
import dataSet2 from './dataSource/dataset2.json';

// this method shows errors when deploy (but not on other chart type???)
// ReactFusioncharts.fcRoot(FusionCharts, Chart, CandyTheme);

// this method deploys the chart but does not define theme with it (theme can be copied and pasted in json format)
Chart(FusionCharts);

const dataSource = {
    "chart": chartConfig,
    // "categories": dataCategories,
    "dataset": [
        {
            "seriesname": "Annual Mean",
            "drawLine": true,
            "color": "ff6600",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet1
        },
        {
            "seriesname": "Lowess smoothing",
            "drawLine": true,
            "color": "ff0000",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            "data": dataSet2
        }
    ],
    // "vtrendlines": [
    //     {
    //         "line": [
    //             {
    //                 "startvalue": "20",
    //                 "endvalue": "65",
    //                 "alpha": "5",
    //                 "color": "00FF00"
    //             },
    //             {
    //                 "startvalue": "65",
    //                 "endvalue": "75",
    //                 "alpha": "15",
    //                 "color": "FFFF00"
    //             },
    //             {
    //                 "startvalue": "75",
    //                 "endvalue": "100",
    //                 "alpha": "15",
    //                 "color": "FF0000"
    //             }
    //         ]
    //     }
    // ],
}

class TemperatureChart extends Component {
   render() {
      return (
      <ReactFusioncharts
         type = "zoomscatter"
         width = '1000'
         height = '500'
         dataFormat = "json"
         dataSource = {dataSource} />
      );
   }
}

export default TemperatureChart;
