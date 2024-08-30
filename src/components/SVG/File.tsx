/** @format */

import {svgStyles} from "../../styles";

const FileIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className='lucide lucide-file'
			{...svgStyles}>
			<path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
			<path d='M14 2v4a2 2 0 0 0 2 2h4' />
		</svg>
	);
};

export default FileIcon;
