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

import RiskAnalyzeData from 'src/_mockApis/risk/RiskAnalyzeData';

const RiskAnalyzeDataTable = RiskAnalyzeData;

const PendingReviewTable = () => {
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
                <Typography variant="h6">เรื่อง</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">สถานะ</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {RiskAnalyzeDataTable.map((RiskAnalyzeDataTable) => (
              <TableRow key={RiskAnalyzeDataTable.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>{RiskAnalyzeDataTable.Id}</TableCell>
                <TableCell>{RiskAnalyzeDataTable.Category}</TableCell>
                <TableCell>{RiskAnalyzeDataTable.Subject}</TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        RiskAnalyzeDataTable.Status === 'รอทบทวน'
                          ? (theme) => theme.palette.error.light
                          : RiskAnalyzeDataTable.Status === 'ทบทวนซ้ำ',
                    }}
                    size="small"
                    label={RiskAnalyzeDataTable.Status}
                  />
                </TableCell>
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

export default PendingReviewTable;
