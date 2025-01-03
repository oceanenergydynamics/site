/* General Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #333;
    line-height: 1.6;
    background-color: #f4f9ff;
}

h1, h2, h3 {
    text-align: center;
    margin: 20px 0;
}

p {
    margin: 10px 0;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}

/* Video Background */
#video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

#video-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Header */
header {
    text-align: center;
    padding: 40px 20px;
    background: rgba(255, 255, 255, 0.9);
}

header h1 {
    font-size: 2.5em;
    margin: 10px 0;
    color: #001f54;
}

header p {
    font-size: 1.2em;
    margin: 10px 0 20px 0;
    color: #00509e;
}

/* Navigation */
nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 15px;
}

nav ul li {
    margin: 0;
}

nav ul li a {
    text-decoration: none;
    font-size: 1em;
    color: #001f54;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

nav ul li a:hover {
    background-color: #00509e;
    color: #ffffff;
}

/* Sections */
.container {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.container:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2em;
    color: #00509e;
}

/* Footer */
footer {
    text-align: center;
    padding: 10px 0;
    font-size: 0.9em;
    background: #001f54;
    color: #ffffff;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}
