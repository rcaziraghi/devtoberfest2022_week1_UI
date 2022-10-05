import React from "react";
import { Button, Card, CardHeader, Text } from '@ui5/webcomponents-react';
import { spacing } from "@ui5/webcomponents-react-base";

export function MyApp() {
  const handleHeaderClick = () => {
    alert("Header clicked");
  };
  return <div>
          <Card header={
                <CardHeader 
                  titleText="Card" 
                  interactive 
                  onClick={handleHeaderClick} />
                  } 
                style={{ width: "300px" }}>
            <Text style={spacing.sapUiContentPadding}>
              This is the content area of the Card
            </Text>
            <Button onClick={() => alert('Hello World!')}>Hello world!</Button>
          </Card>
        </div>;
}