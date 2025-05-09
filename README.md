# Security Management & Analytics Dashboard

## Overview
A comprehensive security services management system with booking functionalities, administrative controls, and data analytics capabilities. The application serves both clients seeking security services and administrators managing these requests.

## Features

### Client Features
- Book various security services with customizable options
- Select additional services (Camera, Vehicle, First Aid, etc.)
- Real-time cost calculation based on selections
- Responsive booking interface

### Admin Features
- Secure login system with session management
- Comprehensive dashboard for request management
- Status tracking and updates (Pending, In Progress, Resolved, Rejected)
- Toggle between dashboard and analytics views
- Data visualization with multiple chart types

### Analytics
- Top Services Revenue visualization
- Revenue distribution by service (Pie Chart)
- Monthly revenue tracking (Bar Chart)
- Growth trends analysis (Line Chart)

## Technology Stack

- **Frontend**: React 19, React Router 7, Recharts
- **Backend**: Node.js REST API
- **Authentication**: Cookie-based session management
- **Styling**: CSS with responsive design

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/security-management-dashboard.git

# Navigate to project directory
cd security-management-dashboard

# Install dependencies
npm install

# Start the development server
npm start
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/login` | POST | Admin authentication |
| `/api/check-login` | GET | Verify session status |
| `/api/getAllQueries` | GET | Retrieve all service requests |
| `/api/updateStatus` | POST | Update request status |
| `/api/add-query` | POST | Create new service booking |
| `/api/analytics` | GET | Retrieve analytics data |
| `/api/logout` | POST | End admin session |

## Project Structure

```
Project/
├── src/
│   ├── Components/
│   │   └── BookServiceForm.js
│   ├── Screens/
│   │   ├── Dashboard.jsx
│   │   ├── Analytics.jsx
│   │   ├── LoginScreen.jsx
│   │   └── Styles/
│   │       ├── Dashboard.css
│   │       ├── Analytics.css
│   │       └── BookServiceForm.css
│   └── ...
└── package.json
```

## Usage

1. **Client Booking**:
   - Fill out the service booking form
   - Select required add-ons
   - Submit request

2. **Admin Portal**:
   - Login with admin credentials
   - View all service requests in dashboard
   - Update request status as needed
   - Switch to analytics view for business insights

## Future Enhancements

- Mobile application
- Multi-language support
- Advanced filtering capabilities
- PDF report generation
- Client portal for request tracking
