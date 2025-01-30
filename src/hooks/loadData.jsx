import { useState, useEffect } from 'react';

export const loadData = ({ fetchFn }) => {
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // console.log(string);
  useEffect(() => {
    setFetchStatus('LOADING');
    try {
      fetchFn().then((result) => {
        setData(result);
        setFetchStatus('SUCCESS');
      });
    } catch (e) {
      setError(e);
      setFetchStatus('FAILURE');
    }

    // .catch((e) => {
    //   setError(e);
    //   setFetchStatus('FAILURE');
    // });
  }, []);
  return {
    data,
    error,
    status: fetchStatus,
  };
  // async setFn();
  // .then(() => {
  //   setFn({
  //     data,
  //     error,
  //     isLoading: fetchStatus === 'LOADING',
  //     isFail: fetchStatus === 'FAILURE',
  //     isSuccess: fetchStatus === 'SUCCESS',
  //   });
  // }
};
