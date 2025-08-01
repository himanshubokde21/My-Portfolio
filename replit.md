# Portfolio Website Application

## Overview

This is a full-stack portfolio website application built with React (frontend) and Express (backend). The application showcases a professional portfolio with sections for about, portfolio, skills, and contact functionality. It features a modern tech stack with TypeScript, Tailwind CSS for styling, shadcn/ui components, and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type checking
- **Development**: Hot reload with Vite middleware integration

### Database Design
- **Database**: PostgreSQL (configured via Neon serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Tables**:
  - `users`: User authentication (id, username, password)
  - `contact_submissions`: Contact form submissions (id, firstName, lastName, email, subject, message, createdAt)

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling and active section tracking
- **Hero Section**: Landing area with animated elements and call-to-action buttons
- **Interactive Profile**: Mouse-tracking profile image with 3D rotation effects and dynamic glow
- **About Section**: Personal information with animated statistics counters
- **Portfolio Section**: Project showcase with hover effects and external links
- **Skills Section**: Technical skills display with animated progress bars
- **Contact Section**: Contact form with validation and submission handling
- **UI Components**: Complete shadcn/ui component library implementation

### Backend Components
- **Routes**: RESTful API endpoints for contact form submission and retrieval
- **Storage**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Error Handling**: Centralized error handling middleware
- **Validation**: Zod schema validation for all API inputs

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using React Hook Form + Zod schema
3. Validated data sent to `/api/contact` endpoint
4. Backend validates data again using shared Zod schema
5. Data stored in database via Drizzle ORM
6. Success/error response sent back to frontend
7. User notified via toast notification

### Data Retrieval
1. Admin can access contact submissions via `/api/contact-submissions`
2. Backend retrieves all submissions from database
3. Data returned as JSON response

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI/Styling**: Tailwind CSS, shadcn/ui components, Radix UI primitives
- **Animation**: Framer Motion for smooth animations
- **HTTP Client**: Built-in fetch API with custom query client
- **Form Validation**: React Hook Form with Zod resolver
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Express.js**: Web application framework
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution

### Build Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind CSS

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Environment variables for database configuration

### Production Build
1. Frontend built with Vite (outputs to `dist/public`)
2. Backend bundled with ESBuild (outputs to `dist`)
3. Static files served by Express in production
4. Database schema pushed using Drizzle Kit

### Environment Configuration
- `NODE_ENV`: Environment mode (development/production)
- `DATABASE_URL`: PostgreSQL connection string
- `REPL_ID`: Replit-specific configuration for development tools

### File Structure
- `client/`: Frontend React application
- `server/`: Backend Express application
- `shared/`: Shared TypeScript schemas and types
- `migrations/`: Database migration files
- `dist/`: Production build output

The application is designed to be easily deployable on platforms like Replit, with automatic development tooling integration and production-ready build processes.