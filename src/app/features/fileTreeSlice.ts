/** @format */

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFile} from "../../interfaces";

interface IClickedFile {
	activeFile: string | null;
	filename: string;
	fileContent: string | undefined;
}

interface IInitialState {
	openedFiles: IFile[];
	selectedFile: IClickedFile;
	tabIdToRemove: string | null;
}

const initialState: IInitialState = {
	openedFiles: [],
	selectedFile: {
		activeFile: null,
		filename: "",
		fileContent: "",
	},
	tabIdToRemove: "",
};
const fileTreeSlice = createSlice({
	name: "fileTree",
	initialState,
	reducers: {
		setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
			state.openedFiles = action.payload;
		},
		setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
			state.selectedFile = action.payload;
		},
		setTabIdToRemoveAction: (state, action: PayloadAction<string>) => {
			state.tabIdToRemove = action.payload;
		},
	},
});

export const {
	setOpenedFilesAction,
	setClickedFileAction,
	setTabIdToRemoveAction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
