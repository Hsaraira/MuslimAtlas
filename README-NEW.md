# Muslim Atlas

A modern, SEO-optimized directory helping Muslims find masjids, halal food, and Muslim-friendly businesses worldwide.

## 🚀 Project Status

### ✅ Completed
- [x] Next.js 14 setup with App Router
- [x] Tailwind CSS configured with custom Muslim Atlas color palette
- [x] Core layout (Navbar + Footer)
- [x] Design system components:
  - Button (variants: primary, secondary, ghost, outline)
  - Input, Select, Textarea
  - Badge (with tooltip support for ownership/halal labels)
  - TagChip
  - Card (with Header, Content, Footer)
  - SectionHeader
- [x] Type definitions and constants
- [x] Route structure created
- [x] Development server running

### 🔄 In Progress
- [ ] Homepage with hero, search, and category sections
- [ ] Browse/City/Category pages
- [ ] Listing detail page with ownership/halal policy badges
- [ ] Add Listing multi-step form
- [ ] For Businesses page
- [ ] Admin dashboard
- [ ] SEO metadata and JSON-LD structured data
- [ ] Marketing hooks (share, suggest, email capture)
- [ ] Prisma schema
- [ ] Database seeding

## 📁 Project Structure

```
muslim-atlas/
├── app/
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Custom Tailwind config
│   ├── browse/             # Browse all listings
│   ├── city/
│   │   └── [citySlug]/     # City pages
│   │       └── [categorySlug]/  # City + category pages
│   ├── listing/
│   │   └── [listingSlug]/  # Individual listing pages
│   ├── add-listing/        # Add new listing form
│   ├── for-businesses/     # Info page for owners
│   ├── admin/              # Admin dashboard
│   └── ...                 # Other pages
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       ├── tag-chip.tsx
│       ├── card.tsx
│       └── section-header.tsx
├── lib/
│   ├── utils.ts           # Utility functions (cn)
│   ├── types.ts           # TypeScript types & enums
│   └── constants.ts       # Categories, tags, helpers
└── prisma/
    └── schema.prisma      # (To be created)
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `rgb(22, 101, 52)` - Main brand color
- **Accent Gold**: `rgb(202, 138, 4)` - Secondary accent
- **Cream Background**: `rgb(254, 252, 247)` - Warm, calm background
- **Stone grays**: For text and borders

### Typography
- **Font**: Inter (clean sans-serif)
- **Headings**: Bold, stone-900
- **Body**: Regular, stone-600/700

## 🏷️ Ownership & Halal Policy

The app implements a **non-judgmental labeling system**:

### Badges
- `Muslim-owned (self-declared)` - Business self-identifies
- `Muslim-owned (community-verified)` - Admin verified
- `Halal Certified` - Has certification
- `Muslim-friendly` - Non-Muslim owned but serves Muslims

### Data Model Fields
```typescript
ownershipType: MUSLIM_OWNED | NON_MUSLIM_OWNED | UNKNOWN
ownershipVerification: SELF_DECLARED | COMMUNITY_VERIFIED | NONE
halalStatus: FULLY_HALAL | PARTIALLY_HALAL | NOT_HALAL | UNKNOWN
muslimFocus: boolean
halalCertified: boolean
```

## 📦 Categories

1. **Masjids & Prayer Spaces**
2. **Halal Food**
3. **Muslim Businesses & Services**
4. **Education & Programs**
5. **Online Only**

Each category has specific tags (e.g., `jumuah-available`, `fully-halal`, `weekend-school`)

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL via Prisma
- **Maps**: Leaflet + OpenStreetMap
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚦 Next Steps

1. **Complete Homepage** - Finish building the hero section and category cards
2. **Build Browse Pages** - Implement filtering and listing cards
3. **Create Listing Detail Page** - With ownership badges and policy tooltips
4. **Add Listing Form** - Multi-step form with validation
5. **SEO Implementation** - Dynamic metadata and JSON-LD
6. **Prisma Setup** - Database schema and seed data
7. **Marketing Hooks** - Share buttons, email capture, suggestion forms

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 License

TBD

---

Built with ❤️ for the global Muslim community
