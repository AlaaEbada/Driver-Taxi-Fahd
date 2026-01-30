# 📁 Next.js Project Structure
## Italy Driver Connect - Complete File Organization

---

## 🌳 Current Structure (After Copy)

```
italy-driver-connect-nextjs/
├── 📁 public/
│   ├── 📁 assets/                    # ✅ Copied from React src/assets
│   ├── favicon.ico
│   ├── lovable-uploads/
│   ├── placeholder.svg
│   └── robots.txt
│
├── 📁 src/
│   ├── 📁 app/                       # ⚠️ NEEDS SETUP
│   │   ├── favicon.ico
│   │   ├── globals.css               # ✅ Copied (was index.css)
│   │   ├── layout.tsx                # ⚠️ Needs update
│   │   └── page.tsx                  # ⚠️ Needs conversion
│   │
│   ├── 📁 components/                # ✅ All copied
│   │   ├── 📁 ui/                    # ✅ 49 shadcn components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (41 more)
│   │   │
│   │   ├── 📁 home/                  # ✅ Home page components
│   │   │   ├── BookingForm.tsx
│   │   │   ├── FeaturedTours.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   │
│   │   ├── 📁 blog/                  # ✅ Blog components
│   │   │   └── BlogCard.tsx
│   │   │
│   │   ├── 📁 tours/                 # ✅ Tour components
│   │   │   └── TourCard.tsx
│   │   │
│   │   ├── 📁 admin/                 # ✅ Admin components
│   │   │   ├── AdminHeader.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── RichTextEditor.tsx
│   │   │
│   │   ├── 📁 shared/                # ✅ Shared components
│   │   │   ├── LanguageSelector.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── SEO.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   │
│   │   └── 📁 layout/                # ✅ Layout components
│   │       ├── Footer.tsx
│   │       ├── MobileNav.tsx
│   │       ├── Navbar.tsx
│   │       └── Navigation.tsx
│   │
│   ├── 📁 contexts/                  # ✅ Copied (needs "use client")
│   │   ├── AuthContext.tsx
│   │   └── LanguageContext.tsx
│   │
│   ├── 📁 hooks/                     # ✅ Copied (needs "use client")
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   ├── useLanguage.ts
│   │   └── useTranslation.ts
│   │
│   ├── 📁 integrations/              # ✅ Supabase integration
│   │   └── 📁 supabase/
│   │       ├── client.ts
│   │       └── types.ts
│   │
│   ├── 📁 lib/                       # ✅ Utilities
│   │   └── utils.ts
│   │
│   └── 📁 pages-react-reference/     # ✅ Original React pages
│       ├── About.tsx
│       ├── Blog.tsx
│       ├── BlogPost.tsx
│       ├── Contact.tsx
│       ├── FAQ.tsx
│       ├── Index.tsx
│       ├── NotFound.tsx
│       ├── Privacy.tsx
│       ├── Terms.tsx
│       ├── TourDetail.tsx
│       ├── Tours.tsx
│       ├── DriverFlorence.tsx
│       ├── DriverItaly.tsx
│       ├── DriverMilan.tsx
│       ├── DriverNaples.tsx
│       ├── DriverRome.tsx
│       ├── DriverVenice.tsx
│       └── 📁 admin/
│           ├── AdminCategories.tsx
│           ├── AdminDashboard.tsx
│           ├── AdminInquiries.tsx
│           ├── AdminLogin.tsx
│           ├── AdminPostEditor.tsx
│           ├── AdminPosts.tsx
│           ├── AdminSettings.tsx
│           ├── AdminTourEditor.tsx
│           └── AdminTours.tsx
│
├── 📁 supabase/                      # ✅ Database setup
│   ├── 📁 functions/
│   ├── 📁 migrations/
│   └── config.toml
│
├── .env                              # ✅ Environment variables
├── .gitignore
├── components.json                   # ✅ shadcn/ui config
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts                # ✅ Custom luxury theme
├── tsconfig.json
├── MIGRATION_GUIDE.md                # ✅ This guide
└── README.md

```

---

## 🎯 Target Structure (After Migration)

```
italy-driver-connect-nextjs/
├── 📁 src/
│   └── 📁 app/
│       ├── layout.tsx                # Root layout with providers
│       ├── page.tsx                  # Home page
│       ├── globals.css
│       ├── not-found.tsx             # 404 page
│       │
│       ├── 📁 (public)/              # Public pages group
│       │   ├── layout.tsx            # Navbar + Footer layout
│       │   ├── about/
│       │   │   └── page.tsx
│       │   ├── contact/
│       │   │   └── page.tsx
│       │   ├── faq/
│       │   │   └── page.tsx
│       │   ├── privacy/
│       │   │   └── page.tsx
│       │   ├── terms/
│       │   │   └── page.tsx
│       │   │
│       │   ├── 📁 blog/
│       │   │   ├── page.tsx          # Blog listing
│       │   │   ├── [slug]/
│       │   │   │   └── page.tsx      # Single blog post
│       │   │   └── category/
│       │   │       └── [categorySlug]/
│       │   │           └── page.tsx  # Category listing
│       │   │
│       │   ├── 📁 tours/
│       │   │   ├── page.tsx          # Tours listing
│       │   │   ├── [slug]/
│       │   │   │   └── page.tsx      # Single tour
│       │   │   └── category/
│       │   │       └── [categorySlug]/
│       │   │           └── page.tsx  # Category listing
│       │   │
│       │   └── 📁 driver-[city]/     # Driver pages
│       │       ├── driver-italy/page.tsx
│       │       ├── driver-rome/page.tsx
│       │       ├── driver-milan/page.tsx
│       │       ├── driver-florence/page.tsx
│       │       ├── driver-venice/page.tsx
│       │       └── driver-naples/page.tsx
│       │
│       ├── 📁 admin/                 # Admin section
│       │   ├── layout.tsx            # Admin layout with sidebar
│       │   ├── page.tsx              # Dashboard
│       │   ├── login/
│       │   │   └── page.tsx
│       │   ├── posts/
│       │   │   ├── page.tsx          # Posts listing
│       │   │   └── [id]/
│       │   │       └── page.tsx      # Post editor
│       │   ├── tours/
│       │   │   ├── page.tsx          # Tours listing
│       │   │   └── [id]/
│       │   │       └── page.tsx      # Tour editor
│       │   ├── categories/
│       │   │   └── page.tsx
│       │   ├── inquiries/
│       │   │   └── page.tsx
│       │   └── settings/
│       │       └── page.tsx
│       │
│       └── 📁 api/                   # API routes
│           ├── contact/
│           │   └── route.ts
│           ├── posts/
│           │   └── route.ts
│           └── tours/
│               └── route.ts
│
├── 📁 middleware.ts                  # Route protection
└── ... (rest same as current)
```

---

## 📝 File Naming Conventions

### Next.js Special Files

| File | Purpose | Example |
|------|---------|---------|
| `layout.tsx` | Shared UI for routes | `app/layout.tsx` |
| `page.tsx` | Unique page content | `app/about/page.tsx` |
| `loading.tsx` | Loading UI | `app/blog/loading.tsx` |
| `error.tsx` | Error UI | `app/blog/error.tsx` |
| `not-found.tsx` | 404 UI | `app/not-found.tsx` |
| `route.ts` | API endpoint | `app/api/contact/route.ts` |

### Dynamic Routes

| Pattern | Example | Matches |
|---------|---------|---------|
| `[slug]` | `blog/[slug]/page.tsx` | `/blog/my-post` |
| `[id]` | `admin/posts/[id]/page.tsx` | `/admin/posts/123` |
| `[...slug]` | `docs/[...slug]/page.tsx` | `/docs/a/b/c` |

---

## 🔧 Component Organization

### Server Components (Default)
```
src/components/
├── blog/
│   └── BlogCard.tsx              # Can be Server Component
├── tours/
│   └── TourCard.tsx              # Can be Server Component
└── shared/
    └── SEO.tsx                   # Not needed (use metadata)
```

### Client Components (Need "use client")
```
src/components/
├── ui/                           # All need "use client"
│   ├── button.tsx
│   ├── dialog.tsx
│   └── ...
├── home/
│   └── BookingForm.tsx           # Interactive form
├── admin/
│   └── RichTextEditor.tsx        # Interactive editor
└── shared/
    ├── LanguageSelector.tsx      # Interactive
    └── WhatsAppButton.tsx        # Interactive
```

---

## 🗂️ Route Groups

### (public) Group
- **Purpose**: Share Navbar + Footer layout
- **Files**: All public-facing pages
- **Layout**: `app/(public)/layout.tsx`

### admin Group
- **Purpose**: Admin dashboard with sidebar
- **Files**: All admin pages
- **Layout**: `app/admin/layout.tsx`
- **Protection**: Via middleware

---

## 📦 Asset Organization

### Public Assets
```
public/
├── assets/                       # Images, icons
│   ├── images/
│   ├── icons/
│   └── logos/
├── lovable-uploads/              # User uploads
├── favicon.ico
├── robots.txt
└── sitemap.xml                   # Generate with Next.js
```

### Import Paths
```typescript
// Images
import Image from 'next/image'
<Image src="/assets/images/hero.jpg" ... />

// Icons (if using public)
<img src="/assets/icons/star.svg" />

// Or use lucide-react for icons
import { Star } from 'lucide-react'
<Star className="w-4 h-4" />
```

---

## 🔐 Environment Variables

### .env.local (Create this)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Private (Server-only)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Rules
- `NEXT_PUBLIC_*` - Accessible in browser
- No prefix - Server-only
- Never commit `.env.local`

---

## 🎨 Styling Organization

### Global Styles
```
src/app/globals.css               # Main styles
├── @tailwind directives
├── CSS variables (luxury theme)
├── Component styles
└── Utility classes
```

### Component Styles
```typescript
// Use Tailwind classes
<div className="bg-navy text-gold p-4 rounded-lg">

// Use CSS variables
<div style={{ background: 'var(--gradient-gold)' }}>

// Use custom classes
<button className="btn-luxury">
```

---

## 📚 Import Aliases

### Configured Aliases
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Usage
```typescript
// Components
import { Button } from '@/components/ui/button'
import Hero from '@/components/home/Hero'

// Utilities
import { cn } from '@/lib/utils'

// Contexts
import { useLanguage } from '@/contexts/LanguageContext'

// Integrations
import { supabase } from '@/integrations/supabase/client'
```

---

## 🚀 Development Workflow

### 1. Start Development
```bash
cd italy-driver-connect-nextjs
npm run dev
```

### 2. File Creation Order
1. Create layouts first
2. Create simple pages (About, Contact)
3. Create dynamic pages (Blog, Tours)
4. Create admin pages
5. Add API routes
6. Add middleware

### 3. Testing Routes
```
http://localhost:3000              # Home
http://localhost:3000/about        # About
http://localhost:3000/blog         # Blog
http://localhost:3000/blog/slug    # Blog post
http://localhost:3000/admin        # Admin (protected)
```

---

## ✅ Migration Checklist by Folder

### Phase 1: Layouts
- [ ] `app/layout.tsx` - Root layout
- [ ] `app/(public)/layout.tsx` - Public layout
- [ ] `app/admin/layout.tsx` - Admin layout

### Phase 2: Public Pages
- [ ] `app/page.tsx` - Home
- [ ] `app/(public)/about/page.tsx`
- [ ] `app/(public)/contact/page.tsx`
- [ ] `app/(public)/faq/page.tsx`
- [ ] `app/(public)/privacy/page.tsx`
- [ ] `app/(public)/terms/page.tsx`

### Phase 3: Driver Pages
- [ ] `app/(public)/driver-italy/page.tsx`
- [ ] `app/(public)/driver-rome/page.tsx`
- [ ] `app/(public)/driver-milan/page.tsx`
- [ ] `app/(public)/driver-florence/page.tsx`
- [ ] `app/(public)/driver-venice/page.tsx`
- [ ] `app/(public)/driver-naples/page.tsx`

### Phase 4: Blog System
- [ ] `app/(public)/blog/page.tsx`
- [ ] `app/(public)/blog/[slug]/page.tsx`
- [ ] `app/(public)/blog/category/[categorySlug]/page.tsx`

### Phase 5: Tours System
- [ ] `app/(public)/tours/page.tsx`
- [ ] `app/(public)/tours/[slug]/page.tsx`
- [ ] `app/(public)/tours/category/[categorySlug]/page.tsx`

### Phase 6: Admin System
- [ ] `app/admin/login/page.tsx`
- [ ] `app/admin/page.tsx`
- [ ] `app/admin/posts/page.tsx`
- [ ] `app/admin/posts/[id]/page.tsx`
- [ ] `app/admin/tours/page.tsx`
- [ ] `app/admin/tours/[id]/page.tsx`
- [ ] `app/admin/categories/page.tsx`
- [ ] `app/admin/inquiries/page.tsx`
- [ ] `app/admin/settings/page.tsx`

### Phase 7: API & Middleware
- [ ] `app/api/contact/route.ts`
- [ ] `middleware.ts`

---

**Status**: 🟢 Structure Ready - Begin Migration

**Next Step**: Install dependencies and create layouts
