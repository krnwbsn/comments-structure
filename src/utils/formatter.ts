import dayjs from 'dayjs';

export const dayFormatter = (date: Date | string, format?: string): string =>
  dayjs(date).format(format || 'DD MMM YYYY, HH:mm:ss');
