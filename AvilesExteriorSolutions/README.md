# Aviles Exterior Services Website

A modern, responsive website for Aviles Exterior Services - a professional exterior services company serving Douglasville, GA and surrounding areas. Built with React and featuring a clean, professional design optimized for showcasing exterior service offerings.

## 🏠 About the Business

Aviles Exterior Services provides comprehensive exterior solutions including lawn care, landscaping, trimming, house washing, and yard maintenance. With over 5 years of experience, we transform outdoor spaces and maintain beautiful landscapes for our valued clients.

**Location**: Douglasville, GA  
**Phone**: (470) 526-3353  
**Email**: contact@avileswebsolutions.com  
**Website**: https://avileswebsolutions.com

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints at 1020px, 900px, 768px, and 480px
- **React Router**: Multi-page navigation with smooth transitions
- **Modern UI**: Clean, professional design with hover effects and scroll animations
- **CSS Variables**: Centralized theming system for easy customization
- **Accessibility**: Proper focus states, semantic HTML, and screen reader support
- **Mobile Navigation**: Hamburger menu that appears at 900px and below
- **Contact Integration**: Contact form with validation and state management
- **Call-to-Action**: Floating call button component for easy contact access
- **Scroll Animations**: Smooth fade-in animations for enhanced user experience
- **Dynamic Statistics**: Count-up animation component for showcasing achievements

## 📄 Pages Included

### Home Page
- Hero section with company name and tagline
- Services showcase (Lawn Care, Landscaping, Trimming, House Washing, Yard Maintenance)
- Company statistics with count-up animations
- Call-to-action sections

### About Us Page
- Company story and mission
- Team information
- Experience and credentials
- Service areas

### Services Page
- Overview of all services
- Individual service pages:
  - Lawn Care (`/services/lawn-care`)
  - Landscaping (`/services/landscaping`)
  - Bush & Hedge Trimming (`/services/trimming`)
  - Tree Trimming (`/services/tree-trimming`)
  - House Washing (`/services/house-washing`)
  - Land Clearing (`/services/land-clearing`)
  - Yard Maintenance (`/services/yard-maintenance`)
- Service process information

### Projects Page
- Project showcase gallery
- Project filtering by category
- Project details and descriptions
- Visual portfolio of completed work

### Contact Page
- Contact form with EmailJS integration
- Company contact information
- Business hours and location
- Service area information

## 🎨 Design System

### Color Palette
- **Primary Color**: Deep blue/green (`#1a365d` or `#2d6a4f`) - Professional, trustworthy
- **Secondary Color**: Orange/Accent (`#ed8936`) - Energy, call-to-action
- **Neutrals**: Gray scale for text and backgrounds
- Colors defined in `src/styles/variables.css`

### Typography
- **Primary Font**: System fonts (Inter fallback)
- **Heading Font**: System fonts (Poppins fallback)
- **Responsive**: Scales appropriately across devices

### Responsive Breakpoints
- **Large Desktop**: > 1400px
- **Desktop**: > 1020px
- **Tablet**: 768px - 1020px
- **Mobile**: < 900px (hamburger menu appears)
- **Small Mobile**: < 480px

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Running on Local Network

To access the website from other devices on your local network:

1. Start the development server with network access:
   ```bash
   npm run dev:network
   ```

2. The server will display both local and network URLs:
   ```
   Local:   http://localhost:5173/
   Network: http://192.168.1.xxx:5173/
   ```

3. Use the Network URL to access the site from other devices (phones, tablets, other computers) on the same WiFi network.

**Note**: Make sure your firewall allows connections on port 5173, and that all devices are connected to the same network.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── CallButton.jsx   # Floating call button
│   ├── CountUpStat.jsx  # Animated statistics component
│   ├── Footer.jsx       # Site footer
│   ├── Navigation.jsx   # Main navigation bar
│   ├── ScrollAnimation.jsx  # Scroll-triggered animations
│   └── ScrollToTop.jsx  # Scroll to top button
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   ├── About.jsx        # About page
│   ├── Services.jsx     # Services overview
│   ├── LawnCare.jsx     # Individual service pages
│   ├── Landscaping.jsx
│   ├── Trimming.jsx
│   ├── HouseWashing.jsx
│   ├── YardMaintenance.jsx
│   ├── Projects.jsx     # Projects showcase
│   └── Contact.jsx      # Contact page
├── styles/              # Global styles
│   └── variables.css    # CSS variables and theme
└── assets/              # Static assets
    └── logos/           # Logo images
```

## 🛠️ Setup & Configuration

### EmailJS Configuration

The contact form uses EmailJS to send emails. Follow these steps to configure it:

1. **Sign up for EmailJS** at https://www.emailjs.com/

2. **Create an Email Service**
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to Email Templates in your dashboard
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Phone number
     - `{{service_type}}` - Selected service type
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient email

4. **Get Your Credentials**
   - Public Key: Found in Account > API Keys
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates

5. **Create Environment File**
   - Create a `.env` file in the root directory
   - Add your credentials:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```

6. **Restart Development Server**
   - Stop the dev server (Ctrl+C)
   - Run `npm run dev` again

**Note**: The `.env` file is already in `.gitignore` to keep your credentials secure.

## 🛠️ Customization

### Updating Content
- **Company Information**: Edit content in page components (`src/pages/`)
- **Navigation**: Modify `src/components/Navigation.jsx`
- **Colors**: Update CSS variables in `src/styles/variables.css`
- **Styling**: Each page has its own CSS file for easy maintenance

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the corresponding CSS file
3. Update the router in `src/App.jsx`
4. Add navigation link in `src/components/Navigation.jsx`

### Navigation Responsiveness
- **1020px and below**: "Get Quote" button hides, navigation links remain visible
- **900px and below**: Navigation links hide, hamburger menu appears
- **Mobile**: Full mobile menu with services dropdown

## 📦 Technologies Used

- **React 19** - Modern React with hooks
- **React Router DOM 7** - Client-side routing
- **React CountUp** - Animated number counting
- **EmailJS** - Contact form email service
- **Vite 7** - Fast build tool and dev server
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **ESLint** - Code linting and formatting

## 📱 Mobile Features

- Responsive navigation with hamburger menu
- Mobile-optimized contact form
- Touch-friendly call button
- Optimized images and layouts
- Mobile-first CSS approach

## 📄 License

This website is proprietary and designed for Aviles Exterior Services. All rights reserved.

## 🤝 Support & Development

**Designed by**: [Aviles Web Solutions](https://avileswebsolutions.com)

For technical support or questions about this website, please contact the development team.
