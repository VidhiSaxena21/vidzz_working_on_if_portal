# Internship Fair Portal

A comprehensive platform for managing internship applications with role-based access for students, companies, and administrators.

## Features

### Student Dashboard
- View all available companies and internship positions
- Search and filter companies
- Track application status across multiple roles
- Upload and manage resume
- View personal profile and application history

### Company Dashboard
- Create and manage internship roles
- Review and shortlist applicants
- Track application metrics and trends
- Manage company profile and branding
- View detailed applicant information and resumes

### Admin Dashboard
- Monitor platform-wide statistics and analytics
- Manage company registrations
- Manage student accounts
- Bulk import students via CSV
- View detailed analytics and conversion metrics

## Authentication

The app uses JWT-based authentication with role-based access control:
- **Student**: Access to `/student/*` routes
- **Company**: Access to `/company/*` routes
- **Admin**: Access to `/admin/*` routes

Demo credentials:
- Student: `student@example.com`
- Company: `company@example.com`
- Admin: `admin@example.com`

Any password works for demo purposes.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI Components**: shadcn/ui, Radix UI
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Styling**: Tailwind CSS v4

## Project Structure

```
app/
├── page.tsx                    # Root redirect to login or dashboard
├── login/                      # Login page
├── student/
│   ├── layout.tsx             # Student layout with sidebar nav
│   ├── dashboard/             # Dashboard with stats and charts
│   ├── companies/             # Browse companies
│   ├── applications/          # Track applications
│   └── profile/               # Student profile and resume upload
├── company/
│   ├── layout.tsx             # Company layout with sidebar nav
│   ├── dashboard/             # Company dashboard
│   ├── roles/                 # Manage internship roles
│   ├── applicants/            # Review applicants
│   └── profile/               # Company profile management
├── admin/
│   ├── layout.tsx             # Admin layout with sidebar nav
│   ├── dashboard/             # Platform overview
│   ├── companies/             # Manage companies
│   ├── students/              # Manage students
│   └── analytics/             # Detailed analytics

lib/
├── store/
│   └── auth.ts               # Zustand auth store
└── api/
    ├── student.ts            # Student API service
    ├── company.ts            # Company API service
    ├── admin.ts              # Admin API service
    └── index.ts              # API exports

components/
├── layout/
│   ├── student-nav.tsx       # Student navigation
│   ├── company-nav.tsx       # Company navigation
│   ├── admin-nav.tsx         # Admin navigation
│   └── protected-route.tsx   # Protected route wrapper
└── ui/                       # shadcn/ui components
```
##official link 

https://ifportal.tvctiet.in/

## Backend Integration

The application is connected to a MongoDB Atlas database through the backend APIs. All company, student, user, and application data is retrieved from the database instead of using mock data.

The primary collections include:

- Companies
- Students
- Users
- Applications
- Roles

CSV exports of the primary collections are also included for reference and analysis.

## Features Implemented

### Authentication & Authorization
- ✅ JWT token storage and management
- ✅ Role-based route protection
- ✅ Automatic redirect based on role
- ✅ Logout functionality
- ✅ Session persistence

### Student Features
- ✅ Dashboard with application stats
- ✅ Company browsing and search
- ✅ Application tracking
- ✅ Profile management
- ✅ Resume upload

### Company Features
- ✅ Dashboard with applicant metrics
- ✅ Role creation and management
- ✅ Applicant review and filtering
- ✅ Status management (shortlist/reject)
- ✅ Company profile management

### Admin Features
- ✅ Global platform analytics
- ✅ Company management
- ✅ Student management
- ✅ CSV bulk import
- ✅ Detailed conversion analytics

## Development Notes

- Mock authentication is enabled by default. The login endpoint accepts any email/password combination and determines the role based on email keywords (admin, company, student).
- All API calls use mock data stored in `lib/api/*.ts` files.
- UI components are from shadcn/ui and Radix UI libraries.
- State management uses Zustand for auth and local storage for persistence.

## Future Enhancements

- Connect to real backend API
- Add email verification
- Implement payment processing for companies
- Add interview scheduling
- Real-time notifications
- Advanced filtering and search
- Resume parsing and AI-powered matching


---

# Database Overview

The Internship Fair Portal uses **MongoDB Atlas** as its primary cloud-hosted NoSQL database for storing and managing platform data. The database is organized into multiple collections that support authentication, company management, student records, and internship applications.

## Database Collections

| Collection | Description |
|------------|-------------|
| `companies` | Stores company profiles, contact information, internship details, and company status. |
| `students` | Stores student profiles, academic information, resumes, and related details. |
| `users` | Stores authentication credentials, user roles, and account verification status. |
| `applications` | Stores internship applications submitted by students along with their application status. |
| `roles` | Stores role definitions and permissions used throughout the platform. |

---
## CSV Dataset

The exported datasets are available in the **`data/`** directory of the project.

### Included Files

- `data/companies.csv`
- `data/students.csv`
- `data/applications.csv`

These CSV files have been exported from the MongoDB Atlas database and contain the corresponding collection data for companies, students, and internship applications.


# Current Database Statistics

The platform currently contains the following data in the MongoDB Atlas database.

| Metric | Count |
|--------|------:|
| Registered Companies | **24** |
| Registered Students | **233** |
| Registered Users | **278** |
| Internship Applications | **90** |

> **Note:** These statistics represent the current state of the MongoDB Atlas database and may change as new users, companies, and applications are added.


---

# Database Technology

- **Database:** MongoDB Atlas
- **Database Type:** NoSQL Document Database
- **Collections:** Companies, Students, Users, Applications, Roles

MongoDB Atlas enables scalable cloud-based storage, efficient querying, and flexible document structures for managing internship portal data.
