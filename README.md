# Security Management & Analytics Dashboard

![Security Dashboard](https://img.shields.io/badge/Security-Dashboard-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Go](https://img.shields.io/badge/Go-Backend-00ADD8?logo=go&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📋 Overview

A comprehensive security services management system with dual interfaces for clients and administrators. This web application facilitates service bookings, backend request handling, and advanced analytics dashboards. It integrates a Go-based backend with a modern React frontend, featuring real-time data visualization and a chatbot assistant for streamlined service booking.

![WhatsApp Image 2025-05-07 at 22 30 41_db991c92](https://github.com/user-attachments/assets/0dcd97c8-bca6-4076-b114-6ae915516e0a)
![WhatsApp Image 2025-05-07 at 22 30 35_946c4043](https://github.com/user-attachments/assets/a206473e-eeb1-4e98-a42a-a2b9e1e7def7)
![WhatsApp Image 2025-05-07 at 22 24 32_a76c18c4](https://github.com/user-attachments/assets/a20f7e50-3a40-416b-870a-d8d754b430c5)
![WhatsApp Image 2025-05-07 at 22 24 32_e8f1031b](https://github.com/user-attachments/assets/84461447-efe2-43c4-b7ad-3b49e5455652)
![Screenshot_1](https://github.com/user-attachments/assets/ce561290-b181-4499-bcb8-bbfd8660bc2e)

## ✨ Features

### 👤 Client Features
- Book customized security services (Guards, Surveillance, Patrol)
- Add-on selection: Camera, Vehicle, First Aid, etc.
- Instant cost estimation based on selections
- Responsive, user-friendly booking form
- Chatbot assistant for quick and guided bookings

### 🛠️ Admin Features
- Secure admin login with session-based authentication
- Dashboard to manage and update service requests
- Status flow: Pending → In Progress → Resolved / Rejected
- Switch between dashboard and analytics views
- Real-time updates and seamless admin experience

### 📊 Analytics
- Visual breakdown of Top Services Revenue
- Pie Chart: Revenue distribution by service
- Bar Chart: Monthly revenue trends
- Line Chart: Yearly growth and performance
- Business insights through interactive charts powered by Recharts

## 🧰 Technology Stack

- **Frontend:** React 19, React Router 7, Recharts
- **Backend:** REST API built with Go (Golang)
- **Authentication:** Cookie-based session management
- **Chatbot:** Integrated chatbot for simplified service booking
- **Styling:** CSS with mobile-first responsive design

## 🚀 Installation

```bash
# Clone the frontend repository
git clone https://github.com/ayushsingh-22/frontend.git
cd frontend

# Install frontend dependencies
npm install

# Start the frontend server
npm run dev
```

Make sure to also clone and run the Go backend server:

```bash
# Clone the backend repository
git clone https://github.com/ayushsingh-22/server.git
cd server

# Install dependencies
go mod download

# Run the server
go run main.go
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/login` | POST | Admin authentication |
| `/api/check-login` | GET | Verify session status |
| `/api/getAllQueries` | GET | Retrieve all service requests |
| `/api/updateStatus` | POST | Update request status |
| `/api/add-query` | POST | Create new service booking |
| `/api/analytics` | GET | Retrieve analytics data |
| `/api/logout` | POST | End admin session |

## 📁 Project Structure

```
Project/
├── src/
│   ├── Components/
│   │   └── BookServiceForm.js
│   │   └── ChatBotComponent.jsx
│   │   └── AnalyticsCharts/
│   │       └── RevenueChart.jsx
│   │       └── ServicesPieChart.jsx
│   │       └── YearlyTrendChart.jsx
│   ├── Screens/
│   │   ├── Dashboard.jsx
│   │   ├── Analytics.jsx
│   │   ├── LoginScreen.jsx
│   │   └── Styles/
│   │       ├── Dashboard.css
│   │       ├── Analytics.css
│   │       └── BookServiceForm.css
│   ├── Utils/
│   │   ├── api.js
│   │   └── auth.js
│   └── App.js
└── package.json
```

## 📱 Usage

### Client Booking
1. Navigate to the homepage
2. Use chatbot or form to book services
3. Select desired services and add-ons
4. Submit request and receive real-time cost estimate

### Admin Portal
1. Login securely with admin credentials
2. View and manage all client requests
3. Update statuses and track request flow
4. Analyze revenue trends in the analytics section

## 🔒 Authentication

The system uses secure cookie-based authentication with the following features:
- HTTP-only cookies for session management
- CSRF protection
- Session timeout after inactivity
- Secure password handling

## 📊 Analytics Capabilities

The analytics dashboard provides:
- Revenue breakdown by service type
- Monthly performance metrics
- Year-over-year comparison
- Service popularity trends
- Interactive filters for custom date ranges

## 🔜 Future Enhancements

- Mobile application (React Native / Kotlin)
- Multi-language interface
- PDF export for reports and billing
- Client-side dashboard to track service status
- Role-based access control for admins and sub-admins
- Integration with payment gateways
- Automated reporting and email notifications

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
