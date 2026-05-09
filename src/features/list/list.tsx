import { useServices } from "@/hooks/useService";
import EmptyState from "../../components/common/empty-state-list";
import ServiceRow from "./service-row";
import type { DataService } from "@/types/service";

export default function List() {
  const { data } = useServices();

  return (
    <div className="max-w-5xl mx-auto px-6 py-6 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-semibold">Task List</h1>

        <span className="text-md text-muted-foreground">
          {data.length} tasks
        </span>
      </div>

      {data.length > 0 ? (
        data.map((data: DataService) => (
          <ServiceRow key={data.id} data={data} />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
