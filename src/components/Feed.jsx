import {useData} from '../context/DataContext'
import Question from './Question';

export default function Feed() {
	const {posts}=useData();
	return (
		<div>
			<h2>Latest posts</h2>
			{posts.map(item => (
				<Question question={item} />
			))}
		</div>
	);
}
