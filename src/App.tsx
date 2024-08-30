/** @format */

import {useSelector} from "react-redux";
import "./App.css";
import Preview from "./components/Preview";
import FileComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import {fileTree} from "./data/fileTree";
import {RootState} from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
	const {openedFiles} = useSelector((state: RootState) => state.tree);

	return (
		<div>
			<div className='flex h-screen'>
				<ResizablePanel
					showLeftPanel
					leftPanel={
						<div className='p-2'>
							<FileComponent fileTree={fileTree} />
						</div>
					}
					rightPanel={
						openedFiles.length ? (
							<Preview />
						) : (
							<div className='w-full h-full flex justify-center items-center'>
								<WelcomeTab />
							</div>
						)
					}
				/>
			</div>
		</div>
	);
}

export default App;
