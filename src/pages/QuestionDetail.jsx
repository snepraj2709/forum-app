import LeftSidebar from '../components/LeftSidebar';
import Details from '../components/Details';
import { forumData } from '../data/data';
import { useParams } from "react-router-dom";

export default function QuestionDetail({ question }) {
	console.log('Question details of', question);
	const questionId=useParams()
	//console.log('Question id:', questionId)
	const item=forumData.find((element)=>element.posts.postId===questionId)

	return (
		<div className="home-container">
			<LeftSidebar />
			<div>
				<Details question={item} />
			</div>
		</div>
	);
}
