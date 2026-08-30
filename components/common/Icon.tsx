import { type ComponentProps } from 'react';
import { type StaticImageData } from 'next/image';

type IconProps = Omit<ComponentProps<'img'>, 'src'> & {
	src: StaticImageData;
	nofill?: boolean;
};

const EMPTY_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E`;

export default function Icon({ src, nofill, width, height, alt, style, ...props }: IconProps) {
	const mainSrc = nofill ? src.src : EMPTY_SVG;
	width ??= src.width;
	height ??= src.height;
	alt ??= 'icon';
	style = nofill
		? style
		: {
				...style,
				backgroundColor: `currentcolor`,
				mask: `url("${src.src}") no-repeat center / contain`,
			};

	return <img src={mainSrc} width={width} height={height} alt={alt} style={style} {...props} />;
}
