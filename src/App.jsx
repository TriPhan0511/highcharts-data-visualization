import BarChartBasicColumn from './components/highcharts/BarChartBasicColumn'
import DualAxesLineAndColumn from './components/highcharts/DualAxesLineAndColumn'
import PieChart3D from './components/highcharts/PieChart3D'

function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{/* <PieChart3D
				width='500px'
				height='250px'
				chartTypeIcon='pie'
				title='Biểu đồ khóa học'
			/> */}
			<PieChart3D title='Biểu đồ khóa học' />
			{/* <DualAxesLineAndColumn title='Biểu đồ lưu lượng người dùng' 	/> */}
			{/* <BarChartBasicColumn title='Đơn vị có lượt tham gia học nhiều nhất' /> */}
		</div>
	)
}

export default App
