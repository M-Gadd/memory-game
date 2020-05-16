import api from "../api";
import { useState, useEffect } from "react";

export interface UseCardsReturns {
  numbers: Array<any>;
  isLoading: boolean;
}

export const useCards = (number: Number): UseCardsReturns => {
  const [numbers, setNumbers] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const allNumbers = await api.getNumbers({ number });
    setNumbers(allNumbers.data.numbers);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { numbers, isLoading };
};
