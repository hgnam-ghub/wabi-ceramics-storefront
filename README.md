# TNNT Ceramics

TNNT Ceramics is a Vietnamese-language ceramics storefront and administration interface created as a Web and Application Programming course project. It is built with static web technologies and includes sample product content.

## Features

### Storefront

- Home page, product categories, and product detail pages.
- Shopping cart and checkout pages.
- Customer sign-in, registration, profile, address book, and order history pages.
- About and ceramics care pages.

### Administration

- Product, user, and address management interfaces.
- Order list, order detail, and statistics pages.
- Administrator sign-in page.

This project is currently a static UI prototype. Sample administration product data is defined in `admin/js/data.js`. The project has no backend or database, and its sign-in and administration pages do not provide real authentication or persistent data storage. Do not use it to process real orders or customer information.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

No package installation or build step is required to view the pages.

## Run Locally

You can open `index.html` directly in a browser. For more reliable relative paths and asset loading, serve the repository root with a static web server.

For example, with Python 3:

```bash
python3 -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000) for the storefront and [http://localhost:8000/admin/login.html](http://localhost:8000/admin/login.html) for the administration interface. VS Code's Live Server extension can also be used.

## Project Structure

```text
.
├── index.html                 # Storefront home page
├── danh-muc.html              # Product categories
├── chi-tiet.html              # Product details
├── cart.html                  # Shopping cart
├── checkout.html              # Checkout
├── login.html                 # Customer sign-in
├── register.html              # Customer registration
├── profile*.html              # Customer profile pages
├── address.html               # Customer address book
├── order.html                 # Customer order history
├── ve-chung-toi.html          # About page
├── cham-soc-gom.html          # Ceramics care page
├── css/                       # Storefront stylesheets
├── js/                        # Storefront JavaScript
├── images/                    # Storefront images
└── admin/
    ├── *.html                 # Administration pages
    ├── css/                   # Administration stylesheets
    ├── images/                # Administration images
    ├── js/                    # Administration scripts and sample data
    └── sidebar/               # Administration navigation
```

## Authors and License

Project credits are listed in [AUTHORS.md](AUTHORS.md). The project is proprietary and is not offered under an open-source license. See [LICENSE.md](LICENSE.md) for the applicable terms and third-party materials notice.
