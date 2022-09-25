import { faker } from '@faker-js/faker';
// @mui
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import React from 'react';
// components
import Page from '../components/Page';
// sections
import { AppNewsUpdate, AppTasks, AppWidgetSummary } from '../sections/@dashboard/app';

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
    function gmod(n,m){
      return ((n%m)+m)%m;
      }
      
      function kuwaiticalendar(adjust){
      let today = new Date();
      if(adjust) {
          const adjustmili = 1000*60*60*24*adjust; 
          const todaymili = today.getTime()+adjustmili;
          today = new Date(todaymili);
      }
      let day = today.getDate();
      let month = today.getMonth();
      let year = today.getFullYear();
      let m = month+1;
      let y = year;
      if(m<3) {
          y -= 1;
          m += 12;
      }
      
      let a = Math.floor(y/100.0);
      let b = 2-a+Math.floor(a/4.0);
      if(y<1583) b = 0;
      if(y===1582) {
          if(m>10)  b = -10;
          if(m===10) {
              b = 0;
              if(day>4) b = -10;
          }
      }
      
      const jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
      
      b = 0;
      if(jd>2299160){
          a = Math.floor((jd-1867216.25)/36524.25);
          b = 1+a-Math.floor(a/4.);
      }
      const bb = jd+b+1524;
      let cc = Math.floor((bb-122.1)/365.25);
      const dd = Math.floor(365.25*cc);
      const ee = Math.floor((bb-dd)/30.6001);
      day =(bb-dd)-Math.floor(30.6001*ee);
      month = ee-1;
      if(ee>13) {
          cc += 1;
          month = ee-13;
      }
      year = cc-4716;
      
      
      const wd = gmod(jd+1,7)+1;
      
      const iyear = 10631./30.0;
      const epochastro = 1948084;
      const epochcivil = 1948085;
      
      const shift1 = 8.01/60.0;
      
      let z = jd-epochastro;
      const cyc = Math.floor(z/10631.);
      z -= 10631*cyc;
      const j = Math.floor((z-shift1)/iyear);
      const iy = 30*cyc+j;
      z -= Math.floor(j*iyear+shift1);
      let im = Math.floor((z+28.5001)/29.5);
      if(im===13) im = 12;
      const id = z-Math.floor(29.5001*im-29);
      
      const myRes = new Array(8);
      
      myRes[0] = day;
      myRes[1] = month-1;
      myRes[2] = year;
      myRes[3] = jd-1;
      myRes[4] = wd-1;
      myRes[5] = id;
      myRes[6] = im-1;
      myRes[7] = iy;
      
      return myRes;
      }
      function writeIslamicDate(adjustment) {
      const wdNames = ["Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt"];
      const iMonthNames = ["Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir","Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban","Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja"];
      const iDate = kuwaiticalendar(adjustment);
      const outputIslamicDate = `${wdNames[iDate[4]]}, ${iDate[5]} ${iMonthNames[iDate[6]]} ${iDate[7]}`;
      return outputIslamicDate;
      }

      return writeIslamicDate(-1)
    
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
    <Page title="Dashboard">
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

          <Grid item xs={12} md={6} lg={12} sx={{ zIndex: 200 }} >
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