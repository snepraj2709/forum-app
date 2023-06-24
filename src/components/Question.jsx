import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowUp,
	faArrowDown,
	faComment,
	faShare,
	faBookmark
} from '@fortawesome/free-solid-svg-icons';
import '../css/question.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useData} from '../context/DataContext'

export default function Question({ question }) {
	let {
		postId,
		username,
		name,
		picUrl,
		post,
		postDescription,
		upvotes,
		downvotes,
		tags,
		createdAt,
		comments,
		isBookmarked
	} = question;
	const [vote, setVote] = useState({ up: upvotes, down: downvotes });
	const [voteDifference, setVoteDifference] = useState(vote.up - vote.down);
	const [bookmark, setBookmark] = useState(isBookmarked);
	const {timeAgo}=useData();
	const navigate = useNavigate();

	const time = timeAgo(createdAt);

	const upvoteHandler = () => {
		setVote(prevVote => ({
			...prevVote,
			up: ++prevVote.up
		}));
		setVoteDifference(vote.up - vote.down);
	};

	const downvoteHandler = () => {
		setVote(prevVote => ({
			...prevVote,
			down: ++prevVote.down
		}));
		setVoteDifference(vote.up - vote.down);
	};

	useEffect(() => {
		setVoteDifference(vote.up - vote.down);
	}, [vote]);

	return (
		<div className="question-detail-container">
			<div className="upvote-downvote-container">
				<div className="vote-icons">
					<FontAwesomeIcon icon={faArrowUp} onClick={() => upvoteHandler} />
					<div>{voteDifference}</div>
					<FontAwesomeIcon icon={faArrowDown} onClick={() => downvoteHandler} />
				</div>
			</div>
			<div >
				<div className="posted-by">
					<div className="user-pic">
						<img src={picUrl} alt="User Profile" />
					</div>
					<div>
						<div className="name">{name}</div>
						<div className="username">{username}</div>
						<div className="time-ago">{time}</div>
					</div>
				</div>
				<div className="post-content-container">
					<div className="post-heading">{post}</div>
					<div className="tag-pills-container">
						{tags.map((tag, index) => (
							<div key={index}>{tag}</div>
						))}
					</div>
					<div className="post-description">{postDescription}</div>
					<div className="icon-container">
						<div>
							<FontAwesomeIcon
								icon={faComment}
								className="icon"
								 onClick={() => navigate(`/question/${postId}`)}
							/>
							<>{comments.length}</>
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
			</div>
		</div>
	);
}
