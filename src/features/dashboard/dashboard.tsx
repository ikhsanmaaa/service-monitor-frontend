import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useServices } from "@/hooks/useService";

import { formatDistanceToNow } from "date-fns";

import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";
import type { DataService } from "@/types/service";

export default function Overview() {
  const { data, isLoading, error } = useServices();

  const services: DataService[] = data?.data ?? [];

  const totalServices = services.length;

  const upServices = services.filter(
    (service) => service.serviceStatus === "UP",
  ).length;

  const downServices = services.filter(
    (service) => service.serviceStatus === "DOWN",
  ).length;

  const averageLatency =
    services.length > 0
      ? Math.round(
          services.reduce(
            (acc: number, service: DataService) =>
              acc + (service.lastLatency || 0),
            0,
          ) / services.length,
        )
      : 0;

  const statusData = [
    {
      name: "UP",
      value: upServices,
      fill: "#22c55e",
    },
    {
      name: "DOWN",
      value: downServices,
      fill: "#ef4444",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Loading services...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-red-500">Failed to connect to backend</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Centralized Monitoring Dashboard
          </h1>

          <p className="text-muted-foreground">
            Realtime service monitoring system
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

          <span className="text-sm text-muted-foreground">Live Monitoring</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Total Services
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{totalServices}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Services UP
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-green-500">{upServices}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Services DOWN
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-red-500">{downServices}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Avg Latency
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{averageLatency} ms</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monitored Services</CardTitle>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Latency</TableHead>
                  <TableHead>Response</TableHead>
                  <TableHead>Last Checked</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{service.name}</p>

                        <p className="text-sm text-muted-foreground">
                          {service.url}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={
                          service.serviceStatus === "UP"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {service.serviceStatus}
                      </Badge>
                    </TableCell>

                    <TableCell>{service.lastLatency ?? 0} ms</TableCell>

                    <TableCell>{service.responseCode ?? "-"}</TableCell>

                    <TableCell>
                      {service.lastCheckedAt
                        ? formatDistanceToNow(new Date(service.lastCheckedAt), {
                            addSuffix: true,
                          })
                        : "-"}
                    </TableCell>

                    <TableCell className="text-right">
                      <Button size="sm">Re-check</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Distribution</CardTitle>
          </CardHeader>

          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                />

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
