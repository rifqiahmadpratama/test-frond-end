const { Navbar, Dropdown, Avatar } = require("flowbite-react");

export default function NavigationBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://github.com/rifqiahmadpratama">
        <img
          src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Github
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://avatars.githubusercontent.com/u/72550248?v=4"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Rifqi Ahmad Pratama</span>
            <span className="block truncate text-sm font-medium">
              rifqiahmad234a@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="https://github.com/rifqiahmadpratama" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="https://wa.me/6282120531932">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
