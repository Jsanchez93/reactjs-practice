import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { PreviewCard } from '../components/PreviewCard';
import { Loading } from '../components/Loading';
import { Detail } from '../components/Detail';

export const Dashboard: React.FC = () => {
  const [list, setList] = useState([]);
  const [details, moreDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const initLoad = (loadState: boolean) => {
    if (loadState) {
      setList([]);
    }
    setLoading(loadState);
  };
  
  return (
    <section className="section">
      <div className="row">
        <div className="col s8 min-dash">
          <SearchBar onResult={setList} loading={loading} isLoading={initLoad} />
          {loading && 
            <Loading />
          }
          <div className="section min-section">
            {list.map((el, index) => <PreviewCard key={index} more={moreDetails} data={el} />)}
          </div>
        </div>
        <div className="col s4"><Detail data={details} /></div>
      </div>
    </section>
  );
};