// 'use client';
// import { useState } from 'react';
// import {
//   TextInput,
//   Select,
//   NumberInput,
//   Textarea,
//   Group,
//   Button,
//   Box,
// } from '@mantine/core';

// export function JobForm() {
//   // Simple local state for each field:
//   const [jobTitle, setJobTitle] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [location, setLocation] = useState('');
//   const [jobType, setJobType] = useState('Full Time');
//   const [salaryMin, setSalaryMin] = useState<number | ''>('');
//   const [salaryMax, setSalaryMax] = useState<number | ''>('');
//   const [description, setDescription] = useState('');
//   return (
//     <Box /* …styles… */>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log({
//             jobTitle,
//             companyName,
//             location,
//             jobType,
//             salaryMin,
//             salaryMax,
//             description,
//           });
//         }}
//       >
//         {/* Job Title */}
//         <Group grow mb="sm">
//           <TextInput
//             label="Job Title"
//             value={jobTitle}
//             onChange={(e) => setJobTitle(e.currentTarget.value)}
//           />
//           <TextInput
//             label="Company Name"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.currentTarget.value)}
//           />
//         </Group>

//         {/* Location & Job Type */}
//         <Group grow mb="sm">
//           <Select
//             label="Location"
//             data={['Chennai', 'Bangalore', 'Remote']}
//             value={location}
//             onChange={setLocation}
//           />
//           <Select
//             label="Job Type"
//             data={['Internship', 'Full Time', 'Part-time', 'Contract']}
//             value={jobType}
//             onChange={setJobType}
//           />
//         </Group>

//         {/* Salary */}
//         <Group grow mb="sm">
//           <NumberInput
//             label="Salary Min"
//             value={salaryMin}
//             onChange={setSalaryMin}
//             placeholder="₹0"
//             prefix="₹"
//           />
//           <NumberInput
//             label="Salary Max"
//             value={salaryMax}
//             onChange={setSalaryMax}
//             placeholder="₹12,00,000"
//             prefix="₹"
//           />
//         </Group>

//         {/* Description */}
//         <Textarea
//           label="Job Description"
//           value={description}
//           onChange={(e) => setDescription(e.currentTarget.value)}
//           minRows={4}
//           mb="md"
//         />

//         {/* Buttons */}
//         <Group justify="space-between">
//           <Button
//             variant="default"
//             onClick={() =>
//               console.log('Draft:', {
//                 jobTitle,
//                 companyName,
//                 location,
//                 jobType,
//                 salaryMin,
//                 salaryMax,
//                 description,
//               })
//             }
//           >
//             Save Draft
//           </Button>
//           <Button type="submit">Publish</Button>
//         </Group>
//       </form>
//     </Box>
//   );
// }
