import BarChart3D from './components/highcharts/BarChart3D'
import BarChartBasicColumn from './components/highcharts/BarChartBasicColumn'
import DualAxesLineAndColumn from './components/highcharts/DualAxesLineAndColumn'
import PieChart3D from './components/highcharts/PieChart3D'

function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<BarChart3D />
			{/* <PieChart3D title='Biểu đồ khóa học' /> */}
			{/* <DualAxesLineAndColumn title='Biểu đồ lưu lượng người dùng' 	/> */}
			{/* <BarChartBasicColumn title='Đơn vị có lượt tham gia học nhiều nhất' /> */}
		</div>
	)
}

export default App
