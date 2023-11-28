import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  TableContainer,
  Stack,
} from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';
import TopUsersData from './TopUsersData';

const users = TopUsersData;

const StatisticsUsers = () => {
  // for select
  const [year, setYear] = React.useState('1');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <ParentCard
      title="ผู้เขียนความเสี่ยงสูงสุด : TOP 10"
      // action={
      //   <CustomSelect
      //     labelId="year-dd"
      //     id="year-dd"
      //     size="small"
      //     value={year}
      //     onChange={handleChange}
      //   >
      //     <MenuItem value={1}>2566</MenuItem>
      //     <MenuItem value={2}>2565</MenuItem>
      //     <MenuItem value={3}>2564</MenuItem>
      //   </CustomSelect>
      // }
    >
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  ชื่อ
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  แผนก
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  ฝ่าย
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  จำนวน
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={basic.imgsrc} alt={basic.imgsrc} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {basic.name}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{basic.div}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{basic.dep}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{basic.quantity}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ParentCard>
  );
};

export default StatisticsUsers;
