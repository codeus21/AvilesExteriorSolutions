# Home Service Business Template Website

A modern, responsive React website template designed specifically for home service businesses. Built with React Router for seamless navigation and featuring a professional design system with CSS variables for easy customization.

## 🏠 Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **React Router**: Multi-page navigation with smooth transitions
- **Modern UI**: Clean, professional design with hover effects and animations
- **CSS Variables**: Centralized theming system for easy customization
- **Accessibility**: Proper focus states, semantic HTML, and screen reader support
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Handling**: Contact form with validation and state management

## 📄 Pages Included

### Home Page
- Hero section with call-to-action buttons
- Services showcase (Residential, Commercial, Renovation, Design)
- Company statistics and achievements
- Call-to-action section

### About Us Page
- Company story and mission
- Team member profiles
- Certifications and licenses
- Values and mission statements

### Projects Page
- Project filtering by category
- Project showcase with details
- Project statistics
- Interactive project cards

### Contact Page
- Contact form with validation
- Company contact information
- Business hours and location
- FAQ section

## 🎨 Design System

### Color Palette
- **Primary**: Deep blue (`#1a365d`) - Professional, trustworthy
- **Secondary**: Orange (`#ed8936`) - Energy, construction industry standard
- **Neutrals**: Gray scale for text and backgrounds
- **Accents**: Blue, green, red for status indicators

### Typography
- **Primary Font**: Inter (system fonts fallback)
- **Heading Font**: Poppins (system fonts fallback)
- **Responsive**: Scales appropriately across devices

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this template
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

## 🛠️ Customization

### Updating Content
- **Company Information**: Edit the content in each page component (`src/pages/`)
- **Navigation**: Modify `src/components/Navigation.jsx`
- **Colors**: Update CSS variables in `src/styles/variables.css`
- **Styling**: Each page has its own CSS file for easy maintenance

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the corresponding CSS file
3. Update the router in `src/App.jsx`
4. Add navigation link in `src/components/Navigation.jsx`

### Branding
- Replace placeholder content with your business information
- Update colors in `src/styles/variables.css`
- Add your logo to the navigation component
- Customize the hero sections with your business messaging

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Perfect For

- Construction companies
- Home renovation services
- Plumbing services
- Electrical contractors
- HVAC companies
- Landscaping businesses
- General contractors
- Any home service business

## 📦 Technologies Used

- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **ESLint** - Code linting and formatting

## 📄 License

This template is free to use for personal and commercial projects. Feel free to modify and customize it for your business needs.

## 🤝 Support

For questions or support with this template, please refer to the React and Vite documentation or create an issue in the project repository.
