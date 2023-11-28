import React from 'react';
import { Box, Grid } from '@mui/material';
import TopCards from '../../components/dashboards/modern/TopCards';
import MonthlyChart from '../../components/dashboards/modern/MonthlyChart';
import EmployeeSalary from '../../components/dashboards/modern/EmployeeSalary';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';
import StatisticsClinicCard from '../../components/dashboards/modern/StatisticsClinicCard';
import StatisticsNonClinicCard from '../../components/dashboards/modern/StatisticsNonClinicCard';
import StatisticsUsers from '../../components/dashboards/modern/StatisticsUsers';

const Modern = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* column */}
        <Grid item sm={12} lg={12}>
          <TopCards />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={12}>
          <MonthlyChart />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={6}>
          <StatisticsClinicCard />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={6}>
          <StatisticsNonClinicCard />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={12}>
          <StatisticsUsers />
        </Grid>
      </Grid>

      <Welcome />
    </Box>
  );
};

export default Modern;
