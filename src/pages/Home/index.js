import React, {useEffect, useState} from 'react';
import DataTable from '../../components/DataTable';
import StatusCounter from '../../components/Counter/index';
import {getAppData} from '../../services';

const Home = () => {
  const [appData, setAppData] = useState({});
  const [currentTableStatus, setCurrentTableStatus] = useState('');

  useEffect(() => {
    getAppData().then((data) => {
      setAppData(data);
      setCurrentTableStatus(Object.keys(data)[0]);
    });
  }, []);

  return (
    <>
      <StatusCounter {...appData} handleItemClick={setCurrentTableStatus} currentStatus={currentTableStatus} />
      <DataTable data={appData[currentTableStatus]} />
    </>
  );
};

export default Home;
