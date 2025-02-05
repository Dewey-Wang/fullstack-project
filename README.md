# [GiftLink App](https://dy6kdtagsb.us-east-1.awsapprunner.com)
🔗 <a href="https://dy6kdtagsb.us-east-1.awsapprunner.com" target="_blank">**Go to Website**</a>

## Technology Overview

### 🔹 Backend (giftlink-backend)
The backend is built using **Node.js** and **Express.js** to create APIs, with **AWS DynamoDB** as the database. The main technologies and tools used include:

- **Node.js**: Runtime environment for the backend.
- **Express.js**: Handles API routing and requests.
- **AWS DynamoDB**: NoSQL database for storing users and gift data.
- **AWS SDK v3**: Client for interacting with DynamoDB.
- **bcrypt.js**: For password hashing and verification.
- **jsonwebtoken (JWT)**: Used for authentication and authorization.
- **Pino Logger**: Logs API requests and errors.
- **dotenv**: Manages environment variables.
- **Docker**: Containerizes the backend for deployment on AWS.

#### Key Files and Functionalities:
- **models/db.js**: Connects to AWS DynamoDB.
- **routes/**
  - **authRoutes.js**: Handles user registration, login, and JWT authentication.
  - **giftRoutes.js**: Manages CRUD operations for gifts.
  - **searchRoutes.js**: Handles searching for gifts based on filters.
- **util/import-mongo/**: Imports JSON data into DynamoDB.
- **app.js**: Main Express server file, setting up API routes and error handling.
- **Dockerfile**: Configuration for backend Docker container.

---

### 🔹 Frontend (giftlink-frontend, giftwebsite)
The frontend is developed using **React.js** for UI components and **Bootstrap** for styling. **React Router** is used for managing page navigation.

- **React.js**: Builds UI components and manages state.
- **React Router**: Handles multi-page navigation within the app.
- **Bootstrap**: Provides UI styling and design.
- **Fetch API**: Sends API requests to the backend.
- **Context API**: Manages user authentication state.
- **Docker**: Containerizes the frontend for deployment.

#### Key Files and Functionalities:
- **giftlink-frontend** (Main React App)
  - **components/**
    - **Navbar.js**: Navigation bar with login/logout functionality.
    - **MainPage.js**: Displays all gifts.
    - **SearchPage.js**: Allows users to search for gifts.
    - **DetailsPage.js**: Displays gift details.
- **giftwebsite** (Static website proxying API requests)
  - **server.js**: Express server to proxy API requests.
  - **Dockerfile**: Configuration for frontend Docker container.

---

## Deployment to AWS


This project is deployed to AWS using **GitHub Actions**, implementing two different deployment strategies:  

1. **Method 1: Deploying with AWS EKS and MongoDB**
   
🔗Link for Method 1:

2. **Method 2: Deploying with AWS App Runner and DynamoDB**
   
🔗Link for Method 2:



Each method has its own advantages and disadvantages. Below, we explain both deployment strategies.

---

### Method 1: Deploying with AWS EKS and MongoDB

This method uses **Amazon Elastic Kubernetes Service (EKS)** to manage containerized applications and **MongoDB** as the database. It deploys both the backend and frontend using AWS ECR (Elastic Container Registry) and Kubernetes.

#### Steps:
1. **Build and push the backend Docker image to AWS ECR**
2. **Deploy MongoDB to AWS EKS**
3. **Deploy the backend API service to AWS EKS**
4. **Build and push the frontend Docker image to AWS ECR**
5. **Deploy the frontend to AWS EKS and expose it using a LoadBalancer**

#### Technologies Used:
- **AWS EKS** for Kubernetes cluster management
- **MongoDB** for backend database
- **AWS ECR** for container image storage
- **AWS Load Balancer** to expose frontend services
- **Kubernetes (kubectl, eksctl)** for cluster and application management
- **GitHub Actions** for CI/CD automation

#### Pros and Cons:

| Pros | Cons |
|------|------|
| Scalable and flexible for high traffic | More complex to set up and maintain |
| Can integrate with AWS services like ALB and IAM | Requires Kubernetes expertise |
| More control over configurations | Higher operational costs |

---

### Method 2: Deploying with AWS App Runner and DynamoDB

This method uses **AWS App Runner** for fully managed deployment and **AWS DynamoDB** as the backend database. It eliminates the need for managing Kubernetes infrastructure, making deployment easier and faster.

#### Steps:
1. **Migrate from MongoDB to AWS DynamoDB**
2. **Deploy the backend as a containerized application to AWS App Runner**
3. **Deploy the frontend to AWS App Runner**
4. **Use AWS ECR to store and manage Docker images**
5. **Connect the backend to DynamoDB using AWS SDK**

#### Technologies Used:
- **AWS App Runner** for fully managed backend and frontend hosting
- **AWS DynamoDB** for serverless NoSQL database
- **AWS ECR** for storing and managing Docker images
- **GitHub Actions** for automated CI/CD pipelines
- **AWS IAM** for authentication and access control
- **AWS SDK (DynamoDB Client)** for database operations

#### Pros and Cons:

| Pros | Cons |
|------|------|
| Fully managed deployment (no need for Kubernetes) | Less control over infrastructure and configurations |
| Built-in auto-scaling for both frontend and backend | Higher latency compared to direct EC2/EKS deployments |
| Serverless and cost-efficient (pay-per-use) | Limited customization compared to EKS |
| Simplifies database management with DynamoDB | Requires AWS App Runner knowledge |

---

### Auto-Updating README with Deployment URL

At the end of the GitHub Actions workflow, the script fetches the **AWS App Runner service URL** and updates `README.md` automatically.

#### GitHub Action to Update README:

---

### Contact

If you have any questions, feel free to contact me at:

📧 deweywang2000@gmail.com
