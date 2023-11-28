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

import PendingConsiderData from 'src/_mockApis/risk/AllRiskData';

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
                <Typography variant="h6">รายละเอียดความเสี่ยง</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PendingConsider.map((PendingConsider) => (
              <TableRow key={PendingConsider.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>
                  <Typography>{PendingConsider.Id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingConsider.riskType}</Typography>
                </TableCell>

                <TableCell sx={{ maxWidth: '650px' }}>
                  <Typography
                    // color="textSecondary"
                    noWrap
                    // variant="subtitle2"
                    // fontWeight="400"
                  >
                    {PendingConsider.riskDetail}
                  </Typography>
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
