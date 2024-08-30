/** @format */
import {X} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {IFile} from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import {
	setClickedFileAction,
	setOpenedFilesAction,
	setTabIdToRemoveAction,
} from "../app/features/fileTreeSlice";
import {RootState} from "../app/store";

interface IProps {
	file: IFile;
}

const OpenedFilesBarTab = ({file}: IProps) => {
	const dispatch = useDispatch();

	const {
		openedFiles,
		selectedFile: {activeFile},
	} = useSelector((state: RootState) => state.tree);

	// HANDLERS
	const onclickFile = () => {
		const {id, name, content} = file;
		dispatch(
			setClickedFileAction({
				filename: name,
				fileContent: content,
				activeFile: id,
			}),
		);
	};

	const onRemove = (selectedId: string) => {
		const filtered = openedFiles.filter((file) => file.id !== selectedId);
		const lastTap = filtered[filtered.length - 1];
		if (!lastTap) {
			dispatch(setOpenedFilesAction([]));
			dispatch(
				setClickedFileAction({
					activeFile: null,
					fileContent: "",
					filename: "",
				}),
			);
			return;
		}
		const {id, name, content} = lastTap;
		dispatch(setOpenedFilesAction(filtered));
		dispatch(
			setClickedFileAction({
				activeFile: id,
				fileContent: content,
				filename: name,
			}),
		);
	};
	return (
		<div
			className='flex items-center p-2 cursor-pointer'
			style={{
				borderTop:
					file.id === activeFile
						? "2px solid #cf6ccf"
						: "2px solid transparent",
			}}
			onClick={onclickFile}
			onContextMenu={(e) => {
				e.preventDefault();
				dispatch(setTabIdToRemoveAction(file.id));
			}}>
			<RenderFileIcon filename={file.name} />
			<span className='flex justify-center items-center duration-300 w-fit mx-2 rounded-md'>
				{file.name}
			</span>
			<span
				className='cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md'
				onClick={(e) => {
					e.stopPropagation();
					onRemove(file.id);
				}}>
				<X />
			</span>
		</div>
	);
};

export default OpenedFilesBarTab;
