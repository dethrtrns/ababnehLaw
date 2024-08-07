import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from "@mantine/core";
import HeaderMiddle from "./Header";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: "500",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxlZ2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)",
    backgroundSize: "cover",
    // backgroundColor: theme.primaryColor,
    // backgroundBlendMode: "luminosity",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
    transition: "all 0.5s linear",
  },

  inner: {
    // backgroundImage: "url(./logo-color-noBG.svg)",
    // backgroundAttachment: "repeat",
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Goudy Trajan Pro Bold, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .2)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function Hero() {
  const { classes, cx } = useStyles();

  return (
    <div
      id='home'
      className={classes.wrapper}>
      <Overlay
        color='#000'
        opacity={0.65}
        zIndex={1}
      />

      <div className={classes.inner}>
        <Title className={classes.title}>
          ABABNEH LAW &{" "}
          <Text
            component='span'
            inherit
            className={classes.highlight}>
            ARBITRATION
          </Text>
        </Title>

        <Container size={640}>
          <Text
            size='xl'
            // c={"indigo"}
            className={classes.description}>
            A leading business law firm serving public, private and
            not-for-profit clients across key industries, offering creative
            solutions to clients across Jordan and the MENA Region.
          </Text>
          <Title
            mt={36}
            // c={"dark"}
            fz={28}
            className={classes.title}>
            MORE THAN JUST{" "}
            <Text
              component='span'
              inherit
              className={classes.highlight}>
              LAW
            </Text>
          </Title>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant='white'
            c={"white"}
            bg={"#58595b"}
            size='lg'
            onClick={(event) => {
              // event.preventDefault();
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }}>
            About Us
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size='lg'
            bg={"#1c76bc"}
            onClick={(event) => {
              // event.preventDefault();
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
