import { StructuredContent } from 'next-dato-utils/components';
import * as Blocks from './blocks/index';

export type Props = {
	id?: string;
	content: any;
	styles?: any;
	className?: string;
	blocks?: any;
};

export default function Content({ id, content, styles, blocks, className }: Props) {
	if (!content) return null;

	return (
		<div
			data-datocms-content-link-group={true}
			//data-datocms-content-link-source={JSON.stringify(content)}
		>
			<StructuredContent
				className={className}
				content={content}
				blocks={{ ...Blocks, ...blocks }}
				styles={{
					...styles,
				}}
			/>
		</div>
	);
}
