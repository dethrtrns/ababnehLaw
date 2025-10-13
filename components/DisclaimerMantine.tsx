import {
  Button,
  CloseButton,
  createStyles,
  Group,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 20,
    left: 20,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    textAlign: "center",
    margin: "20%",
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "-2px 4px 6px -2px #f76d6d",
    backgroundColor: theme.colors.gray[9],
    zIndex: 1000,
  },
}));
export function DisclaimerMantine({ title }: { title?: string }) {
  const { classes } = useStyles();
  return (
    // <Paper
    //   //   withBorder
    //   bg={"gray.8"}
    //   p="lg"
    //   radius="md"
    //   shadow="md">
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Group style={{ justifyContent: "center" }}>
        <Text fz={32} fw={700} color={"red.6"}>
          {title || "Disclaimer"}
        </Text>
      </Group>
      <Text c="dimmed" fz="xs">
        The rules of the Indian Bar Council prohibit law firms from advertising
        and soliciting work through communication in the public domain. This
        website is meant solely for the purpose of information and not for the
        purpose of advertising. D.S Chaube & Associates does not intend to
        solicit clients through this website. We do not take responsibility for
        decisions taken by the reader based solely on the information provided
        in the website. By &apos;ENTERING&apos; the visitor acknowledges that
        the information provided in the website (a) does not amount to
        advertising or solicitation and (b) is meant only for his/her
        understanding about our activities and who we are.
      </Text>
      {/* <Group
        justify="flex-end"
        mt="md">
        <Button
          variant="default"
          size="xs">
          Cookies preferences
        </Button>
        <Button
          variant="outline"
          size="xs">
          Accept all
        </Button>
      </Group> */}
      {/* </Paper> */}
    </div>
  );
}
