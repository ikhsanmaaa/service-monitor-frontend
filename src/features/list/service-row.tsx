import { Calendar, MoreHorizontalIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/utils/cn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { DataService, PayloadUpdateService } from "@/types/service";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTask } from "@/components/common/dialog-update";
import { DialogDelete } from "@/components/common/dialog-delete";
import { useDeleteService, useUpdateService } from "@/hooks/useServiceMutation";

export default function ServiceRow({ data }: { data: DataService }) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const { mutate: mutateDelete } = useDeleteService();

  const { mutate: mutateUpdate } = useUpdateService();

  const handleUpdateService = (data: PayloadUpdateService) => {
    mutateUpdate(data);
  };

  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="pb-2">
        <CardTitle className="text-base capitalize">{data.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
        <Badge
          className={cn(
            "capitalize",
            data.serviceStatus === "UP"
              ? "bg-green-100 text-green-700"
              : data.serviceStatus === "DOWN"
                ? "bg-red-100 text-red-700"
                : null,
          )}
        >
          {data.serviceStatus}
        </Badge>

        <div className="flex flex-col  gap-1">
          <div className="flex">
            <span>{data.name}</span>
          </div>
          <div className="flex">
            <span>{data.url}</span>
          </div>
          <div className="flex">
            <span>{data.category}</span>
          </div>
          <div className="flex">
            <span>{data.serviceStatus}</span>
          </div>
          <div className="flex">
            <span>{data.responseCode}</span>
          </div>
          <div className="flex">
            <span>{data.messageStatus}</span>
          </div>
          <div className="flex">
            <span>{data.lastLatency}</span>
          </div>
          {!data.lastCheckedAt ? null : (
            <div className="flex">
              <Calendar size={14} />
              <span>
                {format(new Date(data.lastCheckedAt), "dd MMM yyyy HH:mm")}
              </span>
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button
                  className="w-full cursor-pointer"
                  variant="secondary"
                  onClick={() => setOpenUpdate(true)}
                >
                  Update
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Button
                  className="w-full cursor-pointer"
                  variant="destructive"
                  onClick={() => setOpenDelete(true)}
                >
                  Delete
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>

      <DialogTask
        type="update"
        openDialog={openUpdate}
        handleSubmit={handleUpdateTask}
        onOpenDialog={setOpenUpdate}
      />

      <DialogDelete
        openDialog={openDelete}
        onOpenDialog={setOpenDelete}
        handleSubmit={handleDeleteTask}
      />
    </Card>
  );
}
