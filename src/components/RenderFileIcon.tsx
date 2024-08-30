/** @format */

import {extensionIconPaths} from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
	filename: string;
	isFolder?: boolean;
	isOpen?: boolean;
}

const RenderFileIcon = ({filename, isFolder, isOpen}: IProps) => {
	const extension = filename.split(".").pop();

	if (
		extension &&
		Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
	) {
		const iconPath = isFolder
			? isOpen
				? `${extensionIconPaths[extension]}-opened.svg`
				: `${extensionIconPaths[extension]}.svg`
			: `${extensionIconPaths[extension]}.svg`;
		return <IconImg src={iconPath} />;
	}
	// else
	if (isFolder && isOpen)
		return <IconImg src='/public/icons/folder/folder-open.svg' />;
	if (isFolder && !isOpen)
		return <IconImg src='/public/icons/folder/folder.svg' />;

	// else

	return <FileIcon />;
};

export default RenderFileIcon;
