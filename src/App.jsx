import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import useLocalStorage from "./hooks/UseLocalStorage";

const App = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);

  const addNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((item, i) => i !== id));
  };

  return (
    <main>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map(({ title, content }, i) => (
        <Note
          key={i}
          id={i}
          title={title}
          content={content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </main>
  );
};

export default App;
