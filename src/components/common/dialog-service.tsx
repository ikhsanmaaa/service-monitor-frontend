import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  createServiceSchema,
  type CreateServiceFormData,
  type UpdateServiceFormData,
} from "@/schemas/service-schema";
import type { DataService } from "@/types/service";

interface DialogServiceProps {
  type: "create" | "update";

  openDialog: boolean;

  onOpenDialog: (open: boolean) => void;

  onSubmit: (data: CreateServiceFormData | UpdateServiceFormData) => void;

  service?: DataService;

  isPending?: boolean;
}

export function DialogService({
  type,
  openDialog,
  onOpenDialog,
  onSubmit,
  service,
  isPending = false,
}: DialogServiceProps) {
  const isUpdateMode = type === "update";

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateServiceFormData>({
    resolver: zodResolver(createServiceSchema),

    mode: "onChange",

    defaultValues: {
      name: "",
      url: "",
      category: "",
    },
  });

  useEffect(() => {
    if (isUpdateMode && service) {
      reset({
        name: service.name,
        url: service.url,
        category: service.category,
      });
    }

    if (!isUpdateMode) {
      reset({
        name: "",
        url: "",
        category: "",
      });
    }
  }, [isUpdateMode, service, reset, openDialog]);

  const handleFormSubmit = (data: CreateServiceFormData) => {
    onSubmit(data);

    if (!isUpdateMode) {
      reset();
    }

    onOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onOpenChange={onOpenDialog}>
      <DialogContent className="sm:max-w-[450px]">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          {/* HEADER */}
          <DialogHeader className="border-b pb-4">
            <DialogTitle>
              {isUpdateMode ? "Update Service" : "Create Service"}
            </DialogTitle>

            <DialogDescription>
              {isUpdateMode
                ? "Update monitored service information"
                : "Create a new monitored service"}
            </DialogDescription>
          </DialogHeader>

          {/* FORM */}
          <FieldGroup>
            {/* NAME */}
            <Field>
              <Label htmlFor="name">Service Name</Label>

              <Input
                id="name"
                placeholder="Payment API"
                className="h-9"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </Field>

            {/* URL */}
            <Field>
              <Label htmlFor="url">Service URL</Label>

              <Input
                id="url"
                placeholder="https://api.example.com"
                className="h-9"
                {...register("url")}
              />

              {errors.url && (
                <p className="text-sm text-red-500">{errors.url.message}</p>
              )}
            </Field>

            {/* CATEGORY */}
            <Field>
              <Label htmlFor="category">Category</Label>

              <Input
                id="category"
                placeholder="Payment Service"
                className="h-9"
                {...register("category")}
              />

              {errors.category && (
                <p className="text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          {/* FOOTER */}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting || isPending}
            >
              {isPending
                ? isUpdateMode
                  ? "Updating..."
                  : "Creating..."
                : isUpdateMode
                  ? "Update Service"
                  : "Create Service"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
