import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';

const CardProductos = () => (
 
<div className='divCard'>
 <Card>
    <Image className='imgCard' src='https://scontent.faep11-2.fna.fbcdn.net/v/t1.6435-9/121013250_3501906703165636_2284198590523648100_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFFd6WrWLbFqejYQdOsN3WGkejIFhlrtMaR6MgWGWu0xpv2CZoRNuJFnZMucKYCJ5M&_nc_ohc=PZVWe4_7EOIAX-4xXgE&_nc_ht=scontent.faep11-2.fna&oh=00_AT_W8OCauIIzxyacdZIgWq-BkQaBubkvB9aXLxsEJrZBJg&oe=621EEAC8' as='a'/>
    <Card.Content>
      <Card.Header>DETALLE</Card.Header>
      <Card.Description>
        <ItemCount/>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        CANTIDAD
      </a>
    </Card.Content>
  </Card>
  </div>
)

export default CardProductos;