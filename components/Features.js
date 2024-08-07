import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconGavel,
  IconAward,
} from "@tabler/icons";

const mockdata = [
  {
    title: "Legal Support",
    description: `• Assisting in setting up corporate structures that will enable them to achieve their business objectives securely and with minimum liability.
    • Obtaining the required Governmental authorizations, permits, and licenses in addition to applying for Government incentives, waivers, and tax breaks to ensure a legally and regulatory compliant business with legal advantages.
    • Drafting agreements to ensure relationships with suppliers, distributors, customers and licensees are clear and enforceable.
    • Working diligently to ensure your most valuable business assets, such as intellectual property, are protected through appropriate agreements with employees, contractors and licensees.`,
    // "Ababneh Law & Arbitration (ALA) serves as trusted legal counsel for Jordanian businesses and international players in the MENA region.",
    icon: IconUser,
  },

  {
    title: "Legal Advise",
    description: `• Providing timely, practical and accessible advice concerning the day-to-day matters affecting your business;
• Advising on incorporation/organization and obtaining chari- table status;
• Advising on the structuring relationships between multiple business owners, including shareholder agreements and partnership agreements;
• Advising on share purchase, acquisition, and mergers between different legal entities
including
conducting
comprehensive due diligence exercises.`,
    // "ALA's outsourcing law specialists provide comprehensive solutions for drafting binding business agreements.",
    icon: IconGavel,
  },

  {
    title: "Strategies and Solutions",
    description: `• Advising on relevant Jordanian and international regulatory requirements;
• Developing and implementing outsourcing strategies and business outsourcing agree- ments focused on mitigating risk;
• Solving disputes whether by litigation, arbitration, or mediation to ensure a fast and cost-effective dispute resolution procedure.`,
    // "ALA designs tax-efficient business structures, balancing client interests and recognizing opportunities. ",
    icon: IconAward,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: "85%",
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    transition: "all 0.5s linear",
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Features() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={classes.card}
      p='xl'>
      <feature.icon
        size={50}
        stroke={2}
        color={theme.fn.primaryColor()}
      />
      <Text
        size='lg'
        weight={500}
        className={classes.cardTitle}
        mt='md'>
        {feature.title}
      </Text>
      <Text
        size='sm'
        color='dimmed'
        mt='sm'>
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container
      sx={{
        transition: "all 0.4s linear",
      }}
      id='about'
      size='lg'
      py='xl'>
      <Group position='center'>
        <Badge
          variant='filled'
          size='lg'>
          Our Services
        </Badge>
      </Group>

      <Title
        order={2}
        className={classes.title}
        align='center'
        mt='sm'>
        We provide legal counsel in a wide variety of
        <Text component="span" c={'blue'}> Corporate matters.</Text>
      </Title>

      <Text
        // color='dimmed'
        className={classes.description}
        align='center'
        mt='md'>
        Never has the Jordanian business landscape been as dynamic or
        competitive — nor has the global economy been as precarious. With these
        factors in mind, smart enterprises of all sizes recognize the need for
        an agile, skilled and trustworthy business law firm to navigate
        regulatory complexities and help forge a successful path forward.
        Ababneh law & Arbitration (ALA) is the trusted legal counsel of a wide
        range of Jordanian businesses and corporations and works closely with
        international players conducting business in Jordan and the MENA Region.
        {/* {`Never has the Jordanian business landscape been as dynamic or competitive — nor has the global economy been as precarious. With these factors in mind, smart enterprises of all sizes recognize the need for an agile, skilled and trustworthy business law firm to navigate regulatory complexities and help forge a successful path forward.
Ababneh law & Arbitration (ALA) is the trusted legal counsel of a wide range of Jordanian businesses and corporations and works closely with international players conducting business in Jordan and the MENA Region. Our lawyers have the industry-specific expertise and client service excellence you’re looking for in a professional business law firm.
Whether a multi-hundred million dollar corporation, a startup seeking first-mover advantage, a business looking to outsource operations, or a NGO carrying out your mission, ALA’s legal professionals are equipped to provide your organization with pragmatic guidance and leadership.
Our clients know they can count on ALA’s experience and expertise in corporate and commercial law to give them real advantages in the incorporation, establishment and growth of their businesses. ALA designs and implements tax-efficient business structures that protect our clients’ interests while recognizing opportunities. Our business lawyers also collaborate with the firm’s employment and labor relations, real estate and property, intellectual property, banking and finance, insurance, commercial and transactional matters, regulatory issues and business solutions to ensure a well-rounded service.
Clients looking to develop effective outsourcing strategies and draft binding business outsourcing agreements are well served by ALA’s outsourcing law specialists. We bring together experts in contracting, licensing, intellectual property, taxation, and other areas to deliver a complete solution that meets each client’s unique business goals. We have assisted companies that are seeking to outsource — as well as outsourcing providers — with joint ventures, strategic alliances and outsourcing arrangements.
We also work with NGO’ and not-for-profit organizations and have extensive experience with in helping organizations meet their unique operational challenges and craft a strong legal foundation to build upon. ALA’s lawyers specialize in tax law as it applies to the not-for-profit sector and understand the regulatory framework and business challenges such entities face.`} */}
      </Text>

      <SimpleGrid
        cols={3}
        spacing='xl'
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
