import React from 'react'

const contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-header">
          <h1>CONTACT</h1>

          <div className="divider">
            <span></span>
            <span className="diamond">W</span>
            <span></span>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="ENTER YOUR NAME" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="ENTER YOUR EMAIL" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="PHONE NUMBER" />
          </div>
          <div className="input-group textarea">
            <textarea placeholder="YOUR MESSAGE" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span></span>
            SUBMIT
            <span></span>
          </button>
        </form>
      </section>
    </div>
  )
}

export default contact
