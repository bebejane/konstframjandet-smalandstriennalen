import { Link } from '@/i18n/routing';

export default function FourOhFour() {
	return (
		<div id='error-404' className='page-error'>
			<h1>404 - Page Not Found</h1>
			<Link prefetch={false} href='/'>
				Go back home
			</Link>
		</div>
	);
}
