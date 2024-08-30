/** @format */
import {ReactNode} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
interface IProps {
	defaultLayout?: number[] | undefined;
	leftPanel: ReactNode;
	rightPanel: ReactNode;
	showLeftPanel: boolean;
}

const ResizablePanel = ({
	defaultLayout = [15, 85],
	leftPanel,
	rightPanel,
	showLeftPanel,
}: IProps) => {
	const onLayout = (sizes: number[]) => {
		document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
	};
	return (
		<PanelGroup
			direction='horizontal'
			onLayout={onLayout}
			autoSaveId='condition'>
			{showLeftPanel && (
				<>
					<Panel
						collapsible
						defaultSize={defaultLayout[0]}
						minSize={10}
						maxSize={60}>
						{leftPanel}
					</Panel>
					<PanelResizeHandle className='border-r-[3px] border-[#ffffff47]' />
				</>
			)}
			<Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
		</PanelGroup>
	);
};

export default ResizablePanel;
