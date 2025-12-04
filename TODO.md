# TODO: E-commerce Checkout Improvements

## Completed
- [x] Update scripts/seed.js to print seeded product _ids and slugs
- [x] Update src/components/ProductCard.jsx to store product.slug || product._id in cart
- [x] Replace src/app/cart/page.js with improved checkout UI (better styling, order summary, quantity controls, billing form, error handling, redirect to success page)
- [x] Create src/app/order/success/page.js with success page

## Pending
- [ ] Set up .env.local with MONGODB_URI and optional SMTP for testing
- [ ] Run seed script to verify ids/slugs are printed (requires DB credentials)
- [ ] Test locally: add to cart, checkout flow, and success page (requires DB setup)
