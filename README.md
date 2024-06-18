# ace-interview

# Vercel link 

Live link : [ace-interview.vercel.app](ace-interview.vercel.app)
## Overview

This project is a sophisticated job interview application designed to streamline the interview process using modern web technologies and AI. It generates role-specific interview questions, records candidate responses, and provides AI-driven feedback. The application leverages Gemini AI for analysis and feedback, ensuring candidates receive constructive evaluations based on their performance.

## Features

- **Dynamic Question Generation**: Generates interview questions tailored to the user's job role, job description, and experience.
- **Voice Recording**: Allows users to answer questions via microphone, capturing their responses in real-time.
- **AI-Powered Feedback**: Uses Gemini AI to analyze responses and provide detailed feedback.
- **User Authentication**: Utilizes Clerk for secure user authentication and session management.

## Technologies Used

- **Next.js**: Framework for building the front-end application.
- **PostgreSQL**: Database for storing user data, interview questions, and responses.
- **Drizzle**: ORM (Object-Relational Mapping) to interact with the PostgreSQL database.
- **Neon**: Serverless PostgreSQL with performance optimizations.
- **shadcn/ui**: UI component library for building a responsive and accessible user interface.
- **Clerk**: Authentication service for handling user sign-up, login, and management.
- **Gemini AI**: AI service for analyzing audio responses and providing feedback.
- **Audio Transcript**: Service for transcribing audio responses into text for further processing.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- PostgreSQL
- Yarn or npm
- Clerk API keys
- Gemini AI API keys

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/gemini-job-interview.git
   cd gemini-job-interview
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   DATABASE_URL=your_database_url
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run Database Migrations**
   ```bash
   yarn drizzle db:migrate
   # or
   npm run drizzle db:migrate
   ```

5. **Start the Development Server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

## Usage

1. **Sign Up/Login**: Users need to sign up or log in using Clerk authentication.
2. **Job Role and Description**: Enter job role, job description, and experience details.
3. **Start Interview**: The system generates relevant questions.
4. **Answer Questions**: Users answer questions via microphone.
5. **Receive Feedback**: Gemini AI analyzes responses and provides feedback.

## Project Structure

![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/7e7bb4c6-5147-456a-9313-edf83f17d906)


![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/3ddb42f7-a835-45ce-9ef8-fe3152df3687)

![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/a27e8441-9ddd-40af-b1cf-ec76ac6c9da3)

![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/0ec8520c-f793-404e-9936-e9104f3cd763)

![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/3a430e8a-8cbb-4753-97bf-c58218bfc16f)

![image](https://github.com/vikashchand/Ace-Interview/assets/72156896/6137b0c8-b58f-4937-b670-4a6a26b968f8)







