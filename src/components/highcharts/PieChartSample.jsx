import React from 'react'
import PropTypes from 'prop-types'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsFrame from './HighchartsFrame'

const PieChartSample = ({ width, height }) => {
	const options = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			height: height,
		},
		title: {
			// text: 'Browser market shares in May, 2020',
			text: 'Sales in 2020',
			align: 'left',
		},
		tooltip: {
			pointFormat: 'Value: <b>{point.y} ({point.percentage: .1f}%)</b>',
			// pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		},
		accessibility: {
			point: {
				valueSuffix: '%',
			},
		},
		plotOptions: {
			// Pie with legend
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				// dataLabels: {
				// 	enabled: true,
				// 	format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				// },
				dataLabels: {
					enabled: false,
				},
				showInLegend: true,
			},
		},
		series: [
			{
				name: 'Sales',
				colorByPoint: true,
				data: [
					{
						name: '1st Qtr',
						y: 8.2,
						// sliced: true,
						// selected: true,
					},
					{
						name: '2nd Qtr',
						y: 3.2,
					},
					{
						name: '3rd Qtr',
						y: 1.4,
					},
					{
						name: '4th Qtr',
						y: 1.2,
					},
				],
			},
		],
	}
	return (
		<HighchartsFrame width={width}>
			<HighchartsReact highcharts={HighCharts} options={options} />
		</HighchartsFrame>
	)
}

PieChartSample.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

PieChartSample.defaultProps = {
	width: '50%',
	height: 400,
}

export default PieChartSample
