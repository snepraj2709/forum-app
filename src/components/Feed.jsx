import { forumData } from '../data/data';
import Question from './Question';

export default function Feed() {
	return (
		<div>
			<h2>Latest posts</h2>
			{forumData.posts.map(item => (
				<Question question={item} />
			))}
		</div>
	);
}
