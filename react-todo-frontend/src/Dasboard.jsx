import React from 'react'

 function Dasboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/list tasks">
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

export default Dasboard

