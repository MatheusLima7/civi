import {TDateTime} from '../typing/date';

const formatDate = (date: number) => {
  let p: Partial<TDateTime> = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .formatToParts(date)
    .reduce((acc: any, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});

  return `${p.day}/${p.month}/${p.year} ${p.hour}:${p.minute}`;
};

export default {
  formatDate,
};
