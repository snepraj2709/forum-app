import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';
import { useData } from '../context/DataContext';

export default function RightSidebar() {
	const { trending, setTrending } = useData();

	const clickHandler=()=>{
		setTrending(!trending)
	}

	return (
		<div className="button" onClick={clickHandler}>
			<div className="card">
				<div className="user-icon">
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div className="toggle-text">
					{trending ? 'Trending' : 'Most Upvoted'}
				</div>
			</div>
		</div>
	);
}
