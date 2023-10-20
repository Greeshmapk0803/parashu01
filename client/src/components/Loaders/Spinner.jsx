import { Typography } from '@mui/material';
import '../../assets/stylesheets/spinner.css';
import LoadingQuotes from './LoadingQuotes';
import { facts } from '../../constants';


// eslint-disable-next-line import/no-anonymous-default-export
const Spinner = () => {
	return (
		<div className='mb-3 mt-3' style={{
			display: "flex",
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection:'column',
			height: '90vh',
		}}>
			<div className="loading">
				<svg width="85px" height="56px">
					<polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
					<polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
				</svg>
			</div>
			<LoadingQuotes data={facts} />
		</div>
	)
}

export default Spinner;


