import { useDrawer } from "@/contexts/DrawerContext";

const Drawer = () => {
  const { isDrawerOpen, closeDrawer } = useDrawer();

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex z-50">
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-space-dark opacity-75"
      />
      <div className="relative w-64 m-8 bg-space-dark rounded-lg shadow-lg text-white-pure">
        <button
          onClick={closeDrawer}
          className="absolute top-0 right-0 mt-2 mr-2 text-2xl font-bold leading-none text-white-pure hover:text-space-neon"
        >
          &times;
        </button>
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold leading-tight">
            Drawer Title
          </h2>
          <p className="mt-1 text-sm leading-tight text-space-medium">
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={closeDrawer}
            className="px-4 py-2 font-bold text-space-dark bg-space-neon rounded-full hover:bg-white-pure"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
