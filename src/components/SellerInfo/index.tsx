import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputatationRow,
  SupportIcon,
  ClockIcon,
  More
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputatationRow>
          <div>
            <strong>561</strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atenndimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>
        </ReputatationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
}

export default SellerInfo;
