import React from 'react';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  IconButton,
  Chip,
  Stack,
  Avatar,
  Tooltip,
  TextField,
  Pagination,
  TableContainer,
  Button,
} from '@mui/material';

import PendingAnalyzeData from 'src/_mockApis/risk/PendingAnalyzeData';

const PendingAnalyzeDataTable = PendingAnalyzeData;

const PendingAnalyzeTable = () => {
  return (
    <Box mt={4}>
      <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
        <TextField size="small" label="Search" fullWidth />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography variant="h6">เลขที่</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">ประเภท</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">ประเภท Clinical</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">เรื่อง</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PendingAnalyzeDataTable.map((PendingAnalyzeDataTable) => (
              <TableRow key={PendingAnalyzeDataTable.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>{PendingAnalyzeDataTable.Id}</TableCell>
                <TableCell>{PendingAnalyzeDataTable.Category}</TableCell>
                <TableCell>{PendingAnalyzeDataTable.subCategory}</TableCell>
                <TableCell>{PendingAnalyzeDataTable.Subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default PendingAnalyzeTable;
