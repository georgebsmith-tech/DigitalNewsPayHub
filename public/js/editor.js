let myEditor;
ClassicEditor
    .create(document.querySelector('#editor'),
    //  {
    //     plugins: [
    //         Autosave,

    //         // ... other plugins
    //     ],

    //     autosave: {
    //         waitingTime: 1000,
    //         save(editor) {
    //             return saveData(editor.getData());
    //         }
    //     }
    // }
)
    .then(editor => {
        myEditor = editor;

        console.log('Editor was initialized', editor);
    })
    .catch(err => {
        console.error(err.stack);
    });

// setTimeout(() => {
//     console.log(myEditor.getData())

// }, 1000)

// function saveData(data) {
//     console.log(data)

// }
