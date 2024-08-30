/** @format */

import {IFile} from "../interfaces";
import RightArrowIcon from "./SVG/RightArrow";
import DownArrowIcon from "./SVG/DownArrow";
import {useState} from "react";
import RenderFileIcon from "./RenderFileIcon";
import {useDispatch, useSelector} from "react-redux";
import {
	setClickedFileAction,
	setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import {RootState} from "../app/store";
import {doesFileObjectExist} from "../utils/functions";

interface IProps {
	fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
	// STATES

	const {id, isFolder, name, children, content} = fileTree;
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const dispatch = useDispatch();
	const {openedFiles} = useSelector((state: RootState) => state.tree);

	// HANDLERS
	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	const onFileClicked = () => {
		const exist = doesFileObjectExist(openedFiles, id);
		dispatch(
			setClickedFileAction({
				filename: name,
				fileContent: content,
				activeFile: id,
			}),
		);
		if (exist) return;
		dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
	};
	return (
		<div className='ml-4 my-3 cursor-pointer '>
			<div className='flex items-center '>
				{isFolder ? (
					<div
						onClick={toggle}
						className='flex items-center space-x-2'>
						{isOpen ? <DownArrowIcon /> : <RightArrowIcon />}
						<RenderFileIcon
							filename={name}
							isFolder={isFolder}
							isOpen={isOpen}
						/>
						{/* <FolderIcon /> */}
						<span>{name}</span>
					</div>
				) : (
					<div
						className='flex items-center space-x-1 mr-2'
						onClick={onFileClicked}>
						{/* <FileIcon /> */}
						<RenderFileIcon filename={name} />
						<span>{name}</span>
					</div>
				)}
			</div>
			{isOpen &&
				children &&
				children?.map((file, idx) => {
					return (
						<RecursiveComponent
							fileTree={file}
							key={idx}
						/>
					);
				})}
		</div>
	);
};

export default RecursiveComponent;
