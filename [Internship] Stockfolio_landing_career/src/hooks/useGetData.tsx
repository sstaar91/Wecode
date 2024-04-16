import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get(url).then((res) => setData(res.data.data));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading };
};

export default useGetData;
