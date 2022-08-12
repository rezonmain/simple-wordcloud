# Simple wordcloud generator

Generate simple wordclouds from text file or text input. It uses D3.js to generate the cloud.

## Technologies used:

[<img width="40px" src="https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/react-icon.svg" alt="ReactJS Icon" />](https://reactjs.org/)
[<img width="40px" src="https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/typescript-icon.svg" alt="Typescript Icon" />](https://www.typescriptlang.org/)
[<img width="40px" src="https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/nextjs-icon.svg" alt="NextJS Icon" />](https://nextjs.org)
[<img width="40px" src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png" alt="D3 Icon" />](https://d3js.org/)
[<img width="40px" src="https://www.nstinfotech.com/wp-content/uploads/2020/10/tailwind-logo.png" alt="Tailwind css Icon" />](https://tailwindcss.com/)

# TODO ✅

- [x] Get MVP with basic functionality done:

  - [x] Parse text from .txt, .pdf (and maybe .docx) files
  - [x] Write text proccessing module to get object for D3 chart:
    - [x] Use text processing library to give option to ignore stop words and calculate word count
  - [x] Write wordcloud component that generates chart from given data

- [x] Advanced functionality:

  - [x] Responsive layout
  - [x] Autorange layout of words
  - [x] Changing configuration updates cloud real-time
  - [x] Allow user to download cloud as image or svg
  - [x] Allow user to remove words from list
  - [ ] Mouse over shows value of word (Not implemeting due to bug see 'Fix' section)
  - [x] Populate animation
  - [ ] Rotate animation (Not implemeting due to bug see 'Fix' section)
  - [x] Settings reset
  - [x] Open cloud from menu bar
  - [x] Open new cloud from menu bar

- [x] Add configurability:

  - [x] Word angles
  - [x] Word fonts
  - [x] Word limits
  - [x] Word scaling
  - [x] Word padding

- [x] Make 'create' page
- [x] Make landing page
- [x] Implement chart saving to LS functionality
- [x] Style pages according to desgin
- [x] Add user friendly animations
- [x] On succesful save alert
- [x] Unsupported file type alert
- [x] More font options, and make it work on all browsers
- [x] Render svg to a canvas, get blob using native canvas calls
- [x] Lazy load wordlist modal
- [x] Page loading state to avoid pops
- [x] Cloud loading on settings apply

### FIX:

- The conversion of svg to bitmap is done using a OffscreenCanvas which is currently only fully supported in Chromium browsers, so download to png fails in Firefox and Safari:
  to fix:

### Design files

- [Figma](https://www.figma.com/file/t29YRFbKmMt8mZlbjgb9pI/simple-wordcloud?node-id=0%3A1)
