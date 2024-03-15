import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="bg-bgMain h-screen pt-20 space-y-20">
      <h1 className="text-3xl font-semibold text-white text-center">
        Menu component
      </h1>
      <Menu />
    </div>
  );
}
