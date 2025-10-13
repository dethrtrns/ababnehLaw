import { Card, Text } from "@mantine/core";

export default function DisclaimerBox() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        bgColor: "rgba(0, 0, 255, 0.8)",
        backdropFilter: "blur(50px)",
      }}>
      <Card
        w={400}
        display={"flex"}
        flexDirection={"column"}
        bg={"orange"}
        opacity={0.9}
        h={200}
        zIndex={1000}
        // pos={"fixed"}

        align={"center"}
        justify={"center"}
        justifyItems={"center"}
        alignItems={"center"}
        shadow="xl">
        {" "}
        <h1 style={{ fontWeight: "6000" }}>WARNING</h1>
        <p>
          {" "}
          <Text>
            {" "}
            The content on this website is for educational purposes only. We are
            NOT responsible for any actions taken based on this information.
            Please click 'I understand' to acknowledge!
          </Text>
        </p>
      </Card>
    </div>
  );
}
