export type ServiceStatus = "UP" | "DOWN";

export interface DataService {
  id: string;
  name: string;
  url: string;
  category: string;

  serviceStatus: ServiceStatus;

  responseCode: number | null;
  messageStatus: string | null;

  lastLatency: number | null;
  lastCheckedAt: Date | null;
}

export type PayloadCreateService = {
  name: string;
  url: string;
  category: string;
};

export type PayloadUpdateService = {
  id: string;
  name: string;
  url: string;
  category: string;
  lastLatency: string;
  lastCheckedAt: string;
};
