(function() {
    const app = new SimpleNoteApp().listen();
})();

// Function to handle the creation, edit, and deletion of notes
function SimpleNoteApp() {
    const self = this;
    self.noteText = document.querySelector('#note-text');
    self.noteColor = document.querySelector('#note-color');
    self.note = document.querySelector('.note-container');

    // Initialise notes to be empty with no currently selected note
    self.notes = [];
    self.selectedNote = null;
    
    // Function to listen for submission of a note
    self.listen = () => {
        document.querySelector('#add-note').addEventListener(
            'submit', self.handleFormSubmit
        );

        return self;
    }
    
    // Function to handle the submission of the form
    self.handleFormSubmit = (event) => {
        event.preventDefault();
        self.createNote(self.noteText.value, self.noteColor.value);
    }

    // Function to create a note 
    self.createNote = (noteText, color) => {
        // If the note is a new note, create and initialise a note
        if(self.selectedNote === null) {
            const note = new Note(noteText, color);

            // initialise the note with text, color, and edit and remove buttons
            note.setup();

            // add event listeners to the edit and remove note buttons
            note.removeButton.addEventListener('click', (event) => { 
                self.deleteNote(note);
            });
            note.editButton.addEventListener('click', (event) => { 
                self.editNote(note);
            });

            self.note.appendChild(note.htmlElement);
            self.notes.push(note);
        } else {
            // Note is an exisitng note
            // Change text and color to newly selected values
            self.selectedNote.setText(noteText);
            self.selectedNote.setColor(color);
        }

        // Reset textarea and optional select values to be empty
        self.noteColor.value = "";
        self.noteText.value = "";
        self.selectedNote = null;
    }
    
    // Function to handle when an edit note button is clicked
    self.editNote = (note) => {
        self.selectedNote = note;
        self.noteColor.value = note.color;
        self.noteText.value = note.text;
    }
    
    // Function to handle when a remove note button is clicked
    self.deleteNote = (note) => {
        // Find the note to be deleted
        const found = self.notes.findIndex((noteToDelete) => { 
            return note === noteToDelete;
        });

        // If the note is found, then delete it
        if(found > -1) {
            // remove note from the notes array and remove the notes markup
            self.notes.splice(found, 0);
            self.note.removeChild(note.htmlElement);
        }
    }
}

// function that models a note
function Note(text, color) {
    const self = this;
    self.text = text;
    self.color = color;
    self.htmlElement = null;
    self.removeButton = null;
    self.editButton = null;
    self.content = null;
    
    // function to initialise a notes values
    self.setup = () => {
        self.htmlElement = document.createElement('div');
        self.content = document.createElement('p');
        self.removeButton = document.createElement('button');
        self.removeButton.className = 'delete';
        self.removeButton.innerHTML = 'Remove'
        self.editButton = document.createElement('button');
        self.editButton.className = 'edit-button'
        self.editButton.innerHTML = 'Edit';
        self.setColor(self.color);
        self.setText(self.text);
        self.htmlElement.appendChild(self.content);
        self.htmlElement.appendChild(self.removeButton);
        self.htmlElement.appendChild(self.editButton);
    }
    
    // function that controls the color of a note
    self.setColor = (color) => {
        self.htmlElement.className = 'note-instance';
        self.htmlElement.classList.add(color);
        self.color = color;
    }  
    
    // function that controls the text of a note
    self.setText = (text) => {
        self.content.textContent = text;
        self.text = text;
    }
}