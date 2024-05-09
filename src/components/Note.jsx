import { Delete } from "@mui/icons-material";

const Note = ({ title, content, onDelete,id }) => {
  return (
    <div className="float-left m-4 w-60  rounded-lg bg-white p-2 font-mcLaren shadow-md">
      <h1 className="mb-4 text-lg">{title}</h1>
      <p className="mb-3 whitespace-pre-wrap break-words text-lg">{content}</p>
      <button
        className="relative float-right mr-3 size-9 cursor-pointer text-gold outline-none"
        onClick={() => onDelete(id)}
      >
        <Delete />
      </button>
    </div>
  );
};

export default Note;
