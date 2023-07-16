import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  return {error, loading, data, isLoading};
}

export default useFetch;
