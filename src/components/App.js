import video from "../data/video.js";
import Header from "./Header.js";
import Likes from "./Likes.js";
import Comments from "./Comments.js";

function App() {

  return (
    <div className="App">
      <Header video={video} />
      <Likes upVotes={video.upvotes} downVotes={video.downvotes} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
