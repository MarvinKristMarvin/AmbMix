CREATE TABLE sounds (
    id SERIAL PRIMARY KEY,             -- Unique identifier for each sound
    name VARCHAR(255) NOT NULL,        -- Name of the sound
    path TEXT NOT NULL,           -- Path to the sound file               -- Format of the sound file (e.g., mp3, wav)
    created_at TIMESTAMP DEFAULT NOW(), -- Timestamp when the record is created
    updated_at TIMESTAMP DEFAULT NOW()  -- Timestamp when the record is updated
);