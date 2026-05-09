import type { DateValues } from "date-fns";

type ServiceStatus = "UP" | "DOWN";

export type Service = {
  id: string;
  name: string;
  url: string;
  category: string;
  serviceStatus: ServiceStatus;
  responseCode: string;
  messageStatus: string;
  lastLatency: string;
  lastCheckedAt: DateValues;
};
