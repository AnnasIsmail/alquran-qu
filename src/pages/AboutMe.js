import { Grid } from '@mui/material';
//
import Page from '../components/Page';
import ComponentAbout from '../layouts/dashboard/ComponentAbout';

export default function AboutMe(){
    return(
        <Page title="About Me">
            <Grid item xs={12} sm={6} md={6}>
                <ComponentAbout title="Saya Annas Ismail Muhamamd saat ini saya sedang berkuliah di Universitas Bina Nusantara Jurusan Sistem Informasi. Sebelumnya terima kasih telah mengunjungi website saya semoga senang dengan karya saya. Dan bermanfaat untuk anda. Jika ada yang perlu di sampaikan bisa melalui contact dibawah ini." total="Annas Ismail Muhammad" icon='https://cdn.discordapp.com/attachments/830080342026092566/1023483858831814706/download_1.jpg' />
            </Grid>
        </Page>
    );
}