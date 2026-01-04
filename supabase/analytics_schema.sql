-- Analytics Schema for Limitless Infotech Solution
-- This schema stores user behavior and analytics data with privacy compliance

-- Table for storing user sessions
CREATE TABLE IF NOT EXISTS analytics_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_id UUID,
  anonymous_id TEXT,
  start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_time TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_sessions
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_session_id ON analytics_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_user_id ON analytics_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_anonymous_id ON analytics_sessions(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_start_time ON analytics_sessions(start_time);

-- Table for storing page views
CREATE TABLE IF NOT EXISTS analytics_page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES analytics_sessions(id) ON DELETE CASCADE,
  user_id UUID,
  anonymous_id TEXT,
  page_url TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  ip_address INET,
  user_agent TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER,
  screen_width INTEGER,
  screen_height INTEGER,
  device_type TEXT,
  browser TEXT,
  browser_version TEXT,
  os TEXT,
  os_version TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  load_time_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_page_views
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_session_id ON analytics_page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_user_id ON analytics_page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_anonymous_id ON analytics_page_views(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_page_url ON analytics_page_views(page_url);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_created_at ON analytics_page_views(created_at);

-- Table for storing custom events
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES analytics_sessions(id) ON DELETE CASCADE,
  user_id UUID,
  anonymous_id TEXT,
  event_name TEXT NOT NULL,
  event_category TEXT,
  event_label TEXT,
  event_value INTEGER,
  properties JSONB,
  ip_address INET,
  user_agent TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_events
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_anonymous_id ON analytics_events(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);

-- Table for storing user interactions (clicks, scrolls, etc.)
CREATE TABLE IF NOT EXISTS analytics_interactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES analytics_sessions(id) ON DELETE CASCADE,
  user_id UUID,
  anonymous_id TEXT,
  interaction_type TEXT NOT NULL, -- 'click', 'scroll', 'hover', 'form_submit', etc.
  element_id TEXT,
  element_class TEXT,
  element_tag TEXT,
  element_text TEXT,
  page_url TEXT,
  x_position INTEGER,
  y_position INTEGER,
  scroll_depth_percentage INTEGER,
  ip_address INET,
  user_agent TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_interactions
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_session_id ON analytics_interactions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_user_id ON analytics_interactions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_anonymous_id ON analytics_interactions(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_interaction_type ON analytics_interactions(interaction_type);
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_page_url ON analytics_interactions(page_url);
CREATE INDEX IF NOT EXISTS idx_analytics_interactions_created_at ON analytics_interactions(created_at);

-- Table for storing form submissions
CREATE TABLE IF NOT EXISTS analytics_form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES analytics_sessions(id) ON DELETE CASCADE,
  user_id UUID,
  anonymous_id TEXT,
  form_id TEXT,
  form_name TEXT,
  form_action TEXT,
  form_fields JSONB,
  submission_success BOOLEAN,
  submission_error TEXT,
  ip_address INET,
  user_agent TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_form_submissions
CREATE INDEX IF NOT EXISTS idx_analytics_form_submissions_session_id ON analytics_form_submissions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_form_submissions_user_id ON analytics_form_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_form_submissions_anonymous_id ON analytics_form_submissions(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_form_submissions_form_name ON analytics_form_submissions(form_name);
CREATE INDEX IF NOT EXISTS idx_analytics_form_submissions_created_at ON analytics_form_submissions(created_at);

-- Table for storing user privacy preferences
CREATE TABLE IF NOT EXISTS analytics_user_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID UNIQUE,
  anonymous_id TEXT UNIQUE,
  tracking_consent BOOLEAN DEFAULT true,
  data_sharing_consent BOOLEAN DEFAULT true,
  marketing_consent BOOLEAN DEFAULT false,
  analytics_consent BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_user_preferences
CREATE INDEX IF NOT EXISTS idx_analytics_user_preferences_user_id ON analytics_user_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_user_preferences_anonymous_id ON analytics_user_preferences(anonymous_id);

-- Table for storing conversion data
CREATE TABLE IF NOT EXISTS analytics_conversions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES analytics_sessions(id) ON DELETE CASCADE,
  user_id UUID,
  anonymous_id TEXT,
  conversion_name TEXT NOT NULL,
  conversion_value DECIMAL(10, 2),
  currency TEXT DEFAULT 'USD',
  properties JSONB,
  ip_address INET,
  user_agent TEXT,
  country_code CHAR(2),
  region TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for analytics_conversions
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_session_id ON analytics_conversions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_user_id ON analytics_conversions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_anonymous_id ON analytics_conversions(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_conversion_name ON analytics_conversions(conversion_name);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_created_at ON analytics_conversions(created_at);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to update updated_at timestamp
CREATE TRIGGER update_analytics_sessions_updated_at 
    BEFORE UPDATE ON analytics_sessions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_analytics_user_preferences_updated_at 
    BEFORE UPDATE ON analytics_user_preferences 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS policies for analytics tables (to ensure data isolation)
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_conversions ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS (these are examples - adjust based on your auth system)
-- For now, we'll allow all access for development, but in production these should be more restrictive
CREATE POLICY "Allow all access to analytics_sessions for authenticated users" ON analytics_sessions
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_page_views for authenticated users" ON analytics_page_views
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_events for authenticated users" ON analytics_events
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_interactions for authenticated users" ON analytics_interactions
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_form_submissions for authenticated users" ON analytics_form_submissions
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_user_preferences for authenticated users" ON analytics_user_preferences
    FOR ALL USING (true);

CREATE POLICY "Allow all access to analytics_conversions for authenticated users" ON analytics_conversions
    FOR ALL USING (true);