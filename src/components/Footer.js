import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className="container-fluid footer">
        <footer className="py-3 ">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            </ul>
            <p className="text-center text-muted">&copy; {new Date().getFullYear()} Javier Bruzzese</p>
        </footer>
</div>

    </>
  )
}
