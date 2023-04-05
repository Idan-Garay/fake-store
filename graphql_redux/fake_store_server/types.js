export const schemaString = `
    type Product {
        id: Int!
        title: String!
        price: Float!
        category: String!
        description: String!
        image: String!
    }

    type Category {
        name: String!
    }

    type CartProduct {
        product: Product!
        qty: Int!
    }

    type Cart {
        items: [CartProduct]!
        totalQty: Int!
        amount: Int!
    }


    type Query {
        product(id: String!): Product
        products: [Product]!
    }

`