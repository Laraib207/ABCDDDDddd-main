# Veer Bharat Edible Oils Website Project

## Project Overview
This is a full-stack e-commerce website for Veer Bharat, a company specializing in edible oils including mustard oil, soybean oil, palm oil, and rice bran oil. The project is built using Next.js 14 with a MongoDB backend and features a modern, responsive frontend with shopping cart functionality, product management, and contact forms.

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Image Handling**: Next.js Image component
- **Carousels**: React Slick

### Backend
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **API**: Next.js API Routes
- **Email**: Nodemailer (SMTP)
- **Authentication**: None (session-based cart)

### Development Tools
- **Package Manager**: npm/pnpm
- **Build Tool**: Next.js
- **CSS Framework**: Tailwind CSS
- **Deployment**: Next.js export/static generation

## Project Structure

### Root Files
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `jsconfig.json` - JavaScript configuration
- `server.js` - MongoDB connection script
- `README.md` - Project documentation
- `TODO.md` - Development tasks and progress
- `.gitignore` - Git ignore rules

### Database Models (`models/`)
- `Product.js` - Product schema (title, slug, description, price, stock, images, category)
- `Order.js` - Order schema (items, total, customer details, payment method, status)
- `Cart.js` - Cart schema (items, sessionId, timestamps)
- `Contact.js` - Contact form schema (name, email, message, date)

### API Routes (`src/app/api/`)
- `/api/products` - GET: Fetch all products
- `/api/cart/add` - POST: Add items to cart
- `/api/order/create` - POST: Create new order
- `/api/contact` - POST: Handle contact form submissions
- `/api/brochure` - POST: Handle brochure download requests

### Frontend Pages (`src/app/`)
- `/` - Homepage with hero, categories, videos, testimonials
- `/about` - About page
- `/products` - Product listing page
- `/products/[slug]` - Individual product detail pages
- `/cart` - Shopping cart page
- `/contact` - Contact form page
- `/certificate` - Certificate display page
- `/team` - Team page
- `/blog` - Blog listing
- `/blog/[id]` - Individual blog posts
- `/brochure` - Brochure download page
- `/gallery` - Image gallery
- `/brand-rice` - Brand rice page
- `/mustard-oil` - Mustard oil product page
- `/soyabean-oil` - Soybean oil product page
- `/palm-oil` - Palm oil product page
- `/sunflower-oil` - Sunflower oil product page
- `/managing-director` - Managing director page

### Components (`src/components/`)
- `Navbar.jsx` - Navigation bar
- `Footer.jsx` - Site footer
- `ProductCard.jsx` - Product display card
- `CategoryCarousel.jsx` - Product category carousel
- `VeerBharatHero.jsx` - Hero section component
- `WhyUsSection.jsx` - Why choose us section
- `HealthBenefits.jsx` - Health benefits section
- `CustomerFeedback.jsx` - Customer testimonials
- `Certificate.jsx` - Certificate display
- `ProductSlider.jsx` - Product slider component
- `AnimatedSlickSlider.jsx` - Animated slick slider
- `SplashProvider.jsx` - Splash screen provider

### Utilities (`lib/`)
- `mongoose.js` - Database connection utility

### Scripts (`scripts/`)
- `seed.js` - Database seeding script for products

### Public Assets (`public/`)
- **Images**: Product images, banners, logos, certificates, team photos
- **Videos**: Hero video, promotional videos
- **Documents**: PDFs, brochures
- **Icons**: Favicon, logos

### Configuration Files
- `.env.local` - Environment variables (MongoDB URI, SMTP settings)
- `prisma/` - Prisma database schema (legacy, switched to MongoDB)

## Key Features

### Frontend Features
- Responsive design for mobile, tablet, and desktop
- Video hero section with autoplay
- Product category grid with hover effects
- Video showcase with modal player
- Shopping cart functionality
- Contact forms with validation
- Image galleries and carousels
- Animated transitions and micro-interactions
- WhatsApp integration button

### Backend Features
- RESTful API endpoints
- MongoDB database integration
- Order management system
- Email notifications (SMTP)
- Cart persistence with session IDs
- Product inventory management
- Contact form handling
- Brochure download tracking

### Business Features
- Multi-product categories (Mustard, Soybean, Palm, Rice Bran oils)
- Product filtering and search
- Order tracking and status updates
- Customer support integration
- Marketing materials (brochures, certificates)
- Blog content management
- Team and company information pages

## Database Schema

### Product Collection
```javascript
{
  title: String,
  slug: { type: String, unique: true },
  description: String,
  price: Number,
  stock: Number,
  images: [String],
  category: String,
  createdAt: Date
}
```

### Order Collection
```javascript
{
  items: [{
    product: ObjectId,
    title: String,
    price: Number,
    qty: Number
  }],
  total: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  paymentMethod: String,
  status: String,
  createdAt: Date
}
```

### Cart Collection
```javascript
{
  items: [{ productId: String, qty: Number, price: Number }],
  sessionId: String,
  updatedAt: Date
}
```

### Contact Collection
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: Date
}
```

## API Endpoints

### Products API
- `GET /api/products` - Returns all products

### Cart API
- `POST /api/cart/add` - Adds product to cart
  - Body: `{ productId, qty, sessionId }`

### Order API
- `POST /api/order/create` - Creates new order
  - Body: `{ items, name, email, phone, address, paymentMethod }`

### Contact API
- `POST /api/contact` - Handles contact form
  - Body: `{ name, email, phone, subject, message }`

### Brochure API
- `POST /api/brochure` - Handles brochure requests
  - Body: `{ name, phone, email, address, brochureTitle, brochureFile }`

## Environment Variables
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/veerbharat
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
CONTACT_RECEIVER=contact@veerbharat.com
```

## Development Setup

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Run MongoDB connection: `node server.js`
4. Seed database: `node scripts/seed.js`
5. Start development server: `npm run dev`
6. Build for production: `npm run build`

## Deployment
- Uses Next.js static export for deployment
- Can be deployed to Vercel, Netlify, or any static hosting
- Database hosted on MongoDB Atlas
- Email functionality requires SMTP configuration

## File Count Summary
- Total files: ~200+
- Frontend components: 15+
- API routes: 5
- Database models: 4
- Public assets: 100+ images/videos
- Pages: 15+
- Configuration files: 8

## Recent Updates
- Migrated from Prisma to MongoDB
- Added comprehensive product catalog
- Implemented shopping cart functionality
- Added email notifications for orders
- Enhanced UI with animations and responsive design
- Added video showcase and gallery features

## Future Enhancements
- User authentication system
- Admin dashboard for content management
- Payment gateway integration
- Advanced search and filtering
- Inventory management system
- Multi-language support
- Progressive Web App (PWA) features
