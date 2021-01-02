import axios from 'axios';
import {parseAppData} from '../utils/apiParser';

export const getAppData = () =>
  axios({
    url: "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
    headers: {
      'content-type': 'application/json',
       authorization: 'Bearer tTU3gFVUdP',
    },
    data: {email: 'afreen.sultan28@gmail.com'},
    method: 'post',
  }).then(parseAppData);
