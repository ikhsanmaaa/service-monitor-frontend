import type {
  PayloadCreateService,
  PayloadUpdateService,
} from "@/types/service";
import api from "./axios";
import { endpoint } from "./path.constant";

export const createService = async (payload: PayloadCreateService) => {
  const res = await api.post(`${endpoint.MONITORED_SERVICES}/create`, payload);
  return res.data;
};

export const getServices = async () => {
  const res = await api.get(endpoint.MONITORED_SERVICES);
  return res.data;
};

export const getServiceById = async (id: string) => {
  const res = await api.get(`${endpoint.MONITORED_SERVICES}/${id}`);
  return res.data;
};

export const updateService = async ({
  id,
  payload,
}: {
  id: string;
  payload: PayloadUpdateService;
}) => {
  const res = await api.patch(`${endpoint.MONITORED_SERVICES}/${id}`, payload);
  return res.data;
};

export const deleteService = async (id: string) => {
  const res = await api.delete(`${endpoint.MONITORED_SERVICES}/${id}`);
  return res.data;
};

export const forceCheckService = async (id: string) => {
  const res = await api.post(`${endpoint.MONITORED_SERVICES}/${id}/check`);
  return res.data;
};
