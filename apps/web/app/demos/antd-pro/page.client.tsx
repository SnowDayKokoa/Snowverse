"use client";
import { ProTable, type ProColumns, ProForm, ProFormText } from "@ant-design/pro-components";

type Row = { id: number; name: string; createdAt: string };

const columns: ProColumns<Row>[] = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Created", dataIndex: "createdAt", valueType: "dateTime" },
];

export default function Page() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Ant Design ProComponents</h1>

      <ProTable<Row>
        rowKey="id"
        columns={columns}
        search={false}
        pagination={false}
        request={async () => ({
          data: [{ id: 1, name: "Alpha", createdAt: new Date().toISOString() }],
        })}
      />

      <ProForm onFinish={async () => true} submitter={{ searchConfig: { submitText: "Create" } }}>
        <ProFormText name="name" label="Name" placeholder="New item name" />
      </ProForm>
    </section>
  );
}
