import Header from '@/components/Header'; // Default import
import { JobCards } from '@/components/JobCard'; // Named import
import { Box } from '@mantine/core';


export default function JobListPage() {
  return (
    <>
      <Header />
      <Box
        component="main"
        style={{
          maxWidth: '100%',
          margin: '0 ',
          backgroundColor: '#f8fdff',
        }}
      >
        <JobCards />
      </Box>
    </>
  );
}
