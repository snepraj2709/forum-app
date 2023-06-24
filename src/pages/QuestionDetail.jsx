import LeftSidebar from '../components/LeftSidebar';
import Details from '../components/Details';
import { forumData } from '../data/data';
import { useParams } from "react-router-dom";

export default function QuestionDetail() {
	
	const {questionId}=useParams()
	console.log('Forum data id:', forumData.posts[0].postId)
	const item=forumData.posts?.find((element)=>element.postId===questionId)
	console.log('Question Post:', item)
	return (
		<div className="home-container">
			<LeftSidebar />
			<div>
				<Details question={item} />
			</div>
		</div>
	);
}
