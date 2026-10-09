const menuItems = [
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Original",
    description: "Tahu aci garing diulek bareng sambal bawang dan kol segar.",
  },
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Level 1",
    description: "Versi pedas maksimal buat kamu yang suka tantangan.",
  },
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Level 2",
    description: "Tahu kocek dengan taburan keju leleh di atasnya.",
  },
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Level 3",
    description: "Tahu kocek dengan taburan keju leleh di atasnya.",
  },
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Level 4",
    description: "Tahu kocek dengan taburan keju leleh di atasnya.",
  },
  {
    src: "/images/tahu-kocek.jpg",
    name: "Tahu Kocek Level 5",
    description: "Tahu kocek dengan taburan keju leleh di atasnya.",
  },
];

const Menus = () => {
  return (
    <>
      <header className="text-center mb-10 space-y-2">
        <p className="font-semibold text-3xl">
          <span className="text-orange-500">Pilihan</span> Menu
        </p>
        <p className="text-gray-500">
          Temukan berbagai menu tahu kocek terbaik kami
        </p>
      </header>
      <div className="grid md:grid-cols-3 gap-5 md:gap-10">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-md flex flex-col gap-3 hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={item.src}
                alt={item.name}
                className="h-full object-contain hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-1 p-5">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menus;
