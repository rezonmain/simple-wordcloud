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
  - [ ] Allow user to download cloud as image or svg
  - [ ] Allow user to remove words from list
  - [ ] Mouse over shows value of word
  - [x] Populate animation
  - [ ] Rotate animation

- [ ] Add configurability:

  - [x] Word angles
  - [x] Word fonts
  - [x] Word limits
  - [ ] Word colors and fading
  - [ ] Option to keep stop words and pronouns (eng, fre, esp)

- [ ] Make 'create' page
- [x] Make landing page
- [ ] Implement chart saving to LS functionality
- [ ] Style pages according to desgin
- [ ] Add user friendly animations

### Design files

- [Figma](https://www.figma.com/file/t29YRFbKmMt8mZlbjgb9pI/simple-wordcloud?node-id=0%3A1)
