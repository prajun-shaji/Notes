import { Add } from "@mui/icons-material";
import { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [show, setShow] = useState(true);

  const { title, content } = note;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <>
      <form
        className={`relative mb-auto ml-5 mr-auto mt-7 w-4/5  rounded-lg bg-white p-4 shadow-gray-1 md:w-1/2 ${show ? "h-16" : "h-40 md:h-48"}`}
        onSubmit={handleSubmit}
      >
        <input
          className={`element ${show && "hidden"}`}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          className={`${show ? "h-12 w-full focus:outline-none" : "element border-t border-dashed border-t-gray-400 pt-1"}`}
          name="content"
          placeholder="Write your notes here..."
          rows={3}
          value={content}
          onChange={handleChange}
          onClick={() => setShow(false)}
        ></textarea>
        <button
          className={` ${show ? "hidden" : "absolute -bottom-5 right-5 size-9 cursor-pointer rounded-full bg-gold text-gray-3 outline-none"}`}
          type="submit"
        >
          <Add />
        </button>
      </form>
    </>
  );
};

export default CreateNote;
