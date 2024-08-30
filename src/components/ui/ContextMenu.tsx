/** @format */

import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOpenedFilesAction} from "../../app/features/fileTreeSlice";
import {RootState} from "../../app/store";

interface IProps {
	positions: {x: number; y: number};
	setShowMenu: (value: boolean) => void;
}

const ContextMenu = ({positions: {x, y}, setShowMenu}: IProps) => {
	const dispatch = useDispatch();
	const menuRef = useRef<HTMLDivElement>(null);
	const {openedFiles, tabIdToRemove} = useSelector(
		(state: RootState) => state.tree,
	);

	// HANDLER

	const onCloseAll = () => {
		dispatch(setOpenedFilesAction([]));
		setShowMenu(false);
	};
	const onClose = () => {
		const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
		dispatch(setOpenedFilesAction(filtered));
		setShowMenu(false);
	};

	useEffect(() => {
		const handelClickOutSide = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node))
				setShowMenu(false);
		};
		window.addEventListener("click", handelClickOutSide);

		return () => {
			window.removeEventListener("click", handelClickOutSide);
		};
	}, [setShowMenu]);
	return (
		<div ref={menuRef}>
			<ul
				className=' bg-white text-black p-1 space-y-1 rounded-md text-center'
				style={{
					position: "absolute",
					left: x,
					top: y,
				}}>
				<li
					className='cursor-pointer px-10 py-2 rounded-md hover:bg-[#a9a9a972]'
					onClick={onClose}>
					Close
				</li>
				<li
					className='cursor-pointer px-10 py-2 rounded-md hover:bg-[#a9a9a972]'
					onClick={onCloseAll}>
					Close All
				</li>
			</ul>
		</div>
	);
};

export default ContextMenu;
