import PropTypes from 'prop-types';
// form
import { Card, CardHeader } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import dayjs from 'dayjs';
import * as React from 'react';
import { useCookies } from 'react-cookie';
// @mui
// components

// ----------------------------------------------------------------------

AppTasks.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function AppTasks({ title, subheader, changeJadwal, ...other }) {

  const [cookies, setCookie, removeCookie] = useCookies();

  const [kota , setKota] = React.useState(lokasi[194]);

  const [date, setDate] = React.useState(dayjs(new Date()));

  function getJadwalSholat(date , kota){
      axios(`https://api.myquran.com/v1/sholat/jadwal/${kota.id}/${date.$y}/${date.$M+1}/${date.$D}`)
      .then((response)=> {
        changeJadwal(response.data.data)
      });
  }

  React.useEffect(()=>{
    axios(`https://api.myquran.com/v1/sholat/jadwal/${kota.id}/${date.$y}/${date.$M+1}/${date.$D}`)
    .then((response)=> {
      changeJadwal(response.data.data)
    });

    if(cookies.location === undefined){
      setKota(lokasi[194]);
      setCookie('location' , lokasi[194].id);
    }else{
      lokasi.filter((data)=>data.id === cookies.location).forEach((data)=>{
        setKota(data);
      });
    }

  },[])

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <div
          sx={{ m: 3, zIndex: 200000 }}
      >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Tanggal"
          onChange={(newValue) => {
            setDate(newValue);
            getJadwalSholat(newValue , kota);
          }}
          value={date}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
      </div>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          // defaultValue={lokasi[0]}
          value={kota}
          options={lokasi}
          sx={{ width: '100%' , p: 2 }}
          renderInput={(params) => <TextField {...params} label="Lokasi" />}
          onChange={(e , newValue)=>{
            setCookie('location' , newValue.id);
            setKota(newValue);
            getJadwalSholat(date , newValue);
          }}
        />
    </Card>
  );
}

const lokasi = 
[
  {
  "id": "0101",
  "label": "KAB. ACEH BARAT"
  },
  {
  "id": "0102",
  "label": "KAB. ACEH BARAT DAYA"
  },
  {
  "id": "0103",
  "label": "KAB. ACEH BESAR"
  },
  {
  "id": "0104",
  "label": "KAB. ACEH JAYA"
  },
  {
  "id": "0105",
  "label": "KAB. ACEH SELATAN"
  },
  {
  "id": "0106",
  "label": "KAB. ACEH SINGKIL"
  },
  {
  "id": "0107",
  "label": "KAB. ACEH TAMIANG"
  },
  {
  "id": "0108",
  "label": "KAB. ACEH TENGAH"
  },
  {
  "id": "0109",
  "label": "KAB. ACEH TENGGARA"
  },
  {
  "id": "0110",
  "label": "KAB. ACEH TIMUR"
  },
  {
  "id": "0111",
  "label": "KAB. ACEH UTARA"
  },
  {
  "id": "0112",
  "label": "KAB. BENER MERIAH"
  },
  {
  "id": "0113",
  "label": "KAB. BIREUEN"
  },
  {
  "id": "0114",
  "label": "KAB. GAYO LUES"
  },
  {
  "id": "0115",
  "label": "KAB. NAGAN RAYA"
  },
  {
  "id": "0116",
  "label": "KAB. PIDIE"
  },
  {
  "id": "0117",
  "label": "KAB. PIDIE JAYA"
  },
  {
  "id": "0118",
  "label": "KAB. SIMEULUE"
  },
  {
  "id": "0119",
  "label": "KOTA BANDA ACEH"
  },
  {
  "id": "0120",
  "label": "KOTA LANGSA"
  },
  {
  "id": "0121",
  "label": "KOTA LHOKSEUMAWE"
  },
  {
  "id": "0122",
  "label": "KOTA SABANG"
  },
  {
  "id": "0123",
  "label": "KOTA SUBULUSSALAM"
  },
  {
  "id": "0201",
  "label": "KAB. ASAHAN"
  },
  {
  "id": "0202",
  "label": "KAB. BATUBARA"
  },
  {
  "id": "0203",
  "label": "KAB. DAIRI"
  },
  {
  "id": "0204",
  "label": "KAB. DELI SERDANG"
  },
  {
  "id": "0205",
  "label": "KAB. HUMBANG HASUNDUTAN"
  },
  {
  "id": "0206",
  "label": "KAB. KARO"
  },
  {
  "id": "0207",
  "label": "KAB. LABUHANBATU"
  },
  {
  "id": "0208",
  "label": "KAB. LABUHANBATU SELATAN"
  },
  {
  "id": "0209",
  "label": "KAB. LABUHANBATU UTARA"
  },
  {
  "id": "0210",
  "label": "KAB. LANGKAT"
  },
  {
  "id": "0211",
  "label": "KAB. MANDAILING NATAL"
  },
  {
  "id": "0212",
  "label": "KAB. NIAS"
  },
  {
  "id": "0213",
  "label": "KAB. NIAS BARAT"
  },
  {
  "id": "0214",
  "label": "KAB. NIAS SELATAN"
  },
  {
  "id": "0215",
  "label": "KAB. NIAS UTARA"
  },
  {
  "id": "0216",
  "label": "KAB. PADANG LAWAS"
  },
  {
  "id": "0217",
  "label": "KAB. PADANG LAWAS UTARA"
  },
  {
  "id": "0218",
  "label": "KAB. PAKPAK BHARAT"
  },
  {
  "id": "0219",
  "label": "KAB. SAMOSIR"
  },
  {
  "id": "0220",
  "label": "KAB. SERDANG BEDAGAI"
  },
  {
  "id": "0221",
  "label": "KAB. SIMALUNGUN"
  },
  {
  "id": "0222",
  "label": "KAB. TAPANULI SELATAN"
  },
  {
  "id": "0223",
  "label": "KAB. TAPANULI TENGAH"
  },
  {
  "id": "0224",
  "label": "KAB. TAPANULI UTARA"
  },
  {
  "id": "0225",
  "label": "KAB. TOBA SAMOSIR"
  },
  {
  "id": "0226",
  "label": "KOTA BINJAI"
  },
  {
  "id": "0227",
  "label": "KOTA GUNUNGSITOLI"
  },
  {
  "id": "0228",
  "label": "KOTA MEDAN"
  },
  {
  "id": "0229",
  "label": "KOTA PADANGSIDEMPUAN"
  },
  {
  "id": "0230",
  "label": "KOTA PEMATANGSIANTAR"
  },
  {
  "id": "0231",
  "label": "KOTA SIBOLGA"
  },
  {
  "id": "0232",
  "label": "KOTA TANJUNGBALAI"
  },
  {
  "id": "0233",
  "label": "KOTA TEBING TINGGI"
  },
  {
  "id": "0301",
  "label": "KAB. AGAM"
  },
  {
  "id": "0302",
  "label": "KAB. DHARMASRAYA"
  },
  {
  "id": "0303",
  "label": "KAB. KEPULAUAN MENTAWAI"
  },
  {
  "id": "0304",
  "label": "KAB. LIMA PULUH KOTA"
  },
  {
  "id": "0305",
  "label": "KAB. PADANG PARIAMAN"
  },
  {
  "id": "0306",
  "label": "KAB. PASAMAN"
  },
  {
  "id": "0307",
  "label": "KAB. PASAMAN BARAT"
  },
  {
  "id": "0308",
  "label": "KAB. PESISIR SELATAN"
  },
  {
  "id": "0309",
  "label": "KAB. SIJUNJUNG"
  },
  {
  "id": "0310",
  "label": "KAB. SOLOK"
  },
  {
  "id": "0311",
  "label": "KAB. SOLOK SELATAN"
  },
  {
  "id": "0312",
  "label": "KAB. TANAH DATAR"
  },
  {
  "id": "0313",
  "label": "KOTA BUKITTINGGI"
  },
  {
  "id": "0314",
  "label": "KOTA PADANG"
  },
  {
  "id": "0315",
  "label": "KOTA PADANGPANJANG"
  },
  {
  "id": "0316",
  "label": "KOTA PARIAMAN"
  },
  {
  "id": "0317",
  "label": "KOTA PAYAKUMBUH"
  },
  {
  "id": "0318",
  "label": "KOTA SAWAHLUNTO"
  },
  {
  "id": "0319",
  "label": "KOTA SOLOK"
  },
  {
  "id": "0401",
  "label": "KAB. BENGKALIS"
  },
  {
  "id": "0402",
  "label": "KAB. INDRAGIRI HILIR"
  },
  {
  "id": "0403",
  "label": "KAB. INDRAGIRI HULU"
  },
  {
  "id": "0404",
  "label": "KAB. KAMPAR"
  },
  {
  "id": "0405",
  "label": "KAB. KEPULAUAN MERANTI"
  },
  {
  "id": "0406",
  "label": "KAB. KUANTAN SINGINGI"
  },
  {
  "id": "0407",
  "label": "KAB. PELALAWAN"
  },
  {
  "id": "0408",
  "label": "KAB. ROKAN HILIR"
  },
  {
  "id": "0409",
  "label": "KAB. ROKAN HULU"
  },
  {
  "id": "0410",
  "label": "KAB. SIAK"
  },
  {
  "id": "0411",
  "label": "KOTA DUMAI"
  },
  {
  "id": "0412",
  "label": "KOTA PEKANBARU"
  },
  {
  "id": "0501",
  "label": "KAB. BINTAN"
  },
  {
  "id": "0502",
  "label": "KAB. KARIMUN"
  },
  {
  "id": "0503",
  "label": "KAB. KEPULAUAN ANAMBAS"
  },
  {
  "id": "0504",
  "label": "KAB. LINGGA"
  },
  {
  "id": "0505",
  "label": "KAB. NATUNA"
  },
  {
  "id": "0506",
  "label": "KOTA BATAM"
  },
  {
  "id": "0507",
  "label": "KOTA TANJUNG PINANG"
  },
  {
  "id": "0508",
  "label": "PULAU TAMBELAN KAB. BINTAN"
  },
  {
  "id": "0509",
  "label": "PEKAJANG KAB. LINGGA"
  },
  {
  "id": "0510",
  "label": "PULAU SERASAN KAB. NATUNA"
  },
  {
  "id": "0511",
  "label": "PULAU MIDAI KAB. NATUNA"
  },
  {
  "id": "0512",
  "label": "PULAU LAUT KAB. NATUNA"
  },
  {
  "id": "0601",
  "label": "KAB. BATANGHARI"
  },
  {
  "id": "0602",
  "label": "KAB. BUNGO"
  },
  {
  "id": "0603",
  "label": "KAB. KERINCI"
  },
  {
  "id": "0604",
  "label": "KAB. MERANGIN"
  },
  {
  "id": "0605",
  "label": "KAB. MUARO JAMBI"
  },
  {
  "id": "0606",
  "label": "KAB. SAROLANGUN"
  },
  {
  "id": "0607",
  "label": "KAB. TANJUNG JABUNG BARAT"
  },
  {
  "id": "0608",
  "label": "KAB. TANJUNG JABUNG TIMUR"
  },
  {
  "id": "0609",
  "label": "KAB. TEBO"
  },
  {
  "id": "0610",
  "label": "KOTA JAMBI"
  },
  {
  "id": "0611",
  "label": "KOTA SUNGAI PENUH"
  },
  {
  "id": "0701",
  "label": "KAB. BENGKULU SELATAN"
  },
  {
  "id": "0702",
  "label": "KAB. BENGKULU TENGAH"
  },
  {
  "id": "0703",
  "label": "KAB. BENGKULU UTARA"
  },
  {
  "id": "0704",
  "label": "KAB. KAUR"
  },
  {
  "id": "0705",
  "label": "KAB. KEPAHIANG"
  },
  {
  "id": "0706",
  "label": "KAB. LEBONG"
  },
  {
  "id": "0707",
  "label": "KAB. MUKOMUKO"
  },
  {
  "id": "0708",
  "label": "KAB. REJANG LEBONG"
  },
  {
  "id": "0709",
  "label": "KAB. SELUMA"
  },
  {
  "id": "0710",
  "label": "KOTA BENGKULU"
  },
  {
  "id": "0801",
  "label": "KAB. BANYUASIN"
  },
  {
  "id": "0802",
  "label": "KAB. EMPAT LAWANG"
  },
  {
  "id": "0803",
  "label": "KAB. LAHAT"
  },
  {
  "id": "0804",
  "label": "KAB. MUARA ENIM"
  },
  {
  "id": "0805",
  "label": "KAB. MUSI BANYUASIN"
  },
  {
  "id": "0806",
  "label": "KAB. MUSI RAWAS"
  },
  {
  "id": "0807",
  "label": "KAB. MUSI RAWAS UTARA"
  },
  {
  "id": "0808",
  "label": "KAB. OGAN ILIR"
  },
  {
  "id": "0809",
  "label": "KAB. OGAN KOMERING ILIR"
  },
  {
  "id": "0810",
  "label": "KAB. OGAN KOMERING ULU"
  },
  {
  "id": "0811",
  "label": "KAB. OGAN KOMERING ULU SELATAN"
  },
  {
  "id": "0812",
  "label": "KAB. OGAN KOMERING ULU TIMUR"
  },
  {
  "id": "0813",
  "label": "KAB. PENUKAL ABAB LEMATANG ILIR"
  },
  {
  "id": "0814",
  "label": "KOTA LUBUKLINGGAU"
  },
  {
  "id": "0815",
  "label": "KOTA PAGAR ALAM"
  },
  {
  "id": "0816",
  "label": "KOTA PALEMBANG"
  },
  {
  "id": "0817",
  "label": "KOTA PRABUMULIH"
  },
  {
  "id": "0901",
  "label": "KAB. BANGKA"
  },
  {
  "id": "0902",
  "label": "KAB. BANGKA BARAT"
  },
  {
  "id": "0903",
  "label": "KAB. BANGKA SELATAN"
  },
  {
  "id": "0904",
  "label": "KAB. BANGKA TENGAH"
  },
  {
  "id": "0905",
  "label": "KAB. BELITUNG"
  },
  {
  "id": "0906",
  "label": "KAB. BELITUNG TIMUR"
  },
  {
  "id": "0907",
  "label": "KOTA PANGKAL PINANG"
  },
  {
  "id": "1001",
  "label": "KAB. LAMPUNG TENGAH"
  },
  {
  "id": "1002",
  "label": "KAB. LAMPUNG UTARA"
  },
  {
  "id": "1003",
  "label": "KAB. LAMPUNG SELATAN"
  },
  {
  "id": "1004",
  "label": "KAB. LAMPUNG BARAT"
  },
  {
  "id": "1005",
  "label": "KAB. LAMPUNG TIMUR"
  },
  {
  "id": "1006",
  "label": "KAB. MESUJI"
  },
  {
  "id": "1007",
  "label": "KAB. PESAWARAN"
  },
  {
  "id": "1008",
  "label": "KAB. PESISIR BARAT"
  },
  {
  "id": "1009",
  "label": "KAB. PRINGSEWU"
  },
  {
  "id": "1010",
  "label": "KAB. TULANG BAWANG"
  },
  {
  "id": "1011",
  "label": "KAB. TULANG BAWANG BARAT"
  },
  {
  "id": "1012",
  "label": "KAB. TANGGAMUS"
  },
  {
  "id": "1013",
  "label": "KAB. WAY KANAN"
  },
  {
  "id": "1014",
  "label": "KOTA BANDAR LAMPUNG"
  },
  {
  "id": "1015",
  "label": "KOTA METRO"
  },
  {
  "id": "1101",
  "label": "KAB. LEBAK"
  },
  {
  "id": "1102",
  "label": "KAB. PANDEGLANG"
  },
  {
  "id": "1103",
  "label": "KAB. SERANG"
  },
  {
  "id": "1104",
  "label": "KAB. TANGERANG"
  },
  {
  "id": "1105",
  "label": "KOTA CILEGON"
  },
  {
  "id": "1106",
  "label": "KOTA SERANG"
  },
  {
  "id": "1107",
  "label": "KOTA TANGERANG"
  },
  {
  "id": "1108",
  "label": "KOTA TANGERANG SELATAN"
  },
  {
  "id": "1201",
  "label": "KAB. BANDUNG"
  },
  {
  "id": "1202",
  "label": "KAB. BANDUNG BARAT"
  },
  {
  "id": "1203",
  "label": "KAB. BEKASI"
  },
  {
  "id": "1204",
  "label": "KAB. BOGOR"
  },
  {
  "id": "1205",
  "label": "KAB. CIAMIS"
  },
  {
  "id": "1206",
  "label": "KAB. CIANJUR"
  },
  {
  "id": "1207",
  "label": "KAB. CIREBON"
  },
  {
  "id": "1208",
  "label": "KAB. GARUT"
  },
  {
  "id": "1209",
  "label": "KAB. INDRAMAYU"
  },
  {
  "id": "1210",
  "label": "KAB. KARAWANG"
  },
  {
  "id": "1211",
  "label": "KAB. KUNINGAN"
  },
  {
  "id": "1212",
  "label": "KAB. MAJALENGKA"
  },
  {
  "id": "1213",
  "label": "KAB. PANGANDARAN"
  },
  {
  "id": "1214",
  "label": "KAB. PURWAKARTA"
  },
  {
  "id": "1215",
  "label": "KAB. SUBANG"
  },
  {
  "id": "1216",
  "label": "KAB. SUKABUMI"
  },
  {
  "id": "1217",
  "label": "KAB. SUMEDANG"
  },
  {
  "id": "1218",
  "label": "KAB. TASIKMALAYA"
  },
  {
  "id": "1219",
  "label": "KOTA BANDUNG"
  },
  {
  "id": "1220",
  "label": "KOTA BANJAR"
  },
  {
  "id": "1221",
  "label": "KOTA BEKASI"
  },
  {
  "id": "1222",
  "label": "KOTA BOGOR"
  },
  {
  "id": "1223",
  "label": "KOTA CIMAHI"
  },
  {
  "id": "1224",
  "label": "KOTA CIREBON"
  },
  {
  "id": "1225",
  "label": "KOTA DEPOK"
  },
  {
  "id": "1226",
  "label": "KOTA SUKABUMI"
  },
  {
  "id": "1227",
  "label": "KOTA TASIKMALAYA"
  },
  {
  "id": "1301",
  "label": "KOTA JAKARTA"
  },
  {
  "id": "1302",
  "label": "KAB. KEPULAUAN SERIBU"
  },
  {
  "id": "1401",
  "label": "KAB. BANJARNEGARA"
  },
  {
  "id": "1402",
  "label": "KAB. BANYUMAS"
  },
  {
  "id": "1403",
  "label": "KAB. BATANG"
  },
  {
  "id": "1404",
  "label": "KAB. BLORA"
  },
  {
  "id": "1405",
  "label": "KAB. BOYOLALI"
  },
  {
  "id": "1406",
  "label": "KAB. BREBES"
  },
  {
  "id": "1407",
  "label": "KAB. CILACAP"
  },
  {
  "id": "1408",
  "label": "KAB. DEMAK"
  },
  {
  "id": "1409",
  "label": "KAB. GROBOGAN"
  },
  {
  "id": "1410",
  "label": "KAB. JEPARA"
  },
  {
  "id": "1411",
  "label": "KAB. KARANGANYAR"
  },
  {
  "id": "1412",
  "label": "KAB. KEBUMEN"
  },
  {
  "id": "1413",
  "label": "KAB. KENDAL"
  },
  {
  "id": "1414",
  "label": "KAB. KLATEN"
  },
  {
  "id": "1415",
  "label": "KAB. KUDUS"
  },
  {
  "id": "1416",
  "label": "KAB. MAGELANG"
  },
  {
  "id": "1417",
  "label": "KAB. PATI"
  },
  {
  "id": "1418",
  "label": "KAB. PEKALONGAN"
  },
  {
  "id": "1419",
  "label": "KAB. PEMALANG"
  },
  {
  "id": "1420",
  "label": "KAB. PURBALINGGA"
  },
  {
  "id": "1421",
  "label": "KAB. PURWOREJO"
  },
  {
  "id": "1422",
  "label": "KAB. REMBANG"
  },
  {
  "id": "1423",
  "label": "KAB. SEMARANG"
  },
  {
  "id": "1424",
  "label": "KAB. SRAGEN"
  },
  {
  "id": "1425",
  "label": "KAB. SUKOHARJO"
  },
  {
  "id": "1426",
  "label": "KAB. TEGAL"
  },
  {
  "id": "1427",
  "label": "KAB. TEMANGGUNG"
  },
  {
  "id": "1428",
  "label": "KAB. WONOGIRI"
  },
  {
  "id": "1429",
  "label": "KAB. WONOSOBO"
  },
  {
  "id": "1430",
  "label": "KOTA MAGELANG"
  },
  {
  "id": "1431",
  "label": "KOTA PEKALONGAN"
  },
  {
  "id": "1432",
  "label": "KOTA SALATIGA"
  },
  {
  "id": "1433",
  "label": "KOTA SEMARANG"
  },
  {
  "id": "1434",
  "label": "KOTA SURAKARTA"
  },
  {
  "id": "1435",
  "label": "KOTA TEGAL"
  },
  {
  "id": "1501",
  "label": "KAB. BANTUL"
  },
  {
  "id": "1502",
  "label": "KAB. GUNUNGKIDUL"
  },
  {
  "id": "1503",
  "label": "KAB. KULON PROGO"
  },
  {
  "id": "1504",
  "label": "KAB. SLEMAN"
  },
  {
  "id": "1505",
  "label": "KOTA YOGYAKARTA"
  },
  {
  "id": "1601",
  "label": "KAB. BANGKALAN"
  },
  {
  "id": "1602",
  "label": "KAB. BANYUWANGI"
  },
  {
  "id": "1603",
  "label": "KAB. BLITAR"
  },
  {
  "id": "1604",
  "label": "KAB. BOJONEGORO"
  },
  {
  "id": "1605",
  "label": "KAB. BONDOWOSO"
  },
  {
  "id": "1606",
  "label": "KAB. GRESIK"
  },
  {
  "id": "1607",
  "label": "KAB. JEMBER"
  },
  {
  "id": "1608",
  "label": "KAB. JOMBANG"
  },
  {
  "id": "1609",
  "label": "KAB. KEDIRI"
  },
  {
  "id": "1610",
  "label": "KAB. LAMONGAN"
  },
  {
  "id": "1611",
  "label": "KAB. LUMAJANG"
  },
  {
  "id": "1612",
  "label": "KAB. MADIUN"
  },
  {
  "id": "1613",
  "label": "KAB. MAGETAN"
  },
  {
  "id": "1614",
  "label": "KAB. MALANG"
  },
  {
  "id": "1615",
  "label": "KAB. MOJOKERTO"
  },
  {
  "id": "1616",
  "label": "KAB. NGANJUK"
  },
  {
  "id": "1617",
  "label": "KAB. NGAWI"
  },
  {
  "id": "1618",
  "label": "KAB. PACITAN"
  },
  {
  "id": "1619",
  "label": "KAB. PAMEKASAN"
  },
  {
  "id": "1620",
  "label": "KAB. PASURUAN"
  },
  {
  "id": "1621",
  "label": "KAB. PONOROGO"
  },
  {
  "id": "1622",
  "label": "KAB. PROBOLINGGO"
  },
  {
  "id": "1623",
  "label": "KAB. SAMPANG"
  },
  {
  "id": "1624",
  "label": "KAB. SIDOARJO"
  },
  {
  "id": "1625",
  "label": "KAB. SITUBONDO"
  },
  {
  "id": "1626",
  "label": "KAB. SUMENEP"
  },
  {
  "id": "1627",
  "label": "KAB. TRENGGALEK"
  },
  {
  "id": "1628",
  "label": "KAB. TUBAN"
  },
  {
  "id": "1629",
  "label": "KAB. TULUNGAGUNG"
  },
  {
  "id": "1630",
  "label": "KOTA BATU"
  },
  {
  "id": "1631",
  "label": "KOTA BLITAR"
  },
  {
  "id": "1632",
  "label": "KOTA KEDIRI"
  },
  {
  "id": "1633",
  "label": "KOTA MADIUN"
  },
  {
  "id": "1634",
  "label": "KOTA MALANG"
  },
  {
  "id": "1635",
  "label": "KOTA MOJOKERTO"
  },
  {
  "id": "1636",
  "label": "KOTA PASURUAN"
  },
  {
  "id": "1637",
  "label": "KOTA PROBOLINGGO"
  },
  {
  "id": "1638",
  "label": "KOTA SURABAYA"
  },
  {
  "id": "1701",
  "label": "KAB. BADUNG"
  },
  {
  "id": "1702",
  "label": "KAB. BANGLI"
  },
  {
  "id": "1703",
  "label": "KAB. BULELENG"
  },
  {
  "id": "1704",
  "label": "KAB. GIANYAR"
  },
  {
  "id": "1705",
  "label": "KAB. JEMBRANA"
  },
  {
  "id": "1706",
  "label": "KAB. KARANGASEM"
  },
  {
  "id": "1707",
  "label": "KAB. KLUNGKUNG"
  },
  {
  "id": "1708",
  "label": "KAB. TABANAN"
  },
  {
  "id": "1709",
  "label": "KOTA DENPASAR"
  },
  {
  "id": "1801",
  "label": "KAB. BIMA"
  },
  {
  "id": "1802",
  "label": "KAB. DOMPU"
  },
  {
  "id": "1803",
  "label": "KAB. LOMBOK BARAT"
  },
  {
  "id": "1804",
  "label": "KAB. LOMBOK TENGAH"
  },
  {
  "id": "1805",
  "label": "KAB. LOMBOK TIMUR"
  },
  {
  "id": "1806",
  "label": "KAB. LOMBOK UTARA"
  },
  {
  "id": "1807",
  "label": "KAB. SUMBAWA"
  },
  {
  "id": "1808",
  "label": "KAB. SUMBAWA BARAT"
  },
  {
  "id": "1809",
  "label": "KOTA BIMA"
  },
  {
  "id": "1810",
  "label": "KOTA MATARAM"
  },
  {
  "id": "1901",
  "label": "KAB. ALOR"
  },
  {
  "id": "1902",
  "label": "KAB. BELU"
  },
  {
  "id": "1903",
  "label": "KAB. ENDE"
  },
  {
  "id": "1904",
  "label": "KAB. FLORES TIMUR"
  },
  {
  "id": "1905",
  "label": "KAB. KUPANG"
  },
  {
  "id": "1906",
  "label": "KAB. LEMBATA"
  },
  {
  "id": "1907",
  "label": "KAB. MALAKA"
  },
  {
  "id": "1908",
  "label": "KAB. MANGGARAI"
  },
  {
  "id": "1909",
  "label": "KAB. MANGGARAI BARAT"
  },
  {
  "id": "1910",
  "label": "KAB. MANGGARAI TIMUR"
  },
  {
  "id": "1911",
  "label": "KAB. NGADA"
  },
  {
  "id": "1912",
  "label": "KAB. NAGEKEO"
  },
  {
  "id": "1913",
  "label": "KAB. ROTE NDAO"
  },
  {
  "id": "1914",
  "label": "KAB. SABU RAIJUA"
  },
  {
  "id": "1915",
  "label": "KAB. SIKKA"
  },
  {
  "id": "1916",
  "label": "KAB. SUMBA BARAT"
  },
  {
  "id": "1917",
  "label": "KAB. SUMBA BARAT DAYA"
  },
  {
  "id": "1918",
  "label": "KAB. SUMBA TENGAH"
  },
  {
  "id": "1919",
  "label": "KAB. SUMBA TIMUR"
  },
  {
  "id": "1920",
  "label": "KAB. TIMOR TENGAH SELATAN"
  },
  {
  "id": "1921",
  "label": "KAB. TIMOR TENGAH UTARA"
  },
  {
  "id": "1922",
  "label": "KOTA KUPANG"
  },
  {
  "id": "2001",
  "label": "KAB. BENGKAYANG"
  },
  {
  "id": "2002",
  "label": "KAB. KAPUAS HULU"
  },
  {
  "id": "2003",
  "label": "KAB. KAYONG UTARA"
  },
  {
  "id": "2004",
  "label": "KAB. KETAPANG"
  },
  {
  "id": "2005",
  "label": "KAB. KUBU RAYA"
  },
  {
  "id": "2006",
  "label": "KAB. LANDAK"
  },
  {
  "id": "2007",
  "label": "KAB. MELAWI"
  },
  {
  "id": "2008",
  "label": "KAB. MEMPAWAH"
  },
  {
  "id": "2009",
  "label": "KAB. SAMBAS"
  },
  {
  "id": "2010",
  "label": "KAB. SANGGAU"
  },
  {
  "id": "2011",
  "label": "KAB. SEKADAU"
  },
  {
  "id": "2012",
  "label": "KAB. SINTANG"
  },
  {
  "id": "2013",
  "label": "KOTA PONTIANAK"
  },
  {
  "id": "2014",
  "label": "KOTA SINGKAWANG"
  },
  {
  "id": "2101",
  "label": "KAB. BALANGAN"
  },
  {
  "id": "2102",
  "label": "KAB. BANJAR"
  },
  {
  "id": "2103",
  "label": "KAB. BARITO KUALA"
  },
  {
  "id": "2104",
  "label": "KAB. HULU SUNGAI SELATAN"
  },
  {
  "id": "2105",
  "label": "KAB. HULU SUNGAI TENGAH"
  },
  {
  "id": "2106",
  "label": "KAB. HULU SUNGAI UTARA"
  },
  {
  "id": "2107",
  "label": "KAB. KOTABARU"
  },
  {
  "id": "2108",
  "label": "KAB. TABALONG"
  },
  {
  "id": "2109",
  "label": "KAB. TANAH BUMBU"
  },
  {
  "id": "2110",
  "label": "KAB. TANAH LAUT"
  },
  {
  "id": "2111",
  "label": "KAB. TAPIN"
  },
  {
  "id": "2112",
  "label": "KOTA BANJARBARU"
  },
  {
  "id": "2113",
  "label": "KOTA BANJARMASIN"
  },
  {
  "id": "2201",
  "label": "KAB. BARITO SELATAN"
  },
  {
  "id": "2202",
  "label": "KAB. BARITO TIMUR"
  },
  {
  "id": "2203",
  "label": "KAB. BARITO UTARA"
  },
  {
  "id": "2204",
  "label": "KAB. GUNUNG MAS"
  },
  {
  "id": "2205",
  "label": "KAB. KAPUAS"
  },
  {
  "id": "2206",
  "label": "KAB. KATINGAN"
  },
  {
  "id": "2207",
  "label": "KAB. KOTAWARINGIN BARAT"
  },
  {
  "id": "2208",
  "label": "KAB. KOTAWARINGIN TIMUR"
  },
  {
  "id": "2209",
  "label": "KAB. LAMANDAU"
  },
  {
  "id": "2210",
  "label": "KAB. MURUNG RAYA"
  },
  {
  "id": "2211",
  "label": "KAB. PULANG PISAU"
  },
  {
  "id": "2212",
  "label": "KAB. SUKAMARA"
  },
  {
  "id": "2213",
  "label": "KAB. SERUYAN"
  },
  {
  "id": "2214",
  "label": "KOTA PALANGKARAYA"
  },
  {
  "id": "2301",
  "label": "KAB. BERAU"
  },
  {
  "id": "2302",
  "label": "KAB. KUTAI BARAT"
  },
  {
  "id": "2303",
  "label": "KAB. KUTAI KARTANEGARA"
  },
  {
  "id": "2304",
  "label": "KAB. KUTAI TIMUR"
  },
  {
  "id": "2305",
  "label": "KAB. MAHAKAM ULU"
  },
  {
  "id": "2306",
  "label": "KAB. PASER"
  },
  {
  "id": "2307",
  "label": "KAB. PENAJAM PASER UTARA"
  },
  {
  "id": "2308",
  "label": "KOTA BALIKPAPAN"
  },
  {
  "id": "2309",
  "label": "KOTA BONTANG"
  },
  {
  "id": "2310",
  "label": "KOTA SAMARINDA"
  },
  {
  "id": "2401",
  "label": "KAB. BULUNGAN"
  },
  {
  "id": "2402",
  "label": "KAB. MALINAU"
  },
  {
  "id": "2403",
  "label": "KAB. NUNUKAN"
  },
  {
  "id": "2404",
  "label": "KAB. TANA TIDUNG"
  },
  {
  "id": "2405",
  "label": "KOTA TARAKAN"
  },
  {
  "id": "2501",
  "label": "KAB. BOALEMO"
  },
  {
  "id": "2502",
  "label": "KAB. BONE BOLANGO"
  },
  {
  "id": "2503",
  "label": "KAB. GORONTALO"
  },
  {
  "id": "2504",
  "label": "KAB. GORONTALO UTARA"
  },
  {
  "id": "2505",
  "label": "KAB. POHUWATO"
  },
  {
  "id": "2506",
  "label": "KOTA GORONTALO"
  },
  {
  "id": "2601",
  "label": "KAB. BANTAENG"
  },
  {
  "id": "2602",
  "label": "KAB. BARRU"
  },
  {
  "id": "2603",
  "label": "KAB. BONE"
  },
  {
  "id": "2604",
  "label": "KAB. BULUKUMBA"
  },
  {
  "id": "2605",
  "label": "KAB. ENREKANG"
  },
  {
  "id": "2606",
  "label": "KAB. GOWA"
  },
  {
  "id": "2607",
  "label": "KAB. JENEPONTO"
  },
  {
  "id": "2608",
  "label": "KAB. KEPULAUAN SELAYAR"
  },
  {
  "id": "2609",
  "label": "KAB. LUWU"
  },
  {
  "id": "2610",
  "label": "KAB. LUWU TIMUR"
  },
  {
  "id": "2611",
  "label": "KAB. LUWU UTARA"
  },
  {
  "id": "2612",
  "label": "KAB. MAROS"
  },
  {
  "id": "2613",
  "label": "KAB. PANGKAJENE DAN KEPULAUAN"
  },
  {
  "id": "2614",
  "label": "KAB. PINRANG"
  },
  {
  "id": "2615",
  "label": "KAB. SIDENRENG RAPPANG"
  },
  {
  "id": "2616",
  "label": "KAB. SINJAI"
  },
  {
  "id": "2617",
  "label": "KAB. SOPPENG"
  },
  {
  "id": "2618",
  "label": "KAB. TAKALAR"
  },
  {
  "id": "2619",
  "label": "KAB. TANA TORAJA"
  },
  {
  "id": "2620",
  "label": "KAB. TORAJA UTARA"
  },
  {
  "id": "2621",
  "label": "KAB. WAJO"
  },
  {
  "id": "2622",
  "label": "KOTA MAKASSAR"
  },
  {
  "id": "2623",
  "label": "KOTA PALOPO"
  },
  {
  "id": "2624",
  "label": "KOTA PAREPARE"
  },
  {
  "id": "2701",
  "label": "KAB. BOMBANA"
  },
  {
  "id": "2702",
  "label": "KAB. BUTON"
  },
  {
  "id": "2703",
  "label": "KAB. BUTON SELATAN"
  },
  {
  "id": "2704",
  "label": "KAB. BUTON TENGAH"
  },
  {
  "id": "2705",
  "label": "KAB. BUTON UTARA"
  },
  {
  "id": "2706",
  "label": "KAB. KOLAKA"
  },
  {
  "id": "2707",
  "label": "KAB. KOLAKA TIMUR"
  },
  {
  "id": "2708",
  "label": "KAB. KOLAKA UTARA"
  },
  {
  "id": "2709",
  "label": "KAB. KONAWE"
  },
  {
  "id": "2710",
  "label": "KAB. KONAWE KEPULAUAN"
  },
  {
  "id": "2711",
  "label": "KAB. KONAWE SELATAN"
  },
  {
  "id": "2712",
  "label": "KAB. KONAWE UTARA"
  },
  {
  "id": "2713",
  "label": "KAB. MUNA"
  },
  {
  "id": "2714",
  "label": "KAB. MUNA BARAT"
  },
  {
  "id": "2715",
  "label": "KAB. WAKATOBI"
  },
  {
  "id": "2716",
  "label": "KOTA BAU-BAU"
  },
  {
  "id": "2717",
  "label": "KOTA KENDARI"
  },
  {
  "id": "2801",
  "label": "KAB. BANGGAI"
  },
  {
  "id": "2802",
  "label": "KAB. BANGGAI KEPULAUAN"
  },
  {
  "id": "2803",
  "label": "KAB. BANGGAI LAUT"
  },
  {
  "id": "2804",
  "label": "KAB. BUOL"
  },
  {
  "id": "2805",
  "label": "KAB. DONGGALA"
  },
  {
  "id": "2806",
  "label": "KAB. MOROWALI"
  },
  {
  "id": "2807",
  "label": "KAB. MOROWALI UTARA"
  },
  {
  "id": "2808",
  "label": "KAB. PARIGI MOUTONG"
  },
  {
  "id": "2809",
  "label": "KAB. POSO"
  },
  {
  "id": "2810",
  "label": "KAB. SIGI"
  },
  {
  "id": "2811",
  "label": "KAB. TOJO UNA-UNA"
  },
  {
  "id": "2812",
  "label": "KAB. TOLI-TOLI"
  },
  {
  "id": "2813",
  "label": "KOTA PALU"
  },
  {
  "id": "2901",
  "label": "KAB. BOLAANG MONGONDOW"
  },
  {
  "id": "2902",
  "label": "KAB. BOLAANG MONGONDOW SELATAN"
  },
  {
  "id": "2903",
  "label": "KAB. BOLAANG MONGONDOW TIMUR"
  },
  {
  "id": "2904",
  "label": "KAB. BOLAANG MONGONDOW UTARA"
  },
  {
  "id": "2905",
  "label": "KAB. KEPULAUAN SANGIHE"
  },
  {
  "id": "2906",
  "label": "KAB. KEPULAUAN SIAU TAGULANDANG BIARO"
  },
  {
  "id": "2907",
  "label": "KAB. KEPULAUAN TALAUD"
  },
  {
  "id": "2908",
  "label": "KAB. MINAHASA"
  },
  {
  "id": "2909",
  "label": "KAB. MINAHASA SELATAN"
  },
  {
  "id": "2910",
  "label": "KAB. MINAHASA TENGGARA"
  },
  {
  "id": "2911",
  "label": "KAB. MINAHASA UTARA"
  },
  {
  "id": "2912",
  "label": "KOTA BITUNG"
  },
  {
  "id": "2913",
  "label": "KOTA KOTAMOBAGU"
  },
  {
  "id": "2914",
  "label": "KOTA MANADO"
  },
  {
  "id": "2915",
  "label": "KOTA TOMOHON"
  },
  {
  "id": "3001",
  "label": "KAB. MAJENE"
  },
  {
  "id": "3002",
  "label": "KAB. MAMASA"
  },
  {
  "id": "3003",
  "label": "KAB. MAMUJU"
  },
  {
  "id": "3004",
  "label": "KAB. MAMUJU TENGAH"
  },
  {
  "id": "3005",
  "label": "KAB. MAMUJU UTARA"
  },
  {
  "id": "3006",
  "label": "KAB. POLEWALI MANDAR"
  },
  {
  "id": "3101",
  "label": "KAB. BURU"
  },
  {
  "id": "3102",
  "label": "KAB. BURU SELATAN"
  },
  {
  "id": "3103",
  "label": "KAB. KEPULAUAN ARU"
  },
  {
  "id": "3104",
  "label": "KAB. MALUKU BARAT DAYA"
  },
  {
  "id": "3105",
  "label": "KAB. MALUKU TENGAH"
  },
  {
  "id": "3106",
  "label": "KAB. MALUKU TENGGARA"
  },
  {
  "id": "3107",
  "label": "KAB. MALUKU TENGGARA BARAT"
  },
  {
  "id": "3108",
  "label": "KAB. SERAM BAGIAN BARAT"
  },
  {
  "id": "3109",
  "label": "KAB. SERAM BAGIAN TIMUR"
  },
  {
  "id": "3110",
  "label": "KOTA AMBON"
  },
  {
  "id": "3111",
  "label": "KOTA TUAL"
  },
  {
  "id": "3201",
  "label": "KAB. HALMAHERA BARAT"
  },
  {
  "id": "3202",
  "label": "KAB. HALMAHERA TENGAH"
  },
  {
  "id": "3203",
  "label": "KAB. HALMAHERA UTARA"
  },
  {
  "id": "3204",
  "label": "KAB. HALMAHERA SELATAN"
  },
  {
  "id": "3205",
  "label": "KAB. KEPULAUAN SULA"
  },
  {
  "id": "3206",
  "label": "KAB. HALMAHERA TIMUR"
  },
  {
  "id": "3207",
  "label": "KAB. PULAU MOROTAI"
  },
  {
  "id": "3208",
  "label": "KAB. PULAU TALIABU"
  },
  {
  "id": "3209",
  "label": "KOTA TERNATE"
  },
  {
  "id": "3210",
  "label": "KOTA TIDORE KEPULAUAN"
  },
  {
  "id": "3211",
  "label": "KOTA SOFIFI"
  },
  {
  "id": "3301",
  "label": "KAB. ASMAT"
  },
  {
  "id": "3302",
  "label": "KAB. BIAK NUMFOR"
  },
  {
  "id": "3303",
  "label": "KAB. BOVEN DIGOEL"
  },
  {
  "id": "3304",
  "label": "KAB. DEIYAI"
  },
  {
  "id": "3305",
  "label": "KAB. DOGIYAI"
  },
  {
  "id": "3306",
  "label": "KAB. INTAN JAYA"
  },
  {
  "id": "3307",
  "label": "KAB. JAYAPURA"
  },
  {
  "id": "3308",
  "label": "KAB. JAYAWIJAYA"
  },
  {
  "id": "3309",
  "label": "KAB. KEEROM"
  },
  {
  "id": "3310",
  "label": "KAB. KEPULAUAN YAPEN"
  },
  {
  "id": "3311",
  "label": "KAB. LANNY JAYA"
  },
  {
  "id": "3312",
  "label": "KAB. MAMBERAMO RAYA"
  },
  {
  "id": "3313",
  "label": "KAB. MAMBERAMO TENGAH"
  },
  {
  "id": "3314",
  "label": "KAB. MAPPI"
  },
  {
  "id": "3315",
  "label": "KAB. MERAUKE"
  },
  {
  "id": "3316",
  "label": "KAB. MIMIKA"
  },
  {
  "id": "3317",
  "label": "KAB. NABIRE"
  },
  {
  "id": "3318",
  "label": "KAB. NDUGA"
  },
  {
  "id": "3319",
  "label": "KAB. PANIAI"
  },
  {
  "id": "3320",
  "label": "KAB. PEGUNUNGAN BINTANG"
  },
  {
  "id": "3321",
  "label": "KAB. PUNCAK"
  },
  {
  "id": "3322",
  "label": "KAB. PUNCAK JAYA"
  },
  {
  "id": "3323",
  "label": "KAB. SARMI"
  },
  {
  "id": "3324",
  "label": "KAB. SUPIORI"
  },
  {
  "id": "3325",
  "label": "KAB. TOLIKARA"
  },
  {
  "id": "3326",
  "label": "KAB. WAROPEN"
  },
  {
  "id": "3327",
  "label": "KAB. YAHUKIMO"
  },
  {
  "id": "3328",
  "label": "KAB. YALIMO"
  },
  {
  "id": "3329",
  "label": "KOTA JAYAPURA"
  },
  {
  "id": "3330",
  "label": "KAB. YAPEN WAROPEN"
  },
  {
  "id": "3401",
  "label": "KAB. FAKFAK"
  },
  {
  "id": "3402",
  "label": "KAB. KAIMANA"
  },
  {
  "id": "3403",
  "label": "KAB. MANOKWARI"
  },
  {
  "id": "3404",
  "label": "KAB. MANOKWARI SELATAN"
  },
  {
  "id": "3405",
  "label": "KAB. MAYBRAT"
  },
  {
  "id": "3406",
  "label": "KAB. PEGUNUNGAN ARFAK"
  },
  {
  "id": "3407",
  "label": "KAB. RAJA AMPAT"
  },
  {
  "id": "3408",
  "label": "KAB. SORONG"
  },
  {
  "id": "3409",
  "label": "KAB. SORONG SELATAN"
  },
  {
  "id": "3410",
  "label": "KAB. TAMBRAUW"
  },
  {
  "id": "3411",
  "label": "KAB. TELUK BINTUNI"
  },
  {
  "id": "3412",
  "label": "KAB. TELUK WONDAMA"
  },
  {
  "id": "3413",
  "label": "KOTA SORONG"
  }
]