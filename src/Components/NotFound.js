import React from "react"
const NotFound = ({history})=> {
    return (
        <>
        <h1>404</h1>
        <h3>You found the room of requiremnts !</h3>
        <h4 onClick ={()=>(history.goBack())}>Go back from whence you came</h4>
        </>

    )
}
export default NotFound;
