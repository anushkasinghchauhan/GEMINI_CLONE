# Gemini Clone

A React-based conversational AI web app inspired by Google's Gemini, using the Gemini API for chat completions.

<!-- Demo Video -->
## Demo

./assets/Femini.mp4

<!-- Or, if you want to embed it (works on GitHub preview, not all markdown renderers): -->
<!--
<video src="src/assets/demo.mp4" controls width="600"></video>
-->

## Features

- Modern sidebar and main chat UI
- Animated butterfly effects
- Context-based state management
- Gemini API integration for real-time responses
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/gemini-clone.git
   cd gemini-clone/gemini-clone
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Add your Gemini API key:**
   - Open `src/config/gemini.js`
   - Replace `YOUR_API_KEY` with your actual Gemini API key:
     ```js
     const API_KEY = "YOUR_API_KEY";
     ```

4. **Add required assets:**
   - Place all required `.png` images in `src/assets/` as referenced in `src/assets/assets.js`.

### Running the App

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
gemini-clone/
  ├─ src/
  │   ├─ assets/
  │   ├─ components/
  │   │   ├─ Sidebar/
  │   │   └─ main/
  │   ├─ context/
  │   ├─ config/
  │   ├─ App.jsx
  │   └─ main.jsx
  └─ ...
```

## Customization

- **Butterfly Images:**  
  Replace `/images/butterfly1.png`, `/images/butterfly2.png`, `/images/butterfly3.png` with your own images or update the paths in the code.

- **Branding:**  
  Change the app name, colors, and icons in the CSS and assets.

## Troubleshooting

- **Image Not Found:**  
  Make sure all images referenced in `src/assets/assets.js` exist in the `src/assets/` folder.

- **API Errors:**  
  Ensure your Gemini API key is valid and has the correct permissions.

## License

MIT

---

**Made with ❤️ using React and Gemini API**