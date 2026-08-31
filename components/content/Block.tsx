import * as Components from './blocks/index';

export type BlockProps = { data: any };

export default function Block({ data }: BlockProps) {
	const type = data.__typename.replace('Record', '');
	const BlockComponent = Components[type as keyof typeof Components];

	if (!BlockComponent) {
		console.warn(`No block component found for type ${type}`);
		return null;
	}

	return <BlockComponent data={data} />;
}
