import { useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import type { PayloadCreateService } from "@/types/service";

export function DialogTask({
  handleSubmit,
  openDialog,
  onOpenDialog,
  type,
}: {
  handleSubmit: (data: PayloadCreateService) => void;
  openDialog: boolean;
  onOpenDialog: (open: boolean) => void;
  type: "add" | "update";
}) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const isFormValid = name.trim() !== "" && url.trim() !== "";

  return (
    <Dialog open={openDialog} onOpenChange={onOpenDialog}>
      <DialogContent className="sm:max-w-105 p-5">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();

            if (!name || !url || !category) {
              alert("Please fill all required fields");
              return;
            }

            handleSubmit({
              name,
              url,
              category,
            });

            setName("");
            setUrl("");
            setCategory("");
          }}
        >
          <DialogHeader className="space-y-1 pb-2 border-b">
            <DialogTitle>Create Service</DialogTitle>

            <DialogDescription>
              Create a new Service for monitored
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name">name</Label>

              <Input
                id="name"
                placeholder="Insert name of the service"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-9"
              />
            </Field>

            <Field>
              <Label htmlFor="description">url</Label>

              <Input
                id="url"
                name="url"
                placeholder="Insert url of the service"
                className="h-9"
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={!isFormValid}
              className="cursor-pointer"
            >
              {type === "add" ? "Create Task" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
