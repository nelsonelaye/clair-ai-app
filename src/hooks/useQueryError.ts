import { useEffect } from "react";
import toast from "react-hot-toast";

const useQueryError = ({
  isError,
  error,
}: {
  isError: boolean;
  error: any;
}) => {
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);
};

export default useQueryError;
