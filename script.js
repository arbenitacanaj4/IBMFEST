// IBM Quantum Fall Fest 2025 - Custom JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  initSmoothScrolling()

  // Form validation and submission
  initFormValidation()

  // Navbar scroll effects
  initNavbarEffects()

  // Animation on scroll
  initScrollAnimations()

  // Workshop interest tracking
  initWorkshopTracking()

  // Enhanced smooth flowing scroll effects between sections
  initSectionScrollEffects()
})

function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // Skip if it's just "#"
      if (href === "#") return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()

        const offsetTop = target.offsetTop - 80 // Account for fixed navbar

        window.scrollTo(0, offsetTop)
      }
    })
  })
}

function initFormValidation() {
  const form = document.getElementById("regForm")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Bootstrap validation
    if (!form.checkValidity()) {
      e.stopPropagation()
      form.classList.add("was-validated")
      return
    }

    // Custom validation
    if (!validateForm()) {
      return
    }

    // Simulate form submission
    submitForm()
  })
}

function validateForm() {
  const email = document.getElementById("email").value
  const terms = document.getElementById("terms").checked

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showError("email", "Please enter a valid email address.")
    return false
  }

  // Terms validation
  if (!terms) {
    showError("terms", "You must agree to the terms and conditions.")
    return false
  }

  return true
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId)
  const feedback = field.parentNode.querySelector(".invalid-feedback")

  field.classList.add("is-invalid")
  if (feedback) {
    feedback.textContent = message
  }

  // Focus on the field
  field.focus()
}

function submitForm() {
  const submitBtn = document.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.disabled = true
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...'

  // Simulate API call
  setTimeout(() => {
    // Hide form and show success message
    document.getElementById("registrationForm").style.display = "none"
    document.getElementById("successMessage").classList.remove("d-none")

    // Scroll to success message with smooth effect
    const successElement = document.getElementById("successMessage")
    const targetPosition = successElement.offsetTop - 80
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })

    // Track registration (analytics would go here)
    console.log("[v0] Registration completed successfully")

    // Reset button (in case user goes back)
    submitBtn.disabled = false
    submitBtn.innerHTML = originalText
  }, 2000)
}

function initNavbarEffects() {
  const navbar = document.querySelector(".navbar")
  if (!navbar) return

  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Add shadow when scrolled
    if (scrollTop > 10) {
      navbar.classList.add("shadow-sm")
    } else {
      navbar.classList.remove("shadow-sm")
    }

    // Update active nav link based on scroll position
    updateActiveNavLink()

    lastScrollTop = scrollTop
  })
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  let currentSection = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Staggered animation delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add("fade-in-up")
        }, index * 100)
      }
    })
  }, observerOptions)

  // Observe cards and other elements with enhanced selectors
  const animatedElements = document.querySelectorAll(
    ".card, .timeline-item, .hero-content, .partner-logo, .venue-details",
  )
  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

function initWorkshopTracking() {
  const workshopCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="workshop"]')

  workshopCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedWorkshops = Array.from(workshopCheckboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value)

      console.log("[v0] Selected workshops:", selectedWorkshops)

      // Could send to analytics or update UI based on selections
      updateWorkshopRecommendations(selectedWorkshops)
    })
  })
}

function updateWorkshopRecommendations(selectedWorkshops) {
  // This could show related workshops or update the UI
  // For now, just log the selections
  if (selectedWorkshops.length > 0) {
    console.log("[v0] User interested in:", selectedWorkshops.join(", "))
  }
}

function initSectionScrollEffects() {
  const sections = document.querySelectorAll("section")

  // Add scroll-based parallax and fade effects
  window.addEventListener(
    "scroll",
    debounce(() => {
      const scrolled = window.pageYOffset

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const windowHeight = window.innerHeight

        // Calculate section visibility
        const sectionBottom = sectionTop + sectionHeight
        const isVisible = scrolled + windowHeight > sectionTop && scrolled < sectionBottom

        if (isVisible) {
          // Add flowing entrance animation
          section.style.opacity = "1"
          section.style.transform = "translateY(0)"
        }
      })
    }, 10),
  )

  // Initialize sections with fade-in ready state
  sections.forEach((section) => {
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("[v0] JavaScript error:", e.error)
})

// Performance monitoring
window.addEventListener("load", () => {
  console.log("[v0] Page loaded successfully")

  // Could add performance metrics here
  if ("performance" in window) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
    console.log("[v0] Page load time:", loadTime + "ms")
  }
})
