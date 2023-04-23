import { StructuredText, renderNodeRule } from 'react-datocms';
import { isParagraph, isRoot } from 'datocms-structured-text-utils';
import Block from '/components/blocks';

export type Props = {
  id: string
  content: any
  record: any
  onClick?: (imageId: string) => void
}

export default function StructuredContent({ record, content, onClick }: Props) {

  if (!content)
    return null

  return (
    <StructuredText
      data={content}
      renderBlock={({ record: block }) => {
        return <Block data={block} record={record} onClick={(id) => onClick?.(id)} />
      }}
      renderInlineRecord={({ record }) => {
        switch (record.__typename) {
          default:
            return null;
        }
      }}
      renderLinkToRecord={({ record, children, transformedMeta }) => {
        switch (record.__typename) {
          default:
            return null;
        }
      }}
      renderText={(text) => {
        // Replace nbsp
        return text?.replace(/\s/g, ' ');
      }}
      customNodeRules={[
        /* Wrap <a> with nextjs Link
        renderNodeRule(isLink, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
          return <Link href={node.url}>{children}</Link>
        }),
        */
        // Clenup paragraphs
        renderNodeRule(isParagraph, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
          //return renderNode('p', { key }, children)
          // Remove trailing <br>
          if (isRoot(ancestors[0]) && node.children[node.children.length - 1].value?.endsWith('\n')) {
            let index = node.children.length;
            while (index >= 0 && node.children[0].value && node.children[0].value[index] === '\n') index--;
            //console.log('remove trailing br', index)
            Array.isArray(children[0].props.children) && children[0].props.children.splice(index)
          }

          // Remove leading <br>
          if (isRoot(ancestors[0]) && node.children[0].value?.startsWith('\n')) {
            let index = 0;
            while (index < node.children[0].value.length && node.children[0].value[index] === '\n') index++;
            //console.log('remove leading br', index)
            Array.isArray(children[0].props.children) && children[0].props.children?.splice(0, index + 1)

          }

          // Filter out empty paragraphs
          children = children.filter(c => !(c.props.children.length === 1 && !c.props.children[0]))

          // If no children remove tag completely
          if (!children.length) return null

          // Return paragraph with sanitized children
          return renderNode('p', { key }, children)

        }),
      ]}
    />
  );
}