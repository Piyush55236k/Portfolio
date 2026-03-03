import React from 'react'

const footer = () => {
  return (
    <div>
       <footer className="footer">
        <a href="#top" className="back-to-top">BACK TO TOP <div className="arrow-up"></div>
</a>
        <div className="footer-icons">
          <a href="#"><img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="socialicons/icons8-github.svg" alt="Github" /></a>
          <a href="#"><img src="socialicons/icons8-facebook.svg" alt="facebook" /></a>
        </div>
        <p className="copyright">
          ©2026 Piyush Pandey All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default footer
