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
                  <Typography>{PendingEvaluate.Category}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.subCategory}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.Level}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.Committee}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.Tool}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{PendingEvaluate.Subject}</Typography>
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
