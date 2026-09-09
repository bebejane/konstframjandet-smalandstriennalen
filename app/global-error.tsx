'use client';

import Error from './error';
import { NextError } from './error';

export default function GlobalError({ error, reset }: { error: NextError; reset: () => void }) {
	return (
		<html>
			<body>
				<Error error={error} reset={reset} />
			</body>
		</html>
	);
}
