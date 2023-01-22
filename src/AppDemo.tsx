import { OpenblocksAppView } from "openblocks-sdk";

export function AppDemo(props: { appId: string; appDsl?: any }) {
  return (
    <OpenblocksAppView
      className="ob-app"
      appId={props.appId}
      appDsl={props.appDsl}
    />
  );
}
