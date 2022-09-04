import { faker } from '@faker-js/faker';
// @mui
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate, AppTasks, AppWidgetSummary
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Time : 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Tanggal" total={714000} icon={'bi:calendar-check'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Hijriah" total={1352831} color="success" icon={'maki:religious-muslim'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppTasks
              title="Lokasi dan Tanggal"
      
            />
          </Grid>

          
          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate
              title="Jadwal Sholat"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

        
        </Grid>
      </Container>
    </Page>
  );
}
