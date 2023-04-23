import * as Components from '/components'

export type BlockProps = {
  data: any
  onClick?: (id: string) => void
  editable?: any
  record: any

}

export default function Block({ data, record, onClick, editable }: BlockProps) {
  const type = data.__typename.replace('Record', '');
  const BlockComponent = Components[type]

  if (!BlockComponent)
    return <div>No block match {data.__typename}</div>

  return <BlockComponent id={record?.id} data={data} record={record} onClick={onClick} />
}