import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft  } from '@fortawesome/free-regular-svg-icons';
import '../css/details.css';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import {

	faComment,
	faShare,
	faBookmark
} from '@fortawesome/free-solid-svg-icons';
import {useData} from '../context/DataContext'


export default function Details({ question }) {
	const [bookmark, setBookmark] = useState(isBookmarked);
	const navigate = useNavigate();
	const {timeAgo}=useData()
	let {
		username,
		name,
		picUrl,
		comments,
		isBookmarked,createdAt
	} = question;
	
	const time = timeAgo(createdAt);

	return (
		<div className="question-details-container">
			<div className="goback-container">
				<FontAwesomeIcon icon={faArrowAltCircleLeft } onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
				<>Posts</>
			</div>
			<Question question={question} />
			{comments.length > 0?(
				<div className="comment-details-container">
				<hr/>
				<div className="posted-by">
					<div className="user-pic">
						<img src={picUrl} alt="User Profile" />
					</div>
					<div>
						<div className="username">{username}</div>
						<div className="name">{name}</div>
						<div className="time-ago">{time}</div>
					</div>
				</div>
				<div>
					{comments.map(({commentId,comment}) =>
					<p key={commentId}>{comment}</p>
					)}	
				</div>

				<div className="icon-container">
						<div>
							<FontAwesomeIcon
								icon={faComment}
								className="icon"
							/>
						</div>

						<FontAwesomeIcon icon={faShare} />
						<FontAwesomeIcon
							icon={faBookmark}
							className="icon"
							style={{ color: bookmark ? 'black' : 'gray' }}
							onClick={() => setBookmark(!bookmark)}
						/>
					</div>
			</div>
	)
			:(
				null
			)}
			
		</div>
	);
}
