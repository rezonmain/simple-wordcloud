# Simple wordcloud generator

Generate simple wordclouds from text file or text input. It uses D3.js to generate the cloud.

### TODO

- [x] Get MVP with basic functionality done:

  - [x] Parse text from .txt, .pdf (and maybe .docx) files
  - [x] Write text proccessing module to get object for D3 chart:
    - [x] Use text processing library to give option to ignore stop words and calculate word count
  - [x] Write wordcloud component that generates chart from given data

- [ ] Advanced functionality:

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
  - ~[ ] Save as functionality~ Confusing feauture; not implementing it
  - [x] Open new cloud from menu bar

- [x] Add configurability:

  - [x] Word angles
  - [x] Word fonts
  - [x] Word limits
  - [x] Word scaling
  - [x] Word padding
  - ~[ ] Word colors and fading~
  - ~[ ] Option to keep stop words and pronouns (eng, fre, esp)~

- [x] Make 'create' page
- [x] Make landing page
- [x] Implement chart saving to LS functionality
- [x] Style pages according to desgin
- [x] Add user friendly animations
- [ ] On succesful save alert
- [ ] Unsupported file type alert
- [ ] More font options, and make it work on all browsers
- [ ] Unsaved changes alert on exit
- [ ] Buttons tooltips

### FIX:

- The conversion of svg to bitmap is done using a OffscreenCanvas which is currently only fully supported in Chromium browsers, so download to png fails in Firefox and Safari:
  to fix:

- [x] Render svg to a canvas, get blob using native canvas calls
- [x] Lazy load wordlist modal
- [x] Page loading state to avoid pops
- [ ] Cloud loading on settings apply

### Design files

- [Figma](https://www.figma.com/file/t29YRFbKmMt8mZlbjgb9pI/simple-wordcloud?node-id=0%3A1)
