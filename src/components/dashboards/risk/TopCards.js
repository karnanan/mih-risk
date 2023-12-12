import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/advanced-training_9888736.svg';
import icon2 from '../../../assets/images/svgs/article_9888910.svg';
import icon3 from '../../../assets/images/svgs/recruitment_9888925.svg';
import icon4 from '../../../assets/images/svgs/search-analysis_9888898.svg';
import icon5 from '../../../assets/images/svgs/cloud-storage_9888928.svg';
import icon6 from '../../../assets/images/svgs/download_9888952.svg';
import icon7 from '../../../assets/images/svgs/market-research_9888906.svg';

const topcards = [
  {
    href: '#',
    icon: icon2,
    title: 'ความเสี่ยงทั้งหมด',
    digits: '3,685',
    bgcolor: 'primary',
  },
  {
    href: '#',
    icon: icon3,
    title: 'รอวิเคราะห์',
    digits: '256',
    bgcolor: 'warning',
  },
  {
    href: '/apps/calendar',
    icon: icon4,
    title: 'รอทบทวน',
    digits: '932',
    bgcolor: 'secondary',
  },
  {
    href: '/apps/email',
    icon: icon5,
    title: 'รอประเมิน',
    digits: '348',
    bgcolor: 'info',
  },
  {
    href: '/apps/chats',
    icon: icon6,
    title: 'ไม่ผ่าน',
    digits: '96',
    bgcolor: 'error',
  },
  {
    href: '/apps/contacts',
    icon: icon1,
    title: 'ผ่าน',
    digits: '48',
    bgcolor: 'success',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={2} mt={2}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Link to={topcard.href}>
            <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
              <CardContent>
                <img src={topcard.icon} alt={topcard.icon} width="50" />
                <Typography
                  color={topcard.bgcolor + '.main'}
                  mt={1}
                  variant="subtitle1"
                  fontWeight={600}
                >
                  {topcard.title}
                </Typography>
                <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                  {topcard.digits}
                </Typography>
              </CardContent>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
