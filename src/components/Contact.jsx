import React from 'react';

export default function Contact() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>Email: <a className="text-blue-500" href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a className="text-blue-500" href="https://linkedin.com/in/yourname">/yourname</a></p>
    </div>
  );
}