import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { projectPageList } from '../data/projectPages';
import { useRandomColors, useSmallScreen } from '../utils/hooks';
import { ProjectPage } from '../utils/types';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ImageCarousel } from '../components/molecules/ImageCarousel';
import TagList from '../components/molecules/TagList';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectDetails = ({ project }: { project: ProjectPage }) => {
  const {
    name,
    background,
    problem,
    goal,
    solution,
    images,
    tools,
    successMetrics,
    cardImage,
    importantLink
  } = project;
  const isSmallScreen = useSmallScreen();

  const titleStyle = {
    bgColor: 'gray.100',
    w: '100%',
    p: 3,
    borderRadius: 'xl'
  };

  const metricColors = useRandomColors(
    successMetrics ? successMetrics.length : 0
  );

  return (
    <>
      <Image
        h="100px"
        w="100%"
        objectFit="cover"
        src={process.env.PUBLIC_URL + '/images/' + cardImage}
      />
      <Box w="100%" p={isSmallScreen ? 4 : 10}>
        <Link to="/">
          <Button size="lg">Back</Button>
        </Link>
      </Box>
      <VStack spacing={6} w={isSmallScreen ? '90%' : '70%'} m="auto" mb={8}>
        <Heading>{name}</Heading>
        {importantLink && (
          <a target="_blank" href={importantLink.url}>
            <HStack
              backgroundColor="gray.200"
              py={2}
              px={3}
              borderRadius="md"
              transition="all 0.2s ease-in-out"
              _hover={{
                backgroundColor: 'gray.300'
              }}
            >
              <Heading size="md">{importantLink.label}</Heading>
              <ExternalLinkIcon fontSize="lg" />
            </HStack>
          </a>
        )}
        <TagList tags={tools} />
        <Center {...titleStyle}>
          <Heading size="lg">Background</Heading>
        </Center>
        {background.map((paragraph, idx) => (
          <Text key={idx}>{paragraph}</Text>
        ))}
        <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={8}>
          <VStack w={isSmallScreen ? '100%' : '33%'}>
            <Center {...titleStyle}>
              <Heading size="lg">Problem</Heading>
            </Center>
            <Text>{problem}</Text>
          </VStack>
          <VStack w={isSmallScreen ? '100%' : '33%'}>
            <Center {...titleStyle}>
              <Heading size="lg">Goal</Heading>
            </Center>
            <Text>{goal}</Text>
          </VStack>
          <VStack w={isSmallScreen ? '100%' : '33%'}>
            <Center {...titleStyle}>
              <Heading size="lg">Solution</Heading>
            </Center>
            <Text>{solution}</Text>
          </VStack>
        </Stack>
        {successMetrics && (
          <>
            <Center {...titleStyle}>
              <Heading size="lg">Success Metrics</Heading>
            </Center>
            {successMetrics.map((metric, idx) => (
              <Tag
                key={idx}
                fontWeight="bold"
                bgColor={metricColors[idx]}
                size="lg"
                fontSize="xl"
              >
                {metric}
              </Tag>
            ))}
          </>
        )}
        {images.length > 1 ? (
          <ImageCarousel images={images} />
        ) : images.length > 0 ? (
          <Image src={process.env.PUBLIC_URL + '/images/' + images[0]} />
        ) : null}
      </VStack>
    </>
  );
};

export function ProjectPageContainer(): JSX.Element {
  const { id } = useParams();

  const project = projectPageList.find((project) => project.id === id);

  return project ? (
    <ProjectDetails project={project} />
  ) : (
    <>
      <VStack pt={10}>
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Center h="60vh">
          <VStack>
            <Heading>No Project Found</Heading>
          </VStack>
        </Center>
      </VStack>
    </>
  );
}
