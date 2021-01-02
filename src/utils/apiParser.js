export const parseAppData = ({data}) => {
  const parsedData = {};
  data.forEach((current) => {
    const codeType = (parsedData[current.current_status_code] = parsedData[current.current_status_code] || []);
    codeType.push(current);
  });
  return parsedData;
};
