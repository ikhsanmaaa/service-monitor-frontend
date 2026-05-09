import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createService,
  updateService,
  deleteService,
  forceCheckService,
} from "@/api/monitoredServiceApi";

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
};

export const useForceCheckService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: forceCheckService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
};
