import { Box, Typography } from '@mui/material';

import { SkillSetsStyle as Style } from './style';

export const SkillSets = () => {
  return (
    <Box sx={Style.skillSets}>
      <Typography variant="h1" component="h1" sx={Style.title}>
        SkillSets
      </Typography>
      <Box sx={Style.skillSetsInner}></Box>
    </Box>
  );
};
