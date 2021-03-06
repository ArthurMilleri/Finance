import React, { } from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { Title } from '../../components/HighlightCard/styles';
//import { Text } from "react-native";


import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  
  

} from './styles';

export function Dashboard() {
  return (
    <Container >
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo
           source={{ uri:'https://avatars.githubusercontent.com/u/108368597?v=4'}}
           />
            <User>
              <UserGreeting>Olá</UserGreeting>            
              <UserName>Arthur</UserName>
            </User>
        </UserInfo>

        <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>
       <HighlightCard
        type="up"
        title='Entradas' 
        amount='R$ 17.400,00' 
        lastTransaction='Ultima entrada dia 13 de abril'
        />
       <HighlightCard
        type="down"
        title='Saídas' 
        amount='R$ 1.259,00' 
        lastTransaction='Ultima saida dia 03 de abril'
        />
       <HighlightCard
        type="total"
        title='Total' 
        amount='R$ 16.141,00' 
        lastTransaction='01 á 16 de abril'
        />

      </HighlightCards>

    </Container >
  )
}


