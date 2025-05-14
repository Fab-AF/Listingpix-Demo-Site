# ListingPix Demo Project

A React-based web application for a real estate photography service platform. This demo showcases a multi-page website with various features for real estate agents, photographers, and DIY users.

**Live Demo:** [https://listingpix.com/](https://listingpix.com/)

## Project Overview

ListingPix is a platform that connects real estate agents with professional photographers and provides AI-enhanced photo editing tools. The platform offers three main services:

1. **Photographer Marketplace**: Connect with local photographers to capture professional real estate photos
2. **Photographer App**: For photographers to join the network, manage bookings, and deliver photos
3. **DIY Camera App**: For users who want to take and enhance their own real estate photos

## Project Setup

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/listingpix-demo.git
   cd listingpix-demo
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Routes

| Route           | Page Name         | Description                                                           |
| --------------- | ----------------- | --------------------------------------------------------------------- |
| `/`             | Home Page         | Main landing page with key features, network information, and pricing |
| `/diycamera`    | DIY Camera Page   | Information about the DIY camera app, features, and pricing           |
| `/photographer` | Photographer Page | Information for photographers who want to join the platform           |
| `/download`     | Download Page     | Links to download the various apps                                    |

## Project Structure

```
src/
├── Assets/            # Images, icons, and other static assets
├── Components/        # React components organized by feature
│   ├── Diy Hero/      # DIY camera hero section
│   ├── Explore/       # Explore section components
│   ├── FAQ/           # FAQ section
│   ├── Footer/        # Footer component
│   ├── Header/        # Header/navigation component
│   ├── HeroSection/   # Main hero section
│   └── ...            # Other component folders
├── App.js             # Main application component with routes
└── index.js           # Application entry point
```

## Dependencies

The project uses the following key dependencies:

- **React**: UI library
- **React Router**: For navigation and routing
- **Framer Motion**: For animations
- **React Slick & Swiper**: For carousel/slider components
- **Tailwind CSS**: For styling

For a complete list of dependencies, see the `package.json` file.

## Building for Production

To build the app for production, run:

```
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## Features

### For Real Estate Agents

- Book professional photographers
- Use AI-enhanced photo editing
- DIY camera app for quick shots

### For Photographers

- Join the photographer network
- Manage bookings and clients
- Deliver high-quality photos

### Technology Features

- AI photo enhancement
- HDR imaging
- Virtual staging
- Sky replacement
- Perspective correction

## License

This project is for demonstration purposes only.

## Contact

For any questions about this demo, please contact info@dummy-email.com.
