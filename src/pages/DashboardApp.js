import { faker } from '@faker-js/faker';
// @mui
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import React from 'react';
// components
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate, AppTasks, AppWidgetSummary
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  let d = new Date();
  const [time , setTime] = React.useState('')

  const getTime =()=> {
    d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if(hr < 10){
      hr = `0${hr}`;
    }
    if(min < 10){
      min = `0${min}`;
    }
    if(sec < 10){
      sec = `0${sec}`;
    }
    
    return `${hr} : ${min} : ${sec}`;
  }

  const getDateAndDay =()=> {
    d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[d.getDay()];
    
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  const [ tanggalHijri , setTanggalHijri ] = React.useState('');

  const getDateHijriah=()=> {
    d = new Date();
    
    const date = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    
    axios(`http://api.aladhan.com/v1/gToH?date=${date}-${month}-${year}`)
      .then((response)=> {
        const date = response.data.data.hijri;
        setTanggalHijri(`${date.weekday.en}, ${date.day} ${date.month.en} ${date.year}`);
    });
    
  }
  
  React.useEffect(()=>{
    setInterval(() => {
      setTime(getTime())
    }, 1000);

  },[]);

  const changeJadwal =(data)=>{
    lokasiJadwal = `${data.lokasi}, ${data.daerah}`
    tanggalJadwal = `${data.jadwal.tanggal}`
    tanggalJadwal2 = `${data.jadwal.date}`
    idLokasiJadwal = data.id
    jadwalSholat = [
      {
        id: faker.datatype.uuid(),
        title: "Subuh",
        postedAt: data.jadwal.subuh ,
      },
      {
        id: faker.datatype.uuid(),
        title: "Dhuha",
        postedAt: data.jadwal.dhuha ,
      },
      {
        id: faker.datatype.uuid(),
        title: "Zhuhur",
        postedAt: data.jadwal.dzuhur ,
      },
      {
        id: faker.datatype.uuid(),
        title: "Ashar",
        postedAt: data.jadwal.ashar ,
      },
      {
        id: faker.datatype.uuid(),
        title: "Maghrib",
        postedAt: data.jadwal.maghrib ,
      },
      {
        id: faker.datatype.uuid(),
        title: "Isya",
        postedAt: data.jadwal.isya ,
      },
    ]
  }

  const besok =()=>{
    const day = new Date(tanggalJadwal2);
    const nextDay = new Date(day);
    const date = nextDay.setDate(day.getDate() + 1);
    fetchData(date);
    jadwalSholat = [
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
    ]
  }

  const kemarin =()=>{
    const day = new Date(tanggalJadwal2);
    const nextDay = new Date(day);
    const date = nextDay.setDate(day.getDate() - 1);
    fetchData(date);
    jadwalSholat = [
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
      {
        id: faker.datatype.uuid(),
        title: "",
        postedAt: "" ,
      },
    ]
  }

  const fetchData =(dateParam)=> {
    const date = new Date(dateParam);
    axios(`https://api.myquran.com/v1/sholat/jadwal/${idLokasiJadwal}/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`)
    .then((response)=> {
      changeJadwal(response.data.data)
    });
  }

  return (
    <Page title="Dashboard" className='page-dashboard'>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Time : {time}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Tanggal" total={getDateAndDay()} icon={'bi:calendar-check'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Hijriah" total={(tanggalHijri !== '')? tanggalHijri : getDateHijriah()} color="success" icon={'maki:religious-muslim'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12} sx={{ zIndex: 200000 }} >
            <AppTasks
              title="Lokasi dan Tanggal"
              changeJadwal={changeJadwal}
            />
          </Grid>

          
          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate
              title="Jadwal Sholat"
              subheader={ (lokasiJadwal !== "")? `${lokasiJadwal} - ${tanggalJadwal}` : "" }
              list={jadwalSholat}
              id={idLokasiJadwal}
              tanggal={tanggalJadwal2}
              besok={()=>besok()}
              kemarin={()=>kemarin()}
            />
          </Grid>

        
        </Grid>
      </Container>
    </Page>
  );
}

let tanggalJadwal2 = ""
let jadwalSholat = []
let lokasiJadwal = ""
let tanggalJadwal = ""
let idLokasiJadwal = 0