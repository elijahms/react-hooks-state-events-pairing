import React, {useState} from 'react'
import CommentIn from './CommentIn'

const Comments = ({comments}) => {
    const [isOn, setIsOn] = useState(false)
    const [comms, setComms] = useState(comments)
    
    function handleComments() {
        setIsOn((isOn) => !isOn)
    }

    function handleSearchChange(event) {
        const newArray = comments.filter((comment) =>{
            if (event.target.value === ""){
               return true
            } else {
                return event.target.value === comment.user
            }
        })
        setComms(newArray)
    }

    function handleDelete(user) {
        console.log(user);
        console.log("yo");
        const newerArray = comms.filter((comment) => {
           return user != comment.user
        })

        setComms(newerArray)
    }

    return (
        <div>
            <br />
            <button onClick={handleComments}>{isOn ? "Show Comments" : "Hide Comments"}</button>
            <h1>{!isOn ? comms.length : "0"} Comments</h1>
            <input onChange={handleSearchChange} type="text" placeholder="Search.."/>
            {comms.map((comment) => {
                if (!isOn) { 
                   return <CommentIn user={comment.user} key={comment.id} comment={comment.comment}
                   handleDelete={handleDelete}
                />}
            })}
        </div>
    )
}

export default Comments
