
# Rabi's Cafe - MERN Stack Website

Welcome to Rabi's Cafe, a dynamic web platform specializing in selling bakery and sweet items. This project utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack to provide a feature-rich and scalable solution for your cafe.




## Demo

https://rabis-cafe.cyclic.cloud


## Features

- Authentication: Implement JWT-based authentication for secure user registration and login.
- Brands Management: Easily manage cafe brands with Create, Read, Update, and Delete (CRUD) operations.
- Category Management: Organize products into categories with CRUD functionality.
- Product Management: Efficiently manage bakery and sweet items with CRUD operations.
- Image Upload: Store product images securely using Firebase Storage.
- Responsive UI: Ensure a seamless user experience on various devices with a responsive design.
- Scalable: Built with scalability in mind, allowing for easy expansion and customization.
- Robust Backend: Utilize Node.js and Express.js to create a robust backend for handling API requests.

## Technologies
### Frontend:
- React.js: A JavaScript library for building user interfaces.
- Context API: Manage application state efficiently.
- Axios: Make HTTP requests to the backend.
- Firebase: Handle image storage.
### Backend:
- Node.js: A runtime environment for running JavaScript on the server.
- Express.js: A minimalist web application framework for Node.js.
- MongoDB: A NoSQL database for storing data.
- JWT: JSON Web Tokens for user authentication.

## Authentication
This project uses JWT-based authentication for user registration and login. Users can create accounts, log in, and access protected routes.

## Database
The application utilizes MongoDB as the database for storing information related to brands, categories, products, and user data.

## Image Upload
Product images are securely stored using Firebase Storage. This ensures efficient and secure handling of images associated with your bakery and sweet items.
## API Reference

### Items
#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


### Items
#### Get all users

```http
  GET /api/getallusers
```

#### Get User By Email

```http
  GET /api/userbyemail/:email
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. user email |

#### add(num1, num2)

Takes two numbers and returns the sum.

### Items
#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
