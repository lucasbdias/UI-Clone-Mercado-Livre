import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction'

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dolorem architecto voluptatibus blanditiis eaque unde necessitatibus molestias sit et perferendis, vitae, cumque assumenda quos non sequi, perspiciatis voluptatem quisquam modi.
    </p>
    <br/>
    <br/>
    Itens inclusos: <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id fugiat quae quos, eligendi dolore perferendis molestias minima, praesentium ea facilis atque. Ratione, eligendi laborum! Quia fuga eum cumque illo.
  </Description>
);

export default Product;
