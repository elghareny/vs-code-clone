/** @format */

import {svgStyles} from "../../styles";

const FolderIcon = () => {
	return (
		<svg
			{...svgStyles}
			viewBox='0 0 1024 1024'
			className='icon'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z'
				fill='#FFA000'
			/>
			<path
				d='M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z'
				fill='#FFCA28'
			/>
		</svg>
		// <svg
		// 	xmlns='http://www.w3.org/2000/svg'
		// 	{...svgStyles}
		// 	viewBox='0 0 24 24'
		// 	fill='none'
		// 	stroke='#fff700'
		// 	stroke-width='2'
		// 	stroke-linecap='round'
		// 	stroke-linejoin='round'
		// 	className='lucide lucide-folder'>
		// 	<path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
		// </svg>
	);
};

export default FolderIcon;
