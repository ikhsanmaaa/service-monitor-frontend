import DialogColumnDone from "@/components/common/dialog-column-done";
import { DialogTask } from "@/components/common/dialog-update";
import { Button } from "@/components/ui/button";
import { useCreateService } from "@/hooks/useServiceMutation";
import type { PayloadCreateService } from "@/types/service";
import { useState } from "react";

export default function Services() {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { mutate: mutateCreate } = useCreateService();

  const handleCreateService = (data: PayloadCreateService) => {
    mutateCreate(data);
    setOpen(false);
  };

  const handleConfirmDone = () => {
    setConfirmOpen(false);
  };

  const handleCancelDone = () => {
    setConfirmOpen(false);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Monitored Service
        </h1>

        <Button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        >
          + Create Service
        </Button>
      </div>

      <DialogTask
        type="add"
        openDialog={open}
        handleSubmit={handleCreateService}
        onOpenDialog={setOpen}
      />
      <DialogColumnDone
        setConfirmOpen={setConfirmOpen}
        confirmOpen={confirmOpen}
        handleCancelDone={handleCancelDone}
        handleConfirmDone={handleConfirmDone}
      />
    </div>
  );
}
