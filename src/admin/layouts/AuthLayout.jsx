import { useEffect } from "react"

function AuthLayout({ children }) {

  useEffect(() => {

    // Frontend CSS disable karo
    const frontendLinks = document.querySelectorAll('link[rel="stylesheet"]')
    frontendLinks.forEach(link => {
      link.setAttribute('data-disabled', 'true')
      link.disabled = true
    })

    // Admin CSS load karo
    const adminCSS = document.createElement('link')
    adminCSS.rel = 'stylesheet'
    adminCSS.href = '/admin-assets/css/portal.css'
    adminCSS.id = 'admin-portal-css'
    document.head.appendChild(adminCSS)

    // Admin FontAwesome
    const adminFA = document.createElement('script')
    adminFA.src = '/admin-assets/plugins/fontawesome/js/all.min.js'
    adminFA.id = 'admin-fontawesome-js'
    document.head.appendChild(adminFA)

    return () => {
      document.getElementById('admin-portal-css')?.remove()
      document.getElementById('admin-fontawesome-js')?.remove()

      const disabledLinks = document.querySelectorAll('link[data-disabled="true"]')
      disabledLinks.forEach(link => {
        link.disabled = false
        link.removeAttribute('data-disabled')
      })
    }

  }, [])

  return (
    <div className="app app-login p-0">
      {children}
    </div>
  )
}

export default AuthLayout