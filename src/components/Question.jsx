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
	const navigate = useNavigate();
	//console.log('Votes', vote);

	const timeAgo = date => {
		const seconds = Math.floor((new Date() - date) / 1000);

		let interval = Math.floor(seconds / 31536000);
		if (interval > 1) {
			return interval + ' years ago';
		}

		interval = Math.floor(seconds / 2592000);
		if (interval > 1) {
			return interval + ' months ago';
		}

		interval = Math.floor(seconds / 86400);
		if (interval > 1) {
			return interval + ' days ago';
		}

		interval = Math.floor(seconds / 3600);
		if (interval > 1) {
			return interval + ' hours ago';
		}

		interval = Math.floor(seconds / 60);
		if (interval > 1) {
			return interval + ' minutes ago';
		}

		if (seconds < 10) return 'just now';

		return Math.floor(seconds) + ' seconds ago';
	};

	const time = timeAgo(createdAt);
	console.log('Time ago', time);

	const upvoteHandler = () => {
		setVote(prevVote => ({
			...prevVote,
			up: ++prevVote.up
		}));
		setVoteDifference(vote.up - vote.down);
		console.log('Upvoted by 1', vote.up);
	};

	const downvoteHandler = () => {
		setVote(prevVote => ({
			...prevVote,
			down: ++prevVote.down
		}));
		setVoteDifference(vote.up - vote.down);
		console.log('Downvoted by 1', vote.down);
		console.log('Vote', vote);
		console.log('Vote Difference', vote.up - vote.down);
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
			<div className="post-details-container">
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
