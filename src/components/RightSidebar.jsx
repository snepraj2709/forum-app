import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faArrowUp,
	faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';

export default function RightSidebar() {
	const [sortOption, setSortOption] = useState(true);
	const handleSort = () => {
		setSortOption(!sortOption);
	};

	return (
		<div className="button" onClick={handleSort}>
			<div className="card">
				<div className="user-icon">
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div className="toggle-text">
					{sortOption === true ? 'Latest' : 'Most Upvoted'}
				</div>
				<div className="icon">
					{sortOption === true ? (
						<FontAwesomeIcon icon={faArrowUp} />
					) : (
						<FontAwesomeIcon icon={faArrowDown} />
					)}
				</div>
			</div>
		</div>
	);
}
