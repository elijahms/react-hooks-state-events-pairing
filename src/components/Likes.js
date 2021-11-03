import React, {useState} from 'react'

const Likes = ({upVotes, downVotes}) => {
    const [likeVotes, setUpVotes] = useState(upVotes)
    const [noLikeVotes, setNoLikeVotes] = useState(downVotes)

    function handleLike() {
        setUpVotes((likeVotes) => likeVotes + 1)
    }

    function handleDislike() {
        setNoLikeVotes((noLikeVotes) => noLikeVotes + 1)
    }
    
    
    return (
        <div>
            <br />
            <button onClick={handleLike} >{likeVotes}👍</button>
            <button onClick={handleDislike} >{noLikeVotes}👎</button>
        </div>
    )
}

export default Likes
