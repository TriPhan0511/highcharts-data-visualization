import React from 'react'
import PropTypes from 'prop-types'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Frame = ({ children, title, width }) => {
	return (
		<div style={{ width: width }}>
			<div
				style={{
					border: '1px solid #00A65A',
					paddingBottom: '1.5rem',
				}}
			>
				<h3
					style={{
						backgroundColor: '#00A65A',
						color: '#fff',
						margin: 0,
						padding: '15px 10px',
						letterSpacing: '0.01071em',
						fontWeight: 400,
						fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
						fontSize: '1.2rem',
						marginBottom: '1.5rem',
					}}
				>
					<FontAwesomeIcon icon={faChartColumn} />
					<span style={{ marginLeft: '10px' }}>{title.toUpperCase()}</span>
				</h3>
				<div style={{ padding: '0 1.5rem' }}>{children}</div>
			</div>
		</div>
	)
}

Frame.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Frame.defaultProps = {
	title: 'Báo Cáo',
	width: '50vw',
}

export default Frame

// --------------------------------------------------------------------------------------------
// const Frame = ({ children, title }) => {
// 	return (
// 		<div style={{ display: 'flex', justifyContent: 'center' }}>
// 			<div
// 				style={{
// 					border: '1px solid #00A65A',
// 					paddingBottom: '1.5rem',
// 					overflowY: 'visible',
// 				}}
// 			>
// 				<h3
// 					style={{
// 						backgroundColor: '#00A65A',
// 						color: '#fff',
// 						margin: 0,
// 						padding: '15px 10px',
// 						letterSpacing: '0.01071em',
// 						fontWeight: 400,
// 						fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
// 						fontSize: '1.4rem',
// 						marginBottom: '1.5rem',
// 					}}
// 				>
// 					<FontAwesomeIcon icon={faChartColumn} />
// 					<span style={{ marginLeft: '10px' }}>{title.toUpperCase()}</span>
// 				</h3>
// 				<div style={{ padding: '0 1.5rem' }}>{children}</div>
// 			</div>
// 		</div>
// 	)
// }

// Frame.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	title: PropTypes.string.isRequired,
// 	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// 	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// }

// Frame.defaultProps = {
// 	title: 'Báo Cáo',
// 	width: '50vw',
// 	height: '50vh',
// }

// const Frame = ({ children }) => {
// 	return (
// 		<div style={{ display: 'flex', justifyContent: 'center' }}>
// 			<div
// 				style={{
// 					height: '50vh',
// 					width: '50vw',
// 					border: '1px solid #00A65A',
// 					paddingBottom: '1.5rem',
// 				}}
// 			>
// 				<h3
// 					style={{
// 						backgroundColor: '#00A65A',
// 						color: '#fff',
// 						margin: 0,
// 						padding: '15px 10px',
// 						letterSpacing: '0.01071em',
// 						fontWeight: 400,
// 						fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
// 						fontSize: '1.4rem',
// 						marginBottom: '1.5rem',
// 					}}
// 				>
// 					<FontAwesomeIcon icon={faFileLines} />
// 					<span style={{ marginLeft: '5px' }}>BÁO CÁO KHÓA HỌC</span>
// 				</h3>
// 				{children}
// 				{/* <div style={{ height: 400, width: '100%' }}>{children}</div> */}
// 			</div>
// 		</div>
// 	)
// }

// export default Frame
