import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { AboutMeStyle as Style } from './style';

export const AboutMe = () => {
  return (
    <Box sx={Style.aboutMe}>
      <Typography variant="h1" component="h1" sx={Style.title}>
        About Me
      </Typography>
      <Box sx={Style.aboutMeInner}>
        <Box sx={Style.aboutMeTop}>
          <Image
            src="/images/buntyo.png"
            width="300"
            height="300"
            alt="Profile Image"
          />
        </Box>
        <Box sx={Style.aboutMeBottom}>
          <Typography
            component="p"
            sx={{
              ...Style.aboutMeBottom.paragraph,
            }}
          >
            Ryota Onumaと申します。
            横浜の大学卒業後、都内のリユース系企業でソフトウェアエンジニアとして働いています。
            業務ではGoやRubyを中心にバックエンド領域に携わっています。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
