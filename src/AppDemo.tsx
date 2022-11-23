import { OpenblocksAppView } from "openblocks-sdk";

export function AppDemo(props: { appId: string }) {
  return <OpenblocksAppView className="ob-app" appId={props.appId} />;
}
