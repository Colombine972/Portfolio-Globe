USE portfolio;

CREATE TABLE contact_message (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category ENUM('wizdle', 'portfolio', 'general', 'cv') NOT NULL,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
