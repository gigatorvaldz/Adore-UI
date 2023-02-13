import { Layout, Button, Input } from "../index";
import React from "react";
import { useState } from "react";

export const App: React.FC = () => {

  const handleClick = (event: React.MouseEvent) => {
    console.log("Button click: ", event)
  }
  const [input, setInput] = useState("");
  return (
    
    <div>
      <Layout>
        <Input onChange={e => setInput(e.currentTarget.value)} value={input}/>
        <Button onClick={() => console.log(input)}>Click</Button>
      </Layout>
    </div>
  );
};
