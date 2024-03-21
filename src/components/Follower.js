import React from 'react'

const Follower = ({ data, removeFollower }) => {
    const { fullname, image, join_date, twubric, uid} = data;

    const date = new Date(join_date * 1000);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-IN', options);

    return ( 
      <div className="max-w-80 max-h-fit rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={image} alt={`${fullname}'s avatar`} />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{fullname}</div>
              <p className="text-gray-700 text-base">
                  Joined: {dateString}
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Chirpiness: {twubric.chirpiness}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Friends: {twubric.friends}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Influence: {twubric.influence}
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                  Total: {twubric.total}
              </span>
          </div>
          <div className="px-6 py-4">
              <button 
                  onClick={() => removeFollower(uid)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                  Remove
              </button>
          </div>
      </div>
    )
  }

  export default Follower
  