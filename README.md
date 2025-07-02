# Strimo - Your Universe of Movies & TV Shows

This is a Next.js application built in Firebase Studio. It's a streaming service clone that uses Firebase for authentication and Genkit for AI-powered recommendations.

## How to Run Locally

Follow these instructions to get the project running on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or later is recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 1. Install Dependencies

First, open your terminal, navigate to the project directory, and install the necessary packages:

```bash
npm install
```

### 2. Set Up Firebase

This project requires Firebase for user authentication and for the database.

#### a) Set Up Environment Variables

1.  **Create an environment file**: Create a new file named `.env` in the root of your project if it doesn't exist.

2.  **Get your Firebase credentials**:
    *   Go to the [Firebase Console](https://console.firebase.google.com).
    *   Create a new project or select an existing one.
    *   In your project, go to **Project Settings** (click the gear icon ⚙️) > **Your apps**.
    *   Click the **Web icon** (`</>`) to add a web app if you haven't already.
    *   After registering the app, you will see a `firebaseConfig` object.

3.  **Populate your `.env` file**: Copy the values from the `firebaseConfig` object into your `.env` file. It should look like this:

    ```env
    # Firebase Credentials
    NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
    ```
    **Important**: Replace `"YOUR_..."` with your actual credentials from the Firebase console.

#### b) Enable Firestore Database

1. In the [Firebase Console](https://console.firebase.google.com), select your project.
2. In the left-hand navigation menu under "Build", click **Firestore Database**.
3. Click **Create database**.
4. Select **Start in test mode**. This will allow the application to read and write data during development.
5. Choose a location for your database and click **Enable**.


### 3. Run the Development Servers

This application has two parts that need to be run at the same time in separate terminal windows: the Next.js frontend and the Genkit AI service.

#### Terminal 1: Start the Next.js App

Run the following command to start the main web application:

```bash
npm run dev
```

This will start the Next.js development server, usually on `http://localhost:9002`.

#### Terminal 2: Start the Genkit AI Service

In a second, separate terminal, run this command to start the Genkit AI service. The `--watch` flag ensures it automatically reloads when you make changes to AI flows.

```bash
npm run genkit:watch
```

This starts the Genkit service and makes the AI features available to the main app. You can also inspect your flows in the Genkit developer UI, usually at `http://localhost:4000`.

---

With both servers running, you can now open `http://localhost:9002` in your browser to see the Strimo app in action!
