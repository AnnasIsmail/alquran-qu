// material
import { Container, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import SurahSearch from '../sections/@dashboard/blog/SurahSearch';
// components
import Page from '../components/Page';
import { BlogPostCard } from '../sections/@dashboard/blog';
// mock

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'None', label: 'None' },
  { value: 'Makkiyyah', label: 'Makkiyyah' },
  { value: 'Madaniyyah', label: 'Madaniyyah' },
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [alquran , setAlquran] = React.useState([]);
  const [alquranReady , setAlquranReady] = React.useState([]);
  const [search , setSearch] = React.useState('');
  const [sort , setSort] = React.useState('');

  React.useEffect(()=>{
    axios(`https://quran-endpoint.vercel.app/quran`)
    .then((response)=> {
      setAlquran(response.data.data)
      setAlquranReady(response.data.data)
    });
  },[]);

  const setSearchAndFilter =(v)=> {
    if(v !== undefined){
      setAlquranReady(alquran.filter((data , index)=> index === parseInt(10 , v)));
    }else{
      setAlquranReady(alquran);
    }
  }

  const setSearchFunc =(v)=> {
    setSearch(v);
    setSearchAndFilter(v);
  }

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Al Qur'an
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" gap={1}>
          <SurahSearch posts={alquran} setSearch={setSearchFunc}  />
          {/* <BlogPostsSort options={SORT_OPTIONS} setSort={setSortFunc}  /> */}
        </Stack>

        <Grid container spacing={3}>
          {alquranReady.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
