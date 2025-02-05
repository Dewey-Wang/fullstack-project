# [GiftLink App](https://dy6kdtagsb.us-east-1.awsapprunner.com)
🔗 <a href="https://dy6kdtagsb.us-east-1.awsapprunner.com" target="_blank">**Go to Website**</a>

## Introduction
GiftLink is a platform that allows users to share and receive gifts easily. The app consists of a **React.js frontend** and a **Node.js backend** deployed on AWS using different deployment methods. Users can browse available gifts, filter search results, and manage their gift listings with a seamless UI.

---

## Table of Contents
- [Technology Overview](#technology-overview)
  - [Backend (giftlink-backend)](#backend-giftlink-backend)
  - [Frontend (giftlink-frontend, giftwebsite)](#frontend-giftlink-frontend-giftwebsite)
- [Deployment to AWS](#deployment-to-aws)
  - [Method 1: Deploying with AWS EKS and MongoDB](#method-1-deploying-with-aws-eks-and-mongodb)
  - [Method 2: Deploying with AWS App Runner and DynamoDB](#method-2-deploying-with-aws-app-runner-and-dynamodb)
- [Auto-Updating README with Deployment URL](#auto-updating-readme-with-deployment-url)
- [Contact](#contact)


---

## Technology Overview

### 🔹 Backend (giftlink-backend)
The backend is built using **Node.js** and **Express.js** to create APIs, with **AWS DynamoDB** or **MongoDB** as the database, depending on the deployment method.

#### Architecture
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** DynamoDB (App Runner) / MongoDB (EKS)
- **Hosting:** AWS App Runner or AWS EKS
- **Logging:** Pino Logger
- **Containerization:** Docker

#### Key Technologies
- **Node.js**: Runtime environment for the backend.
- **Express.js**: Handles API routing and requests.
- **AWS DynamoDB**: NoSQL database for storing users and gift data.
- **AWS SDK v3**: Client for interacting with DynamoDB.
- **MongoDB**: NoSQL database (used with EKS deployment).
- **bcrypt.js**: For password hashing and verification.
- **jsonwebtoken (JWT)**: Used for authentication and authorization.
- **dotenv**: Manages environment variables.
- **Docker**: Containerizes the backend for deployment on AWS.

#### Key Files and Functionalities:
- **models/db.js**: Connects to AWS DynamoDB or MongoDB.
- **routes/**
  - **authRoutes.js**: Handles user authentication.
  - **giftRoutes.js**: Manages CRUD operations for gifts.
  - **searchRoutes.js**: Implements search functionality.
- **app.js**: Main Express server file.
- **Dockerfile**: Configuration for backend Docker container.

---

### 🔹 Frontend (giftlink-frontend, giftwebsite)
The frontend is developed using **React.js** for UI components and **Bootstrap** for styling. **React Router** is used for managing page navigation.

#### Architecture
- **Framework:** React.js
- **Styling:** Bootstrap
- **Routing:** React Router
- **State Management:** Context API
- **Deployment:** AWS App Runner / AWS EKS

#### Key Technologies
- **React.js**: Builds UI components and manages state.
- **React Router**: Handles navigation.
- **Bootstrap**: Provides UI styling and design.
- **Fetch API**: Sends API requests to the backend.
- **Docker**: Containerizes the frontend for deployment.

#### Key Files and Functionalities:
- **giftlink-frontend** (Main React App)
  - **components/**
    - **Navbar.js**: Navigation bar.
    - **MainPage.js**: Displays gifts.
    - **SearchPage.js**: Allows users to search for gifts.
    - **DetailsPage.js**: Displays gift details.
- **giftwebsite** (Static website proxying API requests)
  - **server.js**: Express server to proxy API requests.
  - **Dockerfile**: Configuration for frontend Docker container.

---

## Deployment to AWS

This project is deployed to AWS using **GitHub Actions**, implementing two different deployment strategies:

1. **Method 1: Deploying with AWS EKS and MongoDB**
   
🔗Link for Method 1: *(Auto-updated by GitHub Actions)*

2. **Method 2: Deploying with AWS App Runner and DynamoDB**
   
🔗Link for Method 2: *(Auto-updated by GitHub Actions)*

Each method has its own advantages and disadvantages. Below, we explain both deployment strategies.

---

### Method 1: Deploying with AWS EKS and MongoDB

This method uses **Amazon Elastic Kubernetes Service (EKS)** to manage containerized applications and **MongoDB** as the database. It deploys both the backend and frontend using AWS ECR (Elastic Container Registry) and Kubernetes.

#### Deployment Steps:
1. **Build and push the backend Docker image to AWS ECR**
2. **Deploy MongoDB to AWS EKS**
3. **Deploy the backend API service to AWS EKS**
4. **Build and push the frontend Docker image to AWS ECR**
5. **Deploy the frontend to AWS EKS and expose it using a LoadBalancer**

#### Pros and Cons:

| Pros | Cons |
|------|------|
| Scalable and flexible for high traffic | More complex to set up and maintain |
| Can integrate with AWS services like ALB and IAM | Requires Kubernetes expertise |
| More control over configurations | Higher operational costs |

---

### Method 2: Deploying with AWS App Runner and DynamoDB

This method uses **AWS App Runner** for fully managed deployment and **AWS DynamoDB** as the backend database. It eliminates the need for managing Kubernetes infrastructure, making deployment easier and faster.

#### Deployment Steps:
1. **Migrate from MongoDB to AWS DynamoDB**
2. **Deploy the backend as a containerized application to AWS App Runner**
3. **Deploy the frontend to AWS App Runner**
4. **Use AWS ECR to store and manage Docker images**
5. **Connect the backend to DynamoDB using AWS SDK**

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
*(Configured to update deployment links dynamically)*

---

### Contact

If you have any questions, feel free to contact me at:

📧 deweywang2000@gmail.com

