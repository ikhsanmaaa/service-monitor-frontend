import { getServices } from "@/api/monitoredServiceApi";
import { useQuery } from "@tanstack/react-query";

export const useServices = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    refetchInterval: 30000,
  });

  return { data, isLoading, error };
};
