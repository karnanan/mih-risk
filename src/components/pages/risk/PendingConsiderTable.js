import React from 'react';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  TextField,
  Pagination,
  TableContainer,
  Button,
  Chip,
} from '@mui/material';

import PendingConsiderData from 'src/_mockApis/risk/PendingConsiderData';

const PendingConsider = PendingConsiderData;

const PendingConsiderTable = () => {
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
                <Typography variant="h6">ระดับ</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">คณะกรรมการ</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">เครื่องมือ</Typography>
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
            {PendingConsider.map((PendingConsider) => (
              <TableRow key={PendingConsider.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>{PendingConsider.Id}</TableCell>
                <TableCell>{PendingConsider.Category}</TableCell>
                <TableCell>{PendingConsider.subCategory}</TableCell>
                <TableCell>{PendingConsider.Level}</TableCell>
                <TableCell>{PendingConsider.Committee}</TableCell>
                <TableCell>{PendingConsider.Tool}</TableCell>
                <TableCell>{PendingConsider.Subject}</TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        PendingConsider.Status === 'รอประเมิน'
                          ? (theme) => theme.palette.error.light
                          : PendingConsider.Status === 'ทบทวนซ้ำ',
                    }}
                    size="small"
                    label={PendingConsider.Status}
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

export default PendingConsiderTable;
