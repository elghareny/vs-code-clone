/** @format */

import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";

const Preview = () => {
	const {selectedFile} = useSelector((state: RootState) => state.tree);
	return (
		<>
			<OpenedFilesBar />
			<FileSyntaxHighlighter content={selectedFile.fileContent} />
		</>
	);
};

export default Preview;
