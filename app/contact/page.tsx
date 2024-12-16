'use client';
import { useState } from 'react';
import styles from './contacts.module.css';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.headline}>We&apos;d Love to Hear from You!</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h2>Contact Details</h2>
          <div className={styles.infoGroup}>
            <p><strong>Email:</strong> organization@email.com</p>
            <p><strong>Phone:</strong> +2567 8987 4932</p>
          </div>

          <h2>Social Media</h2>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/MentalHealthFamily" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/refugementalhealthnetwork" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/RefugeeMHNetwrk" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://linkedin.com/company/refugee-mental-health-network" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com/c/RefugeeMentalHealthNetwork" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>

          <h2>Physical Address</h2>
          <p>Based in Kampala, Uganda</p>
        </div>
      </div>
    </div>
  );
}
