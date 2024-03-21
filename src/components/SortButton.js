import React from 'react'

const SortButton = ({sortFollowers}) => {
  return (
    <div>
        <div className="flex justify-center my-4 mx-4 items-center">
          <div className=' mr-11 font-bold text-lg mb-1'>Sort by :</div>
          <button type="button" onClick={() => sortFollowers('total')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Total</button>
          <button type="button" onClick={() => sortFollowers('friends')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Friends</button>
          <button type="button" onClick={() => sortFollowers('influence')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Influence</button>
          <button type="button" onClick={() => sortFollowers('chirpiness')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Chirpiness</button>
        </div>
    </div>
  )
}

export default SortButton