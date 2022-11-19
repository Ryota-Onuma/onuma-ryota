import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Azia/Tokyo');

export const convertToJST = (time: string): string =>
  dayjs(time).format('YYYY/MM/DD');
