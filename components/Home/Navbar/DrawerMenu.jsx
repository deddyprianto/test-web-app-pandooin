import Drawer from 'react-modern-drawer';
const DrawerMenu = ({ isOpen, setIsOpen, toggleDrawer }) => {
  const data = [
    {
      name: 'Home',
      id: 'homepage',
    },
    {
      name: 'Customize Your Trip',
      id: 'discover',
    },
    {
      name: 'Destination',
      id: 'destinations',
    },
    {
      name: 'Articles',
      id: 'articles',
    },
    {
      name: 'Need Assistance',
    },
  ];
  const scrollToSubMenuItem = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Drawer size={350} open={isOpen} onClose={toggleDrawer} direction='right'>
      <div className='h-full flex flex-col justify-center items-end p-[16px]'>
        <div className='h-20'>
          <button
            onClick={() => setIsOpen(false)}
            className='h-10 w-10 border border-[#91B9B8] rounded-full flex justify-center items-center'
          >
            <span className='font-bold text-[#91B9B8]'>X</span>
          </button>
        </div>
        <ul className='w-full p-1 flex flex-col justify-center items-end'>
          {data.map((item) => (
            <li
              onClick={() => scrollToSubMenuItem(item.id)}
              className='m-5 text-[#0B7373]'
              key={item}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
