import {React, useState} from "react";
import EditorCompo from "./Components/Editor/EditorCompo";
import Assistance from "./Components/Assistant/Assistant";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function Home() {
    

    return (
        <div className="h-screen w-screen bg-gray-900 text-white">
        <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel defaultSize={50}>
                <PanelGroup direction="vertical">
                    <Panel defaultSize={70}>
                        <EditorCompo />
                    </Panel>

                    <PanelResizeHandle className="h-1 bg-gray-700 cursor-ns-resize" />

                    <Panel defaultSize={30} className="p-2 bg-gray-800">
                        <h2 className="text-lg font-semibold">Schema History</h2>
                        <p className="text-gray-300">Previous queries or schema changes appear here.</p>
                    </Panel>
                </PanelGroup>
            </Panel>

            <PanelResizeHandle className="w-1 bg-gray-700 cursor-ew-resize"/>

            <Panel defaultSize={50}>
                <PanelGroup direction="vertical">
                    <Panel defaultSize={70}>
                            <Assistance />
                    </Panel>

                    <PanelResizeHandle />
                        
                    <Panel defaultSize={30} className="p-2 bg-gray-800">
                        <h2 className="text-lg font-semibold">Query Results</h2>
                        <p className="text-gray-300">Results of the executed SQL query appear here.</p>
                    </Panel>
                </PanelGroup>
            </Panel>
        </PanelGroup>
        </div>
    );
}

export default Home;