import React from 'react'
import {Link, withRouter} from "react-router-dom"
import sorting from "../Utils/sorting"
const Home = ({updateHouseInfo, history}) => {
    return(
        <div>
            <h2>Hoggy Hoogoy Hogwarts</h2>
            <nav>
            <Link to="/about">About</Link>
            </nav>
            <button onClick={()=> sorting.randomHouse(updateHouseInfo, history.push)}>Sort</button>
        </div>
    )
}

export default withRouter(Home);