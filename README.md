[![Unity](https://img.shields.io/badge/Unity-2022.3-black?logo=unity&logoColor=white)](https://unity.com/)
[![C%23](https://img.shields.io/badge/C%23-Unity-239120?logo=csharp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![AR Foundation](https://img.shields.io/badge/AR%20Foundation-Unity-000000?logo=unity&logoColor=white)](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@latest/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white)](https://github.com/Shivani-sgh/HeritageAR-Expo)

<img width="426" height="91" alt="HeritageAR-(2)" src="https://github.com/user-attachments/assets/0c81008b-83fe-4e0d-8f74-fcdf2aa5ece8" />

HeritageAR is a mobile application developed to provide an interactive way of exploring Indian heritage sites. The application combines heritage information, personalized content, AI-based question answering, user profiles, and an AR viewing option in one platform.

## Tech Stack

- React Native
- Expo
- JavaScript
- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- Unity for AR
- AI API for the Heritage Guide

## Implemented Features

### 1. User Authentication

The application provides user registration and login using Firebase Authentication.

During registration, the user provides:

- Name
- Email
- Password
- Role

Available roles include Tourist, Student, Researcher, and Child.

**Screenshot:**
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/94ce793a-2fd2-42cd-9e50-baadc572662d" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/8a97ab6e-0e49-4b82-9fca-7b1b4c682f56" />


## 2. Heritage Sites

After logging in, users can access the Heritage Sites screen.

The screen includes:

- Search bar for monuments
- Monument image
- Monument name
- Short description
- Navigation to the monument details page

Currently, the application contains heritage sites such as the Red Fort, India Gate, Taj Mahal, and Qutub Minar.

**Screenshot:**
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/77d9f46a-e58b-4dc8-8510-e4f86c8806f5" />



## 3. Monument Details

Selecting a monument opens its detailed page.

The page displays:

- Monument image
- Monument name
- Historical information
- Personalized Heritage Guide
- Topic-based content
- View in AR option
- Ask AI section

**Screenshot:**
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/f7035650-1128-4b11-bbb1-1f184c73198b" />

## 4. Personalized Heritage Guide

The Heritage Guide displays information based on the user's selected interests and experience level.

The available interests include:

- Architecture
- History
- Archaeology
- Art & Culture
- Photography

The user can also select an experience level:

- Beginner
- Intermediate
- Detailed

This information is stored as part of the user's profile and is used for personalization.

**Screenshot:**
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/365c8d29-daa6-44fd-8f0d-094021b3833a" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/7438cbfc-8f60-4ea3-b6e0-879800f38910" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/f8a106cf-267a-4cf2-9517-f22e0dc058bf" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/8eebb9d0-8fff-4230-962b-8fe9cb028559" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/02a6f75f-4415-4c2b-948a-2a17821ea820" />

## 5. AI Heritage Guide

An AI-based question-answering feature is implemented on the monument details page.

Users can ask questions about the selected heritage site. The question is sent to the AI service and the generated response is displayed in the application.

Example:

`Who built Taj Mahal?`

The AI returns a response related to the Taj Mahal and its history.

**Screenshot:**

<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/bd317ed6-c036-443a-b181-cf29aa537f9e" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/63663678-f95d-436d-b16f-c3267d252745" />



## 6. AR Integration

A `View in AR` option is available on the monument details page.

The AR component is developed using Unity and is integrated as part of the HeritageAR project. It allows the user to access the AR experience for supported heritage content.

**Screenshot:**

<img width="200" height="450" alt="AR-1 (1)" src="https://github.com/user-attachments/assets/79a48a70-1fb2-472d-a53e-5e64607d3f37" />
<img width="200" height="450" alt="AR-2 (1)" src="https://github.com/user-attachments/assets/cad5b0ed-6fbb-4c12-8bd7-251c4ea95ce4" />


## 7. User Profile

The profile section displays the user's information and personalization settings.

Currently implemented information includes:

- Name
- Email
- Role
- Country
- Interests
- Experience Level

The profile also provides an option to edit the profile and log out.

**Screenshot:**
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/9ed49a70-caab-40b1-ade1-590f2877e5c3" />
<img width="200" height="450" alt="image" src="https://github.com/user-attachments/assets/3f150731-da46-493b-a06a-d31ffa51468f" />


## 8. Firebase Implementation

Firebase is used as the backend of the application.

### Firebase Authentication

Used for:

- User registration
- User login
- User authentication

### Cloud Firestore

The application uses Firestore to store application data, including:

- `users`
- `monuments`
- `quiz`
- `userHistory`

User profile information such as name, email, and role is stored in the `users` collection.

### Firebase Storage

Firebase Storage is used for storing application media and other required assets.

## Application Flow

```text
Create Account / Login
          |
          v
   Heritage Sites
          |
          v
   Select Monument
          |
          v
  Monument Details
      /    |     \
     /     |      \
   AR    Guide    Ask AI
          |
          v
       Profile
