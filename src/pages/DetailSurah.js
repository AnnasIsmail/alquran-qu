// material
import { Container, Grid, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
// components
import Page from '../components/Page';
import { BlogPostsSort } from '../sections/@dashboard/blog';
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
let alquranSurahReady = [];

export default function DetailSurah() {
  // const [fullAlquran , setFullAlquran] = React.useState([]);
  const [surahName , setSurahName] = React.useState('Nama Surah');
  const [surahNameAR , setSurahNameAR] = React.useState('');
  const [preBissmillah , setPreBissmillah] = React.useState('');
  const [tafsir , setTafsir] = React.useState('Tafsir Surat');
  const [translation , setTranslation] = React.useState('Arti Surat');
  const [ayahCount , setAyahCount] = React.useState('Jumlah Ayat');
  const [type , setType] = React.useState('Type Surat');
  const [view , setView] = React.useState("arti");
  const [loading , setLoading] = React.useState(true);
  const { slug } = useParams();
  
  const changeView =(value)=> {
    setView(value)
  }

  React.useEffect(()=>{
    
    axios(`https://quran-endpoint.vercel.app/quran/${slug}`)
    .then((response)=> {
        setLoading(false);
        setSurahName(response.data.data.asma.id.short)
        setSurahNameAR(response.data.data.asma.ar.short)
        setTafsir(response.data.data.tafsir.id)
        setType(response.data.data.type.id)
        setTranslation(response.data.data.asma.translation.id)
        setAyahCount(`${response.data.data.ayahCount} Ayat`)
        if(response.data.data.preBismillah !== null){
          setPreBissmillah(response.data.data.preBismillah.text.ar)
        }
        alquranSurah = response.data.data.ayahs;
        alquranSurahReady = response.data.data.ayahs;
    });

    axios(`https://quran-endpoint.vercel.app/quran`)
    .then((response)=> {
      fullAlquran = response.data.data;
    });

  });

  
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {surahNameAR}
        </Typography>
        <Typography variant="h5" component="div">
          {surahName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {translation} - {type} - {ayahCount}
        </Typography>
        <Typography variant="body2" textAlign="justify">
          {tafsir}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Page title="Dashboard: Blog">
      {(loading)?
        <Container>
          <Stack spacing={5}>
            <Skeleton variant="rectangular" width={"100%"} height={150} />
            <Skeleton variant="rectangular" width={"100%"} height={350} />
          </Stack>
        </Container>
      :
        <Container>
          <Stack alignItems="center" flexDirection="column" justifyContent="flex-start" gap={1} mb={5}>
            {/* <Typography variant="h4" gutterBottom>
            </Typography> */}
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
            {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Post
            </Button> */}
          </Stack>

          <Stack mb={5} direction="row" alignItems="center" flexDirection="right" justifyContent="space-between">
            {/* <BlogPostsSearch posts={alquranSurah} setSearch={setSearch} /> */}
            <BlogPostsSort options={SORT_OPTIONS} changeView={changeView} />
          </Stack>
          
          {(preBissmillah !== '')&&
            <Card sx={{ mb: 4 }}>
                <Typography gutterBottom variant="h4" sx={{ p: 2, zIndex: 9, textAlign: 'center', direction: 'rtl', mb: 2 }} >
                  {preBissmillah}
                </Typography>
            </Card>
          }
          
          {(view === "arti")?
              <Grid container spacing={3}>
              {alquranSurahReady.map((post, index) => (
                  <DetailAyat key={post.id} post={post} index={index} namaSurah={surahName} />
              ))}
              </Grid>
          :
          <Card>
              <Typography gutterBottom variant="h4" sx={{ p: 2, zIndex: 9, textAlign: 'justify', direction: 'rtl' }} >
                  {alquranSurahReady.map((post, index) => (
                    <> {post.text.ar} <Chip label={post.number.insurah} sx={{ m: 2 , my: 1 }} /> </> 
                  ))}
              </Typography>
          </Card>
          }
        </Container>
      }
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
