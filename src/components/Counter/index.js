import React from 'react';
import * as Styled from './styled';

const StatusCounter = ({handleItemClick, currentStatus, ...restProps}) => {
  const statusList = Object.keys(restProps);

  return (
    <Styled.CounterContainer>
      {statusList.map((status) => {
        return (
          <div
            key={status}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(status);
            }}
            className={status === currentStatus && 'active'}
          >
            {' '}
            <p className="counter">{status}</p>
            <p className="count">{restProps[status].length}</p>
          </div>
        );
      })}
    </Styled.CounterContainer>
  );
};

export default StatusCounter;
