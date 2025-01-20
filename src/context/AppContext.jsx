import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);


  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
        const res = await axios.get("https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary");
        return res.data
    } catch (err) {
        console.error("Error fetching fiscal data:", err);
    }
};

const getCitizenshipResults = async () => {
  try {
      const res = await axios.get("https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary");
      return res.data
  } catch (err) {
      console.error("Error fetching citizenship results:", err)
  }
};

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state

    const fiscalData = await getFiscalData();
    const citizenshipResults = await getCitizenshipResults();
    setIsDataLoading(false)
    
    if (fiscalData && citizenshipResults) {
        setGraphData({ ...fiscalData, citizenshipResults });
    }
};

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
