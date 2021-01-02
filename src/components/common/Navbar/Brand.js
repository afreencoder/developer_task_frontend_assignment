import React from 'react';
import styled from 'styled-components';
import logo from '../../../../src/assets/img/logo.svg';

const Brand = () => {
  return (
    <BrandContainer>
      <Image src={logo} alt="Company Logo" /> <span className="logo">Intugine</span>
    </BrandContainer>
  );
};

export default Brand;

const BrandContainer = styled.div`
  .logo {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    letter-spacing: 1px;
    margin-left: 10px;
    line-height: 48px;
  }
`;
const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
