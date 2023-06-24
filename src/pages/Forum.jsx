import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Feed from '../components/Feed';

export default function Forum() {
	return (
		<div className="home-container">
			<LeftSidebar />
			<div>
				<Feed />
			</div>
			<RightSidebar />
		</div>
	);
}
