import React from 'react';
import {Wrapper, Text, DateTime} from './styles';
import utilDate from '../../utils/date';
import {TMessage} from '../../typing/message';

const Message = ({
  navigation,
  timestamp,
  subject,
  marked,
  detail,
  id,
}: TMessage) => {
  const onClick = () => {
    console.log('navigation', navigation);
    navigation.navigate('Detalhe', {
      timestamp,
      subject,
      marked,
      detail,
      id,
    });
  };

  return (
    <Wrapper onPress={onClick} marked={marked}>
      <DateTime>{utilDate.formatDate(timestamp)}</DateTime>
      <Text>{subject}</Text>
      <Text>{detail}</Text>
    </Wrapper>
  );
};

export default Message;
