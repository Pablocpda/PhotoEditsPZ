-- PhotoEditsPZ Database Schema

-- 1. Table for Pricing Packages
CREATE TABLE IF NOT EXISTS packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL, -- Format: 'L 4,000'
  duration TEXT NOT NULL, -- Format: '5 horas'
  photos TEXT NOT NULL, -- Format: '70+ fotos'
  highlight BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table for Portfolio Items (Gallery)
CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL, -- 'Weddings', 'Moments'
  image_url TEXT NOT NULL,
  alt_text TEXT,
  is_featured BOOLEAN DEFAULT FALSE, -- For the slider
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table for Leads (Inquiries)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  package_id UUID REFERENCES packages(id),
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'closed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial Data for Packages (based on prototype)
INSERT INTO packages (name, price, duration, photos, highlight, display_order)
VALUES 
  ('Sencillo', 'L 1,000', '1 hora', '10+ fotos', FALSE, 1),
  ('Estándar', 'L 4,000', '5 horas', '70+ fotos', FALSE, 2),
  ('Premium', 'L 8,000', '2 sesiones / 8 horas', '150+ fotos', TRUE, 3),
  ('Deluxe', 'L 10,000', '3 sesiones / 12 horas', '200+ fotos', FALSE, 4);
