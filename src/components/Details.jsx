import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-regular-svg-icons';
import '../css/details.css';
import Question from './Question';

export default function Details({ question }) {
	return (
		<div className="question-details-container">
			<div className="goback-container">
				{/* <FontAwesomeIcon icon={faArrowLeftLong} /> */}
				<FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-left-long" />
				<h2>Post</h2>
			</div>
			<Question question={question} />
		</div>
	);
}
