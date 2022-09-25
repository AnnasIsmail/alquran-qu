// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import Page from '../components/Page';
import { ProductList } from '../sections/@dashboard/products';
// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  // const arrayTampungan = []
  // doa.forEach((data)=>{
  //   data.kata_kunci.forEach((katkun)=>{
  //     const exist = arrayTampungan.filter((dataExist)=> katkun === dataExist)
  //     if(exist.length === 0){
  //       arrayTampungan.push(katkun)
  //     }
  //   })
  // })
  // console.log(arrayTampungan);

  const [ doaReady , setDoaReady ] = React.useState(doa);
  const [ title , setTitle ] = React.useState('Kumpulan Doa - Doa');

  const searchDoa =(v)=> {
    if(v !== null){
      setDoaReady(doa.filter((val)=> val.nama === v.nama));
      setTitle(v.nama);
    }else{
      setDoaReady(doa);
      setTitle('Kumpulan Doa - Doa');
    }
  }

  return (
    <Page title="Doa - Doa">
      <Container>
        <Typography variant="h4" >
          {title}
        </Typography>

        <Stack direction="row" alignItems="center" flexWrap='wrap' justifyContent="space-between" gap={1} sx={{ my: 2 }}>
          <Autocomplete
            // disablePortal
            id="combo-box-demo"
            options={doa}
            onChange={(e , v)=> searchDoa(v)}
            getOptionLabel={(option) => option.nama}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Search Doa" />}
          />
        </Stack>

        <ProductList products={doaReady} />
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}


const doa = [
  {
  "id_doa": "1",
  "nama": "Doa Sebelum Tidur",
  "lafal": "بِاسْمِكَ اللَّهُمَّ أَمُوْتُ وَأَحْيَا",
  "transliterasi": "Bismika-llaahumma amuutu wa ahyaa.",
  "arti": "Dengan Nama-Mu ya Allah, aku mati dan aku hidup.",
  "riwayat": "HR. Bukhari 6324.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "belum",
  "tidur",
  "akan",
  "mau",
  "bobo"
  ]
  },
  {
  "id_doa": "2",
  "nama": "Doa Bangun Tidur",
  "lafal": "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرِ",
  "transliterasi": "Alhamdulillaahil-ladzii ahyaanaa ba'da maa amaatanaa wa ilaihin-nusyuur.",
  "arti": "Segala puji bagi Allah, yang membangunkan kami setelah ditidurkanNya dan kepadaNya kami dibangitkan.",
  "riwayat": "HR. Al-Bukhari dalam Fathul Baari 11/113, Muslim 4/2083.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bangun",
  "tidur",
  "bobo"
  ]
  },
  {
  "id_doa": "3",
  "nama": "Doa Ketika Mengenakan Pakaian",
  "lafal": "اَلْحَمْدُ لِلَّهِ الَّذِيْ كَسَانِيْ هَـٰذَا (الثَّوْبَ) وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلاَ قُوَّةٍ",
  "transliterasi": "Alhamdulillaahil-ladzii kasaanii haadzats-tsauba wa rozaqoniihi min ghoiri haulin minnii wa laa quwwah.",
  "arti": "Segala puji bagi Allah yang memberi pakaian ini kepadaku sebagai rezeki dariNya tanpa daya dan kekuatan dariku.",
  "riwayat": "HR. Seluruh penyusun kitab Sunan, kecuali An-Nasai, lihat kitab Irwa'ul Ghalil 7/47.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "kena",
  "pakai",
  "saat",
  "pas",
  "baju"
  ]
  },
  {
  "id_doa": "4",
  "nama": "Doa Ketika Mengenakan Pakaian Baru",
  "lafal": "اَللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيْهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
  "transliterasi": "Allaahumma lakal hamdu anta kasautaniihi, as-aluka min khoirihi wa khoiri maa shuni'a lahu, wa a'uudzu bika min syarrihi wa syarri maa shuni'a lah.",
  "arti": "Ya Allah, hanya milikMu segala puji, Engkaulah yang memberi pakaian ini kepadaku. Aku mohon kepadaMu untuk memperoleh kebaikannya dan kebaikan yang ia diciptakan karenanya. Aku berlindung kepadaMu dari kejahatannya dan kejahatan yang ia diciptakan karenanya.",
  "riwayat": "HR. Abu Dawud, At-Tirmidzi, Al-Baghawi dan lihat Mukhtashar Syamaailit Tirmidzi, oleh Al-Albani, halaman 47.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "kena",
  "pakai",
  "baru",
  "saat",
  "pas",
  "baju"
  ]
  },
  {
  "id_doa": "5",
  "nama": "Doa Kepada Orang yang Mengenakan Pakaian Baru 1",
  "lafal": "تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى",
  "transliterasi": "Tublii wa yukhlifullaahu ta'aalaa",
  "arti": "Kenakanlah sampai lusuh, semoga Allah ta'ala memberikan gantinya kepadamu.",
  "riwayat": "HR. Abu Daud 4/41 dan lihat pula Shahih Abi Dawud, 2/760.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "yang",
  "kena",
  "pakai",
  "baru",
  "1",
  "baju"
  ]
  },
  {
  "id_doa": "6",
  "nama": "Doa Kepada Orang yang Mengenakan Pakaian Baru 2",
  "lafal": "اِلْبَسْ جَدِيْدًا، وَعِشْ حَمِيْدًا، وَمُتْ شَهِيْدًا",
  "transliterasi": "Ilbas jadiidan, wa 'isy hamiidan, wa mut syahiidan.",
  "arti": "Berpakaianlah yang baru, hiduplah dengan terpuji dan matilah dalam keadaan syahid.",
  "riwayat": "HR. Ibnu Majah 2/1178, Al-Baghawi 12/41 dan lihat Shahih Ibnu Majah 2/275.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "yang",
  "kena",
  "pakai",
  "baru",
  "2",
  "baju"
  ]
  },
  {
  "id_doa": "7",
  "nama": "Doa Ketika Melepas atau Meletakkan Pakaian",
  "lafal": "بِسْمِ اللَّهِ",
  "transliterasi": "Bismillaah.",
  "arti": "Dengan nama Allah (aku meletakkan baju).",
  "riwayat": "HR. At-Tirmidzi 2/505 dan Imam yang lain. Lihat Irwa'ul Ghalil, 49 dan Shahihul Jami' 3/203.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "lepas",
  "atau",
  "letak",
  "pakai",
  "saat",
  "pas",
  "copot",
  "baju"
  ]
  },
  {
  "id_doa": "8",
  "nama": "Doa Masuk WC atau Kamar Mandi",
  "lafal": "(بِسْمِ اللَّهِ) اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
  "transliterasi": "(Bismillaah) Allaahumma innii a'uudzu bika minal khubutsi wal khobaa-its.",
  "arti": "Dengan nama Allah. Ya Allah, sesungguhnya aku berlindung kepadaMu dari godaan setan laki-laki dan perempuan.",
  "riwayat": "HR. Al-Bukhari 1/45 dan Muslim 1/283. Sedang tambahan bismillaah pada permulaan hadits, menurut riwayat Said bin Manshur. Lihat Fathul Baari 1/244.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "wc",
  "atau",
  "kamar",
  "mandi",
  "toilet"
  ]
  },
  {
  "id_doa": "9",
  "nama": "Doa Keluar dari WC atau Kamar Mandi",
  "lafal": "غُفْرَانَكَ",
  "transliterasi": "Ghufroonak.",
  "arti": "Aku minta ampun kepadaMu.",
  "riwayat": "HR. Seluruh penyusun kitab Sunan, kecuali An-Nasai yang meriwayatkan dalam 'Amalul Yaumi wal Lailah, lihat Takhrij Zaadul Ma'aad 2/387.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "keluar",
  "dari",
  "wc",
  "atau",
  "kamar",
  "mandi",
  "toilet"
  ]
  },
  {
  "id_doa": "10",
  "nama": "Doa Sebelum Wudhu",
  "lafal": "بِسْمِ اللَّهِ",
  "transliterasi": "Bismillaah.",
  "arti": "Dengan nama Allah (aku berwudhu).",
  "riwayat": "HR. Abu Dawud, Ibnu Majah dan Ahmad. Lihat Irwa'ul Ghalil 1/122.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "belum",
  "wudhu",
  "akan",
  "mau"
  ]
  },
  {
  "id_doa": "11",
  "nama": "Doa Setelah Wudhu 1",
  "lafal": "أَشْهَدُ أَنْ لاَ إِلَـٰهَ إِلاَّ اللَّهُ، وَحْدَهُ لاَ شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ",
  "transliterasi": "Asyhadu al-laa ilaaha illallaah, wahdahu laa syariika lah, wa asyhadu anna muhammadan 'abduhu wa rosuuluh.",
  "arti": "Aku bersaksi, bahwa tidak ada sesembahan yang berhak disembah kecuali Allah, Yang Maha Esa dan tiada sekutu bagiNya. Aku bersaksi, bahwa Muhammad adalah hamba dan utusanNya.",
  "riwayat": "HR. Muslim 1/209.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "wudhu",
  "1",
  "sesudah",
  "sehabis",
  "habis"
  ]
  },
  {
  "id_doa": "12",
  "nama": "Doa Setelah Wudhu 2",
  "lafal": "اَللَّهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِيْ مِنَ الْمُتَطَهِّرِيْنَ",
  "transliterasi": "Allaahummaj 'alnii minat-tawwaabiina waj 'alnii minal mutathohhiriin.",
  "arti": "Ya Allah, jadikanlah aku termasuk orang-orang yang bertaubat dan jadikanlah aku termasuk orang-orang (yang senang) bersuci.",
  "riwayat": "HR. At-Tirmidzi 1/78, dan lihat Shahih At-Tirmidzi 1/18.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "wudhu",
  "2",
  "sesudah",
  "sehabis",
  "habis"
  ]
  },
  {
  "id_doa": "13",
  "nama": "Doa Setelah Wudhu 3",
  "lafal": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَـٰهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ، وَأَتُوْبُ إِلَيْكَ",
  "transliterasi": "Subhaanakallaahumma wa bihamdika, asyhadu al-laa ilaaha illaa anta, astaghfiruka, wa atuubu ilaik.",
  "arti": "Maha Suci Engkau ya Allah, aku memuji-Mu. Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah kecuali Engkau, aku minta ampun dan bertaubat kepada-Mu.",
  "riwayat": "HR. An-Nasai dalam 'Amalul Yaumi wal Lailah, halaman 173 dan lihat Irwa'ul Ghalil, 1/135 dan 2/94.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "wudhu",
  "3",
  "sesudah",
  "sehabis",
  "habis"
  ]
  },
  {
  "id_doa": "14",
  "nama": "Doa Ketika Keluar Rumah 1",
  "lafal": "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
  "transliterasi": "Bismillaah, tawakkaltu 'alallaah, laa haula wa laa quwwata illaa billaah.",
  "arti": "Dengan nama Allah, aku bertawakkal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah.",
  "riwayat": "HR. Abu Daud 5095, Turmudzi 3426 dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "keluar",
  "rumah",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "15",
  "nama": "Doa Ketika Keluar Rumah 2",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ",
  "transliterasi": "Allaahumma innii a'uudzu bika an adhilla au udholla, au azilla au uzalla, au azhlima au uzhlama, au ajhala au yujhala 'alayya.",
  "arti": "Ya Allah, aku berlindung kepada-Mu, jangan sampai aku sesat atau disesatkan (setan atau orang yang berwatak setan), berbuat kesalahan atau disalahi, menganiaya atau dianiaya (orang), dan berbuat bodoh atau dibodohi.",
  "riwayat": "HR. Abu Dawud 5094, Nasai 5486, Ibnu Majah 3884 dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "keluar",
  "rumah",
  "2",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "16",
  "nama": "Doa Masuk Rumah Ketika Kosong atau Sepi",
  "lafal": "اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِيْنَ",
  "transliterasi": "As-salaamu 'alainaa wa 'alaa 'ibaadillaahish-shoolihiin.",
  "arti": "Semoga keselamatan atas kami dan hamba-hamba Allah yang shalih.",
  "riwayat": "HR. Bukhari dalam Adabul Mufrod 806/1055. Sanad hadits ini hasan sebagaimana dikatakan oleh Al Hafizh Ibnu Hajar dalam Al Fath, 11: 17.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "rumah",
  "ketika",
  "kosong",
  "atau",
  "sepi",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "17",
  "nama": "Doa Ketika Pergi Ke Masjid",
  "lafal": "اَللَّهُمَّ اجْعَلْ فِيْ قَلْبِيْ نُوْرًا، وَفِيْ لِسَانِيْ نُوْرًا، وَاجْعَلْ فِيْ سَمْعِيْ نُوْرًا، وَاجْعَلْ فِيْ بَصَرِيْ نُوْرًا، وَاجْعَلْ مِنْ خَلْفِيْ نُوْرًا، وَمِنْ أَمَامِيْ نُوْرًا، وَاجْعَلْ مِنْ فَوْقِيْ نُوْرًا، وَمِنْ تَحْتِيْ نُوْرًا، اَللَّهُمَّ أَعْطِنِيْ نُوْرًا",
  "transliterasi": "Allaahummaj'al fii qolbii nuuron, wa fii lisaanii nuuron, waj'al fii sam'ii nuuron, waj'al fii bashorii nuuron, waj'al min kholfii nuuron, wa min amaamii nuuron, waj'al min fauqii nuuron, wa min tahtii nuuron, allaahumma a'thinii nuuron.",
  "arti": "Ya Allah, jadikanlahlah cahaya di hatiku, cahaya di lidahku, cahaya di pendengaranku, cahaya di penglihatanku, cahaya dari belakangku, cahaya dari hadapanku, cahaya dari atasku, cahaya dari bawahku. Ya Allah, berilah aku cahaya.",
  "riwayat": "HR. Muslim no. 763 (191) Syarah Muslim V/51 dan lafal hadits menurut riwayatnya. Diriwayatkan juga oleh Al-Bukhari/Fat-hul Baari XI/116, banyak tambahan di dalamnya.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "pergi",
  "ke",
  "masjid",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "18",
  "nama": "Doa Masuk Masjid",
  "lafal": "أَعُوْذُ بِاللَّهِ الْعَظِيْمِ، وَبِوَجْهِهِ الْكَرِيْمِ، وَسُلْطَانِهِ الْقَدِيْمِ، مِنَ الشَّيْطَانِ الرَّجِيْمِ، (بِسْمِ اللَّهِ، وَالصَّلاَةُ) (وَالسَّلاَمُ عَلَى رَسُوْلِ اللَّهِ) اَللَّهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ",
  "transliterasi": "A'uudzu billaahil 'azhiim, wa biwajhihil kariim, wa sulthoonihil qodiim, minasy-syaithoonir-rojiim, (bismillaah, wash-sholaaatu) (was-salaamu 'alaa rosuulillaah) allaahummaftah lii abwaaba rohmatik.",
  "arti": "Aku berlindung kepada Allah Yang Maha Agung, dengan wajahNya Yang Mulia dan kekuasaanNya yang abadi, dari setan yang terkutuk [1] Dengan nama Allah dan semoga shalawat [2] dan salam tercurahkan kepada Rasulullah [3] Ya Allah, bukalah pintu-pintu rahmatMu untukku [4].",
  "riwayat": "HR. Muslim 1/494.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "masjid"
  ]
  },
  {
  "id_doa": "19",
  "nama": "Doa Keluar Masjid",
  "lafal": "بِسْمِ اللَّهِ وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُوْلِ اللَّهِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ فَضْلِكَ، اَللَّهُمَّ اعْصِمْنِيْ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
  "transliterasi": "Bismillaahi wash-sholaatu was-salaamu 'alaa rosuulillaah, allaahumma innii as-aluka min fadhlika, allaahumma'shimnii minasy-syaithoonir-rojiim.",
  "arti": "Dengan nama Allah, semoga shalawat dan salam terlimpahkan kepada Rasulullah. Ya Allah, sesungguhnya aku minta kepadaMu dari karuniaMu. Ya Allah, peliharalah aku dari godaan setan yang terkutuk.",
  "riwayat": "Tambahan: Allaahumma'shimni minasy syai-thaanir rajim, adalah riwayat Ibnu Majah. Lihat Shahih Ibnu Majah 129.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "keluar",
  "masjid"
  ]
  },
  {
  "id_doa": "20",
  "nama": "Doa Ketika Mendengarkan Adzan",
  "lafal": "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
  "transliterasi": "Laa haula wa laa quwwata illaa billaah.",
  "arti": "Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
  "riwayat": "HR. Al-Bukhari 1/152 dan Muslim 1/288.",
  "keterangan": [
  "Seseorang yang mendengarkan adzan, hendaklah mengucapkan sebagaimana yang diucapkan oleh muadzin, kecuali dalam kalimat: Hayya 'alash shalaah dan Hayya 'alal falaah. Maka mengucapkan:"
  ],
  "kata_kunci": [
  "doa",
  "ketika",
  "dengar",
  "adzan",
  "saat",
  "pas",
  "azan"
  ]
  },
  {
  "id_doa": "21",
  "nama": "Doa Setelah Adzan",
  "lafal": "اَللَّهُمَّ رَبَّ هَـٰذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِيْ وَعَدْتَهُ",
  "transliterasi": "Allaahumma robba haadzihid-da'watit-taammah, wash-sholaatil qoo-imah, aati muhammadanil wasiilata wal fadhiilah, wab'ats-hu maqooman mahmuudanil-ladzii wa 'adtah.",
  "arti": "Ya Allah, Tuhan Pemilik panggilan yang sempurna (adzan) ini dan shalat (wajib) yang didirikan. Berilah Al-Wasilah (derajat di Surga, yang tidak akan diberikan selain kepada Nabi) dan fadhilah kepada Muhammad. Dan bangkitkan beliau sehingga bisa menempati maqam terpuji yang telah Engkau janjikan.",
  "riwayat": "HR. Al-Bukhari 1/152.",
  "keterangan": [
  "Cara membacanya adalah “…muhammadanil wasiilata…” dan “…mahmuudanil-ladzii…”, yaitu ada tambahan nun wiqoyah (dibaca “ni”)."
  ],
  "kata_kunci": [
  "doa",
  "telah",
  "adzan",
  "sesudah",
  "sehabis",
  "habis",
  "azan"
  ]
  },
  {
  "id_doa": "22",
  "nama": "Doa Sebelum Makan",
  "lafal": "بِسْمِ اللَّهِ",
  "transliterasi": "Bismillaah.",
  "arti": "Dengan nama Allah.",
  "riwayat": "HR. Bukhari no. 5376 dan Muslim no. 2022.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "belum",
  "makan",
  "akan",
  "mau",
  "mam"
  ]
  },
  {
  "id_doa": "23",
  "nama": "Ketika Lupa Membaca Doa Sebelum Makan",
  "lafal": "بِسْمِ اللَّهِ فِيْ أَوَّلِهِ وَآخِرِهِ",
  "transliterasi": "Bismillaahi fii awwalihi wa aakhirihi.",
  "arti": "Dengan nama Allah pada awal dan akhirnya.",
  "riwayat": "HR. Tirmidzi no. 1858, Abu Daud no. 3767 dan Ibnu Majah no. 3264. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini shahih dan Syaikh Al Albani menyatakan hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "ketika",
  "lupa",
  "baca",
  "doa",
  "belum",
  "makan",
  "saat",
  "pas",
  "akan",
  "mau",
  "mam"
  ]
  },
  {
  "id_doa": "24",
  "nama": "Doa Ketika Diberi Rizki Berupa Makanan",
  "lafal": "اَللَّهُمَّ بَارِكْ لَنَا فِيْهِ، وَأَطْعِمْنَا خَيْرًا مِنْهُ",
  "transliterasi": "Allaahumma baarik lanaa fiihi, wa ath'imnaa khoiron minhu.",
  "arti": "Ya Allah, berkahilah kami dengan makanan ini, dan berilah kami makan yang lebih baik darinya.",
  "riwayat": "HR. Tirmidzi no. 3455, Abu Daud no. 3730, Ibnu Majah no. 3322. At Tirmidzi dan Syaikh Al Albani mengatakan bahwa hadits ini hasan.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "beri",
  "rizki",
  "upa",
  "makan",
  "saat",
  "pas",
  "rejeki",
  "mam"
  ]
  },
  {
  "id_doa": "25",
  "nama": "Doa Ketika Minum Susu",
  "lafal": "اَللَّهُمَّ بَارِكْ لَنَا فِيْهِ، وَزِدْنَا مِنْهُ",
  "transliterasi": "Allaahumma baarik lanaa fiihi, wa zidnaa minhu.",
  "arti": "Ya Allah, berkahilah kami padanya, dan tambahkanlah kepada kami darinya.",
  "riwayat": "HR. Tirmidzi no. 3455, Abu Daud no. 3730, Ibnu Majah no. 3322. At Tirmidzi dan Syaikh Al Albani mengatakan bahwa hadits ini hasan.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "minum",
  "susu",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "26",
  "nama": "Doa Setelah Makan 1",
  "lafal": "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَطْعَمَنِيْ هَـٰذَا وَرَزَقَنِيْهِ، مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلاَ قُوَّةٍ",
  "transliterasi": "Alhamdulillaahil-ladzii ath'amanii haadzaa wa rozaqoniihi, min ghoiri haulin minnii wa laa quwwah.",
  "arti": "Segala puji bagi Allah yang telah memberiku makanan ini, dan memberi rezeki kepadaku, tanpa daya dan kekuatan dariku.",
  "riwayat": "HR. Abu Daud no. 4043, Tirmidzi no. 3458, Ibnu Majah no. 3285 dan Ahmad 3: 439. Imam Tirmidzi, Ibnu Hajar dan ulama lainnya menghasankan hadits ini sebagaimana disetujui oleh Syaikh Salim bin ‘Ied Al Hilali dalam Bahjatun Nazhirin, 2: 50.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "makan",
  "1",
  "sesudah",
  "sehabis",
  "habis",
  "mam"
  ]
  },
  {
  "id_doa": "27",
  "nama": "Doa Setelah Makan 2",
  "lafal": "اَلْحَمْدُ لِلَّهِ حَمْدًا كَثِيْرًا طَيِّبًا مُبَارَكًا فِيْهِ، غَيْرَ (مَكْفِيٍّ وَلاَ) مُوَدَّعٍ، وَلاَ مُسْتَغْنًى عَنْهُ رَبَّنَا",
  "transliterasi": "Alhamdulillaahi hamdan katsiiron thoyyiban mubaarokan fiih, ghoiro (makfiyyin wa laa) muwadda', wa laa mustaghnan 'anhu robbanaa.",
  "arti": "Segala puji bagi Allah, (Aku memuji-Nya) dengan pujian yang banyak, yang baik dan penuh berkah, yang senantiasa dibutuhkan, diperlukan dan tidak bisa ditinggalkan, ya Tuhan kami.",
  "riwayat": "HR. Al-Bukhari 6/214, At-Tirmidzi dengan lafal yang sama 5/507.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "makan",
  "2",
  "sesudah",
  "sehabis",
  "habis",
  "mam"
  ]
  },
  {
  "id_doa": "28",
  "nama": "Doa Setelah Makan 3",
  "lafal": "اَلْحَمْدُ لِلَّهِ",
  "transliterasi": "Alhamdulillaah.",
  "arti": "Segala puji bagi Allah.",
  "riwayat": "HR. Muslim no. 2734.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "makan",
  "3",
  "sesudah",
  "sehabis",
  "habis",
  "mam"
  ]
  },
  {
  "id_doa": "29",
  "nama": "Doa Ketika Diberi Makan oleh Orang Lain 1",
  "lafal": "اَللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِيْ، وَاسْقِ مَنْ سَقَانِيْ",
  "transliterasi": "Allaahumma ath'im man ath'amanii, wasqi man saqoonii.",
  "arti": "Ya Allah, berilah makan kepada orang yang memberi aku makan, dan berilah minum kepada orang yang memberi aku minum.",
  "riwayat": "HR. Muslim 2055.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "beri",
  "makan",
  "oleh",
  "orang",
  "lain",
  "1",
  "saat",
  "pas",
  "mam"
  ]
  },
  {
  "id_doa": "30",
  "nama": "Doa Ketika Diberi Makan oleh Orang Lain 2",
  "lafal": "اَللَّهُمَّ بَارِكْ لَهُمْ فِيْمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ، وَارْحَمْهُمْ",
  "transliterasi": "Allaahumma baarik lahum fiimaa rozaqtahum, waghfir lahum, warhamhum.",
  "arti": "Ya Allah, berkahilah apa yang Engkau rezekikan kepada mereka, ampunilah mereka, dan rahmatilah mereka.",
  "riwayat": "HR. Muslim 2042.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "beri",
  "makan",
  "oleh",
  "orang",
  "lain",
  "2",
  "saat",
  "pas",
  "mam"
  ]
  },
  {
  "id_doa": "31",
  "nama": "Doa Berbuka Puasa 1",
  "lafal": "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوْقُ، وَثَبَتَ اْلأَجْرُ، إِنْ شَاءَ اللَّهُ",
  "transliterasi": "Dzahabazh-zhoma-u, wabtallatil 'uruuqu, watsabatal ajru, in syaa-allaah.",
  "arti": "Telah hilang dahaga, dan urat-urat telah basah, dan telah tetap pahala, insya Allah.",
  "riwayat": "HR. Abu Daud 2357, Ad-Daruquthni dalam sunannya 2279, Al-Bazzar dalam Al-Musnad 5395 dan Al-Baihaqi dalam As-Shugra 1390. Hadis ini dinilai hasan oleh Al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "buka",
  "puasa",
  "1"
  ]
  },
  {
  "id_doa": "32",
  "nama": "Doa Berbuka Puasa 2",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ بِرَحْمَتِكَ الَّتِيْ وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِيْ",
  "transliterasi": "Allaahumma innii as-aluka birohmatikal-latii wasi'at kulla syai-in an taghfiro lii.",
  "arti": "Ya Allah, sesungguhnya aku memohon kepadaMu dengan rahmatMu yang meliputi segala sesuatu, supaya memberi ampunan atasku.",
  "riwayat": "HR. Ibnu Majah 1/557. Menurut Al-Hafidz Ibnu Hajar dalam Takhrij Al-Adzkar, lihat Syarah Al-Adzkar 4/342.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "buka",
  "puasa",
  "2"
  ]
  },
  {
  "id_doa": "33",
  "nama": "Doa Malam Lailatul Qadar 1",
  "lafal": "اَللَّهُمَّ إِنَّكَ عَفُوٌّ، تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
  "transliterasi": "Allaahumma innaka 'afuwwun, tuhibbul 'afwa fa'fu 'annii.",
  "arti": "Ya Allah, sesungguhnya Engkau Maha Pemaaf, menyukai permintaan maaf, maka maafkanlah aku.",
  "riwayat": "HR. Ahmad 25384, At-Turmudzi 3513, Ibn Majah 3850, An-Nasai dalam Amal Al-yaum wa lailah, dan Al-Baihaqi dalam Syua'bul Iman 3426. Hadis ini dinilai shahih oleh Al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "malam",
  "lailatul",
  "qadar",
  "1"
  ]
  },
  {
  "id_doa": "34",
  "nama": "Doa Malam Lailatul Qadar 2",
  "lafal": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
  "transliterasi": "Allaahumma innii as-alukal 'afwa wal 'aafiyah.",
  "arti": "Ya Allah, aku memohon kepada-Mu ampunan dan terbebas dari masalah.",
  "riwayat": "HR. Ibnu Abi Syaibah dalam Al-Mushannaf 29189. Al-Albani menilai riwayat ini shahih, dan beliau berkomentar, \"Nampaknya, A'isyah mengatakan demikian karena pendapat pribadinya.\" Simak Silsilah As-Shahihah (7/1011).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "malam",
  "lailatul",
  "qadar",
  "2"
  ]
  },
  {
  "id_doa": "35",
  "nama": "Doa Ketika Angin Ribut/Bertiup Kencang 1",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَأَعُوْذُ بِكَ مِنْ شَرِّهَا",
  "transliterasi": "Allaahumma innii as-aluka khoirohaa wa a'uudzu bika min syarrihaa.",
  "arti": "Ya Allah, sesungguhnya aku mohon kepadaMu kebaikan angin ini, dan aku berlindung kepadaMu dari kejelekannya.",
  "riwayat": "HR. Abu Dawud 4/326, Ibnu Majah 2/1228, dan lihatlah kitab Shahih Ibnu Majah 2/305.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "angin",
  "ribut",
  "tiup",
  "kencang",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "36",
  "nama": "Doa Ketika Angin Ribut/Bertiup Kencang 2",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيْهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيْهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ",
  "transliterasi": "Allaahumma innii as-aluka khoirohaa, wa khoiro maa fiihaa, wa khoiro maa ursilat bihi, wa a'uudzu bika min syarrihaa, wa syarri maa fiihaa, wa syarri maa ursilat bih.",
  "arti": "Ya Allah, sesungguhnya aku mohon kepadaMu kebaikan angin (ribut ini), kebaikan apa yang di dalamnya dan kebaikan tujuan angin ini dihembuskan. Aku berlindung kepadaMu dari kejahatan angin ini, kejahatan apa yang di dalamnya dan kejahatan tujuan angin ini dihembuskan.",
  "riwayat": "HR. Muslim no. 899.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "angin",
  "ribut",
  "tiup",
  "kencang",
  "2",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "37",
  "nama": "Doa Bila Mendengar Halilintar/Petir 1",
  "lafal": "سُبْحَانَ الَّذِيْ يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ، وَالْمَلاَئِكَةُ مِنْ خِيْفَتِهِ",
  "transliterasi": "Subhaanal-ladzii yusabbihur-ro'du bihamdihi, wal malaaikatu min khiifatih.",
  "arti": "Maha Suci Allah yang halilintar bertasbih dengan memuji-Nya, begitu juga para malaikat, karena takut kepada-Nya.",
  "riwayat": "HR. Al-Bukhari dalam al-Adab al-Mufrad no 723, dan dishahihkan oleh Syaikh al-Albani dalam Shahih al-Adab al-Mufrad no. 556.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bila",
  "dengar",
  "halilintar",
  "petir",
  "1"
  ]
  },
  {
  "id_doa": "38",
  "nama": "Doa Bila Mendengar Halilintar/Petir 2",
  "lafal": "سُبْحَانَ الَّذِي سَبَّحَتْ لَهُ",
  "transliterasi": "Subhaanal-ladzii sabbahat lahu.",
  "arti": "Maha Suci Allah, dimana halilintar bertasbih kepada-Nya.",
  "riwayat": "Maha Suci Allah, dimana halilintar bertasbih kepada-Nya.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bila",
  "dengar",
  "halilintar",
  "petir",
  "2"
  ]
  },
  {
  "id_doa": "39",
  "nama": "Doa Minta Hujan",
  "lafal": "اَللَّهُمَّ اسْقِنَا غَيْثًا مُغِيْثًا، مَرِيْئًا، مَرِيْعًا، نَافِعًا غَيْرَ ضَارٍّ، عَاجِلًا غَيْرَ آجِلٍ",
  "transliterasi": "Allaahummas-qinaa ghoitsan mughiitsan, marii-an, marii'an, naafi'an ghoiro dhorrin, 'aajilan ghoiro aajilin.",
  "arti": "Ya Allah, berilah kami hujan yang merata, menyegarkan tubuh, menyuburkan tanaman, bermanfaat, tidak membahayakan, secepatnya, tidak ditunda-tunda.",
  "riwayat": "HR. Abu Dawud 1/303, dinyatakan shahih oleh Al-Albani dalam Shahih Abi Dawud 1/216.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "minta",
  "hujan"
  ]
  },
  {
  "id_doa": "40",
  "nama": "Doa Ketika Turun Hujan 1",
  "lafal": "اَللَّهُمَّ صَيِّبًا نَافِعًا",
  "transliterasi": "Allaahumma shoyyiban naafi'an.",
  "arti": "Ya Allah, turunkanlah hujan yang bermanfaat (untuk manusia, tanaman, dan binatang).",
  "riwayat": "HR. Bukhari no. 985.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "turun",
  "hujan",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "41",
  "nama": "Bacaan Setelah Hujan Berhenti",
  "lafal": "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
  "transliterasi": "Muthirnaa bifadhlillaahi wa rohmatih.",
  "arti": "Kita diberi hujan karena karunia dan rahmat Allah.",
  "riwayat": "HR. Bukhari no. 1038 dan Muslim no. 240.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "telah",
  "hujan",
  "henti",
  "sesudah",
  "sehabis",
  "habis"
  ]
  },
  {
  "id_doa": "42",
  "nama": "Doa Ketika Hujan Lebat, Atau Agar Hujan Berhenti 1",
  "lafal": "اَللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا",
  "transliterasi": "Allaahumma hawaalainaa wa laa 'alainaa.",
  "arti": "Ya Allah, turunkanlah hujan di sekitar kami, bukan yang merusak kami.",
  "riwayat": "HR. al-Bukhari, Sahih al-Bukhari 1015.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "hujan",
  "lebat",
  "atau",
  "agar",
  "hujan",
  "henti",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "43",
  "nama": "Doa Ketika Hujan Lebat, Atau Agar Hujan Berhenti 2",
  "lafal": "اَللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اَللَّهُمَّ عَلَى الْآكَامِ، وَالْجِبَالِ، وَالظِّرَابِ، وَبُطُوْنِ الْأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ",
  "transliterasi": "Allaahumma hawaalainaa wa laa 'alainaa, allaahumma 'alal aakaami, wal jibaali, wazh-zhiroobi, wa buthuunil audiyati, wa manaabitisy-syajar.",
  "arti": "Ya Allah, turunkanlah hujan di sekitar kami, bukan yang merusak kami. Ya Allah, turunkanlah hujan di dataran tinggi, gunung, bukit, perut lembah dan tempat tumbuhnya pepohonan.",
  "riwayat": "HR. Bukhari no. 1014 dan Muslim no. 897.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "hujan",
  "lebat",
  "atau",
  "agar",
  "hujan",
  "henti",
  "2",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "44",
  "nama": "Doa Kepada Pengantin",
  "lafal": "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ",
  "transliterasi": "Baarokallaahu laka wa baaroka 'alaika wa jama'a bainakumaa fii khoirin.",
  "arti": "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan semoga Allah menyatukan kalian berdua dalam kebaikan.",
  "riwayat": "HR. Abu Dawud no. 2130.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "pengantin"
  ]
  },
  {
  "id_doa": "45",
  "nama": "Doa Pengantin Pria Kepada Pasangannya / Doa Malam Pertama",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ",
  "transliterasi": "Allaahumma innii as-aluka khoirohaa, wa khoiro maa jabaltahaa 'alaihi, wa a'uudzu bika min syarrihaa, wa syarri maa jabaltahaa 'alaihi.",
  "arti": "Ya Allah, sesungguhnya aku mohon kepadaMu kebaikan perempuan atau budak ini dan apa yang telah Engkau ciptakan dalam wataknya. Dan aku mohon perlindungan kepadaMu dari kejelekan perempuan atau budak ini dan apa yang telah Engkau ciptakan dalam wataknya.",
  "riwayat": "HR. Abu Dawud 2/248, Ibnu Majah 1/617 dan lihatlah Shahih Ibnu Majah 1/324.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "pengantin",
  "pria",
  "kepada",
  "pasang",
  "doa",
  "malam",
  "pertama"
  ]
  },
  {
  "id_doa": "46",
  "nama": "Doa Bersetubuh (Jima')",
  "lafal": "بِسْمِ اللَّهِ، اَللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
  "transliterasi": "Bismillaah. Allaahumma jannibnasy-syaithoona wa jannibisy-syaithoona maa rozaqtanaa.",
  "arti": "Dengan nama Allah. Ya Allah, jauhkan kami dari setan, dan jauhkan setan untuk mengganggu apa yang Engkau rezekikan kepada kami.",
  "riwayat": "HR. Al-Bukhari 6/141 dan Muslim 2/1028 dari sahabat Abdullah bin Abbas radhiyallaahu 'anhu.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "tubuh",
  "jima",
  "sex",
  "seks"
  ]
  },
  {
  "id_doa": "47",
  "nama": "Doa Ketika Sakit 1",
  "lafal": "بِسْمِ اللَّهِ (3×) أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (7×)",
  "transliterasi": "Bismillaah (3x). A'uudzu billaahi wa qudrotihi min syarri maa ajidu wa uhaadzir (7x).",
  "arti": "Dengan nama Allah (3x). Aku berlindung kepada Allah dan kekuasaanNya, dari kejahatan sesuatu yang aku jumpai dan aku khawatirkan (7x).",
  "riwayat": "HR. Muslim 4/1728, Abu Daud, Malik, dll.",
  "keterangan": [
  "Doa ini dibaca ketika ada salah satu bagian tubuh kita yang sakit. Caranya: letakkan tangan kita di bagian tubuh yang sakit, pijat pelan-pelan, sambil membaca: (doa di atas)."
  ],
  "kata_kunci": [
  "doa",
  "ketika",
  "sakit",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "48",
  "nama": "Doa Ketika Sakit 2",
  "lafal": "اَللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ البَاسَ، اِشْفِ، أَنْتَ الشَّافِي، لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لاَ يُغَادِرُ سَقَمًا",
  "transliterasi": "Allaahumma robban-naas, adz-hibil baas, isyfi, antasy-syaafii, laa syifaa-a illaa syifaa-uka, syifaa-an laa yughoodiru saqoman.",
  "arti": "Ya Allah, Tuhan seluruh manusia, hilangkanlah sakit ini, sembuhkanlah, Engkaulah As-Syafi (Sang Penyembuh), tidak ada kesembuhan kecuali kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.",
  "riwayat": "HR. Bukhari 5675 dan Muslim 2191.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "sakit",
  "2",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "49",
  "nama": "Doa Kepada Orang Sakit 1",
  "lafal": "لاَ بَأْسَ طَهُوْرٌ إِنْ شَاءَ اللَّهُ",
  "transliterasi": "Laa ba'sa, thohuurun in syaa-allaah.",
  "arti": "Tidak apa-apa (jangan terlalu bersedih dengan sakit ini), menjadi pembersih dosa, insya Allah.",
  "riwayat": "HR. Bukhari 3616.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "sakit",
  "1"
  ]
  },
  {
  "id_doa": "50",
  "nama": "Doa Kepada Orang Sakit 2",
  "lafal": "اَللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ البَاسَ، اِشْفِ، أَنْتَ الشَّافِي، لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لاَ يُغَادِرُ سَقَمًا",
  "transliterasi": "Allaahumma robban-naas, adz-hibil baas, isyfi, antasy-syaafii, laa syifaa-a illaa syifaa-uka, syifaa-an laa yughoodiru saqoman.",
  "arti": "Ya Allah, Tuhan seluruh manusia, hilangkanlah sakit ini, sembuhkanlah, Engkaulah As-Syafi (Sang Penyembuh), tidak ada kesembuhan kecuali kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.",
  "riwayat": "HR. Bukhari 5675 dan Muslim 2191.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "sakit",
  "2"
  ]
  },
  {
  "id_doa": "51",
  "nama": "Doa Ketika Sakit Menjelang Kematian/Tanpa Harapan Hidup 1",
  "lafal": "اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَأَلْحِقْنِيْ بِالرَّفِيْقِ اْلأَعْلَى",
  "transliterasi": "Allaahummagh-fir lii warhamnii wa alhiqnii bir-rofiiqil a'laa.",
  "arti": "Ya Allah, ampuni aku, rahmati aku, dan kumpulkan aku bersama rekan-rekan yang berada di atas (malaikat).",
  "riwayat": "HR. Al-Bukhari 7/10, Muslim 4/1893.",
  "keterangan": "Jika seseorang sudah merasakan dekatnya ajal, dia harus menjaga lisannya dan terus berdzikir dan memohon ampunan kepada Allah. Hindari keluh kesah, ingat dunia, ingat harta yang ditinggalkan, terus berdzikir dan memohon ampunan kepada Allah.",
  "kata_kunci": [
  "doa",
  "ketika",
  "sakit",
  "jelang",
  "mati",
  "tanpa",
  "harap",
  "hidup",
  "1",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "52",
  "nama": "Doa Ketika Sakit Menjelang Kematian/Tanpa Harapan Hidup 2",
  "lafal": "اَللَّهُمَّ أَحْيِنِي مَا كَانَتِ الحَيَاةُ خَيْرًا لِي، وَتَوَفَّنِي إِذَا كَانَتِ الوَفَاةُ خَيْرًا لِي",
  "transliterasi": "Allaahumma ahyinii maa kaanatil hayaatu khoiron lii, wa tawaffanii idzaa kaanatil wafaatu khoiron lii.",
  "arti": "Ya Allah, panjangkan usiaku jika hidup itu lebih baik bagiku atau wafatkanlah aku, jika mati itu lebih baik bagiku.",
  "riwayat": "HR. Bukhari, Muslim, Nasa'i, Abu Daud, Turmudzi, Ibnu Majah dan yang lainnya.",
  "keterangan": "Orang yang sakit atau sedang mengalami musibah, tidak boleh berangan-angan mati, untuk mengakhiri musibah yang dia derita, baik karena sakit kronis atau cacat dalam tubuhnya. Kalaupun terpaksa harus berangan-angan mati, karena tidak tahan dengan derita yang dia alami, hendaknya tidak meminta kematian, tapi pasrahkan urusan ini kepada Allah. Karena dia tahu hal terbaik untuk kita. Doa di atas merupakan bentuk kepasrahan hamba kepada Rab-nya Yang Maha Bijaksana.",
  "kata_kunci": [
  "doa",
  "ketika",
  "sakit",
  "jelang",
  "mati",
  "tanpa",
  "harap",
  "hidup",
  "2",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "53",
  "nama": "Mengajari (Talqin) Orang Yang Akan Meninggal Dunia",
  "lafal": "لاَ إِلَـٰهَ إِلاَّ اللَّهُ",
  "transliterasi": "Laa ilaaha illallaah.",
  "arti": "Tidak ada sesembahan yang berhak disembah kecuali Allah.",
  "riwayat": "HR. Abu Dawud 3/190 dan lihat Shahihul Jami' 5/432.",
  "keterangan": "Perintahkan si sakit untuk mengucapkan: (kalimat di atas). Jika dia belum mengucapkannya, ulangi perintahnya. Jika si sakit sudah mengucapkannya, maka jangan diajak bicara sedikitpun dan jangan melakukan sesuatu yang mengundang perhatian si sakit. Hendaknya yang mentalqin adalah orang terdekat si sakit, seperti ibunya, ayahnya, kakaknya, suaminya, istrinya atau yang lainnya. Tidak harus tokoh masyarakat.",
  "kata_kunci": [
  "ajar",
  "talqin",
  "orang",
  "yang",
  "akan",
  "tinggal",
  "dunia"
  ]
  },
  {
  "id_doa": "54",
  "nama": "Doa Memejamkan Mata Jenazah",
  "lafal": "اَللَّهُمَّ اغْفِرْ لِفُلاَنٍ (بِاسْمِهِ) وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّيْنَ، وَاخْلُفْهُ فِيْ عَقِبِهِ فِي الْغَابِرِيْنَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِيْنَ، وَافْسَحْ لَهُ فِيْ قَبْرِهِ وَنَوِّرْ لَهُ فِيْهِ",
  "transliterasi": "Allaahummaghfir lifulaan (bismihi), warfa' darojatahu fiil mahdiyyiin, wakhlufhu fii 'aqibihi fiil ghoobiriin, waghfir lanaa wa lahu, yaa robbal 'aalamiin, wafsah lahu fii qobrihi wa nawwir lahu fiihi.",
  "arti": "Ya Allah, ampunilah si Fulan (hendaklah menyebut namanya), angkatlah derajatnya bersama orang-orang yang mendapat petunjuk, berilah penggantinya bagi orang-orang yang ditinggalkan sesudahnya. Dan ampunilah kami dan dia, wahai Tuhan seru sekalian alam. Lebarkan kuburannya dan berilah penerangan di dalamnya.",
  "riwayat": "HR. Muslim 2/634.",
  "keterangan": "Setelah meninggal, hendaknya mata jenazah dipejamkan dan didoakan kebaikan untuknya, seperti memohonkan ampunan dan rahmat.",
  "kata_kunci": [
  "doa",
  "mejam",
  "mata",
  "jenazah",
  "mayit",
  "mayat"
  ]
  },
  {
  "id_doa": "55",
  "nama": "Doa Belasungkawa (Takziyah)",
  "lafal": "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ",
  "transliterasi": "Inna lillaahi maa akhodza, wa lahu maa a'thoo wa kullu syai-in 'indahu bi-ajalin musamman, faltashbir wal tahtasib.",
  "arti": "Sesungguhnya hak Allah adalah mengambil sesuatu dan memberikan sesuatu. Segala sesuatu yang di sisi-Nya dibatasi dengan ajal yang ditentukan. Oleh karena itu, bersabarlah dan carilah ridha Allah.",
  "riwayat": "HR. Al-Bukhari 2/80, Muslim 2/636.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "belasungkawa",
  "takziyah"
  ]
  },
  {
  "id_doa": "56",
  "nama": "Doa Memasukkan Jenazah Ke Liang Kubur 1",
  "lafal": "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُوْلِ اللَّهِ",
  "transliterasi": "Bismillaahi wa 'alaa sunnati rosuulillaah.",
  "arti": "Dengan nama Allah dan sesuai petunjuk Rasulullah.",
  "riwayat": "HR. Abu Dawud 3/314 dengan sanad yang shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "jenazah",
  "ke",
  "liang",
  "kubur",
  "1",
  "mayit",
  "mayat"
  ]
  },
  {
  "id_doa": "57",
  "nama": "Doa Memasukkan Jenazah Ke Liang Kubur 2",
  "lafal": "بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُوْلِ اللَّهِ",
  "transliterasi": "Bismillaahi wa 'alaa millati rosuulillaah.",
  "arti": "Dengan nama Allah dan sesuai petunjuk Rasulullah.",
  "riwayat": "HR. Imam Ahmad, sanadnya shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "jenazah",
  "ke",
  "liang",
  "kubur",
  "2",
  "mayit",
  "mayat"
  ]
  },
  {
  "id_doa": "58",
  "nama": "Doa Setelah Jenazah Dimakamkan",
  "lafal": "اَللَّهُمَّ اغْفِرْ لَهُ اَللَّهُمَّ ثَبِّتْهُ",
  "transliterasi": "Allaahummaghfir lahu, allaahumma tsabbit-hu.",
  "arti": "Ya Allah ampunilah dia, Ya Allah teguhkanlah dia (untuk menjawab pertanyaan malaikat).",
  "riwayat": "HR. Abu Dawud 3/315 dan Al-Hakim, ia menshahihkannya dan disepakati oleh Adz-Dzahabi 1/370.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "jenazah",
  "makam",
  "sesudah",
  "sehabis",
  "habis",
  "mayit",
  "mayat",
  "kubur"
  ]
  },
  {
  "id_doa": "59",
  "nama": "Doa Ziarah Kubur",
  "lafal": "اَلسَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ",
  "transliterasi": "As-salaamu 'alaikum daaro qoumin mu'miniin, wa innaa in syaa-allaahu bikum laa hiquun.",
  "arti": "Semoga keselamatan atas kalian, wahai penghuni rumah kaum mukminin. Kami insya Allah akan menyusul kalian.",
  "riwayat": "HR. Muslim 249.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ziarah",
  "kubur"
  ]
  },
  {
  "id_doa": "60",
  "nama": "Doa Ketika Sedih, Gundah Atau Galau",
  "lafal": "اَللَّهُمَّ إِنِّيْ عَبْدُكَ، وَابْنُ عَبْدِكَ، وَابْنُ أَمَتِكَ، نَاصِيَتِيْ بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِيْ كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِيْ عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيْعَ قَلْبِيْ، وَنُوْرَ صَدْرِيْ، وَجَلاَءَ حُزْنِيْ، وَذَهَابَ هَمِّيْ",
  "transliterasi": "Allaahumma innii 'abduka, wabnu 'abdika, wabnu amatika, naashiyatii biyadika, maadhin fiyya hukmuka, 'adlun fiyya qodhoo-uka, as-aluka bikullismin huwa laka, sammaita bihi nafsaka, au anzaltahu fii kitaabika, au 'allamtahu ahadan min kholqika, awista'tsarta bihi fii 'ilmil ghoibi 'indaka, an taj'alal qur-aana robii'a qolbii, wa nuuro shodrii, wa jalaa-a huznii, wa dzahaaba hammii.",
  "arti": "Ya Allah, sesungguhnya aku adalah hambaMu, anak hambaMu (Adam), dan anak hamba perempuanMu (Hawa), ubun-ubunku berada di tanganMu, hukumMu berlaku terhadap diriku, dan ketetapanMu adil pada diriku. Aku memohon kepadaMu dengan segala Nama yang menjadi milikMu, yang Engkau namai diriMu dengannya, atau yang Engkau turunkan di dalam kitabMu, atau yang Engkau ajarkan kepada seseorang dari makhlukMu, atau yang Engkau rahasiakan dalam ilmu ghaib yang ada di sisiMu, maka aku mohon dengan itu agar Engkau jadikan Al-Qur'an sebagai penyejuk hatiku, cahaya bagi dadaku, pelipur kesedihanku, dan penghilang bagi kesusahanku.",
  "riwayat": "HR. Ahmad 1/391. Menurut pendapat Al-Albani, hadits tersebut adalah sahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "sedih",
  "gundah",
  "atau",
  "galau",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "61",
  "nama": "Doa Ketika Mengalami Kesulitan",
  "lafal": "لاَ إِلَـٰهَ إِلاَّ اللَّهُ الْعَظِيْمُ الْحَلِيْمُ، لاَ إِلَـٰهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيْمِ، لاَ إِلَـٰهَ إِلاَّ اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ اْلأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيْمِ",
  "transliterasi": "Laa ilaaha illallaahul 'azhiimul haliim, laa ilaaha illallaahu robbul 'arsyil 'azhiim, laa ilaaha illallaahu robbus-samaawaati wa robbul ardhi wa robbul 'arsyil kariim.",
  "arti": "Tidak ada sesembahan yang berhak disembah kecuali Allah Yang Maha Agung dan Maha Lembut. Tidak ada sesembahan yang berhak disembah kecuali Allah, Tuhan yang menguasai arasy, yang Maha Agung. Tidak ada sesembahan yang berhak disembah kecuali Allah, Tuhan yang menguasai langit dan bumi. Tuhan Yang menguasai arasy, lagi Maha Mulia.",
  "riwayat": "HR. Al-Bukhari 7/154 dan Muslim 4/2092.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "alami",
  "sulit",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "62",
  "nama": "Bacaan Bila Tertimpa Sesuatu Yang Tidak Disenangi/Musibah",
  "lafal": "قَدَرُ اللَّهِ وَمَا شَاءَ فَعَلَ",
  "transliterasi": "Qoddarollaahu wa maa syaa-a fa'ala.",
  "arti": "Allah telah mentaqdirkannya, dan apa yang Dia kehendaki, Dia lakukan.",
  "riwayat": "HR. Muslim 4/2052.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "timpa",
  "sesuatu",
  "yang",
  "tidak",
  "nang",
  "musibah"
  ]
  },
  {
  "id_doa": "63",
  "nama": "Doa Bila Tertimpa Musibah",
  "lafal": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ، اَللَّهُمَّ أُجُرْنِيْ فِيْ مُصِيْبَتِيْ وَأَخْلِفْ لِيْ خَيْرًا مِنْهَا",
  "transliterasi": "Innaa lillaahi wa innaa ilaihi rooji'uun, allaahumma ujurnii fii mushiibatii wa akhlif lii khoiron minhaa.",
  "arti": "Sesungguhnya kami milik Allah dan kepadaNya kami akan kembali (di hari Kiamat). Ya Allah, berilah pahala kepadaku dan gantilah untukku dengan yang lebih baik (dari musibahku).",
  "riwayat": "HR. Muslim 2/632.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bila",
  "timpa",
  "musibah"
  ]
  },
  {
  "id_doa": "64",
  "nama": "Bacaan Bila Ada Sesuatu Yang Menyenangkan",
  "lafal": "اَلْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
  "transliterasi": "Alhamdulillaahil-ladzii bini'matihi tatimmush-shoolihaat.",
  "arti": "Segala puji bagi Allah yang dengan nikmat-Nya segala amal shalih sempurna.",
  "riwayat": "HR. Ibnu Sunni dalam kitab 'Amalul Yaum wal Lailah, Al-Hakim menshahihkannya 1/499. Al-Albani juga menshahihkannya dalam Shahihul Jami' 4/201.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "ada",
  "sesuatu",
  "yang",
  "senang"
  ]
  },
  {
  "id_doa": "65",
  "nama": "Bacaan Bila Ada Sesuatu Yang Menyusahkan atau Tidak Menyenangkan",
  "lafal": "اَلْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
  "transliterasi": "Alhamdulillaahi 'alaa kulli haal.",
  "arti": "Segala puji bagi Allah atas segala keadaan.",
  "riwayat": "HR. Ibnu Sunni dalam kitab 'Amalul Yaum wal Lailah, Al-Hakim menshahihkannya 1/499. Al-Albani juga menshahihkannya dalam Shahihul Jami' 4/201.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "ada",
  "sesuatu",
  "yang",
  "susah",
  "atau",
  "tidak",
  "senang"
  ]
  },
  {
  "id_doa": "66",
  "nama": "Doa Agar Terbebas/Bisa Melunasi/Membayar Hutang",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوْذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal ma'tsami wal maghrom.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari berbuat dosa dan sulitnya utang.",
  "riwayat": "HR. Bukhari no. 2397 dan Muslim no. 5.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "bebas",
  "bisa",
  "lunas",
  "bayar",
  "hutang"
  ]
  },
  {
  "id_doa": "67",
  "nama": "Doa Kepada Orang Yang Menawarkan Hartanya Untukmu",
  "lafal": "بَارَكَ اللَّهُ لَكَ فِيْ أَهْلِكَ وَمَالِكَ",
  "transliterasi": "Baarokallaahu laka fii ahlika wa maalika.",
  "arti": "Semoga Allah memberkahimu dalam keluarga dan hartamu.",
  "riwayat": "HR. Al-Bukhari dengan Fathul Baari 4/88.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "yang",
  "tawar",
  "harta",
  "untuk"
  ]
  },
  {
  "id_doa": "68",
  "nama": "Doa Kepada Orang Yang Meminjami Uang Ketika Membayar Hutang",
  "lafal": "بَارَكَ اللَّهُ لَكَ فِيْ أَهْلِكَ وَمَالِكَ، إِنَّمَا جَزَاءُ السَّلَفِ الْحَمْدُ وَاْلأَدَاءُ",
  "transliterasi": "Baarokallaahu laka fii ahlika wa maalika, innamaa jazaa-us-salafil hamdu wal adaa-u.",
  "arti": "Semoga Allah memberikan berkah kepadamu dalam keluarga dan hartamu. Sesungguhnya balasan meminjami adalah pujian dan pembayaran.",
  "riwayat": "HR. An-Nasai dalam 'Amalul Yaum wal Lailah, hal. 300, Ibnu Majah 2/809, dan lihat Shahih Ibnu Majah 2/55.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "kepada",
  "orang",
  "yang",
  "pinjam",
  "uang",
  "ketika",
  "bayar",
  "hutang",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "69",
  "nama": "Doa Musafir Kepada Orang Yang Ditinggalkan",
  "lafal": "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِيْ لاَ تَضِيْعُ وَدَائِعُهُ",
  "transliterasi": "Astaudi'ukumullaahal-ladzii laa tadhii'u wa daa-i'uh.",
  "arti": "Aku menitipkan kamu kepada Allah yang tidak akan hilang titipan-Nya.",
  "riwayat": "HR. Ahmad 2/403, Ibnu Majah 2/943, dan lihat Shahih Ibnu Majah 2/133.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "musafir",
  "kepada",
  "orang",
  "yang",
  "tinggal"
  ]
  },
  {
  "id_doa": "70",
  "nama": "Doa Orang Mukim Kepada Musafir 1",
  "lafal": "أَسْتَوْدِعُ اللَّهَ دِيْنَكَ وَأَمَانَتَكَ وَخَوَاتِيْمَ عَمَلِكَ",
  "transliterasi": "Astaudi'ullaaha diinaka wa amaanataka wa khowaatiima 'amalik.",
  "arti": "Aku menitipkan agamamu, amanatmu dan penutup amalmu kepada Allah.",
  "riwayat": "HR. At-Tirmidzi 2/7, At-Tirmidzi 5/499, dan lihat Shahih At-Tirmidzi 2/155.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "orang",
  "mukim",
  "kepada",
  "musafir",
  "1"
  ]
  },
  {
  "id_doa": "71",
  "nama": "Doa Orang Mukim Kepada Musafir 2",
  "lafal": "زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الْخَيْرَ حَيْثُ مَا كُنْتَ",
  "transliterasi": "زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الْخَيْرَ حَيْثُ مَا كُنْتَ",
  "arti": "Semoga Allah memberi bekal taqwa kepadamu, mengampuni dosamu dan memudahkan kebaikan kepadamu di mana saja kamu berada.",
  "riwayat": "HR. At-Tirmidzi, lihat Shahih At-Tirmidzi 3/155.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "orang",
  "mukim",
  "kepada",
  "musafir",
  "2"
  ]
  },
  {
  "id_doa": "72",
  "nama": "Doa Naik Kendaraan",
  "lafal": "بِسْمِ اللَّهِ، اَلْحَمْدُ لِلَّهِ (سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ. وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُوْنَ) اَلْحَمْدُ لِلَّهِ، اَلْحَمْدُ لِلَّهِ، اَلْحَمْدُ لِلَّهِ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، سُبْحَانَكَ اللَّهُمَّ إِنِّيْ ظَلَمْتُ نَفْسِيْ فَاغْفِرْ لِيْ، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
  "transliterasi": "Bismillaah, alhamdulillaah, (subhaanal-ladzii sakh-khoro lanaa haadzaa wa maa kunnaa lahu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun), alhamdulillaah (3x), allaahu akbar (3x), subhaanakallaahumma innii zholamtu nafsii faghfir lii, fa-innahu laa yaghfirudz-dzunuuba illaa anta.",
  "arti": "Dengan nama Allah, segala puji bagi Allah, (Maha Suci Tuhan yang menundukkan kendaraan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami (di hari Kiamat)). Segala puji bagi Allah (3x), Allah Maha Besar (3x), Maha Suci Engkau ya Allah, sesungguhnya aku menganiaya diriku, maka ampunilah aku. Sesungguhnya tidak ada yang mengampuni dosa-dosa kecuali Engkau.",
  "riwayat": "HR. Abu Dawud 3/34, At-Tirmidzi 5/501, dan lihat Shahih At-Tirmidzi 3/156.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "naik",
  "kendara",
  "mobil",
  "motor"
  ]
  },
  {
  "id_doa": "73",
  "nama": "Doa Bepergian",
  "lafal": "اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، (سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ. وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُوْنَ) اَللَّهُمَّ إِنَّا نَسْأَلُكَ فِيْ سَفَرِنَا هَـٰذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اَللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَـٰذَا وَاطْوِ عَنَّا بُعْدَهُ، اَللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيْفَةُ فِي اْلأَهْلِ، اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوْءِ الْمُنْقَلَبِ فِي الْمَالِ وَاْلأَهْلِ",
  "transliterasi": "Allaahu akbar (3x), (subhaanal-ladzii sakh-khoro lanaa haadzaa wa maa kunnaa lahu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun), allaahumma innaa nas-aluka fii safarinaa haadzal birro wat-taqwaa, wa minal 'amali maa tardhoo, allaahumma hawwin 'alainaa safaronaa haadzaa wathwi 'annaa bu'dah, allaahumma antash-shoohibu fis-safari wal kholiifatu fil ahli, allaahumma innii a'uudzu bika min wa'tsaa-is-safari wa ka-aabatil manzhori wa suu-il munqolabi fil maali wal ahli.",
  "arti": "Allah Maha Besar (3x). (Maha Suci Tuhan yang menundukkan kendaraan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami (di hari Kiamat)). Ya Allah, sesungguhnya kami memohon kebaikan dan taqwa dalam bepergian ini, kami mohon perbuatan yang meridhakanMu. Ya Allah, permudahlah perjalanan kami ini, dan dekatkan jaraknya bagi kami. Ya Allah, Engkaulah teman dalam bepergian dan yang mengurusi keluarga(ku). Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kelelahan dalam bepergian, pemandangan yang menyedihkan dan kepulangan yang jelek dalam harta dan keluarga.",
  "riwayat": "HR. Muslim 2/998.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "pergi"
  ]
  },
  {
  "id_doa": "74",
  "nama": "Doa Setelah Kembali dari Bepergian",
  "lafal": "اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، (سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ. وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُوْنَ) اَللَّهُمَّ إِنَّا نَسْأَلُكَ فِيْ سَفَرِنَا هَـٰذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اَللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَـٰذَا وَاطْوِ عَنَّا بُعْدَهُ، اَللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيْفَةُ فِي اْلأَهْلِ، اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوْءِ الْمُنْقَلَبِ فِي الْمَالِ وَاْلأَهْلِ آيِبُوْنَ تَائِبُوْنَ عَابِدُوْنَ لِرَبِّنَا حَامِدُوْنَ",
  "transliterasi": "Allaahu akbar (3x), (subhaanal-ladzii sakh-khoro lanaa haadzaa wa maa kunnaa lahu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun), allaahumma innaa nas-aluka fii safarinaa haadzal birro wat-taqwaa, wa minal 'amali maa tardhoo, allaahumma hawwin 'alainaa safaronaa haadzaa wathwi 'annaa bu'dah, allaahumma antash-shoohibu fis-safari wal kholiifatu fil ahli, allaahumma innii a'uudzu bika min wa'tsaa-is-safari wa ka-aabatil manzhori wa suu-il munqolabi fil maali wal ahli. Aayibuuna taa-ibuuna 'aabiduuna lirobbinaa haamiduun.",
  "arti": "Allah Maha Besar (3x). (Maha Suci Tuhan yang menundukkan kendaraan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami (di hari Kiamat)). Ya Allah, sesungguhnya kami memohon kebaikan dan taqwa dalam bepergian ini, kami mohon perbuatan yang meridhakanMu. Ya Allah, permudahlah perjalanan kami ini, dan dekatkan jaraknya bagi kami. Ya Allah, Engkaulah teman dalam bepergian dan yang mengurusi keluarga(ku). Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kelelahan dalam bepergian, pemandangan yang menyedihkan dan kepulangan yang jelek dalam harta dan keluarga. Kami kembali dengan bertaubat, tetap beribadah dan selalu memuji kepada Tuhan kami.",
  "riwayat": "HR. Muslim 2/998.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "telah",
  "kembali",
  "dari",
  "pergi",
  "sesudah",
  "sehabis",
  "habis"
  ]
  },
  {
  "id_doa": "75",
  "nama": "Doa Ketika Ada Naikan/Tanjakan Dalam Perjalanan",
  "lafal": "اَللَّهُ أَكْبَرُ",
  "transliterasi": "Allaahu akbar.",
  "arti": "Allah Maha Besar.",
  "riwayat": "HR. Al-Bukhari dengan Fathul Bari 6/135.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "ada",
  "naik",
  "tanjak",
  "dalam",
  "jalan",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "76",
  "nama": "Doa Ketika Ada Turunan Dalam Perjalanan",
  "lafal": "سُبْحَانَ اللَّهِ",
  "transliterasi": "Subhaanallaah.",
  "arti": "Maha Suci Allah.",
  "riwayat": "HR. Al-Bukhari dengan Fathul Bari 6/135.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "ada",
  "turun",
  "dalam",
  "jalan",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "77",
  "nama": "Doa Musafir Menjelang Subuh",
  "lafal": "سَمَّعَ سَامِعٌ بِحَمْدِ اللَّهِ، وَحُسْنِ بَلاَئِهِ عَلَيْنَا. رَبَّنَا صَاحِبْنَا، وَأَفْضِلْ عَلَيْنَا عَائِذًا بِاللَّهِ مِنَ النَّارِ",
  "transliterasi": "Samma'a saami'un bihamdillaah, wa husni balaa-ihi 'alainaa. robbanaa shoohibnaa, wa afdhil 'alainaa 'aa-idzan billaahi minan-naar.",
  "arti": "Semoga ada yang memperdengarkan puji kami kepada Allah (atas nikmat) dan cobaanNya yang baik bagi kami. Wahai Tuhan kami, temanilah kami (peliharalah kami) dan berilah karunia kepada kami dengan berlindung kepada Allah dari api Neraka.",
  "riwayat": "HR. Muslim 4/2086, Syarah An-Nawawi 17/39.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "musafir",
  "jelang",
  "subuh"
  ]
  },
  {
  "id_doa": "78",
  "nama": "Doa Singgah di Suatu Tempat, Baik Dalam Bepergian Ataupun Tidak",
  "lafal": "أَعُوْذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
  "transliterasi": "A'uudzu bikalimaatillaahit-taammaati min syarri maa kholaq.",
  "arti": "Aku berlindung dengan kalimat-kalimat Allah yang sempurna, dari kejahatan apa yang diciptakan-Nya.",
  "riwayat": "HR. Tirmidzi 3437 dan An Nasai 5433.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "singgah",
  "di",
  "suatu",
  "tempat",
  "baik",
  "dalam",
  "pergi",
  "atau",
  "tidak"
  ]
  },
  {
  "id_doa": "79",
  "nama": "Doa Masuk Desa Atau Kota",
  "lafal": "اَللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ اْلأَرَضِيْنَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّيَاطِيْنِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ. أَسْأَلُكَ خَيْرَ هَـٰذِهِ الْقَرْيَةِ وَخَيْرَ أَهْلِهَا، وَخَيْرَ مَا فِيْهَا، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيْهَا",
  "transliterasi": "Allaahumma robbas-samaawaatis-sab'i wa maa azhlalna, wa robbal arodhiinas-sab'i wa maa aqlalna, wa robbasy-syayaathiini wa maa adhlalna, wa robbar-riyaahi wa maa dzaroina. As-aluka khoiro haadzihil quryati wa khoiro ahlihaa, wa khoiro maa fiihaa, wa a'uudzu bika min syarrihaa wa syarri ahlihaa wa syarri maa fiihaa.",
  "arti": "Ya Allah, Tuhan tujuh langit dan apa yang dinaunginya, Tuhan penguasa tujuh bumi dan apa yang di atasnya, Tuhan yang menguasai setan-setan dan apa yang mereka sesatkan, Tuhan yang menguasai angin dan apa yang diterbangkannya. Aku mohon kepadaMu kebaikan desa ini, kebaikan penduduknya dan apa yang ada di dalamnya. Aku berlindung kepadaMu dari kejelekan desa ini, kejelekan penduduknya dan apa yang ada di dalamnya.",
  "riwayat": "HR. Al-Hakim, menurut pendapatnya, hadits tersebut adalah sahih. Imam Adz-Dzahabi menyetujuinya 2/100, Ibnus Sunni, no. 524. Menurut Al-Hafizh Ibnu Hajar dalam Takhrij Adzkar 5/154: \"Hadits tersebut adalah hasan.\" Bin Baz berkata: Hadits itu diriwayatkan pula oleh An-Nasai dengan sanad yang hasan. Lihat Tuhfatul Akhyar, hal. 37.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "desa",
  "atau",
  "kota"
  ]
  },
  {
  "id_doa": "80",
  "nama": "Doa Masuk Pasar, Mall, Terminal, Bandara Dan Pusat Keramaian Lainnya",
  "lafal": "لاَ إِلَـٰهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ حَيٌّ لاَ يَمُوْتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
  "transliterasi": "Laa ilaaha illallaah, wahdahu laa syariika lah, lahul mulku wa lahul hamd, yuhyii wa yumiit, wa huwa hayyun laa yamuut, biyadihil khoir, wa huwa 'alaa kulli syai-in qodiir.",
  "arti": "Tidak ada sesembahan yang berhak disembah kecuali Allah, Yang Maha Esa, tiada sekutu bagiNya. BagiNya kerajaan, bagiNya segala pujian. Dia-lah Yang Menghidupkan dan Yang Mematikan. Dia-lah Yang Hidup, tidak akan mati. Di tanganNya kebaikan. Dia-lah Yang Maha kuasa atas segala sesuatu.",
  "riwayat": "HR. Turmudzi 5/291, Hakim 1/538, dan dihasankan al-Albani dalam shahih Turmudzi 3/152.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "masuk",
  "pasar",
  "mall",
  "terminal",
  "bandara",
  "dan",
  "pusat",
  "ramai",
  "lain"
  ]
  },
  {
  "id_doa": "81",
  "nama": "Doa Bila Hewan Tunggangan/Kendaraan Tergelincir",
  "lafal": "بِسْمِ اللَّهِ",
  "transliterasi": "Bismillaah.",
  "arti": "Dengan nama Allah.",
  "riwayat": "HR. Abu Dawud 4/296 dan Al-Albani menyatakan, hadits tersebut shahih dalam Shahih Abi Dawud 3/941.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bila",
  "hewan",
  "tunggang",
  "kendara",
  "gelincir",
  "mobil",
  "motor"
  ]
  },
  {
  "id_doa": "82",
  "nama": "Doa Pulang Dari Bepergian",
  "lafal": "اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ. لاَ إِلَـٰهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ. آيِبُوْنَ تَائِبُوْنَ عَابِدُوْنَ لِرَبِّنَا حَامِدُوْنَ، صَدَقَ اللَّهُ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ اْلأَحْزَابَ وَحْدَهُ",
  "transliterasi": "Allaahu akbar (3x). Laa ilaaha illallaah, wahdahu laa syariika lah, lahul mulku wa lahul hamdu, wa huwa 'alaa kulli syai-in qodiir. Aayibuuna taa-ibuuna 'aabiduuna lirobbinaa haamiduun, shodaqollaahu wa'dah, wa nashoro 'abdah, wa hazamal ahzaaba wahdah.",
  "arti": "Allah Maha Besar (3x). Tidak ada sesembahan yang berhak disembah kecuali Allah, Yang Maha Esa, tiada sekutu bagiNya. Bagi-Nya kerajaan dan pujaan. Dia-lah Yang Mahakuasa atas segala sesuatu. Kami kembali dengan bertaubat, beribadah dan memuji kepada Tuhan kami. Allah telah menepati janjiNya, membela hambaNya (Muhammad) dan mengalahkan golongan musuh dengan sendirian.",
  "riwayat": "",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "pulang",
  "dari",
  "pergi"
  ]
  },
  {
  "id_doa": "83",
  "nama": "Doa Berlindung/Menghilangkan Gangguan Setan 1",
  "lafal": "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
  "transliterasi": "A'uudzu billaahi minasy-syaithoonir-rojiim.",
  "arti": "Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.",
  "riwayat": "HR. Abu Dawud 1/206, At-Tirmidzi, lihat Shahih At-Tirmidzi 1/77, dan lihat surah Al-Mukminun 98-99.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "hilang",
  "ganggu",
  "setan",
  "1",
  "syaitan",
  ""
  ]
  },
  {
  "id_doa": "84",
  "nama": "Doa Berlindung/Menghilangkan Gangguan Setan 2",
  "lafal": "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
  "transliterasi": "Robbi a'uudzu bika min hamazaatisy-syayaathiin, wa a'uudzu bika robbi an yah-dhuruun.",
  "arti": "Ya Tuhanku, aku berlindung kepada Engkau dari bisikan-bisikan syaitan. Dan aku berlindung (pula) kepada Engkau ya Tuhanku, dari kedatangan mereka kepadaku.",
  "riwayat": "Al-Mu'minun [23]: 97-98.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "hilang",
  "ganggu",
  "setan",
  "2",
  "syaitan",
  ""
  ]
  },
  {
  "id_doa": "85",
  "nama": "Doa Menghilangkan Gangguan Setan Ketika Shalat atau Membaca Al-Qur'an",
  "lafal": "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
  "transliterasi": "A'uudzu billaahi minasy-syaithoonir-rojiim.",
  "arti": "Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.",
  "riwayat": "HR. Muslim 4/1729.",
  "keterangan": "Dibaca kemudian meludahlah ke arah kiri 3x",
  "kata_kunci": [
  "doa",
  "hilang",
  "ganggu",
  "setan",
  "ketika",
  "shalat",
  "atau",
  "baca",
  "al-qur",
  "an",
  "syaitan",
  "",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "86",
  "nama": "Doa Memohon Surga Dan Berlindung Dari Neraka",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْجَنَّةَ، وَأَعُوْذُ بِكَ مِنَ النَّارِ",
  "transliterasi": "Allaahumma innii as-alukal jannah, wa a'uudzu bika minan-naar.",
  "arti": "Ya Allah, aku mohon kepada-Mu surga, dan aku berlindung kepada-Mu dari neraka.",
  "riwayat": "HR. Abu Daud no. 792, Ibnu Majah no. 910, dan Ahmad (3/474). Syaikh Al Albani mengatakan bahwa hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "surga",
  "dan",
  "lindung",
  "dari",
  "neraka",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "87",
  "nama": "Doa Memohon Surga, Berlindung Dari Neraka, dan Mohon Takdir Baik",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَسْأَلُكَ أَنْ تَجْعَلَ كُلَّ قَضَاءٍ قَضَيْتَهُ لِى خَيْرًا",
  "transliterasi": "Allaahumma innii as-alukal jannata wa maa qorroba ilaihaa min qoulin au 'amal, wa a'uudzu bika minan-naari wa maa qorroba ilaihaa min qoulin au 'amal, wa as-aluka an taj'ala kulla qodhoo-in qodhoitahu lii khoiron.",
  "arti": "Ya Allah, aku memohon kepada-Mu surga dan segala hal yang mendekatkan kepadanya, dari perkataan maupun perbuatan. Dan aku berlindung kepada-Mu dari neraka dan dari segala hal yang mendekatkan kepadanya, dari perkataan maupun perbuatan. Dan aku mohon kepada-Mu agar Engkau jadikan setiap yang Engkau takdirkan bagiku adalah baik.",
  "riwayat": "HR. Ibnu Majah no. 3846 dan Ahmad 1/172. Syaikh Al Albani mengatakan bahwa hadits ini shohih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "surga",
  "lindung",
  "dari",
  "neraka",
  "dan",
  "mohon",
  "takdir",
  "baik",
  "meminta",
  "biar",
  "agar",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "88",
  "nama": "Doa Berlindung Dari Neraka",
  "lafal": "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا",
  "transliterasi": "Robbanash-rif 'annaa 'adzaaba jahannam, inna 'adzaabahaa kaana ghorooman, innahaa saa-at mustaqorron wa muqoomaa.",
  "arti": "Ya Tuhan kami, jauhkan azab jahannam dari kami, sesungguhnya azabnya itu adalah kebinasaan yang kekal. Sesungguhnya jahannam itu seburuk-buruk tempat menetap dan tempat kediaman.",
  "riwayat": "Al Furqan [25]: 65-66",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "neraka"
  ]
  },
  {
  "id_doa": "89",
  "nama": "Doa Memohon Akhlak Mulia 1",
  "lafal": "اَللَّهُمَّ أَحْسَنْتَ خَلْقِي فَأَحْسِنْ خُلُقِي",
  "transliterasi": "Allaahumma ahsanta kholqii, fa-ahsin khuluqii.",
  "arti": "Ya Allah, Engkau telah memperbagus penciptaanku, maka baguskanlah akhlakku.",
  "riwayat": "HR. Ahmad, dishahihkan oleh Asy Syaikh Al Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "akhlak",
  "mulia",
  "1",
  "meminta",
  "biar",
  "agar",
  "akhlaq",
  ""
  ]
  },
  {
  "id_doa": "90",
  "nama": "Doa Memohon Akhlak Mulia 2",
  "lafal": "اَللَّهُمَّ اهْدِنِى لِأَحْسَنِ الأَخْلَاقِ، لَا يَهْدِى لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّى سَيِّئَهَا، لَا يَصْرِفُ عَنِّى سَيِّئَهَا إِلَّا أَنْتَ",
  "transliterasi": "Allaahummahdinii li-ahsanil akhlaaq, laa yahdii li-ahsanihaa illaa anta, wash-rif 'annii sayyi-ahaa, laa yash-rifu 'annii sayyi-ahaa illaa anta.",
  "arti": "Ya Allah, tunjukkanlah aku kepada akhlak yang baik, tidak ada yang dapat menunjukkannya kecuali Engkau. Dan palingkanlah dariku kejelekan akhlak, tidak ada yang dapat memalingkannya kecuali Engkau.",
  "riwayat": "HR. Muslim no. 771, dari ‘Ali bin Abi Tholib.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "akhlak",
  "mulia",
  "2",
  "meminta",
  "biar",
  "agar",
  "akhlaq",
  ""
  ]
  },
  {
  "id_doa": "91",
  "nama": "Doa Memohon Akhlak Dan Amal Yang Baik",
  "lafal": "اَللَّهُمَّ اهْدِنِيْ لِأَحْسَنِ الْأَعْمَالِ، وَأَحْسَنِ الْأَخْلَاقِ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَقِنِي سَيِّئَ الْأَعْمَالِ، وَسَيِّئَ الْأَخْلَاقِ، لَا يَقِي سَيِّئَهَا إِلَّا أَنْتَ",
  "transliterasi": "Allaahummahdinii li-ahsanil a'maal, wa ahsanil akhlaaq, laa yahdii li-ahsanihaa illaa anta, wa qinii sayyi-al a'maal, wa sayyi-al akhlaaq, laa yaqii sayyi-ahaa illaa anta.",
  "arti": "Ya Allah, berilah petunjuk kepadaku untuk berbuat sebaik-baik amalan, sebaik-baik akhlak, tidak ada yang bisa menunjuki untuk berbuat sebaik-baiknya kecuali Engkau. Dan lindungi kami dari jeleknya amalan dan jeleknya akhlak, dan tidak ada yang melindungi dari kejelekannya kecuali Engkau",
  "riwayat": "HR. An Nasa'i.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "akhlak",
  "dan",
  "amal",
  "yang",
  "baik",
  "meminta",
  "biar",
  "agar",
  "akhlaq",
  ""
  ]
  },
  {
  "id_doa": "92",
  "nama": "Doa Berlindung Dari Kemungkaran Akhlak, Amal Dan Hawa Nafsu",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ، وَالْأَعْمَالِ، وَالْأَهْوَاءِ",
  "transliterasi": "Allaahumma innii a'uudzu bika min munkarootil akhlaaq, wal a'maal, wal ahwaa'.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kemungkaran akhlak, amal dan hawa nafsu.",
  "riwayat": "HR. Tirmidzi no. 3591, shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "mungkar",
  "akhlak",
  "amal",
  "dan",
  "hawa",
  "nafsu",
  "akhlaq",
  ""
  ]
  },
  {
  "id_doa": "93",
  "nama": "Doa Berlindung Dari Kemungkaran Akhlak, Amal, Hawa Nafsu Dan Penyakit 1",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ، وَالْأَعْمَالِ، وَالْأَهْوَاءِ، وَالْأَدْوَاءِ",
  "transliterasi": "Allaahumma innii a'uudzu bika min munkarootil akhlaaq, wal a'maal, wal ahwaa', wal adwaa'.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kemungkaran akhlak, amal, hawa nafsu dan penyakit.",
  "riwayat": "HR. At-Tirmidzi dan dishahihkan oleh Al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "mungkar",
  "akhlak",
  "amal",
  "hawa",
  "nafsu",
  "dan",
  "sakit",
  "1",
  "akhlaq",
  ""
  ]
  },
  {
  "id_doa": "94",
  "nama": "Doa Memohon Ampun Untuk Diri Sendiri, Orang Tua Dan Kaum Mukminin (Doa Nabi Ibrahim)",
  "lafal": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
  "transliterasi": "Robbanagh-fir lii wa liwaalidayya wa lil mu'miniina yauma yaquumul hisaab.",
  "arti": "Ya Tuhan kami, beri ampunlah aku dan kedua ibu bapakku dan sekalian orang-orang mukmin pada hari terjadinya hisab (hari kiamat).",
  "riwayat": "(Ibrahim [14]: 41).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "untuk",
  "diri",
  "sendiri",
  "orang",
  "tua",
  "dan",
  "kaum",
  "mukminin",
  "doa",
  "nabi",
  "ibrahim",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "95",
  "nama": "Doa Memohon Ampun Untuk Diri Sendiri, Orang Tua Dan Kaum Mukminin (Doa Nabi Nuh)",
  "lafal": "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا",
  "transliterasi": "Robbigh-fir lii wa liwaalidayya wa liman dakhola baitiya mu'minan wa lil mu'miniina wal mu'minaati wa laa tazidizh-zhoolimiina illaa tabaaroo.",
  "arti": "Ya Tuhanku! Ampunilah aku, ibu bapakku, orang yang masuk ke rumahku dengan beriman dan semua orang yang beriman laki-laki dan perempuan. Dan janganlah Engkau tambahkan bagi orang-orang yang zalim itu selain kebinasaan.",
  "riwayat": "(Nuh [71]: 28).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "untuk",
  "diri",
  "sendiri",
  "orang",
  "tua",
  "dan",
  "kaum",
  "mukminin",
  "doa",
  "nabi",
  "nuh",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "96",
  "nama": "Doa Memohon Kasih Sayang Untuk Orang Tua",
  "lafal": "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
  "transliterasi": "Robbir-hamhumaa kamaa robbayaanii shoghiiroo.",
  "arti": "Wahai Tuhanku, kasihilah mereka keduanya, sebagaimana mereka berdua telah mendidik aku waktu kecil.",
  "riwayat": "(Al-Isra' [17]: 24).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "kasih",
  "sayang",
  "untuk",
  "orang",
  "tua",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "97",
  "nama": "Doa Memohon Istri Dan Anak Sebagai Penyenang Hati",
  "lafal": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
  "transliterasi": "Robbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrota a'yun, waj'alnaa lil muttaqiina imaamaa.",
  "arti": "Ya Rabb kami, anugrahkanlah kepada kami isteri-isteri kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa.",
  "riwayat": "(Al-Furqan [25]: 74).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "istri",
  "dan",
  "anak",
  "bagai",
  "senang",
  "hati",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "98",
  "nama": "Doa Memohon Banyak Harta Dan Anak (Doa Nabi Muhammad)",
  "lafal": "اَللَّهُمَّ أَكْثِرْ مَالِي، وَوَلَدِي، وَبَارِكْ لِي فِيمَا أَعْطَيْتَنِي",
  "transliterasi": "Allaahumma ak-tsir maalii wa waladii, wa baarik lii fiimaa a'thoitanii.",
  "arti": "Ya Allah, perbanyaklah harta dan anakku, serta berkahilah karunia yang Engkau beri.",
  "riwayat": "HR. Bukhari no. 6334 dan Muslim no. 2480.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "banyak",
  "harta",
  "dan",
  "anak",
  "doa",
  "nabi",
  "muhammad",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "99",
  "nama": "Doa Memohon Banyak Harta, Anak, Panjang Umur, Dibaguskan Amal Dan Diampuni Dosa (Doa Nabi Muhammad)",
  "lafal": "اَللَّهُمَّ أَكْثِرْ مَالِي، وَوَلَدِي، وَبَارِكْ لِي فِيمَا أَعْطَيْتَنِي، وَأَطِلْ حَيَاتِي عَلَى طَاعَتِكَ، وَأَحْسِنْ عَمَلِي، وَاغْفِرْ لِي",
  "transliterasi": "Allaahumma ak-tsir maalii wa waladii, wa baarik lii fiimaa a'thoitanii, wa athil hayaatii 'alaa thoo'atik, wa ahsin 'amalii, wagh-fir lii.",
  "arti": "Ya Allah, perbanyaklah harta dan anakku, serta berkahilah karunia yang Engkau beri. Panjangkanlah umurku dalam ketaatan kepada-Mu, dan baguskanlah amalku serta ampunilah dosa-dosaku.",
  "riwayat": "HR. Bukhari no. 6334 dan Muslim no. 2480.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "banyak",
  "harta",
  "anak",
  "panjang",
  "umur",
  "bagus",
  "amal",
  "dan",
  "ampun",
  "dosa",
  "doa",
  "nabi",
  "muhammad",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "100",
  "nama": "Doa Memohon Anak Shaleh 1 (Doa Nabi Ibrahim)",
  "lafal": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
  "transliterasi": "Robbi hab lii minash-shoolihiin.",
  "arti": "Ya Rabb-ku, anugrahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang saleh.",
  "riwayat": "(Ash-Shaffat [37]: 100).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "anak",
  "shaleh",
  "1",
  "doa",
  "nabi",
  "ibrahim",
  "meminta",
  "biar",
  "agar",
  "salih",
  "shalih",
  "saleh",
  "soleh",
  "sholeh",
  "solih",
  "sholih"
  ]
  },
  {
  "id_doa": "101",
  "nama": "Doa Memohon Anak Shaleh 2 (Doa Nabi Dzakariya)",
  "lafal": "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
  "transliterasi": "Robbi hab lii mil-ladunka dzurriyyatan thoyyibah, innaka samii'ud-du'aa'.",
  "arti": "Ya Rabb-ku, berilah aku dari sisi Engkau seorang anak yang baik. Sesungguhnya Engkau Maha Mendengar doa.",
  "riwayat": "(Ali Imran [3]: 38).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "anak",
  "shaleh",
  "2",
  "doa",
  "nabi",
  "dzakariya",
  "meminta",
  "biar",
  "agar",
  "salih",
  "shalih",
  "saleh",
  "soleh",
  "sholeh",
  "solih",
  "sholih"
  ]
  },
  {
  "id_doa": "102",
  "nama": "Doa Memohon Keturunan (Doa Nabi Dzakariya)",
  "lafal": "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
  "transliterasi": "Robbi laa tadzarnii fardan, wa anta khoirul waaritsiin.",
  "arti": "Ya Rabb-ku, janganlah Engkau biarkan aku hidup seorang diri (tanpa keturunan), dan Engkaulah Waris yang Paling Baik.",
  "riwayat": "(Al-Anbiya' [21]: 89).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "turun",
  "doa",
  "nabi",
  "dzakariya",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "103",
  "nama": "Doa Agar Menjadi Hamba Yang Bersyukur, Agar Bisa Beramal Shaleh Dan Minta Anak Shaleh",
  "lafal": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ",
  "transliterasi": "Robbi auzi'nii an asykuro ni'matakallatii an'amta 'alayya wa 'alaa waalidayya wa an a'mala shoolihan tardhoohu, wa ashlih lii fii dzurriyyatii, innii tubtu ilaika wa innii minal muslimiin.",
  "arti": "Ya Rabbku, tunjukilah aku untuk mensyukuri nikmat-Mu yang telah Engkau berikan kepadaku dan kepada ibu bapakku, dan supaya aku dapat berbuat amal shaleh yang Engkau ridhai. Berilah kebaikan kepadaku dengan (memberi kebaikan) kepada anak cucuku. Sesungguhnya aku bertaubat kepada-Mu dan sesungguhnya aku termasuk orang-orang yang berserah diri.",
  "riwayat": "(Al-Ahqaf [46]: 15).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "jadi",
  "hamba",
  "yang",
  "syukur",
  "agar",
  "bisa",
  "amal",
  "shaleh",
  "dan",
  "minta",
  "anak",
  "shaleh",
  "salih",
  "shalih",
  "saleh",
  "soleh",
  "sholeh",
  "solih",
  "sholih",
  "salih",
  "shalih",
  "saleh",
  "soleh",
  "sholeh",
  "solih",
  "sholih"
  ]
  },
  {
  "id_doa": "104",
  "nama": "Ucapan Selamat Kepada Orang Yang Dikaruniai Anak Dan Balasannya",
  "lafal": "بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوْبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ",
  "transliterasi": "Baarokallaahu laka fil mauhuubi laka, wa syakartal waahiba, wa balagho asyuddahu, wa ruziqta birroh.",
  "arti": "Semoga Allah memberkahimu dalam anak yang diberikan kepadamu. Semoga kamu bersyukur kepada Sang Pemberi, dan dia dapat mencapai dewasa, serta kamu dikaruniai kebaikannya.",
  "riwayat": "Lihat Al-Adzkar, karya An-Nawawi, hal. 349, dan Shahih Al-Adzkar lin Nawawi, oleh Salim Al-Hilali 2/713.",
  "keterangan": "Sedang orang yang diberi ucapan selamat membalas dengan mengucapkan:\n\nبَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ، وَجَزَاكَ اللَّهُ خَيْرًا، وَرَزَقَكَ اللَّهُ مِثْلَهُ، وَأَجْزَلَ ثَوَابَكَ\n\nBaarokallaahu laka wa baaroka 'alaika, wa jazaakallaahu khoiron, wa rozaqokallaahu mitslahu, wa ajzala tsawaabak.\n\nSemoga Allah juga memberkahimu dan melimpahkan kebahagiaan untukmu. Semoga Allah membalasmu dengan sebaik-baik balasan, mengaruniakan kepadamu seperti itu dan melipatgandakan pahalamu.\n",
  "kata_kunci": [
  "ucap",
  "selamat",
  "kepada",
  "orang",
  "yang",
  "karunia",
  "anak",
  "dan",
  "balas"
  ]
  },
  {
  "id_doa": "105",
  "nama": "Doa Agar Anak Terjaga Dari Zina",
  "lafal": "اَللَّهُمَّ اغْفِرْ ذَنْبَهُ، وَطَهِّرْ قَلْبَهُ، وَحَصِّنْ فَرْجَهُ",
  "transliterasi": "Allaahummagh-fir dzanbahu, wa thohhir qolbahu, wa hash-shin farjahu.",
  "arti": "Ya Allah, ampunilah dosanya, sucikanlah hatinya, dan jagalah kemaluannya.",
  "riwayat": "HR. Ahmad, At Thabrani, Al Baihaqy dan dinyatakan sebagai hadits shahih oleh Al Albany.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "anak",
  "jaga",
  "dari",
  "zina"
  ]
  },
  {
  "id_doa": "106",
  "nama": "Doa Perlindungan Kepada Anak Laki-laki (Doa Istri Imran)",
  "lafal": "اَللَّهُمَّ إِنِّي أُعِيذُهُ بِكَ وَذُرِّيَّتَهُ مِنَ الشَّيْطَانِ الرَّجِيمِ",
  "transliterasi": "Allaahumma innii u'iidzuhu bika wa dzurriyyatahu minasy-syaithoonir-rojiim.",
  "arti": "Ya Allah, aku memohon perlindungan kepada-Mu untuknya dan keturunannya dari setan yang terkutuk.",
  "riwayat": "(Ali Imran [3]: 36).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "kepada",
  "anak",
  "laki",
  "doa",
  "istri",
  "imran"
  ]
  },
  {
  "id_doa": "107",
  "nama": "Doa Perlindungan Kepada Anak Perempuan (Doa Istri Imran)",
  "lafal": "اَللَّهُمَّ إِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ",
  "transliterasi": "Allaahumma innii u'iidzuhaa bika wa dzurriyyatahaa minasy-syaithoonir-rojiim.",
  "arti": "Ya Allah, aku memohon perlindungan kepada-Mu untuknya dan keturunannya dari setan yang terkutuk.",
  "riwayat": "",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "kepada",
  "anak",
  "perempuan",
  "doa",
  "istri",
  "imran"
  ]
  },
  {
  "id_doa": "108",
  "nama": "Doa Perlindungan Kepada Anak Laki-laki (Doa Nabi Muhammad)",
  "lafal": "أُعِيْذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
  "transliterasi": "U'iidzuka bikalimaatillaahit-taammah, min kulli syaithoonin wa haammah, wa min kulli 'ainin laammah.",
  "arti": "Aku memohon perlindungan untukmu dengan kalimat-kalimat Allah yang sempurna, dari semua godaan setan dan binatang pengganggu, dan dari pandangan mata buruk.",
  "riwayat": "HR. Abu Daud 3371, dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "kepada",
  "anak",
  "laki",
  "doa",
  "nabi",
  "muhammad"
  ]
  },
  {
  "id_doa": "109",
  "nama": "Doa Perlindungan Kepada Anak Perempuan (Doa Nabi Muhammad)",
  "lafal": "أُعِيْذُكِ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
  "transliterasi": "U'iidzuki bikalimaatillaahit-taammah, min kulli syaithoonin wa haammah, wa min kulli 'ainin laammah.",
  "arti": "Aku memohon perlindungan untukmu dengan kalimat-kalimat Allah yang sempurna, dari semua godaan setan dan binatang pengganggu, dan dari pandangan mata buruk.",
  "riwayat": "HR. Abu Daud 3371, dan dishahihkan al-Albani",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "kepada",
  "anak",
  "perempuan",
  "doa",
  "nabi",
  "muhammad"
  ]
  },
  {
  "id_doa": "110",
  "nama": "Doa Memohon Keteguhan Hati 1",
  "lafal": "يَا مُقَلِّبَ الْقُلُوبِ، ثَبِّتْ قَلْبِى عَلَى دِينِكَ",
  "transliterasi": "Yaa muqollibal quluub, tsabbit qolbii 'alaa diinik.",
  "arti": "Wahai Dzat yang Maha Membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.",
  "riwayat": "HR. Tirmidzi no. 3522. Syaikh Al Albani mengatakan bahwa hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "teguh",
  "hati",
  "1",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "111",
  "nama": "Doa Memohon Keteguhan Hati 2",
  "lafal": "اَللَّهُمَّ مُصَرِّفَ الْقُلُوبِ، صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ",
  "transliterasi": "Allaahumma mushorrifal quluub, shorrif quluubanaa 'alaa thoo'atik.",
  "arti": "Ya Allah, Dzat yang memalingkan hati, palingkanlah hati kami kepada ketaatan beribadah kepada-Mu.",
  "riwayat": "",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "teguh",
  "hati",
  "2",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "112",
  "nama": "Doa Memohon Keteguhan Hati 3",
  "lafal": "اَللَّهُمَّ يَا مُصَرِّفَ الْقُلُوْبِ، صَرِّفْ قُلُوْبَنَا عَلَى دِيْنِكَ",
  "transliterasi": "Allaahumma yaa mushorrifal quluub, shorrif quluubanaa 'alaa diinik.",
  "arti": "Ya Allah, Dzat yang memalingkan hati, palingkanlah hati kami pada agama-Mu.",
  "riwayat": "HR. Muslim 2654.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "teguh",
  "hati",
  "3",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "113",
  "nama": "Doa Memohon Ampun Dan Rahmat 1",
  "lafal": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
  "transliterasi": "Robbanaa, aamannaa, fagh-fir lanaa warhamnaa, wa anta khoirur-roohimiin.",
  "arti": "Ya Tuhan kami, kami telah beriman, maka ampunilah kami dan berilah kami rahmat, dan Engkau adalah Pemberi rahmat Yang Paling Baik.",
  "riwayat": "(Al Mu’minun [23]: 109).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "dan",
  "rahmat",
  "1",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "114",
  "nama": "Doa Memohon Ampun Dan Rahmat 2",
  "lafal": "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
  "transliterasi": "Robbigh-fir warham, wa anta khoirur-roohimiin.",
  "arti": "Ya Tuhanku, berilah ampun dan berilah rahmat, dan Engkau adalah Pemberi rahmat Yang Paling baik.",
  "riwayat": "(Al Mu’minun [23]: 118).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "dan",
  "rahmat",
  "2",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "115",
  "nama": "Doa Memohon Ampun Dan Rahmat 3 (Doa Nabi Adam)",
  "lafal": "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
  "transliterasi": "Robbanaa zholamnaa anfusanaa, wa in lam tagh-fir lanaa wa tarhamnaa, lanakuunanna minal khoosiriin.",
  "arti": "Ya Tuhan kami, kami telah menganiaya diri kami sendiri, dan jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya pastilah kami termasuk orang-orang yang merugi.",
  "riwayat": "(Al A'raf [7]: 23).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "dan",
  "rahmat",
  "3",
  "doa",
  "nabi",
  "adam",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "116",
  "nama": "Doa Memohon Ampun (Doa Nabi Musa)",
  "lafal": "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
  "transliterasi": "Robbi innii zholamtu nafsii, fagh-fir lii.",
  "arti": "Ya Tuhanku, sesungguhnya aku telah menganiaya diriku sendiri, karena itu ampunilah aku.",
  "riwayat": "(Al Qashash [28]: 16).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "doa",
  "nabi",
  "musa",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "117",
  "nama": "Doa Memohon Ampun, Rahmat, Petunjuk, Keselamatan Dan Rizki",
  "lafal": "اَللَّهُمَّ اغْفِرْ لِيْ، وَارْحَمْنِيْ، وَاهْدِنِيْ، وَعَافِنِيْ، وَارْزُقْنِيْ",
  "transliterasi": "Allaahummagh-fir lii, warhamnii, wahdinii, wa 'aafinii, warzuqnii.",
  "arti": "Ya Allah, ampunilah aku, kasihanilah aku, berilah petunjuk kepadaku, selamatkanlah aku (dari penyakit dan dari apa yang tidak kuinginkan) dan berilah rezeki kepadaku.",
  "riwayat": "HR. Muslim no. 35 dan 2697.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "rahmat",
  "tunjuk",
  "selamat",
  "dan",
  "rizki",
  "meminta",
  "biar",
  "agar",
  "rejeki"
  ]
  },
  {
  "id_doa": "118",
  "nama": "Doa Memohon Ampun Dan Berlindung Dari Neraka",
  "lafal": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
  "transliterasi": "Robbanaa innanaa aamannaa, fagh-fir lanaa dzunuubanaa, wa qinaa 'adzaaban-naar.",
  "arti": "Ya Tuhan kami, sesungguhnya kami telah beriman, maka ampunilah segala dosa kami, dan peliharalah kami dari siksa neraka.",
  "riwayat": "(Ali Imran [3]: 16).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "dan",
  "lindung",
  "dari",
  "neraka",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "119",
  "nama": "Doa Memohon Ampun, Dihapuskan Kesalahan Dan Agar Tidak Dihinakan Pada Hari Kiamat",
  "lafal": "رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
  "transliterasi": "Robbanaa innanaa sami'naa munaadiyan yunaadii lil iimaani an aaminuu birobbikum, fa-aamannaa, robbanaa fagh-fir lanaa dzunuubanaa, wa kaffir 'annaa sayyi-aatinaa, wa tawaffanaa ma'al abroor, robbanaa wa aatinaa maa wa 'adtanaa 'alaa rusulika, wa laa tukh-zinaa yaumal qiyaamah, innaka laa tukh-liful mii'aad.",
  "arti": "Ya Tuhan kami, sesungguhnya kami mendengar (seruan) yang menyeru kepada iman, (yaitu): “Berimanlah kamu kepada Tuhanmu”, maka kamipun beriman. Ya Tuhan kami, ampunilah bagi kami dosa-dosa kami, dan hapuskanlah dari kami kesalahan-kesalahan kami, dan wafatkanlah kami beserta orang-orang yang banyak berbakti. Ya Tuhan kami, berilah kami apa yang telah Engkau janjikan kepada kami dengan perantaraan rasul-rasul Engkau. Dan janganlah Engkau hinakan kami di hari kiamat. Sesungguhnya Engkau tidak menyalahi janji.",
  "riwayat": "(Ali Imran [3]: 193-194).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "hapus",
  "salah",
  "dan",
  "agar",
  "tidak",
  "hina",
  "pada",
  "hari",
  "kiamat",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "120",
  "nama": "Doa Memohon Ampun Untuk Diri Sendiri Dan Kaum Mukminin, Dan Agar Tidak Dengki Kepada Orang Beriman",
  "lafal": "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ",
  "transliterasi": "Robbanagh-fir lanaa wa li-ikhwaaninal-ladziina sabaquunaa bil-iimaan, wa laa taj'al fii quluubinaa ghillan lilladziina aamanuu, robbanaa innaka ro-uufun rohiim.",
  "arti": "Ya Rabb kami, beri ampunlah kami dan saudara-saudara kami yang telah beriman lebih dulu dari kami, dan janganlah Engkau membiarkan kedengkian dalam hati kami terhadap orang-orang yang beriman. Ya Rabb kami, Sesungguhnya Engkau Maha Penyantun lagi Maha Penyayang.",
  "riwayat": "(Al Hasyr [59]: 10).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "untuk",
  "diri",
  "sendiri",
  "dan",
  "kaum",
  "mukminin",
  "dan",
  "agar",
  "tidak",
  "dengki",
  "kepada",
  "orang",
  "iman",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "121",
  "nama": "Doa Memohon Ampun Pada Hari Pembalasan",
  "lafal": "رَبِّ اغْفِرْ لِي خَطِيئَتِي يَوْمَ الدِّينِ",
  "transliterasi": "Robbigh-fir lii khothii-atii yaumad-diin.",
  "arti": "Ya Rabbi, ampunilah kesalahanku pada hari Pembalasan.",
  "riwayat": "HR. Muslim.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "pada",
  "hari",
  "balas",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "122",
  "nama": "Doa Memohon Ampun, Rahmat, Dan Ditetapkan Kebaikan Di Dunia Dan Akhirat (Doa Nabi Musa)",
  "lafal": "أَنتَ وَلِيُّنَا، فَاغْفِرْ لَنَا، وَارْحَمْنَا، وَأَنتَ خَيْرُ الْغَافِرِينَ، وَاكْتُبْ لَنَا فِي هَـٰذِهِ الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ، إِنَّا هُدْنَا إِلَيْكَ",
  "transliterasi": "Anta waliyyunaa, fagh-fir lanaa, war hamnaa, wa anta khoirul ghoofiriin, waktub lanaa fii haadzihid-dunyaa hasanatan wa fil aakhiroh, innaa hudnaa ilaik.",
  "arti": "Engkaulah Yang memimpin kami, maka ampunilah kami, dan berilah kami rahmat, dan Engkaulah Pemberi ampun yang sebaik-baiknya. Dan tetapkanlah untuk kami kebajikan di dunia ini dan di akhirat, sesungguhnya kami kembali (bertaubat) kepada Engkau. (Al-A'raf [7]: 155-156).",
  "riwayat": "",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ampun",
  "rahmat",
  "dan",
  "tetap",
  "baik",
  "di",
  "dunia",
  "dan",
  "akhirat",
  "doa",
  "nabi",
  "musa",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "123",
  "nama": "Doa Berlindung Dari Syirik",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لاَ أَعْلَمُ",
  "transliterasi": "Allaahumma innii a'uudzu bika an usyrika bika wa anaa a'lam, wa astagh-firuka limaa laa a'lam.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari menyekutukan-Mu sedangkan aku mengetahuinya, dan aku memohon ampun terhadap apa yang tidak aku ketahui.",
  "riwayat": "HR. Ahmad dan imam yang lain 4/403, lihat Shahihul Jami' 3/233, dan Shahihut Targhrib wat Tarhib oleh Al-Albani 1/19.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "syirik"
  ]
  },
  {
  "id_doa": "124",
  "nama": "Doa Berlindung Dari Empat Hal 1",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوْذُبِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
  "transliterasi": "Allaahumma innii a'uudzu bika min 'ilmin laa yanfa', wa min qolbin laa yakhsya', wa min nafsin laa tasyba', wa min da'watin laa yustajaabulahaa.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat, hati yang tidak khusyuk, jiwa yang tidak merasa kenyang (puas), dan dari doa yang tidak dikabulkan.",
  "riwayat": "HR. Muslim no. 2722 dari Zaid bin Arqam.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "empat",
  "hal",
  "1"
  ]
  },
  {
  "id_doa": "125",
  "nama": "Doa Berlindung Dari Empat Hal 2",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دُعَاءٍ لَا يُسْمَعُ",
  "transliterasi": "Allaahumma innii a'uudzu bika min 'ilmin laa yanfa', wa min qolbin laa yakhsya', wa min nafsin laa tasyba', wa min du'aa-in laa yusma'.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat, hati yang tidak khusyuk, jiwa yang tidak merasa kenyang (puas), dan dari doa yang tidak didengar (tidak dikabulkan).",
  "riwayat": "HR. Abu Dawud no. 1548, An-Nasa’i no. 5536, dan Ibnu Majah no. 3837. Hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "empat",
  "hal",
  "2"
  ]
  },
  {
  "id_doa": "126",
  "nama": "Doa Berlindung Dari Empat Hal 3",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَعَمَلٍ لَا يُرْفَعُ، وَقَلْبٍ لَا يَخْشَعُ، وَقَوْلٍ لَا يُسْمَعُ",
  "transliterasi": "Allaahumma innii a'uudzu bika min 'ilmin laa yanfa', wa 'amalin laa yurfa', wa qolbin laa yakhsya', wa qoulin laa yusma'.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat, amal yang tidak diangkat, hati yang tidak khusyuk, dan ucapan yang tidak didengar.",
  "riwayat": "HR. Ibnu Hibban, Abu Ya’la, Ahmad, Ibnu Abi Syaibah, dishahihkan Al-Albani dalam at-Ta’liqat al-Hisan no 83, juga dalam Kitab al-‘Ilmi Abu Khaitsamah, hlm. 64.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "empat",
  "hal",
  "3"
  ]
  },
  {
  "id_doa": "127",
  "nama": "Doa Berlindung Dari Kecelakaan dan Kematian Yang Mengerikan",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ التَّرَدِّي، وَالْهَدْمِ، وَالْغَرَقِ، وَالْحَرِيقِ، وَأَعُوذُ بِكَ أَنْ يَتَخَبَّطَنِي الشَّيْطَانُ عِنْدَ الْمَوْتِ، وَأَعُوذُ بِكَ أَنْ أَمُوتَ فِي سَبِيلِكَ مُدْبِرًا، وَأَعُوذُ بِكَ أَنْ أَمُوتَ لَدِيغًا",
  "transliterasi": "Allaahumma innii a'uudzu bika minat-taroddii, wal hadmi, wal ghoroqi, wal hariiqi, wa a'uudzu bika an yatakhobbathonisy-syaithoonu 'indal mauti, wa a'uudzu bika an amuuta fii sabiilika mudbiron, wa a'uudzu bika an amuuta ladiighon.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari kebinasaan (terjatuh), kehancuran (tertimpa sesuatu), tenggelam, kebakaran, dan aku berlindung kepada-Mu dari disesatkan setan pada saat mati, dan aku berlindung kepada-Mu dari mati dalam keadaan berpaling dari jalan-Mu, dan aku berlindung kepada-Mu dari mati dalam keadaan tersengat.",
  "riwayat": "HR. An-Nasa’i no. 5531. Al-Hafizh Abu Thahir mengatakan bahwa sanad hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "celaka",
  "dan",
  "mati",
  "yang",
  "keri"
  ]
  },
  {
  "id_doa": "128",
  "nama": "Doa Agar Tidak Disesatkan Setan Menjelang Kematian",
  "lafal": "أَعُوذُ بِكَ أَنْ يَتَخَبَّطَنِي الشَّيْطَانُ عِنْدَ الْمَوْتِ",
  "transliterasi": "A'uudzu bika an yatakhobbathonisy-syaithoonu 'indal maut.",
  "arti": "Aku berlindung kepada-Mu agar tidak disesatkan setan ketika kematian.",
  "riwayat": "HR. Ahmad 8667, Abu Daud 1554 dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "tidak",
  "sesat",
  "setan",
  "jelang",
  "mati",
  "syaitan",
  ""
  ]
  },
  {
  "id_doa": "129",
  "nama": "Doa Memohon Ilmu 1",
  "lafal": "رَبِّ زِدْنِي عِلْمًا",
  "transliterasi": "Robbi zidnii 'ilman.",
  "arti": "Wahai Rabb-ku, tambahkanlah ilmu kepadaku.",
  "riwayat": "(Thaha [20]: 114).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ilmu",
  "1",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "130",
  "nama": "Doa Memohon Ilmu 2",
  "lafal": "اَللَّهُمَّ انْفَعْنِيْ بِمَا عَلَّمْتَنِيْ، وَعَلِّمْنِيْ مَا يَنْفَعُنِيْ، وَزِدْنِيْ عِلْماً",
  "transliterasi": "Allaahumman-fa'nii bimaa 'allamtanii, wa 'allimnii maa yanfa'unii, wa zidnii 'ilman.",
  "arti": "Ya Allah, berilah aku manfaat dengan apa yang telah Engkau ajarkan kepadaku, ajarilah aku apa yang bermanfaat bagiku, dan tambahkanlah ilmu kepadaku.",
  "riwayat": "HR. Ibnu Majah no. 251 dan 3833. Shahih. Tahqiq al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ilmu",
  "2",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "131",
  "nama": "Doa Memohon Ilmu 3",
  "lafal": "اَللَّهُمَّ انْفَعْنِيْ بِمَا عَلَّمْتَنِيْ، وَعَلِّمْنِيْ مَا يَنْفَعُنِيْ، وَارْزُقْنِيْ عِلْماً تَنْفَعُنِيْ بِهِ",
  "transliterasi": "Allaahumman-fa'nii bimaa 'allamtanii, wa 'allimnii maa yanfa'unii, war-zuqnii 'ilman tanfa'unii bih.",
  "arti": "Ya Allah, berilah aku manfaat dengan apa yang telah Engkau ajarkan kepadaku, ajarilah aku apa yang bermanfaat bagiku, dan rezekikanlah aku ilmu yang dengannya Engkau memberi manfaat kepadaku.",
  "riwayat": "HR. al-Hakim. Shahih. Lihat ash-Shahihah, al-Albani no. 1351.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ilmu",
  "3",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "132",
  "nama": "Doa Memohon Ilmu yang Bermanfaat dan Berlindung dari Ilmu yang Tidak Bermanfaat",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَأَعُوْذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ",
  "transliterasi": "Allaahumma innii as-aluka 'ilman naafi'an, wa a'uudzu bika min 'ilmin laa yanfa'.",
  "arti": "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, dan berlindung kepada-Mu dari ilmu yang tidak bermanfaat.",
  "riwayat": "HR. Ibnu Hibban. Hadis hasan sahih. Lihat at-Ta’liqaat al-Hisaan, al-Albani No 82.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "ilmu",
  "yang",
  "manfaat",
  "dan",
  "lindung",
  "dari",
  "ilmu",
  "yang",
  "tidak",
  "manfaat",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "133",
  "nama": "Doa Agar Paham Tentang Agama",
  "lafal": "اَللَّهُمَّ فَقِّهْنِيْ فِى الدِّيْنِ",
  "transliterasi": "Allaahumma faqqihnii fid-diin.",
  "arti": "Ya Allah, pahamkanlah aku tentang agama (Islam).",
  "riwayat": "HR. Al-Bukhari no. 143, Fathul Barri I/244, dan Muslim no. 2477. Hadits Shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "paham",
  "tentang",
  "agama"
  ]
  },
  {
  "id_doa": "134",
  "nama": "Doa Agar Diri Dan Keluarga Tetap Mendirikan Shalat (Doa Nabi Ibrahim)",
  "lafal": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
  "transliterasi": "Robbij'alnii muqiimash-sholaati wa min dzurriyyatii, robbanaa wa taqobbal du'aa'.",
  "arti": "Ya Rabb-ku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan shalat, ya Tuhan kami, perkenankanlah doaku.",
  "riwayat": "(Ibrahim [14]: 40).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "diri",
  "dan",
  "keluarga",
  "tetap",
  "diri",
  "shalat",
  "doa",
  "nabi",
  "ibrahim"
  ]
  },
  {
  "id_doa": "135",
  "nama": "Doa Agar Menjadi Hamba Yang Bersyukur Dan Agar Bisa Beramal Shaleh (Doa Nabi Sulaiman)",
  "lafal": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
  "transliterasi": "Robbi auzi'nii an asykuro ni'matakallatii an'amta 'alayya wa 'alaa waalidayya wa an a'mala shoolihan tardhoohu, wa ad-khilnii birohmatika fii 'ibaadikash-shoolihiin.",
  "arti": "Ya Rabbku, tunjukilah aku untuk mensyukuri nikmat-Mu yang telah Engkau berikan kepadaku dan kepada ibu bapakku, dan supaya aku dapat berbuat amal shaleh yang Engkau ridhai. Masukkanlah aku dengan rahmat-Mu ke dalam golongan hamba-hamba-Mu yang shaleh.",
  "riwayat": "(An-Naml [27]: 19).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "jadi",
  "hamba",
  "yang",
  "syukur",
  "dan",
  "agar",
  "bisa",
  "amal",
  "shaleh",
  "doa",
  "nabi",
  "sulaiman",
  "salih",
  "shalih",
  "saleh",
  "soleh",
  "sholeh",
  "solih",
  "sholih"
  ]
  },
  {
  "id_doa": "136",
  "nama": "Doa Memohon Petunjuk, Ketakwaan, 'Afaf (Terjaga) Dan Ghina (Merasa Cukup)",
  "lafal": "اَللَّهُمَّ إنِّي أَسْأَلُكَ الهُدَى، وَالتُّقَى، وَالعَفَافَ، وَالغِنَى",
  "transliterasi": "Allaahumma innii as-alukal hudaa, wat-tuqoo, wal 'afaaf, wal ghinaa.",
  "arti": "Ya Allah, sesungguhnya aku mohon kepada-Mu petunjuk, ketakwaan, diberikan sifat 'afaf dan ghina.",
  "riwayat": "HR. Muslim no. 2721.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "tunjuk",
  "takwa",
  "afaf",
  "jaga",
  "dan",
  "ghina",
  "rasa",
  "cukup",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "137",
  "nama": "Doa Memohon Ketakwaan Dan Jiwa Yang Suci",
  "lafal": "اَللَّهُمَّ آتِ نَفْسِيْ تَقْوَاهَا، وَزَكِّهَا، أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
  "transliterasi": "Allaahumma aati nafsii taqwaahaa wazakkihaa, anta khairu man zakkaahaa, anta waliyyuhaa wa maulaahaa.",
  "arti": "Ya Allah, anugerahkanlah kepadaku ketakwaaan jiwa dan sucikanlah ia, karena Engkaulah sebaik-baik Rabb yang mensucikannya, Engkau pelindung dan Pemeliharanya.",
  "riwayat": "HR. Muslim.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "takwa",
  "dan",
  "jiwa",
  "yang",
  "suci",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "138",
  "nama": "Doa Agar Dilapangkan Hati Dan Dimudahkan Urusan Dan Ucapan (Doa Nabi Musa)",
  "lafal": "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
  "transliterasi": "Robbisy-roh lii shodrii, wa yassir lii amrii, wah lul 'uqdatan min lisaanii, yafqohuu qoulii.",
  "arti": "Ya Rabbku, lapangkanlah untukku dadaku, mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, supaya mereka mengerti perkataanku.",
  "riwayat": "(Thaha [20]: 25-28).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "lapang",
  "hati",
  "dan",
  "mudah",
  "urus",
  "dan",
  "ucap",
  "doa",
  "nabi",
  "musa"
  ]
  },
  {
  "id_doa": "139",
  "nama": "Doa Memperbaiki Urusan Agama Dan Dunia",
  "lafal": "اَللَّهُمَّ أَصْلِحْ لِى دِينِىَ الَّذِى هُوَ عِصْمَةُ أَمْرِى، وَأَصْلِحْ لِى دُنْيَاىَ الَّتِى فِيهَا مَعَاشِى، وَأَصْلِحْ لِى آخِرَتِى الَّتِى فِيهَا مَعَادِى، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِى فِى كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِى مِنْ كُلِّ شَرٍّ",
  "transliterasi": "Allaahumma ashlih lii diiniyal-ladzii huwa 'ishmatu amrii, wa ashlih lii dunyaayallatii fiihaa ma'aasyii, wa ashlih lii aakhirotillatii fiihaa ma'aadii, waj'alil hayaata ziyaadatan lii fii kulli khoirin, waj'alil mauta roohatan lii min kulli syarrin.",
  "arti": "Ya Allah, perbaikilah agamaku sebagai benteng urusanku, perbaikilah duniaku yang menjadi tempat kehidupanku, perbaikilah akhiratku yang menjadi tempat kembaliku. Dan jadikanlah kehidupan ini mempunyai nilai tambah bagiku dalam segala kebaikan, dan jadikanlah kematianku sebagai kebebasanku dari segala kejahatan.",
  "riwayat": "HR. Muslim no. 2720.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "baik",
  "urus",
  "agama",
  "dan",
  "dunia"
  ]
  },
  {
  "id_doa": "140",
  "nama": "Doa Melihat Hilal (Bulan Tanggal Satu)",
  "lafal": "اَللَّهُ أَكْبَرُ، اَللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيْمَانِ، وَالسَّلَامَةِ وَالإِسْلَامِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ",
  "transliterasi": "Allaahu akbar, allaahumma ahillahu 'alainaa bil amni wal iimaan, was-salaamati wal islaam, wat-taufiiqi limaa tuhibbu wa tardhoo, robbunaa wa robbukallaah.",
  "arti": "Allah Maha Besar, Ya Allah, munculkanlah hilal itu kepada kami dengan membawa keamanan dan keimanan, keselamatan dan islam, dan membawa taufiq kepada apa yang Engkau cintai dan Engkau ridhai. Rabb kami dan Rabb kamu (wahai bulan) adalah Allah.",
  "riwayat": "HR. Ahmad dalam musnadnya 888, Ad-Darimi dalam sunannya 1729, At-Thabrani dalam Mu'jam al-Kabir 13330. Hadits ini digolongkan hadits shahih li ghairi oleh Al-Albani dalam As-Shahihah no. 1816, dan dinilai shahih oleh Syu'aib Al-Arnauth dalam Ta'liq Musnad Ahmad 3/171.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lihat",
  "hilal",
  "bulan",
  "tanggal",
  "satu"
  ]
  },
  {
  "id_doa": "141",
  "nama": "Doa Melihat Permulaan Buah",
  "lafal": "اَللَّهُمَّ بَارِكْ لَنَا فِيْ ثَمَرِنَا، وَبَارِكْ لَنَا فِيْ مَدِيْنَتِنَا، وَبَارِكْ لَنَا فِيْ صَاعِنَا، وَبَارِكْ لَنَا فِيْ مُدِّنَا",
  "transliterasi": "Allaahumma baarik lanaa fii tsamarinaa, wa baarik lanaa fii madiinatinaa, wa baarik lanaa fii shoo'inaa, wa baarik lanaa fii muddinaa.",
  "arti": "Ya Allah, berilah berkah buah-buahan kami, berilah berkah kota kami, berilah berkah takaran kami (sehingga di antara kami tidak sering mengurangi timbangan) dan berilah berkah mud kami.",
  "riwayat": "HR. Muslim 2/1000.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lihat",
  "mula",
  "buah"
  ]
  },
  {
  "id_doa": "142",
  "nama": "Doa Memohon Hisab yang Mudah",
  "lafal": "اَللَّهُمَّ حَاسِبْنِى حِسَابًا يَسِيرًا",
  "transliterasi": "Allaahumma haasibnii hisaaban yasiiron.",
  "arti": "Ya Allah, hisablah aku dengan hisab yang mudah.",
  "riwayat": "HR. Ahmad 6/48.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "hisab",
  "yang",
  "mudah",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "143",
  "nama": "Doa Agar Ucapan Terjaga Saat Marah Maupun Ridha",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الْغَضَبِ وَالرِّضَى",
  "transliterasi": "Allaahumma innii as-aluka kalimatal haqqi fil ghodhobi war-ridhoo.",
  "arti": "Ya Allah, aku memohon kepada-Mu perkataan yang benar pada saat marah dan ridha.",
  "riwayat": "HR. Ahmad IV/264.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "ucap",
  "jaga",
  "saat",
  "marah",
  "maupun",
  "ridha"
  ]
  },
  {
  "id_doa": "144",
  "nama": "Doa Memohon Melihat Wajah Allah",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ، وَالشَّوْقَ إِلَى لِقَائِكَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلَا فِتْنَةٍ مُضِلَّةٍ",
  "transliterasi": "Allaahumma innii as-aluka ladz-dzatan-nazhori ilaa wajhika, wasy-syauqo ilaa liqoo-ika fii ghoiri dhorroo-a mudhirrotin wa laa fitnatin mudhillah.",
  "arti": "Ya Allah, Aku mohon kepada-Mu kenikmatan memandang wajah-Mu (di Surga), rindu bertemu dengan-Mu tanpa penderitaan yang membahayakan dan fitnah yang menyesatkan.",
  "riwayat": "HR. Nasai 1305 dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "lihat",
  "wajah",
  "allah",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "145",
  "nama": "Doa Agar Mencintai Dan Dicintai Allah 1",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبَّ عَمَلٍ يُقَرِّبُ إِلَى حُبِّكَ",
  "transliterasi": "Allaahumma innii as-aluka hubbaka, wa hubba man yuhibbuka, wa hubba 'amalin yuqorribu ilaa hubbika.",
  "arti": "Ya Allah, aku memohon agar dapat mencintai-Mu, mencintai orang-orang yang mencintai-Mu, dan mencintai amal yang dapat mendekatkan diriku kepada cinta-Mu.",
  "riwayat": "HR. Tirmidzi no. 3235 dan Ahmad 5: 243, dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "cinta",
  "dan",
  "cinta",
  "allah",
  "1"
  ]
  },
  {
  "id_doa": "146",
  "nama": "Doa Agar Mencintai Dan Dicintai Allah 2",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَالْعَمَلَ الَّذِى يُبَلِّغُنِى حُبَّكَ، اَللَّهُمَّ اجْعَلْ حُبَّكَ أَحَبَّ إِلَىَّ مِنْ نَفْسِى، وَأَهْلِى، وَمِنَ الْمَاءِ الْبَارِدِ",
  "transliterasi": "Allaahumma innii as-aluka hubbaka, wa hubba man yuhibbuka, wal 'amalal-ladzii yuballi-ghunii hubbaka. Allaahummaj'al hubbaka ahabba ilayya min nafsii, wa ahlii, wa minal maa'il baarid.",
  "arti": "Ya Allah, aku memohon kepada-Mu cinta-Mu, cinta orang-orang yang mencintai-Mu, dan amalan yang mengantarkanku menggapai cinta-Mu. Ya Allah, jadikanlah cintaku kepada-Mu lebih aku cintai daripada cintaku kepada diriku sendiri, keluargaku, dan air dingin.",
  "riwayat": "HR. At-Tirmidzi dari jalan Abu Darda’ radhiyallahu anhu, dan beliau (At-Tirmidzi) berkata derajat hadits ini hasan (baik).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "cinta",
  "dan",
  "cinta",
  "allah",
  "2"
  ]
  },
  {
  "id_doa": "147",
  "nama": "Doa Agar Diterima Amal Ibadah Dan Taubat (Doa Nabi Ibrahim)",
  "lafal": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ، وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
  "transliterasi": "Robbanaa taqobbal minnaa, innaka antas-sami'ul 'aliim. Wa tub 'alainaa, innaka antat-tawwaabur-rohiim.",
  "arti": "Ya Tuhan kami, terimalah daripada kami (amalan kami), sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui. Dan terimalah taubat kami. Sesungguhnya Engkaulah Yang Maha Penerima taubat lagi Maha Penyayang.",
  "riwayat": "(Al Baqarah [2]: 127 dan 128).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "terima",
  "amal",
  "ibadah",
  "dan",
  "taubat",
  "doa",
  "nabi",
  "ibrahim"
  ]
  },
  {
  "id_doa": "148",
  "nama": "Doa Agar Tergolong Orang Beriman 1 (Doa Nabi Ibrahim)",
  "lafal": "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ، وَاجْعَلْ لِي لِسَانَ صِدْقٍ فِي الْآخِرِينَ، وَاجْعَلْنِي مِنْ وَرَثَةِ جَنَّةِ النَّعِيمِ",
  "transliterasi": "Robbi hab lii hukman, wa alhiqnii bish-shoolihiin. Waj'al lii lisaana shidqin fil aakhiriin. Waj'alnii min waro-tsati jannatin-na'iim.",
  "arti": "Ya Tuhanku, berikanlah kepadaku hikmah, dan masukkanlah aku ke dalam golongan orang-orang yang saleh. Dan jadikanlah aku buah tutur yang baik bagi orang-orang (yang datang) kemudian. Dan jadikanlah aku termasuk orang-orang yang mempusakai surga yang penuh kenikmatan.",
  "riwayat": "(Asy Syu’ara [26]: 83-85).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "golong",
  "orang",
  "iman",
  "1",
  "doa",
  "nabi",
  "ibrahim"
  ]
  },
  {
  "id_doa": "149",
  "nama": "Doa Agar Tergolong Orang Beriman 2",
  "lafal": "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
  "transliterasi": "Robbanaa aamannaa fak-tubnaa ma'asy-syaahidiin.",
  "arti": "Ya Tuhan kami, kami telah beriman, maka catatlah kami bersama orang-orang yang menjadi saksi (atas kebenaran Al Quran dan kenabian Muhammad).",
  "riwayat": "(Al Maidah [5]: 83).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "golong",
  "orang",
  "iman",
  "2"
  ]
  },
  {
  "id_doa": "150",
  "nama": "Doa Agar Bertawakal Hanya Kepada Allah 1 (Doa Nabi Ibrahim)",
  "lafal": "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
  "transliterasi": "Robbanaa 'alaika tawakkalnaa, wa ilaika anabnaa, wa ilaikal mashiir.",
  "arti": "Ya Tuhan kami, hanya kepada Engkaulah kami bertawakal, dan hanya kepada Engkaulah kami bertaubat, dan hanya kepada Engkaulah kami kembali.",
  "riwayat": "(Al Mumtahanah [60]: 4).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "tawakal",
  "hanya",
  "kepada",
  "allah",
  "1",
  "doa",
  "nabi",
  "ibrahim"
  ]
  },
  {
  "id_doa": "151",
  "nama": "Doa Agar Bertawakal Hanya Kepada Allah 2",
  "lafal": "حَسْبِيَ اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
  "transliterasi": "Hasbiyallaah, laa ilaaha illaa huu, 'alaihi tawakkaltu, wa huwa robbul 'arsyil 'azhiim.",
  "arti": "Cukuplah Allah bagiku, tidak ada sesembahan yang berhak disembah selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan yang memiliki ‘Arsy yang agung.",
  "riwayat": "(At Taubah [9]: 129).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "tawakal",
  "hanya",
  "kepada",
  "allah",
  "2"
  ]
  },
  {
  "id_doa": "152",
  "nama": "Doa Agar Disempurnakan Cahayanya Dan Memohon Ampun",
  "lafal": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  "transliterasi": "Robbanaa atmim lanaa nuuronaa, wagh-fir lanaa, innaka 'alaa kulli syai-in qodiir.",
  "arti": "Ya Rabb kami, sempurnakanlah bagi kami cahaya kami dan ampunilah kami; Sesungguhnya Engkau Maha Kuasa atas segala sesuatu.",
  "riwayat": "(At Tahrim [66]: 8).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "sempurna",
  "cahaya",
  "dan",
  "mohon",
  "ampun",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "153",
  "nama": "Doa Memohon Rahmat Dan Petunjuk",
  "lafal": "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
  "transliterasi": "Robbanaa aatinaa min ladunka rohmatan, wa hayyi' lanaa min amrinaa rosyadaa.",
  "arti": "Wahai Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu, dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami.",
  "riwayat": "(Al Kahfi [18]: 10).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "rahmat",
  "dan",
  "tunjuk",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "154",
  "nama": "Doa Agar Diwafatkan Dalam Keadaan Islam Dan Tergolong Orang Saleh (Doa Nabi Yusuf)",
  "lafal": "أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
  "transliterasi": "Anta waliyyii fid-dunyaa wal aakhiroh, tawaffanii musliman, wa alhiqnii bish-shoolihiin.",
  "arti": "Engkaulah Pelindungku di dunia dan di akhirat, wafatkanlah aku dalam keadaan Islam dan gabungkanlah aku dengan orang-orang yang saleh.",
  "riwayat": "(Yusuf [12]: 101)",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "wafat",
  "dalam",
  "ada",
  "islam",
  "dan",
  "golong",
  "orang",
  "saleh",
  "doa",
  "nabi",
  "yusuf"
  ]
  },
  {
  "id_doa": "155",
  "nama": "Doa Memohon Petunjuk Dan Kebenaran 1",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْهُدَى وَالسَّدَادَ",
  "transliterasi": "Allaahumma innii as-alukal hudaa was-sadaad.",
  "arti": "Ya Allah, aku memohon kepada-Mu petunjuk dan kebenaran.",
  "riwayat": "HR. Muslim no. 2725.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "tunjuk",
  "dan",
  "benar",
  "1",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "156",
  "nama": "Doa Memohon Petunjuk Dan Kebenaran 2",
  "lafal": "اَللَّهُمَّ اهْدِنِيْ وَسَدِّدْنِي",
  "transliterasi": "Allaahummahdinii wa saddidnii.",
  "arti": "Ya Allah, berilah aku hidayah dan keteguhan dalam kebenaran.",
  "riwayat": "HR. Muslim dalam Shahih Muslim.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "tunjuk",
  "dan",
  "benar",
  "2",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "157",
  "nama": "Doa Memohon Kesabaran Dan Agar Diwafatkan Dalam Keadaan Muslim",
  "lafal": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
  "transliterasi": "Robbanaa afrigh 'alainaa shobron, wa tawaffanaa muslimiin.",
  "arti": "Ya Tuhan kami, limpahkanlah kesabaran kepada kami, dan wafatkanlah kami dalam keadaan berserah diri (kepada-Mu).",
  "riwayat": "(Al A'raf [7]: 126).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "sabar",
  "dan",
  "agar",
  "wafat",
  "dalam",
  "ada",
  "muslim",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "158",
  "nama": "Doa Memohon Dihidupkan Jika Itu Baik, Dan Dimatikan Jika Itu Baik",
  "lafal": "اَللَّهُمَّ أَحْيِنِي مَا كَانَتِ الحَيَاةُ خَيْرًا لِي، وَتَوَفَّنِي إِذَا كَانَتِ الوَفَاةُ خَيْرًا لِي",
  "transliterasi": "Allaahumma ahyinii maa kaanatil hayaatu khoiron lii, wa tawaffanii idzaa kaanatil wafaatu khoiron lii.",
  "arti": "Ya Allah, hidupkanlah aku jika kehidupan itu baik untukku, dan matikanlah aku jika kematian itu baik untukku.",
  "riwayat": "HR. Bukhari no. 6351, 5671 dan Muslim no. 2680.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "hidup",
  "jika",
  "itu",
  "baik",
  "dan",
  "mati",
  "jika",
  "itu",
  "baik",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "159",
  "nama": "Doa Memohon Keteguhan, Petunjuk Sekaligus Sebagai Pemberi Petunjuk",
  "lafal": "اَللَّهُمَّ ثَبِّتْنِي، وَاجْعَلْنِي هَادِيًا مَهْدِيًّا",
  "transliterasi": "Allaahumma tsabbitnii, waj'alnii haadiyan mahdiyyan.",
  "arti": "Ya Allah, teguhkanlah aku. Dan jadikanlah aku sebagai pemberi petunjuk sekaligus mendapat petunjuk.",
  "riwayat": "HR. Bukhari, Muslim.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "teguh",
  "tunjuk",
  "sekaligus",
  "bagai",
  "beri",
  "tunjuk",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "160",
  "nama": "Doa Memohon Keimanan, Keyakinan Dan Pemahaman",
  "lafal": "اَللَّهُمَّ زِدْنَا إِيْمَانًا، وَيَقِيْنًا، وَفِقْهًا",
  "transliterasi": "Allaahumma zidnaa iimaanan, wa yaqiinan, wa fiqhan.",
  "arti": "Ya Allah, tambahkan kepada kami keimanan, keyakinan dan pemahaman (yang benar).",
  "riwayat": "HR. Abdullah bin Imam Ahmad dalam As-Sunnah (I/368, No. 797) dan Al-Laalikai dalam Syirah Ushul I’tiqod Ahlis Sunnah waljama’ah (No. 1704). Al-Hafizh Ibnu Hajar menyatakan sanadnya shahih dalam Fathul Barri (I/48).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "iman",
  "yakin",
  "dan",
  "paham",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "161",
  "nama": "Doa Memohon Keteguhan Di Atas Islam",
  "lafal": "يَا وَلِيَّ الْإِسْلَامِ وَأَهْلِهِ، مَسِّكْنِي الْإِسْلَامَ، حَتَّى أَلْقَاكَ عَلَيْهِ",
  "transliterasi": "Yaa waliyyal islaami wa ahlih, massiknil islaam, hattaa alqooka 'alaih.",
  "arti": "Wahai Dzat yang melindungi Islam dan pemeluknya, kokohkanlah kami di atas Islam, sampai kami menemui-Mu dengan membawanya.",
  "riwayat": "HR. ath-Thabrani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "teguh",
  "di",
  "atas",
  "islam",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "162",
  "nama": "Doa Memohon Iman Yang Tidak Lepas, Nikmat Yang Tidak Habis, Dan Menyertai Nabi Muhammad Di Surga",
  "lafal": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ إِيْمَانًا لَا يَرْتَدُّ، وَنَعِيْمًا لَا يَنْفَدُ، وَمُرَافَقَةَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي أَعْلَى جَنَّةِ الْخُلْدِ",
  "transliterasi": "Allaahumma innii as-aluka iimaanan laa yartadd, wa na'iiman laa yanfad, wa muroofaqota muhammadin shollallaahu 'alaihi wa sallama fii a'laa jannatil khuld.",
  "arti": "Ya Allah, sesungguhnya aku memohon kepada-Mu iman yang tidak akan lepas, nikmat yang tidak akan habis, dan menyertai Muhammad shallallahu ‘alaihi wa sallam di surga yang paling tinggi selamanya.",
  "riwayat": "HR. Ahmad 1:400, Ibnu Hibban 5:303. Syaikh Syu’aib Al-Arnauth mengatakan bahwa hadits ini shahih lighairihi (sahih dilihat dari jalur lain).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "iman",
  "yang",
  "tidak",
  "lepas",
  "nikmat",
  "yang",
  "tidak",
  "habis",
  "dan",
  "serta",
  "nabi",
  "muhammad",
  "di",
  "surga",
  "meminta",
  "biar",
  "agar",
  "copot"
  ]
  },
  {
  "id_doa": "163",
  "nama": "Doa Menolak Firasat Buruk/Sial",
  "lafal": "اَللَّهُمَّ لاَ طَيْرَ إِلاَّ طَيْرُكَ، وَلاَ خَيْرَ إِلاَّ خَيْرُكَ، وَلاَ إِلَـٰهَ غَيْرُكَ",
  "transliterasi": "Allaahumma laa thoiro illaa thoiruk, wa laa khoiro illaa khoiruk, wa laa ilaaha ghoiruk.",
  "arti": "Ya Allah, tidak ada kesialan kecuali kesialan yang Engkau tentukan, dan tidak ada kebaikan kecuali kebaikanMu, serta tidak ada sesembahan yang berhak disembah kecuali Engkau.",
  "riwayat": "HR. Ahmad 2/220, Ibnus Sunni no. 292, dan lihat Al-Ahadits Ash-Shahihah, no. 1065.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "tolak",
  "firasat",
  "buruk",
  "sial"
  ]
  },
  {
  "id_doa": "164",
  "nama": "Doa Berlindung Dari Hilangnya Nikmat, Berubahnya Kesehatan/Keselamatan, Siksa Dan Murka Allah",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيْعِ سَخَطِكَ",
  "transliterasi": "Allaahumma innii a'uudzu bika min zawaali ni'matik, wa tahawwuli 'aafiyatik, wa fujaa-ati niqmatik, wa jamii'i sakhathik.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari hilangnya nikmat yang telah Engkau berikan, dari berubahnya kesehatan yang telah Engkau anugerahkan, dari siksa-Mu yang datang secara tiba-tiba, dan dari segala kemurkaan-Mu.",
  "riwayat": "HR. Muslim no. 2739.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "hilang",
  "nikmat",
  "ubah",
  "sehat",
  "selamat",
  "siksa",
  "dan",
  "murka",
  "allah"
  ]
  },
  {
  "id_doa": "165",
  "nama": "Doa Berlindung dari Beratnya Cobaan, Kesengsaraan yang Hebat, Keburukan Takdir dan Kegembiraan Musuh",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ جَهْدِ البَلاَءِ، وَدَرَكِ الشَقَاءِ، وَسُوءِ القَضَاءِ، وَشَمَاتَةِ الأَعْدَاءِ",
  "transliterasi": "Allaahumma innii a'uudzu bika min jahdil balaa', wa darokisy-syaqoo', wa suu-il qodhoo', wa syamaatatil a'daa'.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari beratnya cobaan, kesengsaraan yang hebat, keburukan takdir dan kegembiraan musuh atas musibah yang menimpaku.",
  "riwayat": "HR. Al-Bukhari no. 6347 dan Muslim no. 2707. Muttafaqun ‘alaih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "berat",
  "coba",
  "sengsara",
  "yang",
  "hebat",
  "keburu",
  "takdir",
  "dan",
  "gembira",
  "musuh"
  ]
  },
  {
  "id_doa": "166",
  "nama": "Bila Takut Mengenai Sesuatu Dengan Matanya ('Ain)",
  "lafal": "",
  "transliterasi": "",
  "arti": "",
  "riwayat": "HR. Ahmad 4/447, Ibnu Majah dan Malik. Dinyatakan shahih oleh Al-Albani dalam Shahihul Jami' 1/212, dan lihat Zadul Ma'ad 4/170, tahqiq Al-Arnauth.",
  "keterangan": "Apabila seseorang di antara kamu melihat dari saudaranya, diri atau hartanya yang menakjubkan, maka hendaklah mendoakan berkah kepadanya. Sesungguhnya 'ain (kena mata) itu adalah benar.",
  "kata_kunci": [
  "bila",
  "takut",
  "kena",
  "sesuatu",
  "dengan",
  "mata",
  "ain"
  ]
  },
  {
  "id_doa": "168",
  "nama": "Doa Berlindung Dari Sifat Lemah, Malas, Pengecut Dan Pikun",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنَ الْعَجْزِ، وَالْكَسَلِ، وَالْجُبْنِ، وَالْهَرَمِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal 'ajzi, wal kasali, wal jubni, wal haromi.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kelemahan, rasa malas, pengecut/rasa takut dan pikun.",
  "riwayat": "HR. Muslim no. 2706.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sifat",
  "lemah",
  "malas",
  "kecut",
  "dan",
  "pikun"
  ]
  },
  {
  "id_doa": "169",
  "nama": "Doa Berlindung Dari Sifat Malas, Pengecut/Lemahnya Hati, Pikun/Usia Tua Dan Kikir",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنَ الْهَرَمِ، وَأَعُوذُ بِكَ مِنَ الْبُخْلِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal kasali, wa a'uudzu bika minal jubni, wa a'uudzu bika minal haromi, wa a'uudzu bika minal bukhli.",
  "arti": "Ya Allah, aku meminta perlindungan pada-Mu dari rasa malas, aku meminta perlindungan pada-Mu dari lemahnya hati, aku meminta perlindungan pada-Mu dari usia tua (yang sulit untuk beramal) dan aku meminta perlindungan pada-Mu dari sifat kikir (pelit).",
  "riwayat": "HR. Bukhari. Bukhari: 83-Kitab Ad Da'awaat, 41-Bab Meminta Perlindungan dari Umur yang Sulit Untuk Beramal.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sifat",
  "malas",
  "kecut",
  "lemah",
  "hati",
  "pikun",
  "usia",
  "tua",
  "dan",
  "kikir"
  ]
  },
  {
  "id_doa": "170",
  "nama": "Doa Berlindung Dari Sifat Lemah, Malas, Pengecut, Pikun, Kikir, Siksa Kubur Dan Fitnah Kehidupan Dan Kematian",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنَ الْعَجْزِ، وَالْكَسَلِ، وَالْجُبْنِ، وَالْهَرَمِ، وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal 'ajzi, wal kasali, wal jubni, wal haromi, wal bukhli, wa a'uudzu bika min 'adzaabil qobri, wa min fitnatil mahyaa wal mamaati.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kelemahan, rasa malas, pengecut/rasa takut, pikun/kejelekan di waktu tua, dan sifat kikir. Dan aku juga berlindung kepada-Mu dari siksa kubur serta fitnah/bencana kehidupan dan kematian.",
  "riwayat": "HR. Bukhari no. 6367 dan Muslim no. 2706.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sifat",
  "lemah",
  "malas",
  "kecut",
  "pikun",
  "kikir",
  "siksa",
  "kubur",
  "dan",
  "fitnah",
  "hidup",
  "dan",
  "mati"
  ]
  },
  {
  "id_doa": "171",
  "nama": "Doa Berlindung Dari Sifat Malas, Pikun, Dosa, Hutang, Fitnah Dan Azab Kubur, Fitnah Dan Azab Neraka, Fitnah Kekayaan Dan Kemiskinan Dan Fitnah Dajjal",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَالْهَرَمِ، وَالْمَأْثَمِ وَالْمَغْرَمِ، وَمِنْ فِتْنَةِ الْقَبْرِ وَعَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ، وَمِنْ شَرِّ فِتْنَةِ الْغِنَى، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْفَقْرِ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْمَسِيْحِ الدَّجَّالِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal kasali wal haromi, wal ma'tsami wal maghromi, wa min fitnatil qobri wa 'adzaabil qobri, wa min fitnatin-naari wa 'adzaabin-naari, wa min syarri fitnatil ghinaa, wa a'uudzu bika min fitnatil faqri, wa a'uudzu bika min fitnatil masiihid-dajjaal.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kemalasan dan pikun/usia jompo, perbuatan dosa dan hutang, fitnah kubur dan azab kubur, fitnah neraka dan azab neraka, keburukan fitnah kekayaan, aku berlindung kepada-Mu dari fitnah kemiskinan dan aku berlindung kepada-Mu dari fitnah Al-Masih Dajjal.",
  "riwayat": "HR. Bukhari 6368.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sifat",
  "malas",
  "pikun",
  "dosa",
  "hutang",
  "fitnah",
  "dan",
  "azab",
  "kubur",
  "fitnah",
  "dan",
  "azab",
  "neraka",
  "fitnah",
  "kaya",
  "dan",
  "miskin",
  "dan",
  "fitnah",
  "dajjal"
  ]
  },
  {
  "id_doa": "172",
  "nama": "Doa Berlindung Dari Sifat Pengecut, Pikun, Fitnah Dunia Dan Azab Kubur",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوْذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal jubni, wa a'uudzu bika an urodda ilaa ar-dzalil 'umuri, wa a'uudzu bika min fitnatid-dunyaa, wa a'uudzu bika min 'adzaabil qobr.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari sifat pengecut, aku berlindung kepada-Mu kepada serendah-rendahnya usia (pikun), aku berlindung kepada-Mu dari fitnah dunia, dan aku berlindung berlindung kepada-Mu dari adzab kubur.",
  "riwayat": "HR. Bukhari 2822.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sifat",
  "kecut",
  "pikun",
  "fitnah",
  "dunia",
  "dan",
  "azab",
  "kubur"
  ]
  },
  {
  "id_doa": "173",
  "nama": "Doa Berlindung Dari Keburukan Amal",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ، وَشَرِّ مَا لَمْ أَعْمَلْ",
  "transliterasi": "Allaahumma innii a'uudzu bika min syarri maa 'amiltu, wa syarri maa lam a'mal.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari keburukan yang telah aku perbuat dan keburukan yang belum aku perbuat.",
  "riwayat": "HR. Muslim 2716.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "keburu",
  "amal"
  ]
  },
  {
  "id_doa": "174",
  "nama": "Doa Agar Musibah Tidak Menimpa Agama dan Agar Dunia Bukan Sebagai Tujuan",
  "lafal": "وَلَا تَجْعَلْ مُصِيْبَتَنَا فِي دِيْنِنَا، وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا، وَلَا مَبْلَغَ عِلْمِنَا",
  "transliterasi": "Wa laa taj'al mushiibatanaa fii diininaa, wa laa taj'alid-dunyaa akbaro hamminaa, wa laa mablagho 'ilminaa.",
  "arti": "(Ya Allah) Janganlah Engkau jadikan musibah pada kami menimpa agama kami. Janganlah Engkau jadikan dunia (harta dan kemewahan) sebagai cita-cita terbesar kami, jangan juga sebagai tujuan utama dari ilmu kami.",
  "riwayat": "HR. At-Tirmidzi V/528 no.3502, An-Nasa'I dalam As-Sunan Al-Kubro VI/106, Al-Hakim I/528 dan Ibnu As-Sunny dalam Amalul Yaum wa Al-Lailah no.445. Derajat hadits tersebut hasan (baik), sebagaimana dinyatakan oleh syaikh Al-Albani di dalam Shohih Sunan At-Tirmidzi III/168 no.2783 dan Shohih Al-Jami’ I/400.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "musibah",
  "tidak",
  "timpa",
  "agama",
  "dan",
  "agar",
  "dunia",
  "bukan",
  "bagai",
  "tuju"
  ]
  },
  {
  "id_doa": "175",
  "nama": "Doa Berlindung Dari Keburukan Anggota Badan 1",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ شَرِّ سَمْعِى، وَمِنْ شَرِّ بَصَرِى، وَمِنْ شَرِّ لِسَانِى، وَمِنْ شَرِّ قَلْبِى، وَمِنْ شَرِّ مَنِيِّى",
  "transliterasi": "Allaahumma innii a'uudzu bika min syarri sam'ii, wa min syarri bashorii, wa min syarri lisaanii, wa min syarri qolbii, wa min syarri maniyyii.",
  "arti": "Allaahumma innii a'uudzu bika min syarri sam'ii, wa min syarri bashorii, wa min syarri lisaanii, wa min syarri qolbii, wa min syarri maniyyii.",
  "riwayat": "HR. An-Nasa’i no. 5446, Abu Daud no. 1551, Tirmidzi no. 3492. Al-Hafizh Abu Thahir mengatakan bahwa sanad hadits ini hasan.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "keburu",
  "anggota",
  "badan",
  "1"
  ]
  },
  {
  "id_doa": "176",
  "nama": "Doa Berlindung Dari Keburukan Anggota Badan 2",
  "lafal": "اَللَّهُمَّ عَافِنِي مِنْ شَرِّ سَمْعِي، وَبَصَرِي، وَلِسَانِي، وَقَلْبِي، وَمِنْ شَرِّ مَنِيِّي",
  "transliterasi": "اَللَّهُمَّ عَافِنِي مِنْ شَرِّ سَمْعِي، وَبَصَرِي، وَلِسَانِي، وَقَلْبِي، وَمِنْ شَرِّ مَنِيِّي",
  "arti": "Ya Allah, berilah aku keselamatan dari buruknya pendengaranku, penglihatanku, lidahku, hatiku, dan dari buruknya air maniku.",
  "riwayat": "HR. An-Nasai, Al-Bukhari dalam al-Adabul Mufrad.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "keburu",
  "anggota",
  "badan",
  "2"
  ]
  },
  {
  "id_doa": "177",
  "nama": "Doa Berlindung Dari Kesusahan, Kesedihan, Lemah, Malas, Kikir, Penakut, Lilitan Hutang Dan Penindasan Orang",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal hammi wal hazani, wal 'ajzi wal kasali, wal bukhli wal jubni, wa dhola'id-daini wa gholabatir-rijaal.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kesusahan dan kesedihan, lemah dan malas, kikir dan penakut, lilitan hutang dan penindasan orang.",
  "riwayat": "HR. Al-Bukhari 7/158. Rasulullah Shallallahu'alaihi wasallam senantiasa membaca doa ini, lihat kitab Fathul Baari 11/173.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "susah",
  "sedih",
  "lemah",
  "malas",
  "kikir",
  "takut",
  "lilit",
  "hutang",
  "dan",
  "tindas",
  "orang"
  ]
  },
  {
  "id_doa": "178",
  "nama": "Doa Berlindung Dari Kesusahan, Kesedihan, Lemah, Malas, Penakut, Kikir, Lilitan Hutang Dan Penguasaan Orang",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ، وَمِنْ شَرِّ الْغِنَى وَالْفَقْرِ",
  "transliterasi": "Allaahumma innii a'uudzu bika min fitnatin-naar wa 'adzaabin-naar, wa min syarril ghinaa wal faqr.",
  "arti": "Ya Allah, aku berlindung kepadaMu dari fitnah neraka dan adzab neraka, dan dari keburukan kekayaan dan kefakiran.",
  "riwayat": "HR. Abu Daud no. 1543. Syaikh Al Albani mengatakan bahwa hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "susah",
  "sedih",
  "lemah",
  "malas",
  "takut",
  "kikir",
  "lilit",
  "hutang",
  "dan",
  "kuasa",
  "orang"
  ]
  },
  {
  "id_doa": "179",
  "nama": "Doa Ketika Dihadang Atau Diancam Orang Jahat",
  "lafal": "اَللَّهُمَّ اكْفِنِيْهِمْ بِمَا شِئْتَ",
  "transliterasi": "Allaahummak-finiihim bima syi'ta.",
  "arti": "Ya Allah, cukupkanlah aku dari kejahatan mereka dengan cara yang Engkau kehendaki.",
  "riwayat": "HR. Muslim 3005.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "ketika",
  "dihadang",
  "atau",
  "ancam",
  "orang",
  "jahat",
  "saat",
  "pas"
  ]
  },
  {
  "id_doa": "180",
  "nama": "Doa Berlindung Dari Setan, Binatang Berbisa dan 'Ain (Pandangan Mata Jahat)",
  "lafal": "أَعُوْذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
  "transliterasi": "A'uudzu bikalimaatillaahit-taammah, min kulli syaithoonin wa haammah, wa min kulli 'ainin laammah.",
  "arti": "Aku berlindung dengan kalimat-kalimat Allah yang sempurna, dari segala setan dan binatang berbisa, dan dari pandangan mata jahat.",
  "riwayat": "HR. Bukhari no. 3371.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "setan",
  "binatang",
  "bisa",
  "dan",
  "ain",
  "pandang",
  "mata",
  "jahat",
  "syaitan",
  ""
  ]
  },
  {
  "id_doa": "181",
  "nama": "Doa Berlindung Dari Keburukan Tetangga, Istri, Anak, Harta Dan Teman Dekat",
  "lafal": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ جَارِ السُّوْءِ، وَمِنْ زَوْجٍ تُشَيِّبُنِيْ قَبْلَ المَشِيْبِ، وَمِنْ وَلَدٍ يَكُوْنُ عَلَيَّ رَبًّا، وَمِنْ مَالٍ يَكُوْنُ عَلَيَّ عَذَابًا، وَمِنْ خَلِيْلٍ مَاكِرٍ عَيْنُهُ تَرَانِيْ، وَقَلْبُهُ يَرْعَانِيْ، إِنْ رَأَى حَسَنَةً دَفَنَهَا، وَإِذَا رَأَى سَيِّئَةً أَذَاعَهَا",
  "transliterasi": "Allaahumma innii a'uudzu bika min jaaris-suu', wa min zaujin tusyayyibunii qoblal masyiib, wa min waladin yakuunu 'alayya robban, wa min maalin yakuunu 'alayya adzaaban, wa min kholiilin maakirin, 'ainuhu taroonii, wa qolbuhu yar'aanii, in ro'aa hasanatan dafanahaa, wa idzaa ro'aa sayyi'atan adzaa'ahaa.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari tetangga yang buruk, dan dari istri yang membuatku beruban sebelum waktunya, dan dari anak yang menguasaiku, dan dari harta yang menjadi azab atasku, dan dari teman dekat pembuat makar, matanya melihatku sedang hatinya mengawasiku, jika ia melihat kebaikan pada diriku maka ia menyembunyikannya, dan jika ia melihat keburukan maka ia menyebarkannya.",
  "riwayat": "HR. Ath-Thabrani dari Abu Hurairah radhiyallahu'anhu, Ash-Shahihah: 3137.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "keburu",
  "tetangga",
  "istri",
  "anak",
  "harta",
  "dan",
  "teman",
  "dekat"
  ]
  },
  {
  "id_doa": "182",
  "nama": "Doa Berlindung Dari Hari, Malam, Waktu, Teman dan Tetangga Yang Buruk",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ يَوْمِ السُّوءِ، وَمِنْ لَيْلَةِ السُّوءِ، وَمِنْ سَاعَةِ السُّوءِ، وَمِنْ صَاحِبِ السُّوءِ، وَمِنْ جَارِ السُّوءِ فِي دَارِ الْمُقَامَةِ",
  "transliterasi": "Allaahumma innii a'uudzu bika min yaumis-suu', wa min lailatis-suu', wa min saa'atis-suu', wa min shoohibis-suu', wa min jaaris-suu-i fii daaril muqoomah.",
  "arti": "Allaahumma innii a'uudzu bika min yaumis-suu', wa min lailatis-suu', wa min saa'atis-suu', wa min shoohibis-suu', wa min jaaris-suu-i fii daaril muqoomah.",
  "riwayat": "HR. Ath-Thabrani 14227. Silsilah al-Ahaadiits ash-Shahiihah no. 1443.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "hari",
  "malam",
  "waktu",
  "teman",
  "dan",
  "tetangga",
  "yang",
  "buruk"
  ]
  },
  {
  "id_doa": "183",
  "nama": "Doa Berlindung Dari Tetangga yang Buruk 1",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَارِ السُّوءِ فِي دَارِ الْمُقَامَةِ، فَإِنَّ جَارَ الْبَادِيَةِ يَتَحَوَّلُ",
  "transliterasi": "Allaahumma innii a'uudzu bika min jaaris-suu-i fii daaril-muqoomah, fa-inna jaarol baadiyati yatahawwal.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari tetangga yang buruk di tempat tinggal menetap, karena tetangga yang tidak menetap akan berpindah.",
  "riwayat": "HR. Al Hakim I/532. Lihat kitab Shahih Al Jami' I/408.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "tetangga",
  "yang",
  "buruk",
  "1"
  ]
  },
  {
  "id_doa": "184",
  "nama": "Doa Berlindung Dari Tetangga yang Buruk 2",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَارِ السُّوءِ فِي دَارِ الْمُقَامِ، فَإِنَّ جَارَ الدُّنْيَا يَتَحَوَّلُ",
  "transliterasi": "Allaahumma innii a'uudzu bika min jaaris-suu-i fii daaril-muqoom, fa-inna jaarod-dunyaa yatahawwal.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari tetangga yang buruk di akhirat, karena tetangga di dunia akan senantiasa berubah-ubah.",
  "riwayat": "HR. An Nasa'i dalam 50-Kitab Al Isti'adzah, 42-Bab Al Isti'adzah min Jaaris Suu'. Hasan, Lihat Ash Shahihah 1443.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "tetangga",
  "yang",
  "buruk",
  "2"
  ]
  },
  {
  "id_doa": "185",
  "nama": "Doa Berlindung Dari Lapar Dan Khianat",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُوعِ، فَإِنَّهُ بِئْسَ الضَّجِيعُ، وَأَعُوذُ بِكَ مِنَ الْخِيَانَةِ، فَإِنَّهَا بِئْسَتِ الْبِطَانَةُ",
  "transliterasi": "Allaahumma innii a-uudzu bika minal juu'i, fa-innahu bi'sadh-dhojii'u, wa a-uudzu bika minal khiyaanati, fa-innahaa bi'satil bithoonah.",
  "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari lapar, karena ia adalah seburuk-buruk teman yang menyertai. Dan aku berlindung kepada-Mu dari khianat, karena ia adalah teman karib yang paling buruk.",
  "riwayat": "HR. Abu Daud, An-Nasa’i, Ibnu Majah.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "lapar",
  "dan",
  "khianat"
  ]
  },
  {
  "id_doa": "186",
  "nama": "Doa Bila Khawatir Hal Buruk Menimpa",
  "lafal": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ، عَلَى اللَّهِ تَوَكَّلْنَا",
  "transliterasi": "Hasbunallaahu wa ni'mal wakiil, 'alallaahi tawakkalnaa.",
  "arti": "Cukuplah Allah menjadi Penolong kami, dan Allah adalah sebaik-baik Pelindung. Hanya kepada Allah kami bertawakal.",
  "riwayat": "HR. At-Turmudzi.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "bila",
  "khawatir",
  "hal",
  "buruk",
  "timpa"
  ]
  },
  {
  "id_doa": "187",
  "nama": "Doa Berlindung dari Kefakiran, Kekufuran, Kefasikan, Kedurhakaan, Kemunafikan, Sum'ah Dan Riya'",
  "lafal": "اَللَّهُمَّ إِنِّى أَعُوْذُ بِكَ مِنَ الْفَقْرِ، وَالْكُفْرِ، وَالْفُسُوْقِ، وَالشِّقَاقِ، وَالنِّفَاقِ، وَالسُّمْعَةِ، وَالرِّيَاءِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal faqri, wal kufri, wal fusuuqi, wasy-syiqooqi, wan-nifaaqi, was-sum'ati, war-riyaa-i.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kefakiran, kekufuran, kefasikan, kedurhakaan, kemunafikan, sum'ah dan riya'.",
  "riwayat": "HR. al-Hakim (1944) dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "fakir",
  "kufur",
  "fasik",
  "durhaka",
  "munafik",
  "sum",
  "ah",
  "dan",
  "riya"
  ]
  },
  {
  "id_doa": "188",
  "nama": "Doa Berlindung Dari Kekufuran, Kefakiran Dan Azab Kubur",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَـٰهَ إِلَّا أَنْتَ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal kufri wal faqri, allaahumma innii a'uudzu bika min 'adzaabil qobri, laa ilaaha illaa anta.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari kekufuran dan kefakiran. Ya Allah, aku berlindung kepada-Mu dari adzab kubur. Tidak ada sesembahan yang berhak disembah kecuali Engkau.",
  "riwayat": "HR. Abu Daud 5092, Nasai 5482 dan dihasankan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "kufur",
  "fakir",
  "dan",
  "azab",
  "kubur"
  ]
  },
  {
  "id_doa": "189",
  "nama": "Doa Berlindung Dari Penyakit Kulit/Belang, Gila, Kusta Dan Penyakit Berbahaya Lainnya",
  "lafal": "اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُوْنِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
  "transliterasi": "Allaahumma innii a'uudzu bika minal baroshi, wal junuuni, wal judzaami, wa min sayyi-il asqoom.",
  "arti": "Ya Allah, aku berlindung kepada-Mu dari penyakit kulit/belang, gila, kusta, dan dari segala penyakit yang buruk/mengerikan lainnya.",
  "riwayat": "HR. Abu Dawud 1554.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sakit",
  "kulit",
  "belang",
  "gila",
  "kusta",
  "dan",
  "sakit",
  "bahaya",
  "lain"
  ]
  },
  {
  "id_doa": "190",
  "nama": "Doa Sapu Jagad",
  "lafal": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الْآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّارِ",
  "transliterasi": "Robbanaa aatinaa fid-dunyaa hasanah, wa fil aakhiroti hasanah, wa qinaa 'adzaaban-naar.",
  "arti": "Ya Tuhan kami, berilah kami kebaikan di dunia, dan kebaikan di akhirat, dan peliharalah kami dari siksa neraka.",
  "riwayat": "(Al-Baqarah [2]: 201).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "sapu",
  "jagad"
  ]
  },
  {
  "id_doa": "191",
  "nama": "Doa Agar Setiap Urusan Berakhir Baik",
  "lafal": "اَللَّهمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ",
  "transliterasi": "Allaahumma ahsin 'aaqibatanaa fil umuuri kullihaa, wa ajirnaa min khizyid-dunyaa wa 'adzaabil aakhiroh.",
  "arti": "Ya Allah, jadikanlah baik akhir setiap urusan kami, dan lindungi kami dari bencana dunia dan azab akhirat.",
  "riwayat": "HR. Ahmad 4/181.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "tiap",
  "urus",
  "akhir",
  "baik"
  ]
  },
  {
  "id_doa": "192",
  "nama": "Bila Mendengar Kokok Ayam Atau Ringkikan Keledai",
  "lafal": "",
  "transliterasi": "",
  "arti": "",
  "riwayat": "HR. Al-Bukhari dengan Fathul Bari 6/350, Muslim 4/2092.",
  "keterangan": "Apabila kamu mendengar ayam jago berkokok, mintalah anugerah kepada Allah, sesungguhnya ia melihat malaikat. Tapi apabila engkau mendengar keledai meringkik, mintalah perlindungan kepada Allah dari gangguan setan, sesungguhnya ia melihat setan.",
  "kata_kunci": [
  "bila",
  "dengar",
  "kokok",
  "ayam",
  "atau",
  "ringkik",
  "keledai"
  ]
  },
  {
  "id_doa": "194",
  "nama": "Doa Memohon Kesabaran, Teguh Pendirian Dan Pertolongan Terhadap Orang Kafir",
  "lafal": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
  "transliterasi": "Robbanaa afrigh 'alainaa shobron, wa tsabbit aqdaamanaa, wan-shurnaa 'alal qoumil kaafiriin.",
  "arti": "Ya Rabb kami, limpahkanlah kesabaran atas diri kami, dan teguhkanlah pendirian kami, dan tolonglah kami terhadap orang-orang kafir.",
  "riwayat": "(Al Baqarah [2]: 250).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "sabar",
  "teguh",
  "diri",
  "dan",
  "tolong",
  "hadap",
  "orang",
  "kafir",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "195",
  "nama": "Doa Berlindung Dari Kesesatan Dan Memohon Rahmat",
  "lafal": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
  "transliterasi": "Robbanaa laa tuzigh quluubanaa ba'da idz hadaitanaa, wa hab lanaa mil-ladunka rohmah, innaka antal wahhaab.",
  "arti": "Ya Rabb kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi Engkau, karena sesungguhnya Engkau-lah Maha Pemberi (karunia).",
  "riwayat": "(Ali Imran [3]: 8).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "sesat",
  "dan",
  "mohon",
  "rahmat",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "196",
  "nama": "Doa Agar Mudah Melakukan Kebaikan, Meninggalkan Kemungkaran, Mencintai Orang Miskin Dan Berlindung Dari Fitnah",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ، وَإِذَا أَرَدْتَ بِعِبَادِكَ فِتْنَةً، فَاقْبِضْنِى إِلَيْكَ غَيْرَ مَفْتُونٍ",
  "transliterasi": "Allaahumma innii as-aluka fi'lal khoiroot, wa tarkal munkaroot, wa hubbal masaakiin. Wa idzaa arod-ta bi'ibaadika fitnatan, faq-bidh-nii ilaika ghoiro maftuun.",
  "arti": "Ya Allah, aku memohon kepada-Mu taufiq agar bisa mengamalkan semua kebaikan, meninggalkan semua kemungkaran dan bisa mencintai orang miskin. Jika Engkau menghendaki bagi hamba-hamba-Mu ujian (fitnah), maka wafatkanlah aku tanpa terkena fitnah itu.",
  "riwayat": "HR. Ahmad 22109, Turmudzi 3541, dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "mudah",
  "laku",
  "baik",
  "tinggal",
  "mungkar",
  "cinta",
  "orang",
  "miskin",
  "dan",
  "lindung",
  "dari",
  "fitnah"
  ]
  },
  {
  "id_doa": "197",
  "nama": "Doa Agar Mudah Melakukan Kebaikan, Meninggalkan Kemungkaran, Mencintai Orang Miskin, Memohon Ampun Dan Rahmat Dan Berlindung Dari Fitnah",
  "lafal": "اَللَّهُمَّ إِنِّى أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ، وَأَنْ تَغْفِرَ لِى وَتَرْحَمَنِى، وَإِذَا أَرَدْتَ فِتْنَةَ قَوْمٍ فَتَوَفَّنِى غَيْرَ مَفْتُونٍ",
  "transliterasi": "Allaahumma innii as-aluka fi'lal khoiroot, wa tarkal munkaroot, wa hubbal masaakiin. Wa an tagh-firolii wa tarhamanii. Wa idzaa arod-ta fitnata qoumin, fatawaffanii ghoiro maftuun.",
  "arti": "Ya Allah, aku memohon kepada-Mu agar mudah melakukan kebaikan, meninggalkan kemungkaran dan mencintai orang miskin. Ampunilah aku dan rahmatilah aku. Jika Engkau ingin menimpakan ujian (fitnah) pada suatu kaum, maka wafatkanlah aku dalam keadaan tidak tenggelam dalam ujian itu.",
  "riwayat": "HR. Tirmidzi no. 3235 dan Ahmad 5: 243, dan dishahihkan al-Albani.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "mudah",
  "laku",
  "baik",
  "tinggal",
  "mungkar",
  "cinta",
  "orang",
  "miskin",
  "mohon",
  "ampun",
  "dan",
  "rahmat",
  "dan",
  "lindung",
  "dari",
  "fitnah",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "198",
  "nama": "Doa Berlindung Dari Memohon Yang Tidak Diketahui, Serta Memohon Ampun Dan Rahmat (Doa Nabi Nuh)",
  "lafal": "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُنْ مِنَ الْخَاسِرِينَ",
  "transliterasi": "Robbi innii a'uudzu bika an as-alaka maa laisa lii bihi 'ilmun, wa illaa tagh-fir lii, wa tarhamnii, akun minal khoosiriin.",
  "arti": "Ya Tuhanku, sesungguhnya aku berlindung kepada Engkau dari memohon kepada Engkau sesuatu yang aku tiada mengetahui (hakekat)nya. Dan sekiranya Engkau tidak memberi ampun kepadaku, dan (tidak) menaruh belas kasihan kepadaku, niscaya aku akan termasuk orang-orang yang merugi.",
  "riwayat": "(Hud [11]: 47).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "lindung",
  "dari",
  "mohon",
  "yang",
  "tidak",
  "tahu",
  "serta",
  "mohon",
  "ampun",
  "dan",
  "rahmat",
  "doa",
  "nabi",
  "nuh",
  "meminta",
  "biar",
  "agar",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "199",
  "nama": "Doa Memohon Agar Tidak Dihukum Dan Dibebani Yang Berat, Serta Memohon Maaf, Ampun, Rahmat Dan Pertolongan Terhadap Orang Kafir",
  "lafal": "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
  "transliterasi": "Robbanaa laa tu-aakhidz-naa in nasiinaa au akh-tho'na, robbanaa wa laa tahmil 'alainaa ish-ron kamaa hamaltahu 'alalladziina min qoblinaa, robbanaa wa laa tuhammilnaa maa laa thooqota lanaa bih, wa'fu 'annaa, wagh-fir lanaa, warhamnaa, anta maulaanaa, fan-shurnaa 'alal qoumil kaafiriin.",
  "arti": "Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir.",
  "riwayat": "(Al Baqarah [2]: 286).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "agar",
  "tidak",
  "hukum",
  "dan",
  "beban",
  "yang",
  "berat",
  "serta",
  "mohon",
  "maaf",
  "ampun",
  "rahmat",
  "dan",
  "tolong",
  "hadap",
  "orang",
  "kafir",
  "meminta",
  "biar",
  "agar",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "200",
  "nama": "Doa Memohon Keamanan Negeri Dan Berlindung Dari Syirik (Doa Nabi Ibrahim)",
  "lafal": "رَبِّ اجْعَلْ هَـٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَنْ نَعْبُدَ الْأَصْنَامَ",
  "transliterasi": "Robbij'al haadzal balada aaminaa, wajnubnii wa baniyya an na'budal ash-naam.",
  "arti": "Ya Tuhanku, jadikanlah negeri ini (Mekah), negeri yang aman, dan jauhkanlah aku beserta anak cucuku daripada menyembah berhala-berhala.",
  "riwayat": "(Ibrahim [14]: 35).",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "mohon",
  "aman",
  "negeri",
  "dan",
  "lindung",
  "dari",
  "syirik",
  "doa",
  "nabi",
  "ibrahim",
  "meminta",
  "biar",
  "agar"
  ]
  },
  {
  "id_doa": "201",
  "nama": "Doa Agar Kaum Muslimin Disatukan Hatinya, Diberi Petunjuk Dan Keselamatan, Dijauhkan Dari Perbuatan Keji, Diberkahi Diri Dan Keluarga, Diterima Taubat Dan Dijadikan Hamba Yang Bersyukur",
  "lafal": "اَللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا، وَأَصْلِحْ ذَاتَ بَيْنِنَا، وَاهْدِنَا سُبُلَ السَّلاَمِ، وَنَجِّنَا مِنَ الظُّلُمَاتِ إِلَى النُّورِ، وَجَنِّبْنَا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، وَبَارِكْ لَنَا فِى أَسْمَاعِنَا، وَأَبْصَارِنَا، وَقُلُوبِنَا، وَأَزْوَاجِنَا، وَذُرِّيَّاتِنَا، وَتُبْ عَلَيْنَا، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ، وَاجْعَلْنَا شَاكِرِينَ لِنِعْمَتِكَ، مُثْنِينَ بِهَا قَابِلِيهَا، وَأَتِمَّهَا عَلَيْنَا",
  "transliterasi": "Allaahumma allif baina quluubinaa, wa ashlih dzaata baininaa, wahdinaa subulas-salaam, wa najjinaa minazh-zhulumaati ilan-nuur, wa jannibnal fawaahisya maa zhoharo minhaa wa maa bathon, wa baarik lanaa fii asmaa'inaa, wa ab-shoorinaa, wa quluubinaa, wa azwaajinaa, wa dzurriyyaatinaa, wa tub 'alainaa, innaka antat-tawwaabur-rohiim, waj'alnaa syaakiriina lini'matik, muts-niina bihaa qoobiliihaa, wa atimmahaa 'alainaa.",
  "arti": "Ya Allah, satukanlah hati kami. Perbaikilah keadaan kami. Tunjukilah kami jalan-jalan keselamatan (menuju surga). Selamatkanlah kami dari kegelapan menuju cahaya. Jauhkanlah kami dari perbuatan keji yang nampak maupun tersembunyi. Berkahilah pendengaran, penglihatan, hati, istri-istri dan keturunan kami. Terimalah taubat kami, sesungguhnya Engkau Maha Pengampun lagi Maha Penyayang. Jadikanlah kami hamba yang bersyukur atas nikmat-Mu, terus memuji-Mu dan menerima nikmat tersebut, dan sempurnakanlah nikmat tersebut pada kami.",
  "riwayat": "HR. Abu Daud no. 969, dari ‘Abdullah bin Mas’ud radhiyallahu ‘anhu. Hadits ini juga dikeluarkan oleh Al-Baihaqi dalam Al-Qadha’ wa Al-Qadr dari hadits Abu Daud, asalnya dikeluarkan oleh Tirmidzi. Kesimpulannya, Al-Hafizh Abu Thahir mengatakan bahwa hadits ini shahih.",
  "keterangan": null,
  "kata_kunci": [
  "doa",
  "agar",
  "kaum",
  "muslimin",
  "satu",
  "hati",
  "beri",
  "tunjuk",
  "dan",
  "selamat",
  "jauh",
  "dari",
  "buat",
  "keji",
  "kah",
  "diri",
  "dan",
  "keluarga",
  "terima",
  "taubat",
  "dan",
  "jadi",
  "hamba",
  "yang",
  "syukur"
  ]
  },
  {
  "id_doa": "202",
  "nama": "Bacaan Bila Kagum Terhadap Sesuatu 1",
  "lafal": "سُبْحَانَ اللَّهِ",
  "transliterasi": "Subhaanallaah.",
  "arti": "Maha Suci Allah.",
  "riwayat": "HR. Al-Bukhari dengan Fathul Bari 1/210, 390 dan 414, Muslim 4/1857.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "kagum",
  "hadap",
  "sesuatu",
  "1"
  ]
  },
  {
  "id_doa": "203",
  "nama": "Bacaan Bila Kagum Terhadap Sesuatu 2",
  "lafal": "اَللَّهُ أَكْبَرُ",
  "transliterasi": "Allaahu akbar.",
  "arti": "Allah Maha Besar.",
  "riwayat": "HR. Al-Bukhari dengan Fathul Bari 8/441, lihat pula Shahih At-Tirmidzi 2/103, 2/235, dan Musnad Ahmad 5/218.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "kagum",
  "hadap",
  "sesuatu",
  "2"
  ]
  },
  {
  "id_doa": "204",
  "nama": "Bacaan Bila Kagum Terhadap Sesuatu 3",
  "lafal": "مَا شَاءَ اللَّهُ",
  "transliterasi": "Maa syaa-allaah.",
  "arti": "Atas kehendak Allah semua ini terwujud.",
  "riwayat": "(Al-Kahfi [18]: 39).",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "kagum",
  "hadap",
  "sesuatu",
  "3"
  ]
  },
  {
  "id_doa": "205",
  "nama": "Bacaan Bila Perkara Dunia Membuat Takjub",
  "lafal": "لَبَّيْكَ، إِنَّ الْعَيْشَ عَيْشُ الْآخِرَةِ",
  "transliterasi": "Labbaik, innal 'aisya 'aisyul aakhiroh.",
  "arti": "Aku penuhi panggilanmu ya Allah, sungguh kehidupan yang hakiki adalah kehidupan akhirat.",
  "riwayat": "HR. Bukhari 2834, Muslim 1805.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "bila",
  "perkara",
  "dunia",
  "buat",
  "takjub"
  ]
  },
  {
  "id_doa": "206",
  "nama": "Bacaan Agar Tidak Terpedaya Kenikmatan Dan Kemewahan Dunia",
  "lafal": "اَللَّهُمَّ لَا عَيْشَ إِلَّا عَيْشُ الْآخِرَةِ",
  "transliterasi": "Allaahumma laa 'aisya illaa 'aisyul aakhiroh.",
  "arti": "Ya Allah, tidak ada kehidupan yang hakiki kecuali kehidupan akhirat.",
  "riwayat": "HR. Al-Bukhari dan Muslim.",
  "keterangan": null,
  "kata_kunci": [
  "baca",
  "agar",
  "tidak",
  "daya",
  "nikmat",
  "dan",
  "mewah",
  "dunia"
  ]
},]

