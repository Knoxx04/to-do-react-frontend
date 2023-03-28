import React from 'react'
import { Link } from "react-router-dom"

 function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/List">
            <button>List Tasks</button>
        </Link>
        <Link to="/update">
            <button>update Tasks</button>
        </Link>
        <Link to="/Add">
            <button>update Tasks</button>
        </Link>
        <Link to="/update">
            <button>Delete tasks</button>
        </Link>
    </div>
  )
}

export default Dashboard

