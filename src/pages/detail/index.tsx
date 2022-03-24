import React, {useEffect} from 'react';
import utilDate from '../../utils/date';
import {TMessage} from '../../typing/message';
import {Wrapper, DateTime, Subject, Message} from './styles';

const Detail = ({route}: TMessage) => {
  const {id, marked, subject, detail, timestamp} = route.params;

  const init = () => {
    console.log('id', id);
    fetch(`http://localhost:3001/messages/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper marked={marked}>
      <DateTime>{utilDate.formatDate(timestamp)}</DateTime>
      <Subject>{subject}</Subject>
      <Message>{detail}</Message>
    </Wrapper>
  );
};

export default Detail;
