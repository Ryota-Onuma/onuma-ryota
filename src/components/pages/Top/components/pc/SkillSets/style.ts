import { theme } from '@/styles/theme';

export const SkillSetsStyle = {
  skillSets: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    gap: 3,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: theme.palette.fontColor.main,
  },
  skillSetsInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
};
