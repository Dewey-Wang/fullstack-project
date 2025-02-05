# [GiftLink App](https://dy6kdtagsb.us-east-1.awsapprunner.com)

## Introduction
GiftLink is a platform that allows users to share and receive gifts easily. The app consists of a **React.js frontend** and a **Node.js backend** deployed on AWS using different deployment methods. Users can browse available gifts, filter search results, and manage their gift listings with a seamless UI.

---

## Table of Contents
- [🏗️ Technology Overview](#technology-overview)
  - [Backend - giftlink-backend](#backend---giftlink-backend)
  - [Frontend - giftlink-frontend and giftwebsite](#frontend---giftlink-frontend-and-giftwebsite)
- [🚀 Deployment to AWS](#deployment-to-aws)
  - [Method 1: Deploying with AWS EKS and MongoDB](#method-1-deploying-with-aws-eks-and-mongodb)
  - [Method 2: Deploying with AWS App Runner and DynamoDB](#method-2-deploying-with-aws-app-runner-and-dynamodb)
- [🔄 Files Auto-Generated or Updated by GitHub Actions](#files-auto-generated-or-updated-by-github-actions)
- [📝 Auto-Updating README with Deployment URL](#auto-updating-readme-with-deployment-url)
- [💡 Contributing](#contributing)
- [📩 Contact](#contact)

---

## 🏗️ Technology Overview <a id="technology-overview"></a>

### Backend - giftlink-backend <a id="backend---giftlink-backend"></a>

The backend is built using **Node.js** and **Express.js** to create APIs, with **AWS DynamoDB** or **MongoDB** as the database, depending on the deployment method.

#### Architecture
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** MongoDB (EKS) / DynamoDB (App Runner)
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
- **models/db.js**: Connects to MongoDB or AWS DynamoDB.
- **routes/**
  - **authRoutes.js**: Handles user authentication.
  - **giftRoutes.js**: Manages CRUD operations for gifts.
  - **searchRoutes.js**: Implements search functionality.
- **app.js**: Main Express server file.
- **Dockerfile**: Configuration for backend Docker container.

---

### Frontend - giftlink-frontend and giftwebsite <a id="frontend---giftlink-frontend-and-giftwebsite"></a>

The frontend is developed using **React.js** for UI components and **Bootstrap** for styling. **React Router** is used for managing page navigation.

#### Architecture
- **Framework:** React.js
- **Styling:** Bootstrap
- **Routing:** React Router
- **State Management:** Context API
- **Deployment:** AWS EKS / AWS App Runner

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

## 🚀 Deployment to AWS <a id="deployment-to-aws"></a>

This project is deployed to AWS using **GitHub Actions**, implementing two different deployment strategies:

1. **Method 1: Deploying with AWS EKS and MongoDB** <a id="method-1-deploying-with-aws-eks-and-mongodb"></a>
   
🔗Link for Method 1: [http://aad2ff832f54e48fcb854e744ecf8844-1275707135.us-east-1.elb.amazonaws.com](http://aad2ff832f54e48fcb854e744ecf8844-1275707135.us-east-1.elb.amazonaws.com)
   
2. **Method 2: Deploying with AWS App Runner and DynamoDB** <a id="method-2-deploying-with-aws-app-runner-and-dynamodb"></a>
   
🔗Link for Method 2: [https://https://dy6kdtagsb.us-east-1.awsapprunner.com](https://https://dy6kdtagsb.us-east-1.awsapprunner.com)

📌 **How Deployment Links Are Updated**
- The **GitHub Actions workflow automatically updates the correct URLs** inside this README.
- After each deployment, the script fetches the latest **EKS LoadBalancer URL** or **AWS App Runner service URL** and updates the links.
- The updates happen in `.github/workflows/deploy.yml` and `.github/workflows/AWS_severless.yml`.

---

## 🔄 Files Auto-Generated or Updated by GitHub Actions <a id="files-auto-generated-or-updated-by-github-actions"></a>

Several files in this repository are **automatically generated or updated** as part of the CI/CD process using **GitHub Actions**.  
If you're interested in how these work, check the workflow files here:  

📌 [deploy.yml](./.github/workflows/deploy.yml) – Handles **EKS & MongoDB Deployment**  
📌 [AWS_severless.yml](./.github/workflows/AWS_severless.yml) – Handles **App Runner & DynamoDB Deployment**  

Below is a list of files that **should not be manually modified**, as they are dynamically updated by GitHub Actions:  

| File | Updated in Workflow | Description |
|------|----------------------|-------------|
| [README.md](./README.md) | [deploy.yml](./.github/workflows/deploy.yml), [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Updates deployment links for AWS EKS (Method 1) and AWS App Runner (Method 2). |
| [giftwebsite/server.js](./giftwebsite/server.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Auto-generated Express server for proxying API requests in App Runner deployment. |
| [giftwebsite/Dockerfile](./giftwebsite/Dockerfile) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Builds the frontend container dynamically for App Runner. |
| [giftlink-backend/.env](./giftlink-backend/.env) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Injects environment variables for AWS DynamoDB. |
| [giftlink-backend/util/import-mongo/.env](./giftlink-backend/util/import-mongo/.env) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Generates environment variables for data import into DynamoDB. |
| [giftlink-backend/models/db.js](./giftlink-backend/models/db.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Dynamically updated to connect to AWS DynamoDB instead of MongoDB. |
| [giftlink-backend/routes/authRoutes.js](./giftlink-backend/routes/authRoutes.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Updated for authentication using DynamoDB instead of MongoDB. |
| [giftlink-backend/routes/searchRoutes.js](./giftlink-backend/routes/searchRoutes.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Modified to ensure search queries work properly with DynamoDB. |
| [giftlink-backend/routes/giftRoutes.js](./giftlink-backend/routes/giftRoutes.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Ensures correct CRUD operations for gifts using DynamoDB. |
| [giftlink-frontend/src/config.js](./giftlink-frontend/src/config.js) | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Updates backendUrl dynamically based on AWS App Runner deployment. |
| [giftlink-frontend/.env](./giftlink-frontend/.env) | [deploy.yml](./.github/workflows/deploy.yml), [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Injects correct backend API URL for the frontend. |
| [kubernetes/deployment.yml](./kubernetes/deployment.yml) | [deploy.yml](./.github/workflows/deploy.yml) | Updates backend image paths for AWS EKS deployment. |
| [kubernetes/giftwebsite-deployment.yml](./kubernetes/giftwebsite-deployment.yml) | [deploy.yml](./.github/workflows/deploy.yml) | Updates frontend image paths for AWS EKS deployment. |
| **AWS App Runner Backend URL** | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Updates README.md with the backend deployment link for AWS App Runner. |
| **AWS App Runner Frontend URL** | [AWS_severless.yml](./.github/workflows/AWS_severless.yml) | Updates README.md with the frontend deployment link for AWS App Runner. |

📌 **Note:** Do **not** manually edit these files. If you need to modify deployment behavior, update the relevant workflow files instead.

---

## 📝 Auto-Updating README with Deployment URL <a id="auto-updating-readme-with-deployment-url"></a>

At the end of the GitHub Actions `deploy.yml` and `AWS_severless.yml` workflow, the script fetches the **AWS App Runner service URL** and updates `README.md` automatically.

---

## 💡 Contributing <a id="contributing"></a>

If you plan to contribute to this project, please note:
- **Do NOT manually edit files that are auto-generated** by GitHub Actions.
- For modifying AWS deployment behavior, update `.github/workflows/` instead of editing `README.md` directly.

---

## 📩 Contact <a id="contact"></a>

If you have any questions, feel free to contact me at:

📧 deweywang2000@gmail.com
