type FormatDateToLocalParams = {
  dateStr: string;
  locale?: string;
};

export const formatDateToLocal = ({
  dateStr,
  locale = 'en-US',
}: FormatDateToLocalParams) => {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
};
