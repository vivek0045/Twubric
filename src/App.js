import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import SortButton from './components/SortButton';
import FollowerGrid from './components/FollowerGrid';
import followersData from './data'

function App() {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [followers, setFollowers] = useState(followersData);
  const [filteredFollowers, setFilteredFollowers] = useState(followersData);

  useEffect(() => {
    if (startDate || endDate) {
      const filtered = followers.filter(follower => {
        const joinDate = follower.join_date;
        return (!startDate || joinDate >= startDate) && (!endDate || joinDate <= endDate);
      });
      setFilteredFollowers(filtered);
    } else {
      setFilteredFollowers(followersData);
    }
  }, [startDate, endDate]);

  const removeFollower = (id) => {
    setFilteredFollowers(filteredFollowers.filter( user => user.uid !== id))
  }

  const startdate = (date) => {
    setStartDate(date)
  }

  const enddate = (date) => {
    setEndDate(date)
  }

  const sortFollowers = (criteria) => {
    setFilteredFollowers([...filteredFollowers].sort((a, b) => b.twubric[criteria] - a.twubric[criteria]));
  };

  return (
    <div>
      <FilterBar startdate={startdate} enddate={enddate} />
      <SortButton sortFollowers={sortFollowers}/>
      <FollowerGrid filteredFollowers={filteredFollowers} removeFollower={removeFollower} />
    </div>
  );
}

export default App;
