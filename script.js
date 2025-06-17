// Initialize EmailJS with your actual public key
(() => {
  emailjs.init("4uGJVD26Ux4cNZlrT") // Your actual public key
})()

// Movie database with detailed information
const movieDatabase = {

  "Lucky Baskhar": {
    title: "Lucky Baskhar",
    year: "2024",
    genre: "Comedy-Drama",
    rating: "8.0/10",
    duration: "2h 31m",
    director: "Venky Atluri",
    cast: "Dulquer Salmaan, Meenakshi Chaudhary, Ramki....",
    music: "G.V. Prakash Kumar",
    description:
      "Lucky Bhaskar is a comedy-drama about an honest bank employee who gets entangled in risky financial schemes to support his family. The film explores themes of morality, family values, and the lengths one goes to secure their loved ones' future.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://youtu.be/Kv5RKsqVe-Y?si=ohWjuN6TdBUD8id-",
    fullMovie: "https://www.dailymotion.com/video/x9dcy5i",
    downloadLink: "https://www.5movierulz.lgbt/lucky-baskhar-2024-telugu/movie-watch-online-free-3812.html",
    streamingPlatforms: ["Netflix"],
  },

  "Hi Nanna": {
    title: "Hi Nanna",
    year: "2023",
    genre: "Family Drama",
    rating: "8.2/10",
    duration: "2h 35m",
    director: "Shouryuv",
    cast: "Nani, Mrunal Thakur, Kiara Khanna",
    music: "Hesham Abdul Wahab",
    description:
      "A heartfelt story about a father's love and a daughter's curiosity surrounding her missing mother. The film beautifully portrays the bond between a single father and his daughter while exploring themes of love, loss, and family.",
    poster: "https://femmeflicks.com/wp-content/uploads/2024/02/Hi-Nanna-Movie.jpg",
    trailer: "https://youtu.be/Iz97_kxHaSc?si=jrnrMo0mRww9jOH6",
    fullMovie: "https://www.dailymotion.com/video/x8rnj5d",
    downloadLink: "https://www.5movierulz.lgbt/hi-nanna-2023-telugu/movie-watch-online-free-1670.html",
    streamingPlatforms: ["Netflix"],
  },

  "Rakshasudu": {
    title: "Rakshasudu",
    year: "2019",
    genre: "Psychological Thriller",
    rating: "7.9/10",
    duration: "2h 27m",
    director: "Ramesh Varma",
    cast: "Bellamkonda Sai Srinivas, Anupama Parameswaran, Adah Sharma",
    music: "Ghibran",
    description:
      "Rakshasudu is a Telugu psychological thriller about a police officer hunting a serial killer targeting teenagers. The film is a gripping tale of cat and mouse between law enforcement and a cunning psychopath.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWE2ZjY1NTEtZWRjMy00M2RkLWJkODYtNzFmMWNiODNmNjUxXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://youtu.be/DF6dmkWXTlY?si=wgsOfhU-8QMN51lU",
    fullMovie: "https://www.dailymotion.com/video/x93u6ae",
    downloadLink: "https://youtu.be/v6f66NY6MpU?si=xsGjpMY4U9inI4xw",
    streamingPlatforms: ["Zee5"],
  },


  "Sita Ramam": {
    title: "Sita Ramam",
    year: "2022",
    genre: "Romance, Drama",
    rating: "8.5/10",
    duration: "2h 43m",
    director: "Hanu Raghavapudi",
    cast: "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna....",
    music: "Vishal Chandrasekhar",
    description:
      "Sita Ramam is a heart-touching romance set in 1964 about an army officer and a mysterious love letter that changes lives. The film beautifully captures the essence of pure love and sacrifice against the backdrop of war.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWE0NDNiNzEtNThmMi00NjZlLTk3NDAtYzIzOWNmNWQyYTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://youtu.be/Ljk6tGZ1l3A?si=ELwCCZFNJNu24jHQ",
    fullMovie: "https://www.mxplayer.in/movie/watch-sita-ramam-movie-online-9c644f2c28410f9321fd9b572cf17e85?watch=true&utm_source=google_web&utm_medium=watchaction",
    downloadLink:"https://www.mxplayer.in/movie/watch-sita-ramam-movie-online-9c644f2c28410f9321fd9b572cf17e85?watch=true&utm_source=google_web&utm_medium=watchaction",
    streamingPlatforms: ["Amazon Prime", "JioHotstar", "Mx Player"],
  },

  "Snehitudu": {
    title: "Snehitudu",
    year: "2012",
    genre: "Drama, Comedy",
    rating: "7.8/10",
    duration: "3h 08m",
    director: "S Shankar",
    cast: "Vijay, Jiiva , Srikanth, Ileana D'Cruz , Sathyan , Sathyaraj....",
    music: "Mahesh Shankar",
    description:
      "Snehitudu is a Telugu film that explores the themes of friendship, love, and the journey of self-discovery. The story follows the emotional journey of relationships and personal growth.",
    poster: "https://images.filmibeat.com/img/popcorn/fan_images/1729_20111226_38674300_snehithudu.JPG",
    trailer: "https://youtu.be/eYZ_bP9xGpQ?si=VtZe2JXq_TeaXaer",
    fullMovie: "https://youtu.be/zVm9IFaAJlo?si=C8B6C56Urdx4sIGZ",
    downloadLink: "https://youtu.be/zVm9IFaAJlo?si=C8B6C56Urdx4sIGZ",
    streamingPlatforms: ["Amazon Prime", "JioHotstar"],
  },

  "Geetha Govindam": {
    title: "Geetha Govindam",
    year: "2018",
    genre: "Romantic Comedy",
    rating: "8.3/10",
    duration: "2h 28m",
    director: "Parasuram",
    cast: "Vijay Deverakonda, Rashmika Mandanna, Subbaraju...",
    music: "Gopi Sundar",
    description:
      "Geetha Govindam is a romantic comedy about a young man who falls in love with a woman who is already engaged to be married. The film is filled with humor, romance, and memorable characters.",
    poster: "https://images.filmibeat.com/img/popcorn/fan_images/movie/17251/geetha-govindam-photos-images-61960.jpg",
    trailer: "https://youtu.be/OYK2eJ0oeg8?si=yUM_2fPgxkMyhy3k",
    fullMovie: "https://youtu.be/omSw8I20aqw?si=xShjECrTJIIWw7Xp",
    downloadLink: "https://youtu.be/omSw8I20aqw?si=xShjECrTJIIWw7Xp",
    streamingPlatforms: ["Zee5", "JioHotstar"],
  },

  "Jersey": {
    title: "Jersey",
    year: "2019",
    genre: "Sports Drama",
    rating: "8.5/10",
    duration: "2h 40m",
    director: "Gowtam Tinnanuri",
    cast: "Nani, Shraddha Srinath, Harish Kalyan...",
    music: "Anirudh Ravichander",
    description:
      "Jersey is a sports drama about a cricketer who returns to the game in his 30s to fulfill his son's dream. The film is an inspiring tale of determination, family bonds, and never giving up on dreams.",
    poster: "https://www.idlebrain.com/movie/photogallery/posters-jersey/images/th_posters-jersey8.jpg",
    trailer: "https://youtu.be/AjAe_Q1WZ_8?si=6SWOOgjNywl-eEeY",
    fullMovie: "https://youtu.be/kzv4lqpKi6k?si=_rR8iLu5xDM8TtZy",
    downloadLink: "https://youtu.be/kzv4lqpKi6k?si=_rR8iLu5xDM8TtZy",
    streamingPlatforms: ["Mx Player", "Amazon Prime", "Zee5", "JioHotstar"],
  },

  "Rangasthalam": {
    title: "Rangasthalam",
    year: "2018",
    genre: "Period Action Drama",
    rating: "8.2/10",
    duration: "2h 59m",
    director: "Sukumar",
    cast: "Ram Charan, Samantha Ruth Prabhu, Aadhi Pinisetty",
    music: "Devi Sri Prasad",
    description:
      "Rangasthalam is a period action drama set in the 1980s, focusing on the power struggle in a rural village. The film showcases excellent performances and authentic village atmosphere.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjhhYjdjYTgtNDMzYy00ODI5LWJjYjMtNGJmOTIyYTZmNGQ3XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://youtu.be/sueMmTm-M4Y?si=kiLi4iTJBPz9GLAC",
    fullMovie: "https://archive.org/details/rangasthalam_202106",
    downloadLink: "https://archive.org/details/rangasthalam_202106",
    streamingPlatforms: ["Amazon Prime", "JioHotstar"],
  },
}


// NEW: Show detailed movie information
function showMovieDetails(movieTitle) {
  const movie = movieDatabase[movieTitle]
  if (!movie) {
    alert("Movie details not available")
    return
  }

  // Populate modal with movie details
  document.getElementById("movieDetailsTitle").textContent = movie.title
  document.getElementById("movieDetailsPoster").src = movie.poster
  document.getElementById("movieDetailsPoster").alt = movie.title
  document.getElementById("movieDetailsName").textContent = movie.title
  document.getElementById("movieDetailsYear").textContent = movie.year
  document.getElementById("movieDetailsGenre").textContent = movie.genre
  document.getElementById("movieDetailsRating").textContent = `⭐ ${movie.rating}`
  document.getElementById("movieDetailsDuration").textContent = movie.duration
  document.getElementById("movieDetailsDescription").textContent = movie.description
  document.getElementById("movieDetailsDirector").textContent = movie.director
  document.getElementById("movieDetailsCast").textContent = movie.cast
  document.getElementById("movieDetailsMusic").textContent = movie.music

  // Set links
  document.getElementById("movieTrailerLink").href = movie.trailer
  document.getElementById("movieFullLink").href = movie.fullMovie
  document.getElementById("movieDownloadLink").href = movie.downloadLink

  // Populate streaming platforms
  const streamingContainer = document.getElementById("movieStreamingPlatforms")
  streamingContainer.innerHTML = ""
  movie.streamingPlatforms.forEach((platform) => {
    const platformElement = document.createElement("span")
    platformElement.className = "streaming-platform"
    platformElement.textContent = platform
    streamingContainer.appendChild(platformElement)
  })

  // Update watchlist button
  const watchlistBtn = document.getElementById("movieDetailsWatchlistBtn")
  const isInWatchlist = isMovieInWatchlist(movieTitle)
  if (isInWatchlist) {
    watchlistBtn.textContent = "❌ Remove from Watchlist"
    watchlistBtn.className = "watchlist-btn remove"
  } else {
    watchlistBtn.textContent = "❤️ Add to Watchlist"
    watchlistBtn.className = "watchlist-btn"
  }

  watchlistBtn.onclick = () => {
    toggleWatchlist(movie.title, movie.poster, movie.year, movie.description, movie.trailer)
    // Update button after toggle
    const isNowInWatchlist = isMovieInWatchlist(movieTitle)
    if (isNowInWatchlist) {
      watchlistBtn.textContent = "❌ Remove from Watchlist"
      watchlistBtn.className = "watchlist-btn remove"
    } else {
      watchlistBtn.textContent = "❤️ Add to Watchlist"
      watchlistBtn.className = "watchlist-btn"
    }
  }

  // Show modal
  document.getElementById("movieDetailsModal").style.display = "block"
}

function closeMovieDetails() {
  document.getElementById("movieDetailsModal").style.display = "none"
}

// Original functions (keeping exactly as provided)
function showMovieAlert(title) {
  alert("You clicked on: " + title)
}

function suggestRandomMovie() {
  const movies = [
    "Lucky Baskhar",
    "Snehithudu",
    "Rakshasudu",
    "Jersey",
    "Sita Ramam",
    "Rangasthalam",
    "Geetha Govindam",
    "Hi Nanna",
  ]
  const index = Math.floor(Math.random() * movies.length)
  alert("🎬 Suggested Movie: " + movies[index])
}

// NEW: Enhanced Watchlist functionality with movie details
function getWatchlist() {
  const watchlist = localStorage.getItem("teluguMovieWatchlist")
  return watchlist ? JSON.parse(watchlist) : []
}

function saveWatchlist(watchlist) {
  localStorage.setItem("teluguMovieWatchlist", JSON.stringify(watchlist))
}

function isMovieInWatchlist(movieTitle) {
  const watchlist = getWatchlist()
  return watchlist.some((movie) => movie.title === movieTitle)
}

function toggleWatchlist(title, poster, year, description, trailer) {
  let watchlist = getWatchlist()
  const movieExists = watchlist.some((movie) => movie.title === title)

  if (movieExists) {
    // Remove from watchlist
    watchlist = watchlist.filter((movie) => movie.title !== title)
  } else {
    // Add to watchlist with full details
    watchlist.push({
      title: title,
      poster: poster,
      year: year,
      description: description,
      trailer: trailer,
    })
  }

  saveWatchlist(watchlist)
  updateWatchlistButtons()
  updateWatchlistCount()
  renderWatchlistModal()
}

function updateWatchlistButtons() {
  const watchlistButtons = document.querySelectorAll(".watchlist-btn")

  watchlistButtons.forEach((button) => {
    const onclickAttr = button.getAttribute("onclick")
    if (onclickAttr) {
      const titleMatch = onclickAttr.match(/'([^']+)'/)
      if (titleMatch) {
        const movieTitle = titleMatch[1]
        const isInWatchlist = isMovieInWatchlist(movieTitle)

        if (isInWatchlist) {
          button.textContent = "❌ Remove from Watchlist"
          button.classList.add("remove")
        } else {
          button.textContent = "❤️ Add to Watchlist"
          button.classList.remove("remove")
        }
      }
    }
  })
}

function updateWatchlistCount() {
  const watchlist = getWatchlist()
  const countElement = document.getElementById("watchlistCount")
  if (countElement) {
    countElement.textContent = watchlist.length
  }
}

// NEW: Modal functionality
function toggleWatchlistModal() {
  const modal = document.getElementById("watchlistModal")
  if (modal.style.display === "block") {
    modal.style.display = "none"
  } else {
    modal.style.display = "block"
    renderWatchlistModal()
  }
}

function renderWatchlistModal() {
  const watchlist = getWatchlist()
  const watchlistMovies = document.getElementById("watchlistMovies")
  const emptyWatchlist = document.getElementById("emptyWatchlist")

  if (watchlist.length === 0) {
    watchlistMovies.innerHTML = '<p class="empty-watchlist">Your watchlist is empty. Add some movies!</p>'
  } else {
    let moviesHTML = ""
    watchlist.forEach((movie) => {
      moviesHTML += `
        <div class="movie-card">
          <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-year">${movie.year}</p>
          <p class="movie-description">${movie.description}</p>
          <a href="${movie.trailer}" target="_blank" class="trailer-link">Watch Trailer</a>
          <button class="watchlist-btn remove" onclick="removeFromWatchlist('${movie.title}')">
            ❌ Remove from Watchlist
          </button>
        </div>
      `
    })
    watchlistMovies.innerHTML = moviesHTML
  }
}

function removeFromWatchlist(movieTitle) {
  let watchlist = getWatchlist()
  watchlist = watchlist.filter((movie) => movie.title !== movieTitle)
  saveWatchlist(watchlist)
  updateWatchlistButtons()
  updateWatchlistCount()
  renderWatchlistModal()
}

// Close modal when clicking outside
window.onclick = (event) => {
  const watchlistModal = document.getElementById("watchlistModal")
  const movieDetailsModal = document.getElementById("movieDetailsModal")

  if (event.target === watchlistModal) {
    watchlistModal.style.display = "none"
  }
  if (event.target === movieDetailsModal) {
    movieDetailsModal.style.display = "none"
  }
}

// NEW: Movie Suggestion form functionality with EmailJS
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function clearErrors() {
  document.getElementById("nameError").textContent = ""
  document.getElementById("emailError").textContent = ""
  document.getElementById("movieNameError").textContent = ""
  document.getElementById("messageError").textContent = ""
}

function validateSuggestionForm(formData) {
  clearErrors()
  let isValid = true

  const name = formData.get("name").trim()
  const email = formData.get("email").trim()
  const movieName = formData.get("movieName").trim()
  const message = formData.get("message").trim()

  // Validate name
  if (!name) {
    document.getElementById("nameError").textContent = "Name is required"
    isValid = false
  }

  // Validate email
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required"
    isValid = false
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate movie name (now required)
  if (!movieName) {
    document.getElementById("movieNameError").textContent = "Movie name is required"
    isValid = false
  }

  // Validate message
  if (!message) {
    document.getElementById("messageError").textContent = "Movie description/recommendation is required"
    isValid = false
  } else if (message.length < 20) {
    document.getElementById("messageError").textContent =
      "Please provide more details about the movie (at least 20 characters)"
    isValid = false
  }

  return isValid
}

function handleSuggestionForm(event) {
  event.preventDefault()
  const suggestionForm = document.getElementById("contactForm")
  const successMessage = document.getElementById("successMessage")
  const submitBtn = suggestionForm.querySelector(".submit-btn")
  const formData = new FormData(suggestionForm)

  if (validateSuggestionForm(formData)) {
    // Disable submit button and show loading
    submitBtn.textContent = "📨 Sending..."
    submitBtn.disabled = true

    const userName = formData.get("name")
    const userEmail = formData.get("email")
    const movieName = formData.get("movieName").trim()
    const movieDescription = formData.get("message")

    // Template parameters for movie suggestion email (to you)
    const suggestionTemplateParams = {
      from_name: userName,
      from_email: userEmail,
      suggested_movie: movieName,
      movie_description: movieDescription,
      to_email: "azadpanigrahi469@gmail.com",
      suggestion_type: "Movie Suggestion",
    }

    // Template parameters for auto-reply email (to user)
    const autoReplyTemplateParams = {
      to_name: userName,
      to_email: userEmail,
      from_name: "Telugu Movie Gallery Team",
      suggested_movie: movieName,
      movie_description: movieDescription,
    }

    // Send movie suggestion email first
    emailjs
      .send("service_mgt672005", "template_zjhlw0d", suggestionTemplateParams)
      .then((response) => {
        console.log("Movie suggestion email sent successfully!", response.status, response.text)

        // Send auto-reply email
        return emailjs.send("service_mgt672005", "template_ak7qs0d", autoReplyTemplateParams)
      })
      .then((response) => {
        console.log("Auto-reply email sent successfully!", response.status, response.text)

        // Show success message
        successMessage.innerHTML =
          "✅ Movie suggestion sent successfully! Thank you for suggesting us. We'll review your recommendation!"
        successMessage.style.display = "block"

        // Clear form
        suggestionForm.reset()

        // Reset submit button
        submitBtn.textContent = "📨 Send Suggestion"
        submitBtn.disabled = false

        // Hide success message after 7 seconds
        setTimeout(() => {
          successMessage.style.display = "none"
        }, 7000)

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: "smooth" })
      })
      .catch((error) => {
        console.log("Email sending failed:", error)

        // Reset submit button
        submitBtn.textContent = "📨 Send Suggestion"
        submitBtn.disabled = false

        // Show error message with more details
        alert(
          "Failed to send movie suggestion. Error: " +
            error.text +
            "\nPlease check your EmailJS configuration or contact us directly at azadpanigrahi469@gmail.com",
        )
      })
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  updateWatchlistButtons()
  updateWatchlistCount()

  // Setup movie suggestion form listener
  const suggestionForm = document.getElementById("contactForm")
  if (suggestionForm) {
    suggestionForm.addEventListener("submit", handleSuggestionForm)
  }
})

// Make functions globally available for onclick handlers
window.toggleWatchlist = toggleWatchlist
window.removeFromWatchlist = removeFromWatchlist
window.toggleWatchlistModal = toggleWatchlistModal
window.showMovieDetails = showMovieDetails
window.closeMovieDetails = closeMovieDetails
