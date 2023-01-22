import { AppViewInstance, OpenblocksAppView } from "openblocks-sdk";
import { useRef, useState } from "react";

interface IProps {
  appId: string;
  appDsl?: any;
  initialModuleInputs: any;
  initialMethodName: string;
}

export function ModuleDemo(props: IProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const methodInputRef = useRef<HTMLInputElement>(null);
  const instanceRef = useRef<AppViewInstance<any, any>>(null);
  const [inputs, setInputs] = useState<any>(props.initialModuleInputs);
  const [outputs, setOutputs] = useState<any>({});
  const [eventLogs, setEventLog] = useState<string[]>([]);

  const handleEventTriggered = (eventName: string) => {
    setEventLog((logs) =>
      logs.concat(`${new Date().toISOString()} event ${eventName} triggered`)
    );
  };

  const handleSetInputs = () => {
    const inputDataJson = inputRef.current?.value || JSON.stringify({});
    setInputs(JSON.parse(inputDataJson));
  };

  const handleInvokeMethod = () => {
    const methodName = methodInputRef.current?.value;
    if (!methodName) {
      return;
    }
    instanceRef.current?.invokeMethod(methodName);
  };

  return (
    <div className="module-demo">
      <div>
        <h2>Host page</h2>
        <div className="module-controls">
          <div>
            <strong>inputs</strong>
            <textarea
              ref={inputRef}
              rows={5}
              defaultValue={JSON.stringify(inputs)}
              placeholder="input initial module input data in json format"
            ></textarea>
            <button onClick={handleSetInputs}>set inputs</button>
          </div>
          <div>
            <strong>outputs</strong>
            <textarea
              readOnly
              rows={10}
              value={JSON.stringify(outputs, null, 2)}
            ></textarea>
          </div>
          <div>
            <strong>invoke method</strong>
            <input
              ref={methodInputRef}
              defaultValue={props.initialMethodName}
              placeholder="input module method name"
            />
            <button onClick={handleInvokeMethod}>invoke</button>
          </div>
          <div>
            <strong>events trigger log</strong>
            <textarea
              rows={5}
              readOnly
              value={eventLogs.reverse().join("\n")}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="module-demo-panel">
        <h2>Openblocks module</h2>
        <div>
          <OpenblocksAppView
            onModuleOutputChange={setOutputs}
            onModuleEventTriggered={handleEventTriggered}
            moduleInputs={inputs}
            appId={props.appId}
            appDsl={props.appDsl}
            ref={instanceRef}
          />
        </div>
      </div>
    </div>
  );
}
