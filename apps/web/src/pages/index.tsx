import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";
import { Button } from "@thekeepstudios/ui/button";

function IndexPage(_: PageProps): JSX.Element {
  const [isMsgShown, setIsMsgShown] = React.useState(false);
  return (
    <main>
      <h1>Web</h1>
      <Button
        hidden={isMsgShown}
        onClick={() => {
          setIsMsgShown(true);
        }}
      >
        Say Hello to Gatsby!
      </Button>
      <div hidden={!isMsgShown}>
        <h2>Hi!</h2>
        <p>Welcome to the Gatsby Boilerplate!</p>
      </div>
    </main>
  );
}

export default IndexPage;

export function Head(_: HeadProps): JSX.Element {
  return <title>Home Page</title>;
}
