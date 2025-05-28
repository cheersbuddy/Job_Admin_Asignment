'use client';
import { useState } from 'react';
import {
  Container,
  Text,
  Button,
  Box,
  Flex,
  Image,
  Input,
  Select,
} from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import classes from './Header.module.css';
// import { JobForm } from '@/components/JobForm';

export default function Header() {
  // const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]);
  const [showJobForm, setShowJobForm] = useState(false);

  const handleDragStart = (e: React.MouseEvent, type: 'min' | 'max') => {
    e.preventDefault();
    const sliderWidth = e.currentTarget.parentElement?.clientWidth || 0;
    const startX = e.clientX;
    const startValue = type === 'min' ? salaryRange[0] : salaryRange[1];

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaPercent = (deltaX / sliderWidth) * 100;
      let newValue = Math.round(startValue + deltaPercent);
      newValue = Math.max(0, Math.min(100, newValue));

      if (type === 'min') {
        setSalaryRange([newValue, salaryRange[1]]);
      } else {
        setSalaryRange([salaryRange[0], newValue]);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Find Jobs', href: '/jobs' },
    { label: 'Find Talents', href: '/talents' },
    { label: 'About us', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <Box component="header" className={classes.header}>
      <Container size="xl" className={classes.container}>
        {/* Top Navigation */}
        <Flex align="center" className={classes.topNav}>
          <Link href="/" className={classes.logoLink}>
            <Image
              src="/images/logo.png"
              alt="JobPortal Logo"
              width={44}
              height={44.68}
              style={{
                marginTop: '1.66px',
                objectFit: 'contain',
              }}
            />
          </Link>

          <Flex className={classes.navCenter}>
            {navLinks.map((link) => (
              <Text
                key={link.href}
                component={Link}
                href={link.href}
                className={classes.navLink}
              >
                {link.label}
              </Text>
            ))}
          </Flex>

          <Button
            variant="filled"
            className={classes.createJobButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowJobForm((v) => !v)}
          >
            <div className={classes.buttonContent}>
              <span
                className={`${classes.textBlock} ${!isHovered ? classes.visible : classes.hidden}`}
              >
                Create Jobs
              </span>
              <span
                className={`${classes.textBlock} ${isHovered ? classes.visible : classes.hidden}`}
              >
                Login
              </span>
            </div>
          </Button>
        </Flex>
      </Container>

      {/* Search and Filter Section */}
      <Flex className={classes.filterContainer}>
        <Flex align="center" className={classes.filterItem}>
          <IconSearch size={25} className={classes.filterIcon} />
          <Input
            placeholder="Search By Job Title, Role"
            className={classes.searchInput}
            variant="unstyled"
            size="md"
            styles={{
              input: {
                paddingRight: 15,
                paddingLeft: 15,
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                width: '180px',
              },
            }}
          />
        </Flex>

        <div className={classes.divider} />

        <Flex
          align="center"
          className={classes.filterItem}
          style={{ minWidth: 150, position: 'relative' }}
        >
          <Image
            src="/images/Location.png"
            alt="Location"
            width={20}
            height={20}
            className={classes.filterIcon}
            style={{ flexShrink: 0, marginRight: 8 }}
          />
          <Select
            placeholder="Preferred Location"
            data={['Remote', 'Onsite', 'Hybrid']}
            className={classes.filterSelect}
            variant="unstyled"
            size="md"
            rightSection={<IconChevronDown size={14} />}
            styles={{
              root: { flex: 1, minWidth: 0, maxWidth: '100%' },
              wrapper: { display: 'flex', alignItems: 'center', minWidth: 0 },
              input: {
                paddingRight: 20,
                paddingLeft: 8,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                border: 'none',
                outline: 'none',
              },
              dropdown: { zIndex: 9999, minWidth: '100%' },
            }}
          />
        </Flex>

        <div className={classes.divider} />

        <Flex
          align="center"
          className={classes.filterItem}
          style={{ minWidth: 150 }}
        >
          <Image
            src="/images/vector (2).png"
            alt="Job Type"
            width={20}
            height={20}
            className={classes.filterIcon}
            style={{ flexShrink: 0 }}
          />
          <Select
            placeholder="Job type"
            data={['Full-time', 'Part-time', 'Contract', 'Internship']}
            className={classes.filterSelect}
            variant="unstyled"
            size="md"
            rightSection={<IconChevronDown size={14} />}
            styles={{
              root: {
                flex: 1,
                minWidth: 0,
                maxWidth: '100%',
                overflow: 'hidden',
                border: 'none',
              },
              wrapper: { display: 'flex', alignItems: 'center', minWidth: 0 },
              input: {
                paddingRight: 12,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                border: 'none',
              },
            }}
          />
        </Flex>

        <div className={classes.divider} />

        <Flex
          align="flex-start"
          direction="column"
          className={classes.filterItem}
          style={{ minWidth: 220 }}
        >
          <Box className={classes.salaryContainer}>
            <div className={classes.salaryTextContainer}>
              <Text size="sm" className={classes.salaryLabel}>
                Salary Per Month
              </Text>
              <Text size="sm" className={classes.salaryValue}>
                ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
              </Text>
            </div>

            <Box
              style={{
                position: 'relative',
                height: '20px',
                width: '90%',
                margin: '0 15px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '9px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#CCC2C2',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '9px',
                  left: 0,
                  width: `${salaryRange[1]}%`,
                  height: '2px',
                  backgroundColor: 'black',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: `${salaryRange[0]}%`,
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '3px solid black',
                  cursor: 'pointer',
                  zIndex: 2,
                  transform: 'translateX(-6px)',
                }}
                onMouseDown={(e) => handleDragStart(e, 'min')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: `${salaryRange[1]}%`,
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '3px solid black',
                  cursor: 'pointer',
                  zIndex: 2,
                  transform: 'translateX(-6px)',
                }}
                onMouseDown={(e) => handleDragStart(e, 'max')}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>

      {/* Job Form - Always in DOM but visibility controlled */}
      <Box
        mt="md"
        p="md"
        style={{
          background: '#f9f9f9',
          display: showJobForm ? 'block' : 'none',
        }}
      >
        {/* <JobForm /> */}
      </Box>
    </Box>
  );
}
