import * as React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Tabs, Tab, Box, CardContent, Divider } from '@mui/material';

// components
import AccountTab from '../../../components/pages/account-setting/AccountTab';
import { IconArticle, IconFileDescription, IconLock, IconEdit } from '@tabler/icons';
import BlankCard from '../../../components/shared/BlankCard';
import NotificationTab from '../../../components/pages/account-setting/NotificationTab';
import BillsTab from '../../../components/pages/account-setting/BillsTab';
import SecurityTab from '../../../components/pages/account-setting/SecurityTab';
import NewRiskForm from 'src/components/pages/risk/NewRiskForm';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'บันทึกความเสี่ยง',
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

const NewRisk = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="บันทึกความเสี่ยง" description="this is new risk page">
      {/* breadcrumb */}
      <Breadcrumb title="บันทึกความเสี่ยง" items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <CardContent>
              <NewRiskForm />
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default NewRisk;
