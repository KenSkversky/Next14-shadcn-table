import { Invoice, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Invoice[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a423778",
      amount: 29.95,
      status: "pending",
      email: "rob@gmail.com",
      name: "Robinson",
    },
    {
      id: "gr56643",
      amount: 229,
      status: "success",
      email: "kathy@msn.com",
      name: "Williams",
    },
    {
      id: "54qw567",
      amount: 4,
      status: "pending",
      email: "bax@yahoo.com",
      name: "Baxter",
    },
    {
      id: "#w77844",
      amount: 15.99,
      status: "overdue",
      email: "mark@gmail.com",
      name: "Kennedy",
    },
    {
      id: "REgh545",
      amount: 149,
      status: "pending",
      email: "terry@proton.me",
      name: "Davidson",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
