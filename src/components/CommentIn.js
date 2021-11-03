import React, {useState} from 'react'

const CommentIn = ({user, comment, handleDelete}) => {
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)

    function handleUp() {
        setUpVote((upVote) => upVote + 1)
    }
    function handleDown() {
        setDownVote((downVote) => downVote + 1)
    }
    
    return (
        <div>
            <hr />
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={handleUp} >{upVote} 👍</button>
            <button onClick={handleDown}>{downVote} 👎</button>
            <br />
            <button name={comment.user} onClick={() => handleDelete(user)} >Remove</button>
            <hr />
        </div>
    )
}

export default CommentIn
