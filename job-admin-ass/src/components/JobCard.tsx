import { Card, Text, Button, Divider, Group, Badge, Box } from '@mantine/core';
import classes from './JobCards.module.css';
import Image from 'next/image';
export function JobCards() {
  const jobs = [
    {
      id: 1,
      companyLogoUrl: '/images/amazon.png',
      companyInitial: 'N',
      postedTime: '24h Ago',
      title: 'Node Js Developer',
      experience: '1-3 yr Exp',
      location: 'Onsite',
      salary: '12LPA',
      type: 'Full-time',
      description: [
        'A user-friendly interface lets you browse stunning photos and videos',
        'Filter destinations based on interests and travel style, and create personalized',
      ],
      action: 'Apply Now',
    },
    // Add 3 more similar job objects to test 4 cards in a row
    {
      id: 2,
      companyLogoUrl: '/images/swiggy.png',
      companyInitial: 'A',
      postedTime: '2d Ago',
      title: 'React Developer',
      experience: '2-4 yr Exp',
      location: 'Remote',
      salary: '15LPA',
      type: 'Full-time',
      description: [
        'Build responsive user interfaces',
        'Collaborate with design and backend teams',
      ],
      action: 'Apply Now',
    },
    {
      id: 3,
      companyLogoUrl: '/images/tesla.png',
      companyInitial: 'G',
      postedTime: '1w Ago',
      title: 'Python Developer',
      experience: '3-5 yr Exp',
      location: 'Hybrid',
      salary: '18LPA',
      type: 'Full-time',
      description: [
        'Develop backend services and APIs',
        'Optimize database queries',
      ],
      action: 'Apply Now',
    },
    {
      id: 4,
      companyLogoUrl: '/images/amazon.png',
      companyInitial: 'M',
      postedTime: '3d Ago',
      title: 'DevOps Engineer',
      experience: '4-6 yr Exp',
      location: 'Remote',
      salary: '20LPA',
      type: 'Contract',
      description: ['Manage cloud infrastructure', 'Implement CI/CD pipelines'],
      action: 'Apply Now',
    },
  ];

  return (
    <div className={classes.jobsContainer}>
      <div className={classes.cardGrid}>
        {jobs.map((job) => (
          <Card
            key={job.id}
            className={classes.jobCard}
            padding="lg"
            withBorder
          >
            {/* Top Row: Logo and Time Badge */}
            <div style={{ flexGrow: 1 }}>
              <div className={classes.topRow}>
                <Box className={classes.companyLogo}>
                  {job.companyLogoUrl ? (
                    <Image
                      src={job.companyLogoUrl}
                      alt={`${job.title} Logo`}
                      className={classes.companyLogoImage}
                    />
                  ) : (
                    <Text className={classes.companyInitial}>
                      {job.companyInitial}
                    </Text>
                  )}
                </Box>

                <Box className={classes.postedTimeBadge}>
                  <Text className={classes.postedTimeText}>
                    {job.postedTime}
                  </Text>
                </Box>
              </div>

              {/* Job Title */}
              <Text className={classes.jobTitle}>{job.title}</Text>

              {/* Middle Row: Experience, Location, Salary */}
              <Group className={classes.detailsRow} gap="sm" wrap="nowrap">
                <Box className={classes.detailItem}>
                  <Image
                    src="/images/exp.png"
                    alt="Experience"
                    className={classes.detailIcon}
                  />
                  <Badge className={classes.experienceBadge}>
                    {job.experience}
                  </Badge>
                </Box>
                <Box className={classes.detailItem}>
                  <Image
                    src="/images/jobtype.png"
                    alt="Location"
                    className={classes.detailIcon}
                  />
                  <Badge className={classes.locationBadge}>
                    {job.location}
                  </Badge>
                </Box>
                <Box className={classes.detailItem}>
                  <Image
                    src="/images/salary.png"
                    alt="Salary"
                    className={classes.detailIcon}
                  />
                  <Text className={classes.salaryText}>{job.salary}</Text>
                </Box>
              </Group>

              {/* Description */}
              <div className={classes.jobDescription}>
                {job.description.map((item, index) => (
                  <Text key={index} className={classes.descriptionText}>
                    • {item}
                  </Text>
                ))}
              </div>
            </div>
            <Divider className={classes.divider} />

            {/* Apply Button - Centered */}
            <div className={classes.buttonContainer}>
              <Button className={classes.applyButton}>{job.action}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
