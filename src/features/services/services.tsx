import { DialogTask } from "@/components/common/dialog-task";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Services() {

  const [open,setOpen]=useState(false)


  const handleCreateService = (data: TaskFormData) => {
    addService(data);
    setOpen(false);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-xl font-semibold text-gray-800">Kanban Board</h1>

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
        handleSubmit={handleCreateTask}
        onOpenDialog={setOpen}
      />
      

     
    </div>
  );
}
