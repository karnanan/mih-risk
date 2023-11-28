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
} from '@mui/material';

import PendingEvaluateData from 'src/_mockApis/risk/RiskEvaluateData';

const PendingEvaluate = PendingEvaluateData;

const PendingEvaluateTable = () => {
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
            {PendingEvaluate.map((PendingEvaluate) => (
              <TableRow key={PendingEvaluate.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.Id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.riskType}</Typography>
                </TableCell>

                <TableCell sx={{ maxWidth: '650px' }}>
                  <Typography
                    // color="textSecondary"
                    noWrap
                    // variant="subtitle2"
                    // fontWeight="400"
                  >
                    {PendingEvaluate.riskDetail}
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

export default PendingEvaluateTable;
