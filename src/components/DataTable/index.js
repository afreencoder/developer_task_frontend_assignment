import React, {useState} from 'react';
import moment from 'moment';
import destination from '../../assets/img/destination.svg';
import warehouse from '../../assets/img/warehouse.svg';
import * as Styled from './styled';

const DataTable = ({data = []}) => {
  const [currentRowIndex, setCurrentRow] = useState(0);
  const row = data[currentRowIndex] || {};
  const {scan = []} = row;
  return (
    <Styled.ContentContainer>
      <Styled.TimeLineContainer>
        <img src={destination} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy" />
        <Styled.Line>
          <div style={{borderLeft: '3px dashed #2f61d5', position: 'absolute', left: '15px', top: 0, bottom: 0}} />
          <div style={{zIndex: '100', position: 'relative'}}>
            {scan.map((item, index) => (
              <div key={index} style={{display: 'flex', flex: 1, alignItems: 'center'}}>
                <div
                  style={{
                    height: '10px',
                    width: '10px',
                    background: '#3fb6dc',
                    marginLeft: '12px',
                    borderRadius: '5px',
                    border: '1px solid #dbf1f8',
                  }}
                />
                <div key={index} style={{padding: '10px', flex: 1, border: '2px solid #efefef', margin: '0px 0px 8px 8px'}}>
                  <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>{item.location}</div>
                    <div style={{display: 'flex'}}>
                      {moment.utc(item.time).local().format('DD-MM-YYYY')}
                      <div style={{marginLeft: '10px'}}>{moment.utc(item.time).local().format('HH:mm')}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Styled.Line>
        <img src={warehouse} width="35" height="35" className="rounded-circle home-background" alt="" loading="lazy" />
     </Styled.TimeLineContainer>
      <Styled.DataTableContainer>
      <table className="table" style={{flex: 8}}>
        <thead>
          <tr>
          <th>
            AWB NUMBER <i className="arrow-small down"></i>
          </th>
          <th>TRANSPORTER</th>
          <th>SOURCE</th>
          <th>DESTINATION</th>
          <th>BRAND</th>
          <th>START DATE</th>
          <th>ETH</th>
          <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{background: currentRowIndex === index ? '#cceffa' : 'white'}}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentRow(index);
              }}
            >
              <td>#{item.awbno}</td>
              <td>{item.carrier}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.carrier}</td>
              <td>{moment.utc(item.pickup_date).local().format('DD/MM/YYYY')}</td>
              <td>
                {item.extra_fields
                  ? moment.utc(item.extra_fields.expected_delivery_date).local().format('DD/MM/YYYY')
                  : ''}
              </td>
              <td className={item.current_status === 'Delivered' ? 'status-delivered' : ''}>{item.current_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Styled.DataTableContainer>
      </Styled.ContentContainer>
  );
};

export default DataTable;
