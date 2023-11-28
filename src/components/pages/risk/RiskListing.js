import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Chip,
  Stack,
  Avatar,
  TextField,
  Pagination,
  TableContainer,
} from '@mui/material';
import { fetchRisks, SearchRisk } from './RiskSlice';

const RiskListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRisks());
  }, [dispatch]);

  const getVisibleRisks = (risks, filter, riskSearch) => {
    switch (filter) {
      case 'total_risks':
        return risks.filter(
          (c) => !c.deleted && c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      case 'รอทบทวน':
        return risks.filter(
          (c) =>
            !c.deleted &&
            c.riskStatus === 'รอทบทวน' &&
            c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      case 'ทบทวนซ้ำ':
        return risks.filter(
          (c) =>
            !c.deleted &&
            c.riskStatus === 'ทบทวนซ้ำ' &&
            c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      case 'รอประเมิน':
        return risks.filter(
          (c) =>
            !c.deleted &&
            c.riskStatus === 'รอประเมิน' &&
            c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      case 'ไม่ผ่าน':
        return risks.filter(
          (c) =>
            !c.deleted &&
            c.riskStatus === 'ไม่ผ่าน' &&
            c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      case 'ผ่าน':
        return risks.filter(
          (c) =>
            !c.deleted &&
            c.riskStatus === 'ผ่าน' &&
            c.riskDetail.toLocaleLowerCase().includes(riskSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const risks = useSelector((state) =>
    getVisibleRisks(
      state.riskReducer.risks,
      state.riskReducer.currentFilter,
      state.riskReducer.riskSearch,
    ),
  );
  return (
    <Box mt={4}>
      <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
        <TextField
          size="small"
          label="Search"
          fullWidth
          onChange={(e) => dispatch(SearchRisk(e.target.value))}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">เลขที่</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">ประเภท</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">วันที่เกิดเหตุ</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">รายละเอียดความเสี่ยง</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">วันที่บันทึก</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">ผู้บันทึก</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">สถานะ</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {risks.map((risk) => (
              <TableRow key={risk.Id} hover>
                <TableCell>
                  <Typography>{risk.Id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{risk.riskType}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{risk.riskDate}</Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: '250px' }}>
                  <Typography
                    // color="textSecondary"
                    noWrap

                    // variant="subtitle2"
                    // fontWeight="400"
                  >
                    {risk.riskDetail}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{risk.Date}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <Avatar
                      src={risk.thumb}
                      alt={risk.thumb}
                      width="35"
                      sx={{
                        borderRadius: '100%',
                      }}
                    />
                    <Typography>{risk.user}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        risk.riskStatus === 'รอทบทวน'
                          ? (theme) => theme.palette.primary.light
                          : risk.riskStatus === 'ทบทวนซ้ำ'
                          ? (theme) => theme.palette.secondary.light
                          : risk.riskStatus === 'รอประเมิน'
                          ? (theme) => theme.palette.error.light
                          : risk.riskStatus === 'ไม่ผ่าน'
                          ? (theme) => theme.palette.success.light
                          : risk.riskStatus === 'ผ่าน',
                    }}
                    // size="small"
                    label={risk.riskStatus}
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

export default RiskListing;
