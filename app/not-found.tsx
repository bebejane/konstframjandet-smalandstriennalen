import Error from './error';

export const dynamic = 'force-dynamic';

export default function NotFound() {
	return <Error message={'Not found'} code={404} />;
}
