import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Card, Grid, Icon, Image } from 'semantic-ui-react'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    // const {id, title} = products; 
    return (
        <>
            {
                products.map((product) => {
                    const { id, title, image, price, category } = product;
                    return (
                        <Grid columns="equal" key={id}>
                            <Link to={`/product/${id}`}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Card link >
                                            {/* <div className="image"> */}
                                            <Image src={image} alt={title} />
                                            {/* </div> */}
                                            <Card.Content>
                                                <Card.Header> {title}</Card.Header>
                                                <Card.Meta>${price}</Card.Meta>
                                                {/* <div className="meta price"></div> */}
                                                <Card.Meta> {category}</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid.Row>
                            </Link>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default ProductComponent
