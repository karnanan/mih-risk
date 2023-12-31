import * as React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Tabs, Tab, Box, CardContent, Divider, Typography } from '@mui/material';

// components
import BlankCard from '../../components/shared/BlankCard';
import { IconArticle, IconBell } from '@tabler/icons';

import AnalyzeForm from 'src/components/pages/risk/AnalyzeForm';

import PendingAnalyzeTable from 'src/components/pages/risk/PendingAnalyzeTable';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'ความเสี่ยงรอวิเคราะห์',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AnalyzeRisk = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="ความเสี่ยงรอวิเคราะห์" description="this is pending consider risk page">
      {/* breadcrumb */}
      <Breadcrumb title="ความเสี่ยงรอวิเคราะห์" items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                aria-label="basic tabs example"
                variant="scrollable"
              >
                <Tab
                  iconPosition="start"
                  icon={<IconBell size="22" />}
                  label="ความเสี่ยงรอวิเคราะห์"
                  {...a11yProps(0)}
                />

                <Tab
                  iconPosition="start"
                  icon={<IconArticle size="22" />}
                  label="วิเคราะห์ความเสี่ยง"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <Divider />
            <CardContent>
              <TabPanel value={value} index={0}>
                <PendingAnalyzeTable />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CardContent>
                  <Typography variant="h5" mb={2}>
                    วิเคราะห์ความเสี่ยง
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </CardContent>
                <AnalyzeForm />
              </TabPanel>
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AnalyzeRisk;
