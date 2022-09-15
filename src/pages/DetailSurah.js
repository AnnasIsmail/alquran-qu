// material
import { Container, Grid, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
// components
import Page from '../components/Page';
import { BlogPostsSearch, BlogPostsSort } from '../sections/@dashboard/blog';
import DetailAyat from '../sections/@dashboard/blog/DetailAyat';
// mock

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'arti', label: 'Dengan Artinya' },
  { value: 'ayat', label: 'Hanya Ayat' },
];

// ----------------------------------------------------------------------

let fullAlquran= [];
let alquranSurah = [];

export default function DetailSurah() {
  // const [fullAlquran , setFullAlquran] = React.useState([]);
  const [surahName , setSurahName] = React.useState('Nama Surah');
  const [view , setView] = React.useState("arti");
  const { slug } = useParams();
  
  const changeView =(value)=> {
    setView(value)
  }

  React.useEffect(()=>{
    
    axios(`https://quran-endpoint.vercel.app/quran/${slug}`)
    .then((response)=> {
        setSurahName(response.data.data.asma.id.long)
        alquranSurah = response.data.data.ayahs;
    });

    axios(`https://quran-endpoint.vercel.app/quran`)
    .then((response)=> {
      fullAlquran = response.data.data;
    });

  });

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {surahName}
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={alquranSurah} />
          <BlogPostsSort options={SORT_OPTIONS} changeView={changeView} />
        </Stack>
        {(view === "arti")?
            <Grid container spacing={3}>
            {alquranSurah.map((post, index) => (
                <DetailAyat key={post.id} post={post} index={index} namaSurah={surahName} />
            ))}
            </Grid>
        :
        <Card>
            <Typography gutterBottom variant="h4" sx={{ p: 2, zIndex: 9, textAlign: 'justify', direction: 'rtl' }} >
                {alquranSurah.map((post, index) => (
                   <> {post.text.ar} <Chip label={post.number.insurah} sx={{ m: 2 , my: 1 }} /> </> 
                ))}
            </Typography>
        </Card>
        }
      </Container>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      {
        (fullAlquran.length !== 0)?
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ m: 3 }}>
            {(slug !== '1')&&
              <Button 
              to={`/al-quran/detail-surah/${parseInt(slug , 10)-1}`}
              component={RouterLink}
              > {'<'} {fullAlquran[slug-2].asma.id.long} </Button>
            }
            {(slug !== '114')&&
              <Button
              to={`/al-quran/detail-surah/${parseInt(slug , 10)+1}`}
              component={RouterLink}
              > {fullAlquran[slug].asma.id.long} {'>'} </Button>
            }
          </ButtonGroup>
        :
        <></>
      }
    </Box>
    </Page>
  );
}
