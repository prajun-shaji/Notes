import { EditNote } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="w-full bg-gold py-4 shadow-sm">
      <h1 className="mx-8 flex items-center gap-2 font-mcLaren text-2xl font-medium text-gray-2">
        <EditNote className="scale-150" />
        Notes
      </h1>
    </header>
  );
};

export default Header;
