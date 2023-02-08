import React from 'react'
import PropTypes from 'prop-types'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsFrame from './HighchartsFrame'

import Highcharts3d from 'highcharts/highcharts-3d.js' // 3D
Highcharts3d(HighCharts) // 3D

const BarChart3D = ({ width, height, title, chartTypeIcon }) => {
	const options = {
		chart: {
			height: height,
			// 3D
			options3d: {
				enabled: true,
				alpha: 15,
				beta: 15,
				depth: 50,
				viewDistance: 25,
			},
		},
		title: {
			text: null,
		},
		series: [
			{
				name: 'Đơn vị tham gia',
				type: 'column',
				color: 'orange',
				data: [340, 300, 225, 220, 215, 205, 180, 160, 150, 140],
			},
		],
		xAxis: {
			categories: [
				'HMS05',
				'HMS09',
				'HMS16',
				'HMS14',
				'HMS04',
				'HMS01',
				'HMS07',
				'HMS07A',
				'HMS08',
				'HMS03',
			],
		},
		yAxis: {
			min: 100,
			title: {
				text: null,
			},
			tickAmount: 10,
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			column: {
				colorByPoint: true,
				depth: 25, // 3D
			},
		},
		colors: [
			'#BF3026',
			'#BF6326',
			'#BE8527',
			'#BCA327',
			'#BFC427',
			'#94B12C',
			'#29A433',
			'#2E7AA1',
			'#2E57A3',
			'#3E2DA2',
		],
		tooltip: {
			headerFormat:
				'<span style="font-size:10px">{point.key}: <span style="color:#000;font-weight: bold;">{point.y} lượt</span></span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0"></td>' +
				'<td style="padding:0"></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
		},
	}

	return (
		<HighchartsFrame width={width} title={title} chartTypeIcon={chartTypeIcon}>
			<HighchartsReact highcharts={HighCharts} options={options} />
		</HighchartsFrame>
	)
}

BarChart3D.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string.isRequired,
	chartTypeIcon: PropTypes.string.isRequired,
}

BarChart3D.defaultProps = {
	width: '50%',
	height: 400,
	title: 'Báo cáo',
	chartTypeIcon: 'column',
}

export default BarChart3D
