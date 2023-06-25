import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faArrowUp,
	faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';
import {useData} from '../context/DataContext'

export default function RightSidebar() {
	const {timeAgo,trending,setTrending,sort}=useData()

	return (
		<div className="button" onClick={()=>setTrending(!trending)}>
			<div className="card">
				<div className="user-icon">
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div className="toggle-text">
					{trending === true ? 'Latest' : 'Most Upvoted'}
				</div>
			</div>
		</div>
	);
}
