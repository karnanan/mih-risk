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

import RiskConsiderData from 'src/_mockApis/risk/RiskConsiderData';

const RiskConsider = RiskConsiderData;

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
                <Typography variant="h6">รายละเอียดความเสี่ยง</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">สถานะ</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {RiskConsider.map((RiskConsider) => (
              <TableRow key={RiskConsider.Id} hover>
                <TableCell>
                  <Button size="small">ดำเนินการ</Button>
                </TableCell>
                <TableCell>
                  <Typography>{RiskConsider.Id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{RiskConsider.riskType}</Typography>
                </TableCell>

                <TableCell sx={{ maxWidth: '500px' }}>
                  <Typography
                    // color="textSecondary"
                    noWrap
                    // variant="subtitle2"
                    // fontWeight="400"
                  >
                    {RiskConsider.riskDetail}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        RiskConsider.riskStatus === 'รอทบทวน'
                          ? (theme) => theme.palette.error.light
                          : RiskConsider.riskStatus === 'ทบทวนซ้ำ',
                    }}
                    size="small"
                    label={RiskConsider.riskStatus}
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
