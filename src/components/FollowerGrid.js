import React from 'react'
import Follower from './Follower'

const FollowerGrid = ({filteredFollowers, removeFollower}) => {
  return (
    <div className=' flex flex-wrap'>
        {filteredFollowers.map( user => (
            <Follower key={user.uid} data={user} removeFollower={removeFollower} />
        ))}
    </div>
  )
}

export default FollowerGrid