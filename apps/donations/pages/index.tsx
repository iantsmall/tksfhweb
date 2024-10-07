import { Button } from "@thekeepstudios/ui/button";
import { useState } from "react";

export default function Donations(): JSX.Element {
  const [isMessageShown, setIsMessageShown] = useState(false);
  return (
    <div>
      <h1>Donations</h1>
      <div hidden={!isMessageShown}>
        <h2>Welcome to the donations boilerplate!</h2>
        <p>Hello friend, I am a Next.js based application.</p>
      </div>
      <Button
        hidden={isMessageShown}
        onClick={() => {
          setIsMessageShown(!isMessageShown);
        }}
      >
        Say Hello to Next.js
      </Button>
    </div>
  );
}
