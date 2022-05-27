import React, { useMemo } from 'react';

import { Container, Line, Text } from './styles';
import subjectTimeCodes from '../../Utils/subjectTimeCodes';

/*
const subjectDataExample = {
  name: 'Cálculo 1',
  code: 'ELP21',
  class: 'S11'
  locationCode: 'CQ201',
  timeStartCode: 't1',
  timeEndCode: 't4',
}
*/

const Subject = ({ data, ...rest }) => {
  const timeInterval = useMemo(() => {
    let start =
      subjectTimeCodes[data.timeStartCode].start + ' ' + data.timeStartCode;
    let end = subjectTimeCodes[data.timeEndCode].start + ' ' + data.timeEndCode;

    return `${start} - ${end}`;
  }, [data.timeStartCode, data.timeEndCode]);

  return (
    <Container {...rest}>
      <Line>
        <Text>
          Aula de {data.name} {`(${data.code}-${data.class})`}
        </Text>
        <Text>{data.locationCode}</Text>
      </Line>
      <Line style={{ marginTop: 2 }}>
        <Text>{timeInterval}</Text>
      </Line>
    </Container>
  );
};

export default Subject;
