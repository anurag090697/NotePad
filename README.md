<!-- @format -->

# NotePad


## Description

This is a simple note-taking application built using React. It allows users to create, edit, and delete notes. Each note can be written in Markdown format using the `@uiw/react-md-editor` package. The currently editing note is highlighted with a different background color.

## Features

- Create new notes with a default title and content.
- Edit notes using a Markdown editor.
- Delete notes.
- Notes are saved in the browser's local storage.
- The currently active note is highlighted with a green background.

## Technologies Used

- React: For building the user interface.
- `@uiw/react-md-editor`: For Markdown editing.
- `react-icons`: For using icons in the application.
- Tailwind CSS: For styling the application.

## Hosted Link

[Click Here](https://note-pad-mocha.vercel.app/)


## Code Overview

### App.js

The main component of the application. Manages the state of notes, including adding, editing, and deleting notes. Handles local storage to persist notes between sessions.

### Note.jsx

A component representing a single note. Displays the note title and a delete button. Highlights the note if it is currently being edited.



## Acknowledgements

- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor)
- [react-icons](https://github.com/react-icons/react-icons)
- [Tailwind CSS](https://tailwindcss.com/)

